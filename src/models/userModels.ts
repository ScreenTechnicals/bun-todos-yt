import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    given_name: {
      type: String,
      required: [true, "Please provide a first name"],
    },
    family_name: {
      type: String,
      required: [true, "Please provide a first name"],
    },
    email: {
      type: String,
      required: [true, "Please provide a first name"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User =
  mongoose.models.Users || mongoose.model("Users", userSchema);
