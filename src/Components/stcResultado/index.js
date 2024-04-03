import React, { useState, useEffect } from "react";
import "./styles.css";
import habimodal from "../../assets/img/habi-v-new.png";
import lottie from "lottie-web";
import { useContext } from "react";
import RentabilidadContext from "../../context/rentabilidad/rentabilidadContext";
import { DotLottiePlayer } from "@dotlottie/player-component";

const StcResultado = () => {
  const [animationPlayedFirst, setAnimationPlayedFirst] = useState(false);
  const [animationPlayedSecond, setAnimationPlayedSecond] = useState(false);
  const [animationPlayedThird, setAnimationPlayedThird] = useState(false);

  const [completaDatos, setCompletaDatos] = useState(false);
  const [step, setStep] = useState(2);

  const [total, setTotal] = useState(null);
  const [inversionIni, setInversionIni] = useState(null);
  const [renta, setRenta] = useState(null);

  const rentabilidadContext = useContext(RentabilidadContext);
  const {
    mes,
    anio,
    saldoTotal,
    porcentaje,
    rentabilidad,
    inversionInicial,
    obtenerValorCuota,
  } = rentabilidadContext;

  const handleFound = async (step) => {
    if (mes !== null && anio !== null) {
      if (inversionInicial !== null) {
        console.log("mes", mes);
        console.log("anio", anio);
        console.log("saldoTotal", saldoTotal);
        console.log("porcentaje", porcentaje);
        console.log("rentabilidad", rentabilidad);
        setTotal(saldoTotal);
        // setRenta(rentabilidad);
        setStep(step);
        setInversionIni(inversionInicial);
        const valorCuotaLast = await obtenerValorCuota(mes, anio, false);
        const valorCuotaActual = await obtenerValorCuota(mes, anio, true);
        let lastValue;
        let actualValue;
        switch (step) {
          case 1:
            lastValue = valorCuotaLast.rows.pop().fund1;
            actualValue = valorCuotaActual.rows.pop().fund1;
            break;
          case 2:
            lastValue = valorCuotaLast.rows.pop().fund2;
            actualValue = valorCuotaActual.rows.pop().fund2;
            break;
          case 3:
            lastValue = valorCuotaLast.rows.pop().fund3;
            actualValue = valorCuotaActual.rows.pop().fund3;
            break;
        }
        const lastValueNumber = lastValue.replace(/^S\/\s/, "");
        const actualValueNumber = actualValue.replace(/^S\/\s/, "");

        console.log("valor cuota last", lastValue);
        console.log("valor cuota actual", actualValue);

        console.log("valor cuota last", typeof lastValue);
        console.log("valor cuota actual", typeof actualValue);

        const lastRent = parseFloat(lastValueNumber);
        const nowRent = parseFloat(actualValueNumber);

        let inversionUltima = inversionInicial / lastRent;
        let inversionActual = inversionUltima * nowRent;

        let rentabilidadFinal = inversionActual - inversionInicial;

        setTotal(inversionActual.toFixed(2));
        setRenta(rentabilidadFinal.toFixed(2));
        setInversionIni(inversionInicial);
      }
    }
  };

  const handleStartAnimation = async () => {
    let animationStep;
    if (step === 1) {
      await setAnimationPlayedFirst(true);
      animationStep = animationPlayedFirst;
    } else if (step === 2) {
      await setAnimationPlayedSecond(true);
      animationStep = animationPlayedSecond;
    } else {
      await setAnimationPlayedThird(true);
      animationStep = animationPlayedThird;
    }
    if (!animationStep) {
      const animation = lottie.loadAnimation({
        container: document.getElementById(`json-animation-here-${step}`),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://lottie.host/1b1df540-207e-49e1-819b-042ee1dd1d69/te8cgJPNGC.json",
      });
      animation.play();
    }
  };

  useEffect(() => {
    const handleScroll = async () => {
      handleStartAnimation();
    };
    handleScroll();
  }, [step]);

  useEffect(() => {
    if (step === 2) {
      console.log("stepeeeeeeeeeeeee", step);
    }
    if (rentabilidad !== null) {
      console.log("diosito por favor");
    }
  }, []);

  useEffect(() => {
    setInversionIni(inversionInicial);
  }, [inversionInicial]);

  return (
    <div className="stc-hbt-resutl-rent py-5" id="resultado">
      <div className="container">
        {/* {completaDatos ?  : <div>Hola</div>} */}

        <div className="form-row">
          <div className="header-pills d-flex align-items-center mb-4">
            <h5 className="card-title me-3">Rentabilidad proyectada en: </h5>
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <div
                  className="btn nav-link me-2 "
                  id="home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#fondo1"
                  type="button"
                  role="tab"
                  aria-controls="fondo1"
                  aria-selected="false"
                  onClick={() => handleFound(1)}
                >
                  Fondo 1
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="btn nav-link me-2 active"
                  id="profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#fondo2"
                  type="button"
                  role="tab"
                  aria-controls="fondo2"
                  aria-selected="true"
                  onClick={() => handleFound(2)}
                >
                  Fondo 2
                </div>
              </li>
              <li className="nav-item" role="presentation">
                <div
                  className="btn nav-link me-2"
                  id="contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#fondo3"
                  type="button"
                  role="tab"
                  aria-controls="fondo3"
                  aria-selected="false"
                  onClick={() => handleFound(3)}
                >
                  Fondo 3
                </div>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="fondo1"
              role="tabpanel"
              aria-labelledby="fondo1"
            >
              <div className="row">
                <div className="col-lg-3 col-xs-12 col1-tab">
                  <div className="card rounded-4 mb-4">
                    <div className="card-body px-0">
                      <div className="card-hd px-3">
                        <div className="d-flex">
                          <div className="col-auto">
                            <div className="card-icon d-flex align-items-center rounded-4 p-2">
                              <span className="icon material-symbols-rounded">
                                trending_up
                              </span>
                            </div>
                          </div>
                          <div className="col ps-3">
                            <span className="card-caption body2">
                              Saldo total
                            </span>
                            <span className="card-mounth d-block">
                              S/ {total ? total : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr className="hr"></hr>
                      <div className="card-ft px-3">
                        <div className="d-flex align-item-center justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <strong className="ft-txt">
                              Porcentaje de ganancia:
                            </strong>{" "}
                            <span className="ps-2 ft-number">43%</span>
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-tooltip-icon p-1 d-flex align-items-center"
                            >
                              <span
                                className="material-symbols-rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                info_i
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card rounded-4 mb-4">
                    <div className="card-body px-0">
                      <div className="card-hd px-3">
                        <div className="d-flex">
                          <div className="col-auto">
                            <div className="card-icon d-flex align-items-center rounded-4 p-2">
                              <span className="icon material-symbols-rounded">
                                business_center
                              </span>
                            </div>
                          </div>
                          <div className="col ps-3">
                            <span className="card-caption body2">
                              Inversión inicial
                            </span>
                            <span className="card-mounth d-block">
                              S/ {inversionIni}
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr className="hr"></hr>
                      <div className="card-ft px-3">
                        <div className="d-flex align-item-center justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <strong className="ft-txt">Invertido en:</strong>{" "}
                            <span className="ps-2 ft-number">9 años</span>
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-tooltip-icon p-1 d-flex align-items-center"
                            >
                              <span
                                className="material-symbols-rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                info_i
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xs-12 col2-tab">
                  <div className="card card-rent rounded-4 mb-4 text-center">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <div className="card-icon d-flex align-items-center rounded-4 p-2">
                          <span className="icon material-symbols-rounded">
                            savings
                          </span>
                        </div>
                      </div>
                      <div className="caption mt-2">Fondo 1</div>
                      <h5 className="card-title m-0">
                        Rentabilidad proyectada
                      </h5>
                      <p className="card-text">
                        Tu fondo hubiera generado la siguiente rentabilidad
                      </p>
                      <span className="mounth-rentabilidad">
                        S/ {renta} <span className="icon-disclaimer">*</span>
                      </span>
                      <div className="mt-n4" id="json-animation-here-1"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12 col3-tab">
                  <h3 className="mb-2">
                    Más detalles
                    <br />
                    <em>de tu simulación</em>
                  </h3>
                  <p className="mb-5">
                    Descubre la rentabilidad que podrías haber logrado si hace{" "}
                    <strong>9 años</strong> hubieras invertido en{" "}
                    <strong>AFP Habitat.</strong>
                  </p>
                  <a href="#stc-invertir" className="btn hbt-btn-primary mb-2">
                    Invierte ahora
                  </a>
                  <div className="d-block d-none d-lg-block">
                    <span className="disclaimer">
                      * La rentabilidad es un factor que{" "}
                      <a
                        href="https://www.afphabitat.com.pe/rentabilidad/"
                        target="_blank"
                      >
                        se evalúa anualmente y puede variar.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="fondo2"
              role="fondo2"
              aria-labelledby="fondo2"
            >
              <div className="row">
                <div className="col-lg-3 col-xs-12 col1-tab">
                  <div className="card rounded-4 mb-4">
                    <div className="card-body px-0">
                      <div className="card-hd px-3">
                        <div className="d-flex">
                          <div className="col-auto">
                            <div className="card-icon d-flex align-items-center rounded-4 p-2">
                              <span className="icon material-symbols-rounded">
                                trending_up
                              </span>
                            </div>
                          </div>
                          <div className="col ps-3">
                            <span className="card-caption body2">
                              Saldo total
                            </span>
                            <span className="card-mounth d-block">
                              S/ {total ? total : "35,000.67"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr className="hr"></hr>
                      <div className="card-ft px-3">
                        <div className="d-flex align-item-center justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <strong className="ft-txt">
                              Porcentaje de ganancia:
                            </strong>{" "}
                            <span className="ps-2 ft-number">43%</span>
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-tooltip-icon p-1 d-flex align-items-center"
                            >
                              <span
                                className="material-symbols-rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                info_i
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card rounded-4 mb-4">
                    <div className="card-body px-0">
                      <div className="card-hd px-3">
                        <div className="d-flex">
                          <div className="col-auto">
                            <div className="card-icon d-flex align-items-center rounded-4 p-2">
                              <span className="icon material-symbols-rounded">
                                business_center
                              </span>
                            </div>
                          </div>
                          <div className="col ps-3">
                            <span className="card-caption body2">
                              Inversión inicial
                            </span>
                            <span className="card-mounth d-block">
                              S/ {inversionIni}
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr className="hr"></hr>
                      <div className="card-ft px-3">
                        <div className="d-flex align-item-center justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <strong className="ft-txt">Invertido en:</strong>{" "}
                            <span className="ps-2 ft-number">9 años</span>
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-tooltip-icon p-1 d-flex align-items-center"
                            >
                              <span
                                className="material-symbols-rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                info_i
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xs-12 col2-tab">
                  <div className="card card-rent rounded-4 mb-4 text-center">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <div className="card-icon d-flex align-items-center rounded-4 p-2">
                          <span className="icon material-symbols-rounded">
                            savings
                          </span>
                        </div>
                      </div>
                      <div className="caption mt-2">Fondo 2</div>
                      <h5 className="card-title m-0">
                        Rentabilidad proyectada
                      </h5>
                      <p className="card-text">
                        Tu fondo hubiera generado la siguiente rentabilidad
                      </p>
                      <span className="mounth-rentabilidad">
                        S/ {renta} <span className="icon-disclaimer">*</span>
                      </span>
                      <div className="mt-n4" id="json-animation-here-2"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12 col3-tab">
                  <h3 className="mb-2">
                    Más detalles
                    <br />
                    <em>de tu simulación</em>
                  </h3>
                  <p className="mb-5">
                    Descubre la rentabilidad que podrías haber logrado si hace{" "}
                    <strong>9 años</strong> hubieras invertido en{" "}
                    <strong>AFP Habitat.</strong>
                  </p>
                  <a href="#stc-invertir" className="btn hbt-btn-primary mb-2">
                    Invierte ahora
                  </a>
                  <div className="d-block d-none d-lg-block">
                    <span className="disclaimer">
                      * La rentabilidad es un factor que{" "}
                      <a
                        href="https://www.afphabitat.com.pe/rentabilidad/"
                        target="_blank"
                      >
                        se evalúa anualmente y puede variar.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="fondo3"
              role="fondo3"
              aria-labelledby="fondo3"
            >
              <div className="row">
                <div className="col-lg-3 col-xs-12 col1-tab">
                  <div className="card rounded-4 mb-4">
                    <div className="card-body px-0">
                      <div className="card-hd px-3">
                        <div className="d-flex">
                          <div className="col-auto">
                            <div className="card-icon d-flex align-items-center rounded-4 p-2">
                              <span className="icon material-symbols-rounded">
                                trending_up
                              </span>
                            </div>
                          </div>
                          <div className="col ps-3">
                            <span className="card-caption body2">
                              Saldo total
                            </span>
                            <span className="card-mounth d-block">
                              S/ {total ? total : "35,000.67"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr className="hr"></hr>
                      <div className="card-ft px-3">
                        <div className="d-flex align-item-center justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <strong className="ft-txt">
                              Porcentaje de ganancia:
                            </strong>{" "}
                            <span className="ps-2 ft-number">43%</span>
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-tooltip-icon p-1 d-flex align-items-center"
                            >
                              <span
                                className="material-symbols-rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                info_i
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card rounded-4 mb-4">
                    <div className="card-body px-0">
                      <div className="card-hd px-3">
                        <div className="d-flex">
                          <div className="col-auto">
                            <div className="card-icon d-flex align-items-center rounded-4 p-2">
                              <span className="icon material-symbols-rounded">
                                business_center
                              </span>
                            </div>
                          </div>
                          <div className="col ps-3">
                            <span className="card-caption body2">
                              Inversión inicial
                            </span>
                            <span className="card-mounth d-block">
                              S/ {inversionIni}
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr className="hr"></hr>
                      <div className="card-ft px-3">
                        <div className="d-flex align-item-center justify-content-between">
                          <div className="col-auto d-flex align-items-center">
                            <strong className="ft-txt">Invertido en:</strong>{" "}
                            <span className="ps-2 ft-number">9 años</span>
                          </div>
                          <div className="col-auto">
                            <button
                              type="button"
                              className="btn btn-tooltip-icon p-1 d-flex align-items-center"
                            >
                              <span
                                className="material-symbols-rounded"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                info_i
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xs-12 col2-tab">
                  <div className="card card-rent rounded-4 mb-4 text-center">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <div className="card-icon d-flex align-items-center rounded-4 p-2">
                          <span className="icon material-symbols-rounded">
                            savings
                          </span>
                        </div>
                      </div>
                      <div className="caption mt-2">Fondo 3</div>
                      <h5 className="card-title m-0">
                        Rentabilidad proyectada
                      </h5>
                      <p className="card-text">
                        Tu fondo hubiera generado la siguiente rentabilidad
                      </p>
                      <span className="mounth-rentabilidad">
                        S/ {renta} <span className="icon-disclaimer">*</span>
                      </span>
                      <div className="mt-n4" id="json-animation-here-3"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-xs-12 col3-tab">
                  <h3 className="mb-2">
                    Más detalles
                    <br />
                    <em>de tu simulación</em>
                  </h3>
                  <p className="mb-5">
                    Descubre la rentabilidad que podrías haber logrado si hace{" "}
                    <strong>9 años</strong> hubieras invertido en{" "}
                    <strong>AFP Habitat.</strong>
                  </p>
                  <a href="#stc-invertir" className="btn hbt-btn-primary mb-2">
                    Invierte ahora
                  </a>
                  <div className="d-block d-none d-lg-block">
                    <span className="disclaimer">
                      * La rentabilidad es un factor que{" "}
                      <a
                        href="https://www.afphabitat.com.pe/rentabilidad/"
                        target="_blank"
                      >
                        se evalúa anualmente y puede variar.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* MODAL */}
          <div
            className="modal fade modal-sm"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="col d-flex align-items-center w-100">
                    <img
                      src={habimodal}
                      alt="Habi BOT"
                      className="img-fluid img-modal m-auto"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn-close position-absolute top-0 end-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body pb-1">
                  <h5 className="mb-3">
                    Maximiza tus Fondos con las mejores opciones de servicio que
                    tenemos para ti.
                  </h5>
                  <p>
                    En <strong>AFP Habitat</strong> nos preocupamos por tu
                    bienestar por eso te brindamos las mejores alternativas de
                    servicio para que puedas sacarle el mejor provecho a tus
                    fondos.
                  </p>
                  <div className="">
                    <div className="col">
                      <div className="d-flex align-items-center pillar bg-paper rounded-3 p-2 mb-2">
                        <span className="material-symbols-rounded icons">
                          monitoring
                        </span>
                        <span className="txt-services ps-2">
                          AFP líder en rentabilidad
                        </span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center pillar bg-paper rounded-3 p-2 mb-2">
                        <span className="material-symbols-rounded icons">
                          handshake
                        </span>
                        <span className="txt-services ps-2">
                          Mejor experiencia al cliente
                        </span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-flex align-items-center pillar bg-paper rounded-3 p-2">
                        <span className="material-symbols-rounded icons">
                          support_agent
                        </span>
                        <span className="txt-services ps-2">
                          Canales de atención digital
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="hr mx-3"></hr>
                <div className="modal-footer pt-0">
                  <button type="button" className="btn hbt-btn-primary w-100">
                    Simular ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-lg-none text-center">
            <span className="disclaimer">
              * La rentabilidad es un factor que{" "}
              <a
                href="https://www.afphabitat.com.pe/rentabilidad/"
                target="_blank"
              >
                se evalúa anualmente y varía.
              </a>
            </span>
          </div>
        </div>

        <div className="row sin-data d-flex">
          <div className="col-sm-12 col-lg-6 left">
            <div className="card rounded-4 mb-4 p-3">
              <div id="lottie-animation" className="sin-resultado">
                <dotlottie-player
                  src="https://lottie.host/75b59d0c-a1e7-460a-b3cf-e04c6995e90c/WM8ncYJnhw.json"
                  background="transparent"
                  speed="1"
                  autoplay
                ></dotlottie-player>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 right">
            <h3>
              Simula tu
              <em>Rentabilidad</em>
            </h3>
            <p>
              Completa los datos solicitados en la sección superior para poder
              mostrarte una estimación más clara de tu rentabilidad a futuro.
            </p>
            <a href="#" className="btn hbt-btn-primary mb-2">
              Simular ahora
            </a>
            <div className="d-block">
              <span className="disclaimer">
                *La rentabilidad es un factor que{" "}
                <a href="#">se evalúa anualmente y varía.</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StcResultado;
