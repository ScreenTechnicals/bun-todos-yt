import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    content: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please provide a first name"],
    },
  },
  {
    timestamps: true,
  }
);

export const Todo =
  mongoose.models.Todos || mongoose.model("Todos", todoSchema);
