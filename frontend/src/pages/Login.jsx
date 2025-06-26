import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const loginImage = "https://png.pngtree.com/thumb_back/fh260/background/20230626/pngtree-top-view-element-of-a-3d-maze-design-image_3682293.jpg";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }
    login(username);
    alert(`Logged in as ${username}`);
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Image Side */}
      <div className="w-1/2 hidden md:block">
        <img
          src={loginImage}
          alt="Login Visual"
          className="w-full h-full object-cover"
          style={{ height: '100vh' }}
        />
      </div>

      {/* Right Form Side */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-black">
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-80">
          <h2 className="text-3xl mb-6 text-center text-white">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username / Email"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white py-2 rounded"
            >
              Login
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-center">
            Not a member?{' '}
            <Link to="/register" className="text-blue-400 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
