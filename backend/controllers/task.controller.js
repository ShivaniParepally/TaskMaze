import mongoose from "mongoose";
import Task from "../models/task.model.js";


export const createTask = async (req, res) => {
    const task = req.body; //user will send this data

    if (!task.title) {
        return res.status(400).json({ success: false, message: "Please provide Task name" });
    }

    const newTask = new Task(task);

    try {
        await newTask.save();
        res.status(202).json({ success: true, data: newTask });
    } catch (error) {
        console.log("Error in creating task: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        console.log("Error in fetching tasks: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }

};


export const updateTask = async (req, res) => {
    const { id } = req.params;
    const task = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Task not found" });
    }

    try {
        const updatedTask = await Task.findByIdAndUpdate(id, task, { new: true });
        res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
        console.log("Error in updating the task: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};


export const deleteTask = async (req, res) => {
    const { id } = req.params;

    try {
        await Task.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Task deleted" });
    } catch (error) {
        console.log("Error in deleting task: ", error.message);
        res.status(404).json({ success: false, message: "Task not found" });
    }
};