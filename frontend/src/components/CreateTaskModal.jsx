// components/CreateTaskModal.jsx
import React, { useState } from "react";

export default function CreateTaskModal({ closeModal, tasks, setTasks }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [subText, setSubText] = useState("");

  const addSubTask = () => {
    if (subText.trim()) {
      setSubTasks([...subTasks, { text: subText, completed: false }]);
      setSubText("");
    }
  };

  const handleSubmit = () => {
    if (!title.trim()) return;
    const newTask = {
      title,
      priority,
      deadline,
      subTasks,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold">Create Task</h2>
        <input
          type="text"
          placeholder="Task Title"
          className="border p-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />


        <div className="w-full">
            <label className="block text-sm font-medium text-gray-600 mb-1">
                Priority
            </label>
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="border p-2 w-full"
            >
                <option disabled value="">
                Select Priority
                </option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>
        </div>


        <div className="w-full">
            <label className="block text-sm font-medium text-gray-600 mb-1">
                Deadline
            </label>
            <input
                type="date"
                className="border p-2 w-full"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
        </div>
        <div>
          <h4 className="font-semibold">Subtasks</h4>
          <div className="flex gap-2">
            <input
              type="text"
              value={subText}
              onChange={(e) => setSubText(e.target.value)}
              className="border p-2 flex-1"
              placeholder="Enter subtask"
            />
            <button
              onClick={addSubTask}
              className="bg-blue-500 text-white px-3 rounded"
            >
              Add
            </button>
          </div>
          <ul className="mt-2 list-disc pl-5">
            {subTasks.map((s, i) => (
              <li key={i}>{s.text}</li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={closeModal}>Cancel</button>
          <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-1 rounded">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
