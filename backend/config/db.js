import mongoose from "mongoose";
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DB_URL);

const connectDB = mongoose.connection;

connectDB
  .on("open", () => console.log("mongoose is connected"))
  .on("close", () => console.log("mongoose is disconnected"))
  .on("error", (error) => console.log(error));

export default connectDB;