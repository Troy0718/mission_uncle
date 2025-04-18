import React from 'react';
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import App from './App.jsx'
import './styles/components/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)