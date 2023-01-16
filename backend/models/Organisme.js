import mongoose from "mongoose";
const OrganismeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
    },
    address: {
      type:String,
    },
    domaine:{
        type:String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Organisme", OrganismeSchema);
