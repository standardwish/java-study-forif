import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: String,
    password: String,
    major: String,
    assignment: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Users || mongoose.model("Users", userSchema);
