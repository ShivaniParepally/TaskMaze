import React, { useContext } from 'react';
import Navbar from '../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen w-screen bg-black text-white flex flex-col overflow-x-hidden">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-10 flex-grow bg-black w-full">
        <h2 className="text-4xl font-bold mb-4">"Master Your Tasks, Navigate Your Day – Welcome to TaskMaze!"</h2>
        <p className="max-w-3xl text-gray-400 leading-relaxed">
          TaskMaze turns your daily goals into a gamified productivity journey.  
          Track your XP, complete daily streaks, and stay engaged like never before.  
          Whether you're a student or a working professional, TaskMaze helps you conquer procrastination one task at a time!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-4 flex gap-4">
          {user ? (
            <Link
              to="/dashboard"
              className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
              >
                Start Now
              </Link>
              <Link
                to="/register"
                className="px-6 py-2 border border-gray-600 hover:border-gray-400 text-white rounded"
              >
                Join the Maze
              </Link>
            </>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-wrap justify-center gap-8 px-6 py-6 bg-black w-full">
        <div className="w-64 bg-gray-800 p-4 rounded shadow text-center">
          <h3 className="text-xl font-semibold mb-2">🎯 Task Management</h3>
          <p className="text-gray-400">Organize, prioritize, and conquer your daily tasks with ease.</p>
        </div>
        <div className="w-64 bg-gray-800 p-4 rounded shadow text-center">
          <h3 className="text-xl font-semibold mb-2">🔥 XP & Streaks</h3>
          <p className="text-gray-400">Build momentum with daily streaks and earn XP for every task completed.</p>
        </div>
        <div className="w-64 bg-gray-800 p-4 rounded shadow text-center">
          <h3 className="text-xl font-semibold mb-2">🧩 Gamified Dashboard</h3>
          <p className="text-gray-400">Track your progress visually with a game-inspired dashboard layout.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
