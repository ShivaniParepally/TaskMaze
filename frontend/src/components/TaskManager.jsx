// components/TaskManager.jsx
import React, { useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', deadline: '', priority: 'Low' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = { ...form, completed: false };
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, { ...form, completed: false }]);
    }

    setForm({ title: '', description: '', deadline: '', priority: 'Low' });
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const handleDelete = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  const handleEdit = (index) => {
    const task = tasks[index];
    setForm({ title: task.title, description: task.description, deadline: task.deadline, priority: task.priority });
    setEditingIndex(index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-center">📝 Task Manager</h2>

      {/* Form */}
      <form onSubmit={handleAddTask} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Task title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Task description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <div className="flex gap-4">
          <input
            type="date"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            className="p-2 border rounded w-1/2"
          />
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="p-2 border rounded w-1/2"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          {editingIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </form>

      {/* Pending Tasks */}
      <div>
        <h3 className="text-xl font-semibold mt-4">🕒 Pending Tasks</h3>
        {tasks.filter(t => !t.completed).length === 0 && <p className="text-gray-500">No pending tasks.</p>}
        <ul className="space-y-2 mt-2">
          {tasks.map((task, index) =>
            !task.completed ? (
              <li key={index} className="flex items-start justify-between bg-gray-100 p-3 rounded">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    onChange={() => toggleComplete(index)}
                    className="mt-1"
                  />
                  <div>
                    <h4 className="font-bold">{task.title} <span className="text-sm text-yellow-600">[{task.priority}]</span></h4>
                    <p>{task.description}</p>
                    {task.deadline && (
                      <p className="text-sm text-gray-500">Due: {task.deadline}</p>
                    )}
                  </div>
                </div>
                <div className="flex gap-3 mt-1">
                  <FaEdit className="text-blue-600 cursor-pointer" onClick={() => handleEdit(index)} />
                  <FaTrash className="text-red-600 cursor-pointer" onClick={() => handleDelete(index)} />
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>

      {/* Finished Tasks */}
      <div>
        <h3 className="text-xl font-semibold mt-4">✅ Finished Tasks</h3>
        {tasks.filter(t => t.completed).length === 0 && <p className="text-gray-500">No completed tasks yet.</p>}
        <ul className="space-y-2 mt-2">
          {tasks.map((task, index) =>
            task.completed ? (
              <li key={index} className="flex items-start justify-between bg-green-100 p-3 rounded">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked
                    onChange={() => toggleComplete(index)}
                    className="mt-1"
                  />
                  <div>
                    <h4 className="font-bold line-through">{task.title}</h4>
                    <p className="line-through">{task.description}</p>
                  </div>
                </div>
                <div className="flex gap-3 mt-1">
                  <FaEdit className="text-blue-600 cursor-pointer" onClick={() => handleEdit(index)} />
                  <FaTrash className="text-red-600 cursor-pointer" onClick={() => handleDelete(index)} />
                </div>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}
