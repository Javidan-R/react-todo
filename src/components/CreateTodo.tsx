// components/CreateTodo.tsx
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Todo } from '../models';
import Oval from '../assets/Oval.svg';
import { StyledForm, StyledInput } from '../styles';
import { useDarkMode } from './DarkModeContext';


interface CreateTodoProps {
  createOrEdit: (data: Todo) => void;
}

const initialFormData: Omit<Todo, 'id'> = {
  title: '',
  description: '',
  completed: false,
};

export const CreateTodo: React.FC<CreateTodoProps> = ({ createOrEdit }) => {
  const [formData, setFormData] = useState(initialFormData);
  const { darkMode } = useDarkMode();

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = {
      id: nanoid(),
      ...formData,
    };
    createOrEdit(newTodo);
    setFormData(initialFormData);
  };

  const handleInputChange = (value: string) => {
    setFormData((prev) => ({ ...prev, title: value }));
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      formSubmitHandler(event as never); // Suppress type error
    }
  };

  return (
    <StyledForm onSubmit={formSubmitHandler} darkMode={darkMode}>
      <img src={Oval} alt="" style={{ marginLeft: '20px' }} />
      <StyledInput 
      
        type="text"
        name="title"
        value={formData.title}
        onChange={({ target: { value } }) => handleInputChange(value)}
        onKeyPress={handleKeyPress}
              darkMode={darkMode}

      />
    </StyledForm>
  );
};

