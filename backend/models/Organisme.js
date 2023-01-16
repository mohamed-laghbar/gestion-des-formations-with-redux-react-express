import mongoose from "mongoose";
const OrganismeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
    },
    ville: {
      type: String,
      trim: true,
    },
    domaine: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Organisme", OrganismeSchema);
