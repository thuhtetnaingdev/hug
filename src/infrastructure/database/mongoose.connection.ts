import mongoose from "mongoose";

export const connectDatabase = async () => {
  await mongoose.connect("mongodb://localhost/my-project");
  console.log("Connected to database");
};
