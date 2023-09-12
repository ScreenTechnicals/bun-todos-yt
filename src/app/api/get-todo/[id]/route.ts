import { connect } from "@/mongodb/init";
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@/models/userModels";
import { Todo } from "@/models/todoModels";

connect();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
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
    const todo = await Todo.findOne({ email: user.email, _id: id });

    return NextResponse.json(
      {
        success: true,
        message: "Todo Fetched Successfully",
        todo: todo,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("🚨 Todo fetch ERR: ", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Todo fetch ERRs",
      },
      { status: 500 }
    );
  }
}
