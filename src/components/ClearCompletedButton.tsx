import React from 'react';
import { useDarkMode } from './DarkModeContext';
import { StyledButton } from '../styles';

export const ClearCompletedButton: React.FC<{ clearCompleted: () => void }> = ({ clearCompleted }) => {
  const { darkMode } = useDarkMode();

  return <StyledButton darkMode={darkMode} onClick={clearCompleted}>Clear Completed</StyledButton>;
};

