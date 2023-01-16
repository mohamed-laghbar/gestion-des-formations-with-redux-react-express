import mongoose from "mongoose";
const EmployeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Please add your email"],
      unique: true,
      trim: true,
    },
    organisme:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "organisme",    }
   
    
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Employee", EmployeeSchema);
