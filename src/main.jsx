import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { HandleContext } from './context/UserContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HandleContext>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </HandleContext>
  </React.StrictMode>
)
