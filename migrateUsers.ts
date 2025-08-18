
import mongoose from 'mongoose';
import User from './models/User.js';

// const uri = process.env.MONGODB_URI;

// if (!uri) throw new Error("Please define the MONGODB_URI environment variable");

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;

  try {
    await mongoose.connect(`mongodb+srv://atharva:atharva@cluster0.6zawv4l.mongodb.net/auth`);
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
                    special_key: null,
                    image: null,
                    firstname: null,
                    lastname: null,
                },
            }
        );
        console.log(` Migration complete. Modified ${result.modifiedCount} users.`);
    } catch (error) {
        console.log(error);
    }


}
migrateUsers();