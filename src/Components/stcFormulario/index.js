import React, { useState } from "react";
import "./styles.css";
import habibotdesk from "../../assets/img/habi-v-new.png"
import habibotmobile from "../../assets/img/habit-coins.png"
import coin1 from "../../assets/img/coin1.png"
import coin2 from "../../assets/img/coin2.png"
import coin3 from "../../assets/img/coin3.png"
import coin4 from "../../assets/img/coin4.png"
import habierror from "../../assets/img/habi-error-icon.png"
import habisuccess from "../../assets/img/habi-success-icon.png"
import soundcoin from "../../assets/img/coin-sound.mp3"

const Header = () => {

    const [reproduccionIniciada, setReproduccionIniciada] = useState(false);

    const handleMouseOver = () => {
        var audio = new Audio(soundcoin);
        audio.play();
        setReproduccionIniciada(true);
    }
    return (
        <div className="stc-hbt-form mt-5" id="stc-invertir">
            <div className="container d-flex align-items-center justify-content-between rounded-5 bg-red px-5">
                <div className="form-content d-flex align-items-center justify-content-center">
                    <div className="d-flex col-sm-12 col-lg-8 d-flex align-items-end">
                        <div className="col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <img src={habibotmobile} alt="Habi BOT" className="img-fluid img-form-habi d-lg-none mt-n4"/>
                            <img src={habibotdesk} alt="Habi BOT" className="img-fluid img-form-habi d-none d-lg-block"/>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="d-flex justify-content-end">
                                <img src={coin1} alt="" className="img-fluid coin ml-auto" onMouseOver={handleMouseOver} />
                            </div>
                            <div className="d-flex justify-content-start">
                                <img src={coin2} alt="" className="img-fluid coin" onMouseOver={handleMouseOver}/>
                            </div>
                            <div className="d-flex justify-content-end">
                                <img src={coin3} alt="" className="img-fluid coin" onMouseOver={handleMouseOver}/>
                            </div>
                            <div className="d-flex justify-content-start">
                                <img src={coin4} alt="" className="img-fluid coin coin-horizontal" onMouseOver={handleMouseOver} />
                            </div>
                            <audio id="coin-sound">
                                <source src={soundcoin} type="audio/mpeg"/>
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                        <div className="bg-form bg-paper p-4 border border-1 rounded-4">
                            {/* FORMULARIO INVERTIR */}
                            <div className="form" id="formulario-invertir">
                                <h3 className="mb-2">¡Empieza a invertir<br/>
                                <em>hoy mismo!</em></h3>
                                <p>Descubre tu potencial de ganancia en Inversiones, completa los siguientes datos por favor.</p>

                                <form className="mt-4">
                                    <div className="mb-3">
                                        <label className="form-label">Tipo de documento de identidad</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected disabled>Seleccionar tipo de documento</option>
                                            <option value="1">DNI</option>
                                            <option value="2">Carnet de extranjería</option>
                                            <option value="3">Lib. Adolesc. Trab.</option>
                                            <option value="4">Pasaporte</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Documento de Identidad</label>
                                        <input type="number" className="form-control" id="" placeholder="ej. 70343028"/>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="g-recaptcha" data-sitekey="6Lc9wpYpAAAAAOdk998LEtvtuCDGjTPri2kTkqjP"></div>
                                    </div>
                                    <hr className="hr"></hr>
                                    <button type="submit" className="w-100 btn hbt-btn-primary">Invertir ahora</button>
                                </form>
                            </div>
                            
                            {/* CAMBIATE A HABITAT
                            <div className="message" id="cambiate-hbt">
                                <img src={habierror} alt="icon message"/>
                                <h3 className="mb-2">¡Oh no!<br/>
                                    <em>Aún no perteneces<br/> 
                                    a AFP Habitat</em></h3>
                                <p>¿Qué esperas para empezar a generar rentabilidad en tus fondos? 
                                    <strong>Realiza tu cambio 100% digital</strong> ahora mismo.</p>
                                <hr className="hr"/>
                                <a href="https://cambiate.afphabitat.com.pe/identidad" target="_blank" className="w-100 btn hbt-btn-primary">Cámbiate ahora</a>
                            </div>*/}

                            {/* PERTENECE A HABITAT
                            <div className="message" id="pertenece-hbt">
                                <img src={habisuccess} alt="icon message"/>
                                <div id="lottie-animation" style="">
                                    <dotlottie-player src="https://lottie.host/7d20879b-665c-47a2-983d-316045d7fa47/IVNpqcx1R1.json" background="transparent" speed="0.5" loop autoplay></dotlottie-player>
                                </div>
                                <h3 className="mb-2">¡Ya eres parte de<br/>
                                    <em>AFP Habitat!</em></h3>
                                <p>Gracias por tu preferencia, empieza a generar rentabilidad en tus 
                                    fondos ahora mismo desde <strong>Mi Habitat Digital.</strong></p>
                                <hr className="hr"/>
                                <a href="https://www.afphabitat.com.pe/#/mi-habitat-digital/empezar" target="_blank" className="w-100 btn hbt-btn-primary">Ir a Mi Habitat Digital</a>
                            </div>*/}
                            
                            
                            {/* BOTON LOADING--
                            <a href="#" className="w-100 btn hbt-btn-primary d-flex justify-content-center">
                                <dotlottie-player src="https://lottie.host/9e7c7c2d-cf8f-466d-9dac-8d2abaa552aa/QLQtVHp1sU.json" background="transparent" speed="1" style="width: 25px; height: 25px;" loop autoplay></dotlottie-player>
                            </a>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        );
};

export default Header;