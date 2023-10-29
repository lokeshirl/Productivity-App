import React from 'react';

const TodoMenu = () => {
  const handleCompletedTodoBtn = () => {};

  return (
    <div className="flex w-full flex-shrink-0 flex-wrap items-center justify-start gap-3 md:gap-6">
      <button className="border-[1px] border-[#565656] bg-[#232323] px-3 py-2 text-sm font-semibold text-white md:text-base">
        All todos
      </button>
      
      <button
        onClick={handleCompletedTodoBtn}
        className="px-3 py-2 text-sm font-semibold text-white hover:bg-[#232323] md:text-base cursor-not-allowed"
      >
        Completed
      </button>
    </div>
  );
};

export default TodoMenu;
