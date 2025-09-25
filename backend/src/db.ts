import mongoose from "mongoose";

export async function connectDB(uri?: string) {
  const MONGODB_URI = uri || (process.env.MONGODB_URI as string);
  // || "mongodb://localhost:27017/polgo_dev";
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}
