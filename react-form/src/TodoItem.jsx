import React, { useState } from 'react'

const TodoItem = ({ todo, updateTodo, deleteTodo, handleComplete }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    setIsEditing(true)
  }
  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };
  const handleSave = () => {
    if (editText.trim() !== "") {
      updateTodo(todo.id, editText)
    }
    setIsEditing(false);
  };
  const handleDelete = () => {
    deleteTodo(todo.id, editText);
    setEditText(false)
  }
  return (

    <li className='bg-white p-4 wb-2 border border-gray-300 rounded shadow flex justify-between items-center'>
      {isEditing ? (
        <div className='flex-1 mr-2'>
          <input
            type="text"
            className='border border-gray-300 p-2 rounded w-full outline-none'
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </div>
      ) : (
        <>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => handleComplete(todo.id)}
            className='w-4 h-4'
          />

          <span className={todo.completed ? "line-through text-gray-400" : ""}>{todo.text}</span>
        </>
      )}
      <div className='flex space-x-2'>
        {isEditing ? (
          <>
            <button className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
              onClick={handleSave}
            >
              save
            </button>
            <button className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
              onClick={handleCancel}
            >
              cancel
            </button>
          </>
        ) : (
          <>
            <button className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
              onClick={handleEdit}
            >
              Edit
            </button>

            <button className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600'
              onClick={handleDelete}
            >
              Delete
            </button>
          </>
        )}

      </div>
    </li>



  );
};

export default TodoItem
