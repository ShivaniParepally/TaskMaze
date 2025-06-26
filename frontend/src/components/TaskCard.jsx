import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function TaskCard({ task, index, toggleSubtask, setTasks }) {
  const [expanded, setExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editingSubIndex, setEditingSubIndex] = useState(null);
  const [subEditText, setSubEditText] = useState("");

  const total = task.subTasks.length || 1;
  const done = task.subTasks.filter((s) => s.completed).length;
  const percent = Math.round((done / total) * 100);

  const saveEditedTitle = () => {
    setTasks((prev) => {
      const updated = [...prev];
      updated[index].title = editTitle;
      return updated;
    });
    setIsEditing(false);
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteSubtask = (subIndex) => {
    setTasks((prev) => {
      const updated = [...prev];
      updated[index].subTasks.splice(subIndex, 1);
      return updated;
    });
  };

  const saveSubtaskEdit = (subIndex) => {
    setTasks((prev) => {
      const updated = [...prev];
      updated[index].subTasks[subIndex].text = subEditText;
      return updated;
    });
    setEditingSubIndex(null);
    setSubEditText("");
  };

  return (
    <div
      onClick={() => setExpanded((prev) => !prev)}
      className="max-w-2xl mx-auto bg-white border border-gray-300 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border px-2 py-1 rounded w-full"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  saveEditedTitle();
                }}
                className="text-green-600 text-sm"
              >
                Save
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(false);
                }}
                className="text-gray-500 text-sm"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-gray-800">
                {task.title}
              </h3>
              <p className="text-sm text-gray-500">Progress: {percent}%</p>
            </>
          )}
        </div>

        <div className="flex gap-3 items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsEditing(true);
            }}
            className="text-blue-500 text-lg hover:text-blue-700"
            title="Edit Task"
          >
            <FaEdit />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteTask();
            }}
            className="text-red-500 text-lg hover:text-red-700"
            title="Delete Task"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {expanded && (
        <ul className="mt-4 space-y-3">
          {task.subTasks.map((sub, i) => (
            <li key={i} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={sub.completed}
                onChange={(e) => {
                  e.stopPropagation();
                  toggleSubtask(index, i);
                }}
                className="w-5 h-5"
              />

              {editingSubIndex === i ? (
                <>
                  <input
                    value={subEditText}
                    onChange={(e) => setSubEditText(e.target.value)}
                    className="border px-2 py-1 rounded w-full"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      saveSubtaskEdit(i);
                    }}
                    className="text-green-600 text-sm"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span
                    className={`text-xl flex-1 ${
                      sub.completed
                        ? "line-through text-gray-400"
                        : "text-gray-700"
                    }`}
                  >
                    {sub.text}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingSubIndex(i);
                      setSubEditText(sub.text);
                    }}
                    className="text-blue-500 text-lg hover:text-blue-700"
                    title="Edit Subtask"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSubtask(i);
                    }}
                    className="text-red-500 text-lg hover:text-red-700"
                    title="Delete Subtask"
                  >
                    <FaTrash />
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
