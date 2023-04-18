import { useState } from 'react'
import Content from './components/other/layout/layout'
import Footer from './components/other/footer/footer'
import Header from './components/other/header/header'

import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import AllRoutes from './Routes/AllRoutes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter >
    <div className="container">

        <Header/>

    <Content>
      <AllRoutes />
    </Content>
      <Navbar/>
    <div className="footer"><Footer/></div>
    </div>
    </BrowserRouter>
    

  )
}
export default App
