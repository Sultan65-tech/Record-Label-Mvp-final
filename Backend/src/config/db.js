import mongoose from "mongoose"

export const connectDB =async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected Successfully");
    
  } catch (error) {
    console.log("Error connecting to Mongodb",error);
    process.exit(1)
  }
}