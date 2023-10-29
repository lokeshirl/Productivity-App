import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  toggleTodo,
  updateTodo,
} from '../../../redux/slices/todoSlice';

const TodoItem = ({ todoItem }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [updatedTodoMsg, setUpdatedTodoMsg] = useState(todoItem.todoMsg);
  const dispatch = useDispatch();

  // delete Todo
  const handleDeleteBtn = (e) => {
    dispatch(deleteTodo({ id: todoItem.id }));
  };

  const handleToggleTodo = (e) => {
    const completed = e.target.checked;
    dispatch(toggleTodo({ id: todoItem.id, completed }));
  };

  const handleUpdateTodo = (e) => {
    setIsTodoEditable((prevIsTodoEditableVal) => !prevIsTodoEditableVal);
    dispatch(updateTodo({ id: todoItem.id, todoMsg: updatedTodoMsg }));
  };

  return (
    <li className="flex w-full items-center justify-start p-4 md:p-6">
      <input
        onClick={handleToggleTodo}
        type="checkbox"
        disabled={isTodoEditable}
        className={`absolute h-5 w-5 opacity-0 md:h-6 md:w-6 [&:checked+div]:bg-green-500 [&:checked+div_svg]:block ${
          todoItem.completed
            ? `[&:checked+div+input]:text-[#898989] [&:checked+div+input]:line-through`
            : ''
        } ${isTodoEditable ? `cursor-not-allowed` : `cursor-pointer`}`}
        name="checkbox-1"
      />
      <div className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center border-[1px] border-white bg-transparent focus-within:border-white md:mr-4 md:h-6 md:w-6">
        <svg
          className="pointer-events-none hidden h-3 w-3 fill-current text-white"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <g transform="translate(-9 -11)" fill="#000000" fillRule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
            </g>
          </g>
        </svg>
      </div>

      <input
        type="text"
        value={updatedTodoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setUpdatedTodoMsg(e.target.value)}
        className={`outline-none w-full bg-transparent text-white ${
          isTodoEditable
            ? `border p-2 pb-2 mr-6 rounded-lg`
            : `border-transparent`
        }`}
      />
      <button
        onClick={handleDeleteBtn}
        className="ml-2 flex flex-shrink-0 border-[1px] border-red-500 bg-red-500 p-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-5 w-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          ></path>
        </svg>
      </button>
      <button
        onClick={handleUpdateTodo}
        className="ml-2 flex flex-shrink-0 border-[1px] border-blue-500 bg-blue-500 p-1"
      >
        {isTodoEditable ? (
          '💾'
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            ></path>
          </svg>
        )}
      </button>
    </li>
  );
};

export default TodoItem;
