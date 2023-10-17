// components/FilterButtons.tsx
import React from 'react';
import { useDarkMode } from './DarkModeContext';
import { StyledButton } from '../styles';

export const FilterButtons: React.FC<{ setFilter: (filter: string) => void }> = ({ setFilter }) => {
  const { darkMode } = useDarkMode();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
      <StyledButton onClick={() => setFilter('all')} darkMode={darkMode}>
        All
      </StyledButton>
      <StyledButton onClick={() => setFilter('active')} darkMode={darkMode}>
        Active
      </StyledButton>
      <StyledButton onClick={() => setFilter('completed')} darkMode={darkMode}>
        Completed
      </StyledButton>
    </div>
  );
};

