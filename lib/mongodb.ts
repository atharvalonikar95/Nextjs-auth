import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

if (!uri) throw new Error("Please define the MONGODB_URI environment variable");

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
