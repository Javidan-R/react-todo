// components/TodoList.tsx
import React from 'react';
import { Todo } from '../models';
import { TodoItem } from './TodoItem';
import { List } from '../styles';

interface TodoListProps {
  data: Todo[];
  deleteTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ data, deleteTodo, toggleComplete }) => {
  return (
    <List>
      {data.map((item) => (
        <TodoItem key={item.id} {...item} deleteTodo={deleteTodo} toggleComplete={() => toggleComplete(item.id)} />
      ))}
    </List>
  );
};

