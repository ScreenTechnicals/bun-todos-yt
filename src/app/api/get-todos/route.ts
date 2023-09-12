import { connect } from "@/mongodb/init";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@/models/userModels";
import { Todo } from "@/models/todoModels";

connect();

export async function GET() {
  try {
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
    const todos = await Todo.find({ email: user.email });

    return NextResponse.json(
      {
        success: true,
        message: "Todos Fetched Successfully",
        todos: todos,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("🚨 Todo Creation ERR: ", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Todo Creation ERRs",
      },
      { status: 500 }
    );
  }
}
