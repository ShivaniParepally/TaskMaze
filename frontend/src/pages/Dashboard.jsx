//pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import TaskTabs from "../components/Tasktabs";
// import {Flame} from "lucide-react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]); // Global state of tasks

  return (
    <div className="flex h-screen w-screen">
      <Sidebar setTasks={setTasks} tasks={tasks} />
      <main className="flex-1 overflow-y-auto">
        <div className="flex items-center justify-between w-full px-6 py-4 bg-gray-400 rounded-md shadow-sm ">
          <h1 className="text-2xl font-bold">Welcome, John!</h1>
          <div className="flex gap-4 text-right text-lg font-semibold pr-4">
            <p>Your XP: 261</p>
            <p>🔥 4-day streak</p>
            {/* <p><Flame className="w-5 h-5 text-orange-500" /> 4-day streak</p> */}

          </div>
        </div>

        <TaskTabs tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}













