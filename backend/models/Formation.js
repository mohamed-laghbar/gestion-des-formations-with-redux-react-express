import mongoose from "mongoose";
const FormationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    descreption: {
      type: String,
      trim: true,
    },

    start: {
      type: String,
      trim: true,
    },
    end: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Formations", FormationSchema);
