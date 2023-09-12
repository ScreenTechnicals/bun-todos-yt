import { connect } from "@/mongodb/init";
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@/models/userModels";
import { Todo } from "@/models/todoModels";

connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id } = body;

    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = getUser();
    if (!isAuthenticated()) {
      return NextResponse.json(
        {
          success: false,
          message: "User not authenticated",
        },
        { status: 400 }
      );
    }
    const userExits = await User.findOne({ email: user.email });
    if (!userExits) {
      return NextResponse.json(
        {
          success: false,
          message: "User does not exist",
        },
        { status: 400 }
      );
    }
    const todo = await Todo.deleteOne({ _id: id });

    return NextResponse.json(
      {
        success: true,
        message: "Todo Deleted Successfully",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("🚨 Todo Delete ERR: ", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Todo Delete ERR",
      },
      { status: 500 }
    );
  }
}
