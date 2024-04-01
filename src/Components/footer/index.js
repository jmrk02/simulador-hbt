import React from "react";
import "./styles.css";
import habitatlogo from "../../assets/img/habitat-logo-white.svg"

const Header = () => {
    return (
        <footer className="pb-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-xs-12">
                    <img src={habitatlogo} alt="Logo Light" className="logo"/>
                </div>
                <div className="col-lg-6 col-xs-12 copyright">
                    <a href="https://www.afphabitat.com.pe" target="_blank">
                    <strong>© AFP Habitat S.A.</strong></a> - Todos los derechos reservados
                </div>
            </div>            
        </div>
    </footer>
    );
};
export default Header;