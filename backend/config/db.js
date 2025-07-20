import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); //it means there's an error (exit code 1 means failure, 0 means success)
    }
}