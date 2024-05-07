import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cart from './Components/Cart.jsx'
import Todo from './Components/ToDo.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Cart/>
    {/* <Todo/> */}
  </React.StrictMode>,
)
