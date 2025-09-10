import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import Student from "../models/Student.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

const router = express.Router()

router.post("/register", async function (req, res, next) {
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(req.body.password, salt)
    try {
        const newStudent = new Student({
            username: req.body.username,
            matricule: req.body.matricule,
            email: req.body.email,
            password: hashedPassword

        })
        const savedStudent = await newStudent.save()
        res.status(201).json({ message: "succès", data: savedStudent })
    } catch (err) {
        next(err)
    }
})

router.post("/login", async function (req, res, next) {
    try {
        const student = await Student.findOne({ username: req.body.username })
        if (!student) {
            return next(createError(404, "Cet utilisateur n'existe pas"))
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.password, student.password)
        if (!isPasswordCorrect) {
            return next(createError(400, "Mot de passe inavalide!"))
        }

        const {password, isDelegate, ...othersStudentsDetails} = student._doc

        const token = jwt.sign({id: student._id, isDelegate: student.isDelegate}, process.env.JWT_SECRET)
        
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({...othersStudentsDetails})
    } catch (err) {
        next(err)
    }
})

router.post("/logout", async function (req, res, next) {
    try {
        res.clearCookie("access_token").status(200).json({message: "Logout successfully"})
    } catch (err) {
        next(err)
    }
})


export default router