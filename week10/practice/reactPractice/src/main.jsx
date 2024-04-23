import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Users from './Components/Users.jsx'
import { UsersWithImages } from './Components/Users.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Users /> */}
    <UsersWithImages/>
  </React.StrictMode>,
)
