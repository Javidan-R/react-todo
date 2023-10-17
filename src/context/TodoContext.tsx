// TodoContext.tsx
import { createContext, useContext, useReducer, ReactNode } from 'react';

interface TodoContextProps {
  children: ReactNode;
}
 interface Todo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
}



interface TodoContextState {
  todos: Todo[];
}

type TodoAction =
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string };

const TodoContext = createContext<unknown>(null);

const todoReducer = (state: TodoContextState, action: TodoAction): TodoContextState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};


export const TodoProvider: React.FC<TodoContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
