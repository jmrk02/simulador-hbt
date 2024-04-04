import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import ReCAPTCHA from "react-google-recaptcha";
import habibotdesk from "../../assets/img/habi-v-new.png";
import habibotmobile from "../../assets/img/habit-coins.png";
import coin1 from "../../assets/img/coin1.png";
import coin2 from "../../assets/img/coin2.png";
import coin3 from "../../assets/img/coin3.png";
import coin4 from "../../assets/img/coin4.png";
import habierror from "../../assets/img/habi-error-icon.png";
import soundcoin from "../../assets/img/coin-sound.mp3";
import "animate.css";
import { DotLottiePlayer } from "@dotlottie/player-component";
import { useForm } from "react-hook-form";

const Header = () => {
  const { register, handleSubmit, errors } = useForm();
  const divRef = useRef(null);
  const [reproduccionIniciada, setReproduccionIniciada] = useState(false);
  const [captcha, setCaptcha] = useState(true);
  const [isHabitatSection, setIsHabitatSection] = useState(false);
  const [isConsulted, setIsConsulted] = useState(false);
  const [isntHabitatSection, setIsntHabitatSection] = useState(false);
  const [inputNumDoc, guardarinputNumDoc] = useState({
    lenghtNdoc: 8,
    pattern: "[0-9]*",
  });
  const recaptchaRef = useRef(null);
  const listOptions = [
    {
      value: "NN",
      text: "Selecciona un documento",
      maxLength: 8,
    },
    {
      value: "00",
      text: "D.N.I",
      maxLength: 8,
      pattern: "[0-9]*",
    },
    {
      value: "01",
      text: "Carnet de Extranjería",
      maxLength: 9,
      pattern: "[0-9]*",
    },
    {
      value: "03",
      text: "Lib. Adolesc. Trab.",
      maxLength: 12,
      pattern: "[0-9]*",
    },
    { value: "04", text: "Pasaporte", maxLength: 15, pattern: "[a-zA-Z0-9 ]+" },
  ];

  //   const handleMouseOver = () => {
  //     var audio = new Audio(soundcoin);
  //     if (!reproduccionIniciada) {
  //       audio.play();
  //       setReproduccionIniciada(true);
  //     } else {
  //       audio.currentTime = 0;
  //       audio.play();
  //     }
  //   };

  const handleDocumentType = (e) => {
    let item = listOptions.find((option) => option.value === e.target.value);
    guardarinputNumDoc({
      ...inputNumDoc,
      lenghtNdoc: item.maxLength,
      pattern: item.pattern,
    });
  };

  const onSubmit = async (data) => {
    try {
      let bodyFormData = new FormData();
      bodyFormData.set("documentType", data.documentType);
      bodyFormData.set("document", data.documentNumber);
      bodyFormData.set("g-recaptcha-response", captcha);
      let response = await fetch(
        "https://200.60.145.234/api/services/traspaso-habitat/validar-documento-habitat",
        {
          method: "POST",
          body: bodyFormData,
        }
      );
      const jsonData = await response.json();
      let isHabitat = jsonData.isHabitat;
      setIsConsulted(true);
      if (isHabitat) {
        setIsHabitatSection(true);
      } else {
        setIsntHabitatSection(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const respuestaCaptcha = (response) => {
    // console.log(response,'RP');
    setCaptcha(response);
  };

  return (
    <>
      <div className="stc-hbt-form mt-5" id="stc-invertir">
        <div className="container d-flex align-items-center justify-content-between rounded-5 bg-red px-5">
          <div className="form-content d-flex align-items-center justify-content-center">
            <div className="d-flex col-sm-12 col-lg-8 d-flex align-items-end">
              <div className="col-sm-12 col-lg-6 d-flex justify-content-center align-items-center">
                <img
                  src={habibotmobile}
                  alt="Habi BOT"
                  className="img-fluid img-form-habi d-lg-none mt-n4"
                />
                <img
                  src={habibotdesk}
                  alt="Habi BOT"
                  className="img-fluid img-form-habi d-none d-lg-block"
                />
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-flex justify-content-end">
                  <img
                    src={coin1}
                    alt=""
                    className="img-fluid coin ml-auto"
                    // onMouseOver={handleMouseOver}
                  />
                </div>
                <div className="d-flex justify-content-start">
                  <img
                    src={coin2}
                    alt=""
                    className="img-fluid coin"
                    // onMouseOver={handleMouseOver}
                  />
                </div>
                <div className="d-flex justify-content-end">
                  <img
                    src={coin3}
                    alt=""
                    className="img-fluid coin"
                    // onMouseOver={handleMouseOver}
                  />
                </div>
                <div className="d-flex justify-content-start">
                  <img
                    src={coin4}
                    alt=""
                    className="img-fluid coin coin-horizontal"
                    // onMouseOver={handleMouseOver}
                  />
                </div>
                <audio id="coin-sound">
                  <source src={soundcoin} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="bg-form bg-paper p-4 border border-1 rounded-4">
                {/* FORMULARIO INVERTIR */}
                {!isConsulted && (
                  <div className="form" id="formulario-invertir">
                    <h3 className="mb-2 animate__animated animate__bounce">
                      ¡Empieza a invertir
                      <br />
                      <em>hoy mismo!</em>
                    </h3>
                    <p>
                      Descubre tu potencial de ganancia en Inversiones, completa
                      los siguientes datos por favor.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                      <div className="mb-3">
                        <label htmlFor="document-type" className="form-label">
                          Tipo de documento de identidad
                        </label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          id="document-type"
                          name="documentType"
                          {...register("documentType", { required: true })}
                          onChange={(e) => handleDocumentType(e)}
                        >
                          {listOptions.map((item, index) => (
                            <option key={index} value={item.value}>
                              {item.text}
                            </option>
                          ))}
                        </select>
                        {errors?.documentType && (
                          <span className="error-new-home">
                            Campo requerido*
                          </span>
                        )}
                      </div>
                      <div className="mb-3">
                        <label htmlFor="document-number" className="form-label">
                          Documento de Identidad
                        </label>
                        <input
                          type="text"
                          name="documentNumber"
                          className="form-control"
                          id="document-number"
                          placeholder="ej. 70343028"
                          autoComplete="off"
                          pattern={inputNumDoc.pattern}
                          maxLength={inputNumDoc.lenghtNdoc}
                          onKeyPress={(event) => {
                            if (inputNumDoc.lenghtNdoc !== 15) {
                              let regex = new RegExp("^[0-9]+$");
                              let key = String.fromCharCode(
                                !event.charCode ? event.which : event.charCode
                              );
                              if (!regex.test(key)) {
                                event.preventDefault();
                                return false;
                              }
                            }
                          }}
                          {...register("documentNumber", {
                            required: true,
                            maxLength: inputNumDoc.lenghtNdoc,
                          })}
                        />
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <ReCAPTCHA
                          sitekey="6LfH3XkmAAAAAAZ0C6jfmlhKRjVuO1VFvKt9-pNA"
                          onChange={respuestaCaptcha}
                          ref={recaptchaRef}
                          badge={"bottomleft"}
                          size={"normal"}
                        />
                      </div>
                      <hr className="hr"></hr>
                      <button
                        type="submit"
                        className="w-100 btn hbt-btn-primary"
                      >
                        Invertir ahora
                      </button>
                    </form>
                  </div>
                )}

                {isHabitatSection && (
                  <div
                    className="message animate__animated animate__fadeIn"
                    id="pertenece-hbt"
                  >
                    <div id="lottie-animation" className="succes-message">
                      <dotlottie-player
                        src="https://lottie.host/fd03a93c-ba46-4c1f-802a-7cd9ea0b05ce/aY408FnCW5.json"
                        background="transparent"
                        speed="0.5"
                        loop
                        autoplay
                      ></dotlottie-player>
                    </div>
                    <h3 className="mb-2">
                      ¡Ya eres parte de
                      <br />
                      <em>AFP Habitat!</em>
                    </h3>
                    <p>
                      Gracias por tu preferencia, empieza a generar rentabilidad
                      en tus fondos ahora mismo desde{" "}
                      <strong>Mi Habitat Digital.</strong>
                    </p>
                    <hr className="hr" />
                    <a
                      href="https://www.afphabitat.com.pe/#/mi-habitat-digital/empezar"
                      target="_blank"
                      className="w-100 btn hbt-btn-primary"
                    >
                      Ir a Mi Habitat Digital
                    </a>
                  </div>
                )}

                {isntHabitatSection && (
                  <div
                    className="message message animate__animated animate__fadeIn"
                    id="cambiate-hbt"
                  >
                    <img src={habierror} alt="icon message" />
                    <h3 className="mb-2">
                      ¡Oh no!
                      <br />
                      <em>
                        Aún no perteneces
                        <br />a AFP Habitat
                      </em>
                    </h3>
                    <p>
                      ¿Qué esperas para empezar a generar rentabilidad en tus
                      fondos?
                      <strong> Realiza tu cambio 100% digital</strong> ahora
                      mismo.
                    </p>
                    <hr className="hr" />
                    <a
                      href="https://cambiate.afphabitat.com.pe/identidad"
                      target="_blank"
                      className="w-100 btn hbt-btn-primary"
                    >
                      Cámbiate ahora
                    </a>
                  </div>
                )}

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
    </>
  );
};

export default Header;
