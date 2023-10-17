import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { DarkModeProvider } from './components';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement!);


root.render(
    <DarkModeProvider  >
        <App />
    </DarkModeProvider>
  );
