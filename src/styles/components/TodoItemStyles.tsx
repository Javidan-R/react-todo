import styled, { css } from 'styled-components';
import defaultImage from '../../assets/defaultImage.png';
import darkImage from '../../assets/darkImage.png';

const rem = (pxValue: number) => `${pxValue / 16}rem`;
export interface AppBackgroundProps {
  darkMode: boolean;
}

export interface ListItemProps {
  darkMode: boolean;
  completed: boolean;
}
export const baseButtonStyles = css`
  border: none;
  padding: ${rem(8)} ${rem(15)};
  cursor: pointer;
  border-radius: ${rem(5)};
  transition: background-color 0.3s, color 0.3s;
`;

export const AppBackground = styled.div<AppBackgroundProps>`
  position: relative;
  opacity: 0.9;
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  width: 100%;
  height: 300px;
  background: ${({ darkMode }) =>
    darkMode ? `url(${darkImage})` : `url(${defaultImage})`} center/cover no-repeat;

  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to right, #55DDFF, #C058F3);
    opacity: 0.5;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  @media screen and (max-width: 560px) {
    height: 50vh;
    &::before {
      opacity: 0.7;
    }
  }
`;

export const Container = styled.div`
  width: ${rem(540)};
  margin: auto;
  position: relative;
  z-index: 1;
  top: ${rem(40)};

  @media screen and (max-width: 570px) {
    width: 90%;
    height: 50vh;
  }

  @media screen and (max-width: 370px) {
    width: 90%;
    height: 60vh;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  padding: ${rem(20)} 0;
`;

export const ModeButton = styled.button<{ darkMode: boolean }>`
  ${baseButtonStyles}
  width: ${rem(40)};
  height: ${rem(40)};
  margin: auto 0;
  background-color: transparent;
  text-align: right;

  @media screen and (max-width: 570px) {
    width: ${rem(30)};
    height: ${rem(30)};
  }
`;

export const SectionContainer = styled.div`
  position: relative;
  z-index: 2;
  margin: ${rem(12)} 0;

  @media screen and (max-width: 560px) {
   width: 80%;
   margin: 0 auto;

  }
  
  @media screen and (max-width: 370px) {
    width: 80%;
    display: flex;
    margin: auto;
    justify-content: center;  }
`;

export const ControlBar = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:row
  width: 536px;
  margin: ${rem(20)} auto;

  @media screen and (max-width: 570px) {
    width: 90%;
    margin: ${rem(20)} auto;
    flex-direction:column;
    flex-shrink:0;
    flex-wrap:wrap;
    gap:10px;
&>div{
margin:10px;
    width: 90%;


}

  }
`;

export const ItemsLeft = styled.div<{ darkMode: boolean }>`
  color: ${({ darkMode }) => (darkMode ? 'gray' : 'black')};
  margin: auto 0;
  font-size: ${rem(18)};

  @media screen and (max-width: 570px) {
    font-size: ${rem(16)};
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 570px) {

    margin: 0 auto;
    width: 90%;
  }

  @media screen and (max-width: 370px) {
    margin: 0 auto;
    width: 90%;
  }
`;

export const ListItem = styled.li<ListItemProps>`
  width: 536px;
  display: flex;
  border-radius: 5px;
  margin: ${rem(13)} auto;
  align-items: center;
  background: ${({ darkMode }) => (darkMode ? '#25273d' : 'white')};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;

  @media screen and (max-width: 570px) {

    margin: 16px auto;
    width: 90%;
  }

  @media screen and (max-width: 370px) {

    margin: 16px auto;
    width: 90%;
  }
`;

export const TaskInfo = styled.div<ListItemProps>`
  ${({ completed, darkMode }) => css`
    -webkit-background-clip: text;
    text-decoration: ${completed ? 'line-through' : 'none'};
    color: ${completed && darkMode ? 'gray' : darkMode ? '#fff' : '#494c6b'};
    width: 90%;
    display: flex;
    margin-left: ${rem(20)};
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #ff758c, #ff7eb3);
      opacity: 0;
      transition: opacity 0.2s;
      pointer-events: none;
    }
  `}
`;

export const CompleteBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-right: 20px;
  cursor: pointer;

 
`;

export const TaskTitle = styled.h3<ListItemProps>`
  ${({ completed, darkMode }) => css`
    margin-left: 20px;
    color: ${darkMode ? '#fff' : '#494c6b'};
    text-align: left;
    font-family: ${completed ? 'italic' : 'Josefin Sans'};
    font-size: 20px;

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
export const StyledForm = styled.form<{ darkMode: boolean ,hasError: boolean}>`
  width: ${rem(534)};
  height: ${rem(64)};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: ${rem(5)};
  border: 2px solid ${({ hasError }) => (hasError ? 'red' : 'initial')};

  background-color: ${({ darkMode }) => (darkMode ? '#25273d' : 'white')};
  border-radius: ${rem(5)};
  box-shadow: ${rem(0)} ${rem(35)} ${rem(50)} ${rem(-15)} rgba(194, 195, 214, 0.50);
  outline: none;
  border: ${rem(1)} solid #fff;
  font-family: 'Josefin Sans';
  font-size: ${rem(18)};
  @media screen and (max-width: 560px) {
    width: 350px;
    margin: 0 auto;
  


  }
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

// ---------------------------------------------------------
export const DarkModeProvider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
