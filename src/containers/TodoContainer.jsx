import React from 'react';
import { TodoForm, TodoItem } from '../components/TodoApp';

const TodoContainer = () => {
  return (
    <>
      {/* Todo-form */}
      {/* Todo-Items */}
      <div class="min-h-screen bg-[#121212]">
        <div class="mx-auto flex h-full min-h-screen w-full max-w-full flex-col items-start justify-start px-4 py-28 text-center md:max-w-5xl">
          <div class="flex w-full flex-col gap-5">
            <ul class="divide-y-[1px] divide-white border-[1px] border-white p-0">
              <TodoForm />
              <TodoItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoContainer;
