
import mongoose from 'mongoose';
import User from './models/User.js';

// const uri = process.env.MONGODB_URI;

// if (!uri) throw new Error("Please define the MONGODB_URI environment variable");

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

const migrateUsers = async () => {


    dbConnect();
    try {
        const result = await User.updateMany(
            {},
            {
                $set: {
                  role:'user'
                },
            }
        );
        console.log(` Migration complete. Modified ${result.modifiedCount} users.`);
    } catch (error) {
        console.log(error);
    }


}
migrateUsers();