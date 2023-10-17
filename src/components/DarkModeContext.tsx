// components/DarkModeContext.tsx
import React, { createContext, useContext, useState, ReactNode, CSSProperties, useEffect } from 'react';
import styled from 'styled-components';

type DarkModeContextProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  style: CSSProperties;
};

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

const StyledDarkModeProvider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [style, setStyle] = useState<CSSProperties>({});

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? 'black' : 'white';
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode, style }}>
      <StyledDarkModeProvider>{children}</StyledDarkModeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};
