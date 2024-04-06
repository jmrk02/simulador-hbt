/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import "./Prueba.scss";

import RentabilidadContext from "../../context/rentabilidad/rentabilidadContext";

import { Container } from "@mui/material";

import { Typography, Button, Grid, TextField } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import "dayjs/locale/es";
import dayjs from "dayjs";

import { makeStyles } from "@mui/styles";
import { set } from "date-fns";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { is } from "date-fns/locale";
import LoadingButton from '@mui/lab/LoadingButton';
const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-input": {
      color: "white",
      fontSize: "1.875rem",
      textAlign: "center",
      fontWeight: "400",
      letterSpacing: "2rem",
      padding: "8px 17px",
    },
  },
});

function Prueba() {
  const velocidad = 100;

  const [runningM1, setRunningM1] = useState(false);
  const [runningM2, setRunningM2] = useState(false);
  const [runningM3, setRunningM3] = useState(false);

  const [runningN1, setRunningN1] = useState(false);
  const [runningN2, setRunningN2] = useState(false);
  const [runningN3, setRunningN3] = useState(false);
  const [runningN4, setRunningN4] = useState(false);

  const [digitosMes, setDigitosMes] = useState(0);
  const [positionM1, setPositionM1] = useState(0);
  const posicionMes = [
    0, 8, 16, 24.5, 32.5, 40.5, 48.5, 56.5, 65, 73, 81.5, 89.5,
  ];

  const [digitosAno, setDigitosAno] = useState([]);
  const [positionN1, setPositionN1] = useState(0);
  const [positionN2, setPositionN2] = useState(0);
  const [positionN3, setPositionN3] = useState(0);
  const [positionN4, setPositionN4] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const posicionesAno = [0, 10, 19.5, 29, 39, 49, 58.5, 68.5, 78, 88];

  const [mostrarTextField, setMostrarTextField] = useState(false);
  const [positionINV1, setPositionINV1] = useState(0);
  const [positionINV2, setPositionINV2] = useState(0);
  const [positionINV3, setPositionINV3] = useState(0);
  const [positionINV4, setPositionINV4] = useState(0);
  const [positionINV5, setPositionINV5] = useState(0);
  const [positionINV6, setPositionINV6] = useState(0);
  const [positionINV7, setPositionINV7] = useState(0);
  const [positionINV8, setPositionINV8] = useState(0);
  const [positionINV9, setPositionINV9] = useState(0);
  const [positionINV10, setPositionINV10] = useState(0);


  const [runningInv1, setRunningInv1] = useState(false);
  const [runningInv2, setRunningInv2] = useState(false);
  const [runningInv3, setRunningInv3] = useState(false);

  const [runningInv4, setRunningInv4] = useState(false);
  const [runningInv5, setRunningInv5] = useState(false);
  const [runningInv6, setRunningInv6] = useState(false);

  const [runningInv7, setRunningInv7] = useState(false);
  const [runningInv8, setRunningInv8] = useState(false);
  const [runningInv9, setRunningInv9] = useState(false);

  const [runningInv10, setRunningInv10] = useState(false);
  const [digitos10, setDigitos10] = useState(false);

  const [showMillon, setShowMillon] = useState(false);
  const [showMillon1, setShowMillon1] = useState(false);
  const [showMillon2, setShowMillon2] = useState(false);
  const [milMillon, setMilMillon] = useState(false);
  const [comilla, setComilla] = useState(",");
  const [comillaMilMillon, setComillaMilMillon] = useState("'");

  const classes = useStyles();
  const [isInversion, setIsInversion] = useState("");
  const [gridMayor, setGridMayor] = useState(5);
  const griduno = 12 / 7;
  const [grid, setGrid] = useState(griduno);

  const [digitosInversion, setDigitosInversion] = useState([]);

  const [abrirCalendar, setAbrirCalendar] = useState(false);
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const meses = [
    ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"],
    ["E", "B", "R", "R", "Y", "N", "L", "O", "P", "T", "V", "C"],
  ];

  const [coma4Dig, setComa4Dig] = useState(false);
  const [coma5Dig, setComa5Dig] = useState(true);
  const [coma6Dig, setComa6Dig] = useState(false);

  const [lastRent, setLastRent] = useState(null);
  const [nowRent, setNowRent] = useState(null);

  // const [habiliarSimulacion, setHabilitarSimulacion] = useState(false);
  const [texto, setTexto] = useState(true);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [dirigirHref, setDirigirHref] = useState(false);
  const [errorInversionText, setErrorInversionText] = useState(
    "Por favor, ingresa un monto de inversión"
  );
  const [errorFechaText, setErrorFechaText] = useState(
    "Por favor, ingresa una fecha"
  );

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const rentabilidadContext = useContext(RentabilidadContext);
  const {
    setDatosInversion,
    setMesAnio,
    obtenerValorCuota,
  } = rentabilidadContext;

  //EFECTO AÑO
  useEffect(() => {
    let animationIntervalN1,
      animationIntervalN2,
      animationIntervalN3,
      animationIntervalN4;

    if (runningN1) {
      let contador1 = 0;
      animationIntervalN1 = setInterval(() => {
        setPositionN1((prevPosition) => {
          // //console.log(digitosAno[0])
          // //console.log(posicionesAno.indexOf(prevPosition))
          if (posicionesAno.indexOf(prevPosition) === 2) {
            setRunningN1(false);
            clearInterval(animationIntervalN1);
          } else {
            if (contador1 === 9) {
              contador1 = 0;
            }
            // //console.log('prevPosition N1', prevPosition)
            const nextPosition = posicionesAno[contador1];
            // //console.log('nextPosition N1', nextPosition)

            contador1++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningN2) {
      let cont2 = 0;
      animationIntervalN2 = setInterval(() => {
        setPositionN2((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === 0) {
            setRunningN2(false);
            clearInterval(animationIntervalN2);
          } else {
            if (cont2 === 9) {
              cont2 = 0;
            }
            const nextPosition = posicionesAno[cont2];
            cont2++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningN3) {
      let cont3 = 0;
      animationIntervalN3 = setInterval(() => {
        setPositionN3((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === 2) {
            setRunningN3(false);
            clearInterval(animationIntervalN3);
          } else {
            if (cont3 === 9) {
              cont3 = 0;
            }
            const nextPosition = posicionesAno[cont3];
            cont3++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningN4) {
      let cont4 = 0;
      animationIntervalN4 = setInterval(() => {
        setPositionN4((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === 4) {
            setRunningN4(false);
            setTerminado(true);
            clearInterval(animationIntervalN4);
          } else {
            if (cont4 === 9) {
              cont4 = 0;
            }
            const nextPosition = posicionesAno[cont4];
            cont4++;
            return nextPosition;
          }
        });
      }, velocidad);
    }



    return () => {
      clearInterval(animationIntervalN1);
      clearInterval(animationIntervalN2);
      clearInterval(animationIntervalN3);
      clearInterval(animationIntervalN4);
    };
  }, [runningN1, runningN2, runningN3, runningN4]);

  //EFECTO MES
  useEffect(() => {
    let animationIntervalM1;

    if (runningM1) {
      let currentIndex1 = 0;
      animationIntervalM1 = setInterval(() => {
        setPositionM1((prevPosition) => {
          if (posicionMes.indexOf(prevPosition) === 2) {
            setRunningM1(false);
            clearInterval(animationIntervalM1);
          } else {
            if (currentIndex1 === 11) {
              currentIndex1 = 0;
            }
            const nextPosition = posicionMes[currentIndex1];
            currentIndex1++;
            return nextPosition;
          }
        });
      }, velocidad);

    }

    return () => {
      clearInterval(animationIntervalM1);
      // clearInterval(animationIntervalM2);
      // clearInterval(animationIntervalM3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runningM1]);

  //EFECTO INVERSION
  useEffect(() => {
    let animationIntervalInv1,
      animationIntervalInv2,
      animationIntervalInv3,
      animationIntervalInv4,
      animationIntervalInv5;
    let animationIntervalInv6,
      animationIntervalInv7,
      animationIntervalInv8,
      animationIntervalInv9;
    let animationIntervalInv10;
    let digitosTotal = digitosInversion.length;
    if (runningInv1) {
      let contador1 = 0;
      animationIntervalInv1 = setInterval(() => {
        setPositionINV1((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[0]) {
            setRunningInv1(false);
            clearInterval(animationIntervalInv1);
          } else {
            if (contador1 === 10) {
              contador1 = 0;
            }
            const nextPosition = posicionesAno[contador1];
            contador1++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningInv2) {
      let contador2 = 0;
      animationIntervalInv2 = setInterval(() => {
        setPositionINV2((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[1]) {
            setRunningInv2(false);
            clearInterval(animationIntervalInv2);
          } else {
            if (contador2 === 10) {
              contador2 = 0;
            }
            const nextPosition = posicionesAno[contador2];
            contador2++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningInv3) {
      let contador3 = 0;
      animationIntervalInv3 = setInterval(() => {
        setPositionINV3((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[2]) {
            setRunningInv3(false);
            clearInterval(animationIntervalInv3);
          } else {
            if (contador3 === 10) {
              contador3 = 0;
            }
            const nextPosition = posicionesAno[contador3];
            contador3++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningInv4) {
      let contador4 = 0;
      animationIntervalInv4 = setInterval(() => {
        setPositionINV4((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[3]) {
            setRunningInv4(false);
            clearInterval(animationIntervalInv4);
          } else {
            if (contador4 === 10) {
              contador4 = 0;
            }
            const nextPosition = posicionesAno[contador4];
            contador4++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningInv5) {
      let contador5 = 0;
      animationIntervalInv5 = setInterval(() => {
        setPositionINV5((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[4]) {
            setRunningInv5(false);
            clearInterval(animationIntervalInv5);
          } else {
            if (contador5 === 10) {
              contador5 = 0;
            }
            const nextPosition = posicionesAno[contador5];
            contador5++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningInv6) {
      let contador6 = 0;
      animationIntervalInv6 = setInterval(() => {
        setPositionINV6((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[5]) {
            setRunningInv6(false);
            clearInterval(animationIntervalInv6);
          } else {
            if (contador6 === 10) {
              contador6 = 0;
            }
            const nextPosition = posicionesAno[contador6];
            contador6++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningInv7) {
      let contador7 = 0;
      animationIntervalInv7 = setInterval(() => {
        setPositionINV7((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[6]) {
            setRunningInv7(false);
            clearInterval(animationIntervalInv7);
            contador7 = 0;
          } else {
            if (contador7 === 10) {
              contador7 = 0;
            }
            const nextPosition = posicionesAno[contador7];
            contador7++;
            return nextPosition;
          }
        });
      }, velocidad);
    }
    if (runningInv8) {
      let contador8 = 0;
      animationIntervalInv8 = setInterval(() => {
        setPositionINV8((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[7]) {
            // //console.log('posicionesAno.indexOf(prevPosition)', posicionesAno.indexOf(prevPosition))
            setRunningInv8(false);
            clearInterval(animationIntervalInv8);
            contador8 = 0;
          } else {
            if (contador8 === 10) {
              contador8 = 0;
            }
            const nextPosition = posicionesAno[contador8];
            contador8++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningInv9) {
      let contador9 = 0;
      animationIntervalInv9 = setInterval(() => {
        setPositionINV9((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[8]) {
            setRunningInv9(false);
            clearInterval(animationIntervalInv9);
          } else {
            if (contador9 === 10) {
              contador9 = 0;
            }
            const nextPosition = posicionesAno[contador9];
            contador9++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (runningInv9) {
      let contador10 = 0;
      animationIntervalInv10 = setInterval(() => {
        setPositionINV10((prevPosition) => {
          if (posicionesAno.indexOf(prevPosition) === digitosInversion[9]) {
            setRunningInv10(false);
            clearInterval(animationIntervalInv10);
          } else {
            if (contador10 === 10) {
              contador10 = 0;
            }
            const nextPosition = posicionesAno[contador10];
            contador10++;
            return nextPosition;
          }
        });
      }, velocidad);
    }

    if (
      !runningN1 &&
      !runningN2 &&
      !runningN3 &&
      !runningN4 &&
      !runningInv1 &&
      !runningInv2 &&
      !runningInv3 &&
      !runningInv4 &&
      !runningInv5 &&
      !runningInv6 &&
      !runningInv7 &&
      !runningInv8 &&
      !runningInv9 &&
      !runningInv10 &&
      terminado
    ) {
      console.log('termina toda la simulacion')
      setTexto(!texto);
      setLoadingBtn(false)
    }

    return () => {
      clearInterval(animationIntervalInv1);
      clearInterval(animationIntervalInv2);
      clearInterval(animationIntervalInv3);
      clearInterval(animationIntervalInv4);
      clearInterval(animationIntervalInv5);
      clearInterval(animationIntervalInv6);
      clearInterval(animationIntervalInv7);
      clearInterval(animationIntervalInv8);
      clearInterval(animationIntervalInv9);
      clearInterval(animationIntervalInv10);
    };
  }, [
    runningInv1,
    runningInv2,
    runningInv3,
    runningInv4,
    runningInv5,
    runningInv6,
    runningInv7,
    runningInv8,
    runningInv9,
    runningInv10
  ]);


  const handleCalculate = () => {
    let inversionUltima = isInversion / lastRent;
    let inversionActual = inversionUltima * nowRent;
    var entero = parseInt(inversionActual);
    setIsInversion(entero);

    posicionesNumerosInversion(entero.toString().length, entero);
    let resultadoFinal = inversionActual - isInversion;
    const porcentaje = (resultadoFinal / isInversion) * 100;
    setDatosInversion(
      isInversion,
      resultadoFinal.toFixed(2),
      inversionActual.toFixed(2),
      parseInt(porcentaje)
    );
    // rentabilidadFondo2(isInversion, resultadoFinal);
    return parseInt(entero);
  };


  const simularAnimacion = () => {

    try {
      if (!texto) {
        setDirigirHref(true)
        setTerminado(false);

        setPositionN1(0);
        setPositionN2(0);
        setPositionN3(0);
        setPositionN4(0);

        setPositionM1(0);

        setPositionINV1(0);
        setPositionINV2(0);
        setPositionINV3(0);
        setPositionINV4(0);
        setPositionINV5(0);
        setPositionINV6(0);
        setPositionINV7(0);
        setPositionINV8(0);
        setPositionINV9(0);
        setPositionINV10(0);
        setIsInversion("");
        setTexto(!texto);

      } else {
        setDirigirHref(false)
        let response = handleCalculate();
        setLoadingBtn(true)
        // console.log("response calculo:", response);
        setPositionN1(0);
        setPositionN2(0);
        setPositionN3(0);
        setPositionN4(0);

        setPositionM1(0);

        setPositionINV1(0);
        setPositionINV2(0);
        setPositionINV3(0);
        setPositionINV4(0);
        setPositionINV5(0);
        setPositionINV6(0);
        setPositionINV7(0);
        setPositionINV8(0);
        setPositionINV9(0);
        setPositionINV10(0);

        setRunningN1(!runningN1);
        setRunningN2(!runningN2);
        setRunningN3(!runningN3);
        setRunningN4(!runningN4);

        setRunningM1(!runningM1);
        setRunningM2(!runningM2);
        setRunningM3(!runningM3);

        const longitud = response.toString().length;
        for (let i = 0; i < longitud; i++) {
          switch (i) {
            case 0:
              setRunningInv1(!runningInv1);
              break;
            case 1:
              setRunningInv2(!runningInv2);
              break;
            case 2:
              setRunningInv3(!runningInv3);
              break;
            case 3:
              setRunningInv4(!runningInv4);
              break;
            case 4:
              setRunningInv5(!runningInv5);
              break;
            case 5:
              setRunningInv6(!runningInv6);
              break;
            case 6:
              setRunningInv7(!runningInv7);
              break;
            case 7:
              setRunningInv8(!runningInv8);
              break;
            case 8:
              setRunningInv9(!runningInv9);
              break;
            case 9:
              setRunningInv10(!runningInv10);
              break;
            default:
              break;
          }
        }

      }
    } catch (error) {
      //console.log('error', error);
    }
  };


  const openCalendar = () => {
    if (texto) {
      setAbrirCalendar(true);
    } else {
      setAbrirCalendar(false);
    }
    // setAbrirCalendar(true);
  };

  const getLastValue = async (monthValue, yearValue, isActualMonth) => {
    try {
      const response = await obtenerValorCuota(monthValue, yearValue, isActualMonth);
      let lastValue = response.rows.pop().fund2;
      return lastValue;
    } catch (error) {
      //console.log(error);
    }
  };

  const handleDate = async (date) => {
    try {
      if (date === null) {
        //console.log('regrsa')
        return;
      }
      const mes = date["$M"];
      const ano = date["$y"];

      const updateFecha = { month: mes, year: ano };
      if (updateFecha !== null) {
        const { year, month } = updateFecha;
        setDigitosMes(month);
        setPositionM1(posicionMes[month]);
        const anos = year
          .toString()
          .split("")
          .map((i) => parseInt(i, 10));
        setDigitosAno(anos);
        setPositionN1(posicionesAno[anos[0]]);
        setPositionN2(posicionesAno[anos[1]]);
        setPositionN3(posicionesAno[anos[2]]);
        setPositionN4(posicionesAno[anos[3]]);
        // if (isInversion.length > 0) {
        //   setHabilitarSimulacion(true);
        // }
      }
      if (ano.length === 0) {
        setErrorFechaText("Seleccione una fecha");
      } else {
        setErrorFechaText("");
        setMesAnio(mes, ano);
        let lastValue = await getLastValue(mes, ano, false);
        const lastValueNumber = lastValue.replace(/^S\/\s/, "");
        setLastRent(lastValueNumber);

        let actualValue = await getLastValue(mes, ano, true);
        const actualValueNumber = actualValue.replace(/^S\/\s/, "");
        setNowRent(actualValueNumber);
      }
    } catch (error) {
      //console.log(error);
    }
  };

  const handleNumeroInversion = (num) => {
    if (num.target.value === undefined) {
      setIsInversion("");
    }

    if (num.target.value.includes(".")) {
      setSnackbarOpen(true);
    } else {
      setSnackbarOpen(false);
    }
    let numero = eliminarCeros(num.target.value);
    if (numero.startsWith("0")) {
      setIsInversion("")
    } else {
      setIsInversion(numero);
      let longitud = numero.length;
      posicionesNumerosInversion(longitud, numero);
    }

  };

  const eliminarCeros = (numero) => {
    let numeroSinCeros = numero;
    if (numero.length > 0) {
      numeroSinCeros = parseInt(numero, 10);
    }
    return numeroSinCeros.toString();
  }

  const posicionesNumerosInversion = (longitud, numero) => {
    let grid = 2;
    switch (longitud) {
      case 0:
        grid = 12 / (5 + 2);
        setGridMayor(5);
        setGrid(grid);
        setComa5Dig(true);
        setComilla(",");
        setComa4Dig(false);
        setComa6Dig(false);
        setShowMillon(false);
        setShowMillon1(false);
        setShowMillon2(false);
        break;

      case 1:
        grid = 12 / (longitud + 1);
        setGridMayor(5);
        setGrid(grid);
        setComa4Dig(false);
        setComa5Dig(false);
        setComa6Dig(false);
        setShowMillon(false);
        setShowMillon1(false);
        setShowMillon2(false);
        setErrorInversionText("El monto mínimo de inversión es de S/ 1,000");
        break;
      case 2:
        // longitud = numero.length;
        grid = 12 / (longitud + 1);
        setGridMayor(5);
        setGrid(grid);
        setComa4Dig(false);
        setComa5Dig(false);
        setComa6Dig(false);
        setShowMillon(false);
        setShowMillon1(false);
        setShowMillon2(false);
        break;
      case 3:
        // longitud = numero.length;
        grid = 12 / (longitud + 1);
        setGridMayor(5);
        setGrid(grid);
        setComa4Dig(false);
        setComa5Dig(false);
        setComa6Dig(false);
        setShowMillon(false);
        setShowMillon1(false);
        setShowMillon2(false);
        break;
      case 4:
        // longitud = numero.length
        grid = 12 / (longitud + 2);
        setGridMayor(5);
        setGrid(grid);
        setComa4Dig(true);
        setComilla(",");
        setComa5Dig(false);
        setComa6Dig(false);
        setShowMillon(false);
        setShowMillon1(false);
        setShowMillon2(false);
        break;
      case 5:
        // longitud = numero.length;
        grid = 12 / (longitud + 2);
        setGridMayor(5);
        setGrid(grid);
        setComa5Dig(true);
        setComilla(",");
        setComa4Dig(false);
        setComa6Dig(false);
        setShowMillon(false);
        setShowMillon1(false);
        setShowMillon2(false);
        break;
      case 6:
        // longitud = numero.length;
        grid = 12 / (longitud + 2);
        setGridMayor(5);
        setGrid(grid);
        setComa6Dig(true);
        setComa5Dig(false);
        setComa4Dig(false);
        setComilla(",");
        setShowMillon(false);
        setShowMillon1(false);
        setShowMillon2(false);
        break;
      case 7:
        // longitud = numero.length + 3;
        grid = 12 / (longitud + 3);
        setGridMayor(6);
        setComa4Dig(true);
        setComilla("'");
        setComa5Dig(false);
        setComa6Dig(false);
        setShowMillon(true);
        setGrid(grid);
        break;
      case 8:
        // longitud = numero.length + 3;
        grid = 12 / (longitud + 3);
        setGridMayor(6);
        setGrid(grid);
        setComa4Dig(false);
        setComa5Dig(true);
        setComilla("'");
        setComa6Dig(false);
        setShowMillon(false);
        setShowMillon1(true);
        setShowMillon2(false);

        break;
      case 9:
        setGridMayor(6);
        // longitud = numero.length + 3;
        grid = 12 / (longitud + 3);
        setGrid(grid);
        setGridMayor(6);
        setComa4Dig(false);
        setComa5Dig(false);
        setComa6Dig(true);
        setComilla("'");
        setShowMillon(false);
        setShowMillon1(false);
        setShowMillon2(true);
        break;
      case 10:
      
        grid = 12 / (longitud + 3);
    
        setGrid(grid);
        setGridMayor(8);
        setComa4Dig(false);
        setComilla("'");
        setComa5Dig(false);
        setComa6Dig(false);
        setShowMillon(true);
        setShowMillon2(false)
        setComillaMilMillon(",");
        setMilMillon(true);
        // setGrid(grid);

        break;
      default:
        grid = 1.5;
        setGrid(1.5);
        break;
    }

    if (longitud === 0) {
      // setHabilitarSimulacion(false);
      setErrorInversionText("Ingrese un monto de inversión");
    } else {
      setErrorInversionText("");
    }

    const digitos = numero
      .toString()
      .split("")
      .map((i) => parseInt(i, 10));
    setDigitosInversion(digitos);
    setPositionINV1(posicionesAno[digitos[0]]);
    setRunningInv1(false);
    setPositionINV2(posicionesAno[digitos[1]]);
    setRunningInv2(false);
    setPositionINV3(posicionesAno[digitos[2]]);
    setRunningInv3(false);
    setPositionINV4(posicionesAno[digitos[3]]);
    setRunningInv4(false);
    setPositionINV5(posicionesAno[digitos[4]]);
    setRunningInv5(false);
    setPositionINV6(posicionesAno[digitos[5]]);
    setRunningInv6(false);
    if (longitud >= 7) {
      setPositionINV7(posicionesAno[digitos[6]]);
      setRunningInv7(false);
      setPositionINV8(posicionesAno[digitos[7]]);
      setRunningInv8(false);
      setPositionINV9(posicionesAno[digitos[8]]);
      setRunningInv9(false);
      setPositionINV10(posicionesAno[digitos[9]]);
      setRunningInv10(false);
    }

    // if (longitud > 0 && digitosMes > 0) {
    //   setHabilitarSimulacion(true);
    // } else {
    //   setHabilitarSimulacion(false);
    // }
  };

  const openInversion = () => {
    if (!texto) {
      setMostrarTextField(false);
    } else {
      setMostrarTextField(true);
    }
    setIsInversion(isInversion)

    setIsInversion(isInversion);
    posicionesNumerosInversion(isInversion.toString().length, isInversion);
  };


  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };


  return (
    <div className="bg-paper py-5">
      <Container>
        <div className="d-block text-center">
          <h3 className="d-block">
            <em>Simula tu Rentabilidad</em>
          </h3>
          <p>
            Elige un periodo y monto de inversión para visualizar gráficamente
            tu rentabilidad potencial.
          </p>

          <Grid
            item
            xs={12}
            sm={12}
            container
            justifyContent="center"
            className="box_simulator_time"
          >
            {/* MES */}
            <Grid
              item
              xs={12}
              sm={2}
              onClick={openCalendar}
              style={{ cursor: "pointer", marginTop: '1rem' }}
            >
              <Tooltip
                title={errorFechaText}
                placement="bottom"
                arrow
                slotProps={{
                  arrow: {
                    sx: {
                      color: "#CE1335", // Establecer el color de la flecha a rojo
                    },
                  },
                  popper: {
                    sx: {
                      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: "0px",
                        backgroundColor: "#CE1335",
                        fontSize: "0.80rem",
                      },
                    },
                  },
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  className="box_digits number-container"
                >
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={4}>
                      <Typography
                        //id="mes1"
                        variant="h6"
                        component="div"
                        className={`box_digit ${terminado && !texto  && "green"}`}
                        style={{
                          transform: `translate3d(0, -${positionM1}%, 0)`,
                        }}
                      >
                        {meses[0].map((letter, index) => (
                          <div key={index}>{letter}</div>
                        ))}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h6"
                        component="div"
                        className={`box_digit ${terminado && !texto  && "green"}`}
                        style={{
                          transform: `translate3d(0, -${positionM1}%, 0)`,
                        }}
                      >
                        {meses[1].map((letter, index) => (
                          <div key={index}>{letter}</div>
                        ))}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h6"
                        component="div"
                        className={`box_digit ${terminado && !texto  && "green"}`}
                        style={{
                          transform: `translate3d(0, -${positionM1}%, 0)`,
                        }}
                      >
                        {meses[2].map((letter, index) => (
                          <div key={index}>{letter}</div>
                        ))}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Tooltip>

              <Grid>
                <Typography variant="h6" className="px-3 py-1 box_red_info">
                  Mes
                </Typography>
              </Grid>
            </Grid>

            {/* AÑO */}
            <Grid
              item
              xs={12}
              sm={2.5}
              onClick={openCalendar}
              style={{ cursor: "pointer", marginTop: '1rem' }}
            >

              <Tooltip
                title={errorFechaText}
                placement="bottom"
                arrow
                slotProps={{
                  arrow: {
                    sx: {
                      color: "#CE1335", // Establecer el color de la flecha a rojo
                    },
                  },
                  popper: {
                    sx: {
                      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: "0px",
                        backgroundColor: "#CE1335",
                        fontSize: "0.80rem",
                      },
                    },
                  },
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  className="box_digits number-container"
                >
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={3}>
                      <Typography
                        variant="h6"
                        component="div"
                        className={`box_digit ${terminado && !texto  && "green"}`}
                        style={{
                          transform: `translate3d(0, -${positionN1}%, 0)`,
                        }}
                      >
                        {numbers.map((num, index) => (
                          <div key={index}>{num}</div>
                        ))}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        variant="h6"
                        component="div"
                        className={`box_digit ${terminado && !texto  && "green"}`}
                        style={{
                          transform: `translate3d(0, -${positionN2}%, 0)`,
                        }}
                      >
                        {numbers.map((num, index) => (
                          <div key={index}>{num}</div>
                        ))}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        variant="h6"
                        component="div"
                        className={`box_digit ${terminado && !texto  && "green"}`}
                        style={{
                          transform: `translate3d(0, -${positionN3}%, 0)`,
                        }}
                      >
                        {numbers.map((num, index) => (
                          <div key={index}>{num}</div>
                        ))}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography
                        variant="h6"
                        component="div"
                        className={`box_digit ${terminado && !texto  && "green"}`}
                        style={{
                          transform: `translate3d(0, -${positionN4}%, 0)`,
                        }}
                      >
                        {numbers.map((num, index) => (
                          <div key={index}>{num}</div>
                        ))}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Tooltip>

              <Grid>
                <Typography variant="h6" className="px-3 py-1 box_red_info">
                  AÑO
                </Typography>
              </Grid>
            </Grid>

            {/* INVERSION */}
            <Grid item xs={12} sm={gridMayor} style={{ marginTop: '1rem' }}>
              <Tooltip
                title={errorInversionText}
                placement="bottom"
                arrow
                slotProps={{
                  arrow: {
                    sx: {
                      color: "#CE1335", // Establecer el color de la flecha a rojo
                    },
                  },
                  popper: {
                    sx: {
                      [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                      {
                        marginTop: "0px",
                        backgroundColor: "#CE1335",
                        fontSize: "0.80rem",
                      },
                    },
                  },
                }}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  className="box_digits number-container"
                  style={{ cursor: "pointer" }}
                >
                  {!mostrarTextField && (
                    <Grid
                      container
                      spacing={1}
                      alignItems="center"
                      // onClick={openInversion}
                      onMouseEnter={openInversion}
                    >
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto && "green"}`}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>S/</div>
                          ))}
                        </Typography>
                      </Grid>
                      {/* DIGITO UNO */}
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV1}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>
                      {coma4Dig && (
                        <Grid item sm={grid}>
                          <Typography
                            variant="h6"
                            component="div"
                            className={`box_digit ${terminado && !texto && "green"}`}
                            style={{
                              transform: `translate3d(0, -${positionINV1}%, 0)`,
                            }}
                          >
                            {numbers.map((num, index) => (
                              <div key={index}>{comilla}</div>
                            ))}
                          </Typography>
                        </Grid>
                      )}
                      {/* DIGITO DOS */}
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV2}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>
                      {coma5Dig && (
                        <Grid item sm={grid}>
                          <Typography
                            variant="h6"
                            component="div"
                            className={`box_digit ${terminado && !texto  && "green"}`}
                            style={{
                              transform: `translate3d(0, -${positionINV1}%, 0)`,
                            }}
                          >
                            {numbers.map((num, index) => (
                              <div key={index}>{comilla}</div>
                            ))}
                          </Typography>
                        </Grid>
                      )}
                      {/* DIGITO TRES */}
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV3}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>
                      {coma6Dig && (
                        <Grid item sm={grid}>
                          <Typography
                            variant="h6"
                            component="div"
                            className={`box_digit ${terminado && !texto  && "green"}`}
                            style={{
                              transform: `translate3d(0, -${positionINV4}%, 0)`,
                            }}
                          >
                            {numbers.map((num, index) => (
                              <div key={index}>{comilla}</div>
                            ))}
                          </Typography>
                        </Grid>
                      )}
                      {/* DIGITO CUATRO  */}
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV4}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>

                      {showMillon && (
                        <Grid item sm={grid}>
                          <Typography
                            variant="h6"
                            component="div"
                            className={`box_digit ${terminado && !texto  && "green"}`}
                            style={{
                              transform: `translate3d(0, -${positionINV5}%, 0)`,
                            }}
                          >
                            {numbers.map((num, index) => (
                              <div key={index}>{comillaMilMillon}</div>
                            ))}
                          </Typography>
                        </Grid>
                      )}
                      {/* DIGITO CINCO */}
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV5}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>
                      {showMillon1 && (
                        <Grid item sm={grid}>
                          <Typography
                            variant="h6"
                            component="div"
                            className={`box_digit ${terminado && !texto  && "green"}`}
                            style={{
                              transform: `translate3d(0, -${positionINV6}%, 0)`,
                            }}
                          >
                            {numbers.map((num, index) => (
                              <div key={index}>,</div>
                            ))}
                          </Typography>
                        </Grid>
                      )}
                      {/* DIGITO SEIS */}
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV6}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>
                      {showMillon2 && (
                        <Grid item sm={grid}>
                          <Typography
                            variant="h6"
                            component="div"
                            className={`box_digit ${terminado && !texto  && "green"}`}
                            style={{
                              transform: `translate3d(0, -${positionINV6}%, 0)`,
                            }}
                          >
                            {numbers.map((num, index) => (
                              <div key={index}>,</div>
                            ))}
                          </Typography>
                        </Grid>
                      )}
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV7}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>
                      {milMillon && (
                        <Grid item sm={grid}>
                          <Typography
                            variant="h6"
                            component="div"
                            className={`box_digit ${terminado && !texto  && "green"}`}
                            style={{
                              transform: `translate3d(0, -${positionINV8}%, 0)`,
                            }}
                          >
                            {numbers.map((num, index) => (
                              <div key={index}>,</div>
                            ))}
                          </Typography>
                        </Grid>
                      )}
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV8}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>

                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV9}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>
                      <Grid item sm={grid}>
                        <Typography
                          variant="h6"
                          component="div"
                          className={`box_digit ${terminado && !texto  && "green"}`}
                          style={{
                            transform: `translate3d(0, -${positionINV10}%, 0)`,
                          }}
                        >
                          {numbers.map((num, index) => (
                            <div key={index}>{num}</div>
                          ))}
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                  {mostrarTextField && (
                    <Grid container spacing={1} alignItems="center">
                      <Grid item sm={12} xs={12}>
                        <TextField
                          autoComplete="off"
                          className={classes.root}
                          onMouseLeave={() => setMostrarTextField(false)}
                          onBlur={() => setMostrarTextField(true)}
                          value={isInversion}
                          onChange={handleNumeroInversion}
                          inputProps={{ maxLength: 8 }}
                          fullWidth
                        // disabled={!texto}
                        />
                      </Grid>
                      <Snackbar open={snackbarOpen} autoHideDuration={5000}
                        onClose={handleCloseSnackbar}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        style={{ marginTop: '3rem' }}
                      >
                        <MuiAlert onClose={handleCloseSnackbar} severity="warning">
                          Ingrese solo números enteros, sin puntos o comas. Por ejemplo: 45678.
                        </MuiAlert>
                      </Snackbar>
                    </Grid>
                  )}
                </Grid>
              </Tooltip>
              <Grid>
                <Typography variant="h6" className="px-3 py-1 box_red_info">
                  {terminado ? "Monto total" : "Inversión"}
                </Typography>
              </Grid>
            </Grid>

          </Grid>

          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={3} sm={3} style={{ display: "none" }}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="es"
              >
                <MobileDatePicker
                  locale="es"
                  open={abrirCalendar}
                  onClose={() => setAbrirCalendar(false)}
                  onChange={handleDate}
                  label="Selecciona una fecha"
                  views={["year", "month"]}
                  style={{ display: "none" }}
                  maxDate={dayjs(`2024-03-31`)}
                  minDate={dayjs(`2014-03-01`)}


                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={3} sm={3} className="col2" style={{ marginTop: '1.5rem' }}>         
              <LoadingButton className="btn hbt-btn-primary btn-loading"
                onClick={simularAnimacion}
                loading={loadingBtn? true : false}
                disabled={digitosAno && digitosMes && isInversion ? false :true}
              >
                <span>{texto ? (loadingBtn? "":"Simular ahora" ): ("Volver a simular")}</span>
              </LoadingButton>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Prueba;
