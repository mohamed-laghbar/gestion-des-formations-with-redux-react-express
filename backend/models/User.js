import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: [true, "Please add your first name"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please add your email"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please add your password"],
      minlength: 3,
      trim: true,
    },
    refresh_Token: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
