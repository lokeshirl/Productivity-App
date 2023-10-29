import React from 'react';
import { TodoContainer } from './components/TodoApp';
import { Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <TodoContainer />
    </>
  );
};

export default App;
