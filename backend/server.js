import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js"

import taskRoutes from './routes/task.route.js'
import authRoutes from './routes/auth.route.js'


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); //middleware to parse json data in the req.body

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT)
})