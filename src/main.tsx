import { createRoot } from 'react-dom/client';
import { Loader } from '@react-three/drei';
import Overlay from './Overlay.tsx';
import App from './App.tsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Overlay />
    <Loader />
  </>
);
