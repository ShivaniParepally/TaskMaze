import React, { useState } from "react";
import CreateTaskModal from "./CreateTaskModal";

export default function Sidebar({ tasks, setTasks }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <aside className="w-60 bg-gray-100 p-4 min-h-screen shadow-md">
      <h2 className="text-xl font-bold mb-6 text-gray-800">My Space</h2>

      <ul className="space-y-4">
        <li>
          <button
            onClick={() => setShowModal(true)}
            className="w-full text-left bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg border border-blue-200 hover:bg-blue-200 transition-all duration-200"
          >
            ➕ Create Task
          </button>
        </li>
        <li>
          <button className="w-full text-left bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-200 transition-all duration-200">
            👥 Friends
          </button>
        </li>
        <li>
          <button className="w-full text-left bg-yellow-100 text-yellow-800 font-medium px-4 py-2 rounded-lg border border-yellow-200 hover:bg-yellow-200 transition-all duration-200">
            🏆 Leaderboard
          </button>
        </li>
      </ul>

      {showModal && (
        <CreateTaskModal
          closeModal={() => setShowModal(false)}
          tasks={tasks}
          setTasks={setTasks}
        />
      )}
    </aside>
  );
}
