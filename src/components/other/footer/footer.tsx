import React, { FC } from "react";

import "./footer.css";
import Logo from "../../UI/Logo/Logo";
import Link from "next/link";

const Footer = () => {  return (
    <div className="footer-basic">

        <footer className="site-footer">
            <div className="social">
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
            </div>
            <ul className="ul-inline"><i></i>
                <li className="list-inline-item"><a href="#">Home</a></li>
                <li className="list-inline-item"><a href="#">Servicios</a></li>
                <li className="list-inline-item"><a href="#">Acerca</a></li>
                <li className="list-inline-item"><a href="#">Aviso legal</a></li>
            </ul>
            <p className="copyright">sigmaApp.com © 2022</p>
        </footer>
    </div>
  );
};

export default Footer;