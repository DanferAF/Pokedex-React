import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Outlet} from 'react-router-dom'
import App from './assets/App'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
      
        </BrowserRouter>
       
    </React.StrictMode>
)



