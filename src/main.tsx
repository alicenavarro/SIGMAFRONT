import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Footer from './components/other/footer/footer'
import Layout from './components/other/layout/layout'
import Navbar from './components/Navbar/Navbar'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
