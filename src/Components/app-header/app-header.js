import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do,  <span className="app-header done">{done}</span> done</h2>
    </div>
  );
};

export default AppHeader;
