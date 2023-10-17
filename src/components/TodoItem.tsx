// components/TodoItem.tsx
import React from 'react';
import { Todo } from '../models';
import CompIcon from '../assets/CompIcon.svg';
import Oval from '../assets/Oval.svg';
import Delete from '../assets/Delete.svg';
import { ListItem, TaskInfo, TaskTitle } from '../styles';
import { useDarkMode } from './DarkModeContext';

interface TodoItemProps extends Todo {
  deleteTodo: (id: string) => void;
  toggleComplete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, deleteTodo, toggleComplete }) => {
  const { darkMode } = useDarkMode();

  return (
    <ListItem darkMode={darkMode} completed={completed} >
      <TaskInfo>
        <button onClick={toggleComplete} style={{ background: 'none', border: 'none', padding: 0 }}>
          {completed ? <img src={CompIcon} alt="" /> : <img src={Oval} alt="" />}
        </button>
        <TaskTitle completed={completed} darkMode={darkMode}>
          {title}
        </TaskTitle>
      </TaskInfo>
      <button onClick={() => deleteTodo(id)} style={{ background: 'none', border: 'none', padding: 0, marginRight: '20px' }}>
        <img src={Delete} alt="" />
      </button>
    </ListItem>
  );
};

