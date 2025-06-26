import React, { useState } from "react";
import TaskCard from "./TaskCard";

export default function TaskTabs({ tasks, setTasks }) {
  const [activeTab, setActiveTab] = useState("pending");

  const toggleSubtask = (taskIndex, subIndex) => {
    const updated = [...tasks];
    updated[taskIndex].subTasks[subIndex].completed =
      !updated[taskIndex].subTasks[subIndex].completed;

    const allDone = updated[taskIndex].subTasks.every((s) => s.completed);
    updated[taskIndex].completed = allDone;

    setTasks(updated);
  };

  return (
    <div className="mt-6">
      {/* Tabs */}
      <div className="flex gap-4 mb-6 pl-6">
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
            activeTab === "pending"
              ? "bg-blue-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Pending Tasks
        </button>
        <button
          onClick={() => setActiveTab("finished")}
          className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
            activeTab === "finished"
              ? "bg-green-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Finished Tasks
        </button>
      </div>

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks
          .filter((t) => t.completed === (activeTab === "finished"))
          .map((task, idx) => (
            <TaskCard
              key={idx}
              task={task}
              index={idx}
              toggleSubtask={toggleSubtask}
              setTasks={setTasks}
            />
          ))}
      </div>
    </div>
  );
}
