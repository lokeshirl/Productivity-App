import React from 'react';

const Header = () => {
  return (
    <header class="fixed top-0 z-10 mx-auto flex w-full max-w-full items-center justify-between border-b-[1px] border-b-slate-300 bg-[#121212] p-4 text-white lg:px-10">
      <h1 class="text-xl font-extrabold md:text-3xl">All todos</h1>
      <button class="inline-flex w-max items-center justify-center border-[1px] border-white p-3 text-center font-bold text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="mr-2 h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
            clip-rule="evenodd"
          ></path>
        </svg>{' '}
        Create new
      </button>
    </header>
  );
};

export default Header;
