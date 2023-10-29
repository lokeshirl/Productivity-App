import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todoItems: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todoItems = state.todoItems;
      todoItems.push({
        id: nanoid(),
        todoMsg: action.payload.todoMsg,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      let todoItems = state.todoItems;
      const id = action.payload.id;
      state.todoItems = todoItems.filter((todoItem) => todoItem.id !== id);
    },
    updateTodo: (state, action) => {
      let todoItems = state.todoItems;
      const id = action.payload.id;
      const todoMsg = action.payload.todoMsg;
      state.todoItems = todoItems.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, id, todoMsg } : todoItem
      );
    },
    toggleTodo: (state, action) => {
      let todoItems = state.todoItems;
      const id = action.payload.id;
      const completed = action.payload.completed;
      state.todoItems = todoItems.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, completed } : todoItem
      );
    },
    clearTodo: (state) => {
      state.todoItems = [];
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleTodo, clearTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
