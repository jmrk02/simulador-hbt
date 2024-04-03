import React from "react";
import "./styles.css";
import habitatlogo from "../../assets/img/habitat-logo-white.svg"

const Header = () => {
    return (
        <footer className="pb-5">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-8 col-xs-12 fuente-legal">
                    <div className="logo-footer">
                        <img src={habitatlogo} alt="Logo Light" className="logo"/>
                    </div>
                    <p className="mt-4"><strong>* Fuente legal:</strong> Boletín Estadístico Mensual SBS febrero 2024. 
                    Rentabilidad Nominal y Real Acumulada del Fondo de Pensiones Tipo 1, Tipo 2, Tipo 3 por AFP . Feb. 2024 - feb. 2014 
                    La rentabilidad de los distintos tipos de Fondos de Pensiones es variable, su nivel en el futuro puede cambiar en relación con la rentabilidad pasada.</p>
                    <div className="copyright mt-4">
                        <a href="https://www.afphabitat.com.pe" target="_blank">
                        <strong>© AFP Habitat S.A.</strong></a> - Todos los derechos reservados
                    </div>
                </div>
            </div>            
        </div>
    </footer>
    );
};
export default Header;