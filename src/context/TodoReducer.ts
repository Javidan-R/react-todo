// TodoReducer.ts
import {Todo} from '../models';

type TodoAction = { type: 'ADD_TODO'; payload: Todo } | { type: 'TOGGLE_TODO'; payload: string };

const TodoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default TodoReducer;
