// components/TodoItem.tsx
import React from 'react';
import { Todo } from '../models';
import CompIcon from '../assets/CompIcon.svg';
import Oval from '../assets/Oval.svg';
import Delete from '../assets/Delete.svg';
import { ListItem, TaskInfo, TaskTitle ,CompleteBtn ,DeleteBtn } from '../styles';
import { useDarkMode } from './DarkModeContext';

interface TodoItemProps extends Todo {
  deleteTodo: (id: string) => void;
  toggleComplete: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed, deleteTodo, toggleComplete }) => {
  const { darkMode } = useDarkMode();

  return (
    <ListItem darkMode={darkMode} completed={completed}>
      <TaskInfo completed={completed} darkMode={darkMode} onClick={toggleComplete}>
        <CompleteBtn >
          {completed ? <img src={CompIcon} alt="" /> : <img src={Oval} alt="" style={{ border: '2px solid #000', borderRadius: '50%', width: '20px', height: '20px' }} />}
        </CompleteBtn>
        <TaskTitle completed={completed} darkMode={darkMode}>
          {title}
        </TaskTitle>
      </TaskInfo>
      <DeleteBtn onClick={() => deleteTodo(id)}>
        <img src={Delete} alt="" />
      </DeleteBtn>
    </ListItem>
  );
};