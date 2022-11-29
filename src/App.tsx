import * as React from 'react';
import './style.css';
import TodoList from './components/todoList/TodoList';
import TaskInput from './components/taskInput/TaskInput';

const App: React.FC = () => {
  return (
    <div style={{ background: '#e6e6e6', height: '98vh' }}>
      <TodoList />
    </div>
  );
};

export default App;
