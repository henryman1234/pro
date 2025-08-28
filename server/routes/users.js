import mongoose from "mongoose";
import express from "express"
import User from "../models/User.js";

const router =  express.Router()

router.get("/", async function (req, res, next){
    try {
        const users = await User.find()
        res.status(200).json({message: "Users find successfully", data: users})
    } catch (err) {
       next(err) 
    }
})

export default router