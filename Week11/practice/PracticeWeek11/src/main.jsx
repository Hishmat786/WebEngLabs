import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Users } from './Components/User.jsx'
import Chameleon from './Components/Chameleon.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Users/> */}
    <Chameleon/>
  </React.StrictMode>,
)
