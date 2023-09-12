import mongoose from "mongoose";

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
  } catch (error: any) {
    console.log("🚨 Connection ERR: ", error.message);
  }
};
