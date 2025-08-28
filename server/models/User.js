import mongoose, { Schema } from "mongoose";
import { string } from "zod";

const UserSchema =  new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    followers: {
        type: Array,
        default: []
    },
    followings:  {
        type: Array,
        default: []
    },
    city: {
        type: string,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    }


}, {timestamps: true})

const User = new mongoose.model("User", UserSchema)
export default User