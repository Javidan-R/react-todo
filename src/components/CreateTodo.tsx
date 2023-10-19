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
    const [error, setError] = useState<string | null>(null);

    const { darkMode } = useDarkMode();

    const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!formData.title.trim()) {
        setError('Boş buraxmayın');
        return;
      }

      const newTodo: Todo = {
        id: nanoid(),
        ...formData,
      };
      createOrEdit(newTodo);
      setFormData(initialFormData);
      setError(null);
    };

    const handleInputChange = (value: string) => {
      setFormData((prev) => ({ ...prev, title: value }));
      setError(null);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        formSubmitHandler(event as never);
      }
    };

    return (
        <StyledForm onSubmit={formSubmitHandler} darkMode={darkMode} hasError={!!error}>
        <img src={Oval} alt="" style={{ marginLeft: '20px' }} />
        <StyledInput
          type="text"
          name="title"
          value={formData.title}
          onChange={({ target: { value } }) => handleInputChange(value)}
          onKeyPress={handleKeyPress}
          darkMode={darkMode}
        />
        {error && <span style={{ color: 'red', marginTop: '5px' }}>{error}</span>}
      </StyledForm>
    );
  };
