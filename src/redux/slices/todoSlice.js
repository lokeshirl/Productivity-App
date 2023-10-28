import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [
    {
      id: 1,
      todoMsg: 'Todo-complete-coding-challenge',
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoItems = state.todoItems;
      todoItems.push({
        id: nanoid(),
        todoMsg: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action) => {
      const todoItems = state.todoItems;
      const id = action.payload.id;
      todoItems = todoItems.filter((todoItem) => todoItem.id !== id);
    },
    updateTodo: (state, action) => {
      const todoItems = state.todoItems;
      const id = action.payload.id;
      const todoMsg = action.payload.todoMsg;
      todoItems = todoItems.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, id, todoMsg } : todoItem
      );
    },
    toggleTodo: (state, action) => {
      const todoItems = state.todoItems;
      const id = action.payload.id;
      const completed = action.payload.completed;
      todoItems = todoItems.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, id, completed } : todoItem
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
