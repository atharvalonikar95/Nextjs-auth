"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.models.User || mongoose_1.default.model("User", UserSchema);
