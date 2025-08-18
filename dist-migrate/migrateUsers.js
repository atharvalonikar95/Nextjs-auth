"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = dbConnect;
const mongoose_1 = __importDefault(require("mongoose"));
const User_js_1 = __importDefault(require("./models/User.js"));
// const uri = process.env.MONGODB_URI;
// if (!uri) throw new Error("Please define the MONGODB_URI environment variable");
let isConnected = false;
async function dbConnect() {
    if (isConnected)
        return;
    try {
        await mongoose_1.default.connect(`mongodb+srv://atharva:atharva@cluster0.6zawv4l.mongodb.net/auth`);
        isConnected = true;
        console.log("MongoDB connected");
    }
    catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
}
const migrateUsers = async () => {
    dbConnect();
    try {
        const result = await User_js_1.default.updateMany({}, {
            $set: {
                special_key: null,
                image: null,
                firstname: null,
                lastname: null,
            },
        });
        console.log(` Migration complete. Modified ${result.modifiedCount} users.`);
    }
    catch (error) {
        console.log(error);
    }
};
migrateUsers();
