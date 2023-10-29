import React from 'react';
import { TodoForm, TodoItem, TodoMenu } from '../components/TodoApp';
import { useSelector } from 'react-redux';
import { ClearTodo } from '../components/TodoApp';

const TodoContainer = () => {
  const todoItems = useSelector((state) => state.todos.todoItems);
  return (
    <>
      <div className="min-h-screen bg-[#121212]">
        <div className="mx-auto flex h-full min-h-screen w-full max-w-full flex-col items-start justify-start px-4 py-28 text-center md:max-w-5xl">
          <div className="flex w-full flex-col gap-5">
            <TodoMenu />
            <ul className="divide-y-[1px] divide-white border-[1px] border-white p-0">
              <TodoForm />
              {todoItems.map((todoItem) => (
                <div key={todoItem.id}>
                  <TodoItem todoItem={todoItem} />
                </div>
              ))}
            </ul>
            <div>
              <ClearTodo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
