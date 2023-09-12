import { connect } from "@/mongodb/init";
import { NextRequest, NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { User } from "@/models/userModels";

connect();
export async function POST(request: NextRequest) {
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
    if (userExits) {
      return NextResponse.json(
        {
          success: true,
          message: "User already exists",
        },
        { status: 200 }
      );
    }
    const userSaved = await User.create({
      given_name: user.given_name,
      family_name: user.family_name,
      email: user.email,
    });
    return NextResponse.json(
      {
        success: true,
        message: "User Created",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("🚨 User ERR: ", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "User not Created",
      },
      { status: 500 }
    );
  }
}
