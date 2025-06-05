import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FavProvider } from './context/FavContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <FavProvider>
    <App />
  </FavProvider>
);