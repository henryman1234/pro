import mongoose, { Schema } from "mongoose";

const UserSchema =  new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        max: 10,
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
    training: {
        type: String
    },
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

const User = new mongoose.model("User", UserSchema)
export default User