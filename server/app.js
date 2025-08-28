import express from  "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import mongoose from "mongoose"
dotenv.config()
import authRoute from "./routes/auth.js"
import studentsRoute from "./routes/students.js"
import cors from "cors"
import usersRoute from "./routes/users.js"


const app = express()

// Middlewares  
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: process.env.PUBLIC_URL,
    methods:"GET, PUT, DELETE, POST",
    credentials: true,
    optionsSuccessStatus: 204
}))

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/students", studentsRoute)

app.use(function (err, req, res, next){
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        message: errorMessage,
        status: errorStatus,
        stack: err.stack
    })
})



const connect = async function () {
    try {
       await mongoose.connect(process.env.MONGO_DB_URI)
       console.log("Mongo DB is already connected") 
    } catch (err) {
        throw err
    }
}

mongoose.connection.on("connected", function() {
    console.log("Mongo DB connected")
})

mongoose.connection.on("disconnected", function() {
    console.log("Mongo DB disconnected")
})

app.get("/", function(req, res) {
    res.json("Bonjou les gens, je suis Henry")
})

app.get("/users", function(req, res) {

})


app.listen(8800, function () {
    connect()
    console.log("Serveur en écoute sur le port 8800")
})