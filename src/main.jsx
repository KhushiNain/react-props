import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ImageData from './Component/DataComponent.jsx'
import AppClass from "./AppClass";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={ImageData}/>
    {/* <AppClass data={ImageData}/> */}
  </React.StrictMode>,
)
