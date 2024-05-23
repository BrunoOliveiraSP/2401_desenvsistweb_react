import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// react-confirm-alert
import 'react-confirm-alert/src/react-confirm-alert.css';

// Navegação das Páginas
import Navegacao from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToastContainer />
    <Navegacao />
  </React.StrictMode>
);



