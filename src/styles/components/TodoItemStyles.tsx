import styled, { css, createGlobalStyle } from 'styled-components';
import defaultImage from '../../assets/defaultImage.png';
import darkImage from '../../assets/darkImage.png';

interface AppBackgroundProps {
  darkMode: boolean;
}
interface ListItemProps {
  darkMode: boolean;
  completed: boolean;
}

const rem = (pxValue: number) => `${pxValue / 16}rem`;

export const baseButtonStyles = css`
  border: none;
  padding: ${rem(8)} ${rem(15)};
  cursor: pointer;
  border-radius: ${rem(5)};
  transition: background-color 0.3s, color 0.3s;
`;

export const AppBackground = styled.div<AppBackgroundProps>`
  opacity: 0.9;
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  width: 100%;
  height: ${rem(300)};
  background: ${({ darkMode }) =>
    darkMode ? `url(${darkImage})` : `url(${defaultImage})`} center/cover no-repeat;

  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Container = styled.div`
  width: ${rem(540)};
  margin: auto;
  position: relative;
  z-index: 1;
  top: ${rem(40)};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

export const ModeButton = styled.button<{ darkMode: boolean }>`
  ${baseButtonStyles}
  width: ${rem(40)};
  height: ${rem(40)};
  margin: auto 0;
  background-color: transparent;
  text-align: right;
`;

export const SectionContainer = styled.div`
  position: relative;
  z-index: 2;
  margin: ${rem(12)} 0;
`;

export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${rem(536)};
  margin: ${rem(20)} auto;
`;

export const ItemsLeft = styled.div<{ darkMode: boolean }>`
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  margin: auto 0;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li<ListItemProps>`
  width: ${rem(536)};
  display: flex;
  border-radius: ${rem(5)};
  margin: ${rem(10)} auto;
  justify-content: space-between;
  align-items: center;
  background: ${({ darkMode }) => (darkMode ? '#25273d' : 'white')};
  box-shadow: ${rem(0)} ${rem(2)} ${rem(10)} rgba(0, 0, 0, 0.1);

  button {
    cursor: pointer;
  }
`;

export const TaskInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: ${rem(20)};
`;

export const TaskTitle = styled.h3<{ completed: boolean; darkMode: boolean }>`
  ${({ completed, darkMode }) => css`
    text-decoration: ${completed ? 'line-through' : 'none'};
    margin-left: ${rem(20)};
    color: ${darkMode ? '#fff' : '#494c6b'};
    text-align: left;
    font-family: ${completed ? 'italic' : 'Josefin Sans'};
    font-size: ${rem(20)};
    background: ${completed && darkMode
      ? 'linear-gradient(to right, #ff758c, #ff7eb3)'
      : 'none'};
    -webkit-background-clip: text;
    color: ${completed && darkMode
      ? 'linear-gradient(to right, #ff758c, #ff7eb3)'
      : 'none'};
  `}
`;

export const TaskDescription = styled.p<{ completed: boolean }>`
  ${({ completed }) => css`
    display: inline;
    text-decoration: ${completed ? 'line-through' : 'none'};
  `}
`;

export const CompletionStatus = styled.p`
  display: inline;
`;

export const StyledButton = styled.button<{ darkMode: boolean }>`
  ${baseButtonStyles}
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#f4f4f4')};
  color: ${({ darkMode }) => (darkMode ? 'white' : '#333')};

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#555' : '#ddd')};
  }
`;

export const StyledForm = styled.form<{ darkMode: boolean }>`
  width: ${rem(534)};
  height: ${rem(64)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${rem(5)};
  background-color: ${({ darkMode }) => (darkMode ? '#25273d' : 'white')};
  border-radius: ${rem(5)};
  box-shadow: ${rem(0)} ${rem(35)} ${rem(50)} ${rem(-15)} rgba(194, 195, 214, 0.50);
  outline: none;
  border: ${rem(1)} solid #fff;
  font-family: 'Josefin Sans';
  font-size: ${rem(18)};
`;

export const StyledInput = styled.input<{ darkMode: boolean }>`
  ${baseButtonStyles}
  background-color: transparent;
  outline: none;
  border: none;
  font-family: 'Josefin Sans';
  font-size: ${rem(20)};
  padding: ${rem(3)} ${rem(23)};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#25273d')};
  width: 85%;
  padding: ${rem(20)} 0;
`;

export const DarkModeProvider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const smallMobileMediaQuery = css`
  @media (max-width: ${rem(450)}) {
    ${Container} {
      width: 90%;
      top: ${rem(10)};
    }

    ${Header} {
      padding: ${rem(10)} 0;
    }

    ${ModeButton} {
      margin: ${rem(5)} 0;
    }

    ${ControlBar} {
      width: 100%;
      margin: ${rem(10)} 0;
    }

    ${ItemsLeft} {
      margin: ${rem(5)} 0;
    }

    ${List} {
      padding: 0 ${rem(10)};
    }

    ${ListItem} {
      width: 100%;
      margin: ${rem(5)} 0;
    }

    ${TaskInfo} {
      margin: ${rem(5)} 0;
    }

    ${TaskTitle} {
      margin: ${rem(5)} 0;
    }

    ${StyledButton}, ${StyledInput} {
      font-size: ${rem(14)};
    }
  }
`;


export const GlobalStyles = createGlobalStyle`
  ${smallMobileMediaQuery}
`;
