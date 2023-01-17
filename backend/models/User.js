import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    refresh_Token: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    organisme: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "organisme",
    },
    formation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "formation",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
