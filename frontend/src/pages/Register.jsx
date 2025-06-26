import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const registerImage = "https://www.sweetprocess.com/wp-content/uploads/2022/10/task-management-20.png";

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!fullName || !username || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    alert(`Registered: ${fullName} / ${username} / ${email}`);
    setFullName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Side Image */}
      <div className="w-1/2 hidden md:block">
        <img src={registerImage} alt="Register Visual" className="w-full h-full object-cover" />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-80">
          <h2 className="text-3xl mb-6 text-center">Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Username"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded bg-gray-800 text-white placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              className="bg-gradient-to-r from-green-500 to-lime-500 hover:opacity-90 text-white py-2 rounded"
            >
              Create Account
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
