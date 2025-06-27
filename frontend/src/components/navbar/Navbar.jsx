// src/components/Navbar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md w-full">
      <h1 className="text-3xl font-bold text-white">TaskMaze</h1>
      <div className="flex gap-4">
        {user ? (
          <Link
            to="/dashboard"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 border border-gray-600 hover:border-gray-400 text-white rounded"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
