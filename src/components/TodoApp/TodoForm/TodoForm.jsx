import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/slices/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputTodoMsg, setInputTodoMsg] = useState('');

  const handleInputTodoMsg = (e) => {
    setInputTodoMsg(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputTodoMsg) {
      dispatch(addTodo({ todoMsg: inputTodoMsg }));
    }
    setInputTodoMsg('');
  };

  const handleEnterKeyPresForAddTodo = (event) => {
    if (event.key === 'Enter' && inputTodoMsg) {
      handleAddTodo();
    }
  };

  return (
    <li className="flex w-full items-center justify-start">
      <input
        value={inputTodoMsg}
        onChange={handleInputTodoMsg}
        onKeyDown={handleEnterKeyPresForAddTodo}
        placeholder="Type to add a new todo..."
        className="w-full bg-transparent p-4 text-white placeholder:text-gray-500 md:p-6"
      />
      <button
        onClick={handleAddTodo}
        className="bg-green-500 p-4 text-center text-black hover:bg-green-400 active:bg-green-600 md:p-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </li>
  );
};

export default TodoForm;
