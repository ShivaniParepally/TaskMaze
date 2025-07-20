// import express from "express";
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        default: '',
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low',
    },
    status: {
        type: String,
        enum: ['pending', 'completed'],
        default: 'pending',
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
    },
    labels: [String], // optional tags like ['Work', 'Urgent']
}, {
    timestamps: true //createdAt, updatedAt
}
);

const Task = mongoose.model('Task', taskSchema);

export default Task;