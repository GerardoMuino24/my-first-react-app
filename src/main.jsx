import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Food} from './Food.jsx'
import {HtmlToJsx} from './HtmlToJsx.jsx'
import Greeting from './Greeting.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Food />
    <HtmlToJsx />
  </React.StrictMode>,
)
