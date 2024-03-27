import React, { useEffect } from 'react'; // Importa React y useEffect
import "./styles.css";
import habitatlogo from "../../assets/img/habitat-logo-white.svg";
import habitatlogored from "../../assets/img/habitat-logo-red.svg";
/*import scrollScript from "../../scripts/header.js";*/

const Header = () => {
  var pageLoaded = false;

    window.addEventListener('load', function() {
        var logo = document.getElementById('logo');
        logo.classList.add('loaded');
        pageLoaded = true;
    });

    window.addEventListener('scroll', function() {
        if (!pageLoaded) return; // Si la página no ha cargado completamente, no hagas nada

        var header = document.querySelector('header');
        var logo = document.getElementById('logo');

        if (window.scrollY > 100) {
            header.classList.add('scroll');
            logo.querySelector('.dark').style.display = 'none';
            logo.querySelector('.light').style.display = 'inline';
        } else {
            header.classList.remove('scroll');
            logo.querySelector('.dark').style.display = 'inline';
            logo.querySelector('.light').style.display = 'none';
        }
    });

  return (
    <header className="hbt-menu color-bg-main p-3">
        <div className="logo" id="logo">
            <img src={habitatlogo} alt="Logo Light" className="img-fluid light"/>
            <img src={habitatlogored} alt="Logo Dark" className="img-fluid dark"/>
        </div>
    </header>
  );
};

export default Header;
