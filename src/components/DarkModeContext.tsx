// DarkModeContext.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import styled from 'styled-components';

type DarkModeContextProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

const StyledDarkModeProvider = styled.div<{ darkMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ darkMode }) => (darkMode ? 'black' : 'white')};
`;

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Əgər darkMode-ın dəyəri dəyişsə, əlavə effektlər əlavə etmək olar
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const contextValue: DarkModeContextProps = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      <StyledDarkModeProvider darkMode={darkMode}>
        {children}
      </StyledDarkModeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
