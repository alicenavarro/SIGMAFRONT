import React from "react";
import "./header.css";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    // <div>
    //   <div id="main-navbar" className="navbar">
    //     <header>
    //     <h2 className="logo">Sigma</h2>
    //     <nav>
    //       <ul>
    //       <li>
    //       <Link to="/">Home</Link>
    //       </li>
    //       <li>
    //       <Link to="/Home2">Home2</Link>
    //       </li>
    //         <li>
    //           <a href="/Home">Formulario</a>
    //         </li>
    //         <li>
    //           <a href="/contactar">Contactar</a>
    //         </li>
    //         <li>
    //           <a href="/sesion">Iniciar sesion</a>
    //         </li>
    //       </ul>
    //     </nav>
    //     </header>
    //   </div>
    // </div>
    <div className="header">


    <header>
    <img src="tu_logo.png" alt="Logo de tu sitio web"/>
  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Acerca de</a></li>
      <li><a href="#">Contacto</a></li>
      <button className="boton-login">Iniciar sesión</button>
    </ul>
  </nav>
</header>
</div>

  )
}

export default Header;