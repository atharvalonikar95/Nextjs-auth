import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  special_key: {
    type: String,
    default: null,
  },
  image: {
    type: Buffer, // <-- raw binary data
    default: null,
  },
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
