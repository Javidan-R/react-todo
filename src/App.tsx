import { useState } from 'react';
import type { Todo } from './models';
import { CreateTodo, TodoList, FilterButtons, ClearCompletedButton, useDarkMode } from './components';

import ShapeLight from './assets/ShapeLight.svg'
import ShapeDark from './assets/ShapeDark.svg'
import { AppBackground ,Container ,Header, ModeButton, SectionContainer , ItemsLeft } from './styles';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const filterTodos = (todos: Todo[], filter: string | undefined): Todo[] => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const createTodo = (data: Todo) => {
    setTodos([data, ...todos]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const filteredTodos = filterTodos(todos, filter);
  const activeItemsCount = todos.filter((todo) => !todo.completed).length;
  return (
    <AppBackground darkMode={darkMode} >
      <Container>
        <Header>
          <h1 style={{color:'#fff' ,fontFamily:'Josefin Sans', fontSize:'40px'}}>TODO</h1>
          <ModeButton darkMode={darkMode} onClick={toggleDarkMode}>
            <img src={darkMode ? ShapeDark : ShapeLight} alt="" />
          </ModeButton>
        </Header>
        <SectionContainer>
          <CreateTodo createOrEdit={createTodo} />
        </SectionContainer>
        <TodoList data={filteredTodos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
        <div style={{display:'flex' , justifyContent:'space-between' ,width:'536px'}}>
        <ItemsLeft darkMode={true} >{`${activeItemsCount} items left`}</ItemsLeft>
          <FilterButtons setFilter={setFilter} />
          <ClearCompletedButton clearCompleted={clearCompleted} />
        </div>

      </Container>
    </AppBackground>
  );
}

export default App;
