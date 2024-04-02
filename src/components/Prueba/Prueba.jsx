/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import './Prueba.scss';
import { Container } from '@mui/material';

import { Typography, Button, Grid, TextField, Tooltip } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
// import Tooltip from "@material-ui/core/Tooltip";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import "dayjs/locale/es";
import dayjs from 'dayjs';

import { makeStyles } from '@mui/styles';
import { set } from 'date-fns';
import { clear } from '@testing-library/user-event/dist/clear';
import { position } from 'stylis';

const useStyles = makeStyles({
    root: {
        '& .MuiInputBase-input': {
            color: 'white', // Cambia el color del texto
            fontSize: '1.25rem',
            //marginRight: '1px solid #FFF',
            textAlign: 'center',
            fontWeight: '400',
            fontSize: '1.875rem',
            // with: '-webkit-fill-available',
            letterSpacing: '3rem',
        },
    },
    underline: {
        "&&&:before": {
            borderBottom: "none"
        },
        "&&:after": {
            borderBottom: "none"
        }
    }
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
    const [positionM2, setPositionM2] = useState(0);
    const [positionM3, setPositionM3] = useState(0);
    const posicionMes = [0, 8, 16, 24.5, 32.5, 40.5, 48.5, 56.5, 65, 73, 81.5, 89.5]


    const [digitosAno, setDigitosAno] = useState([]);
    const [positionN1, setPositionN1] = useState(0);
    const [positionN2, setPositionN2] = useState(0);
    const [positionN3, setPositionN3] = useState(0);
    const [positionN4, setPositionN4] = useState(0);
    const [terminado,setTerminado] = useState(false);
    const posicionesAno = [0, 10, 19.5, 29, 39, 49, 58.5, 68.5, 78.5, 88.5]

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


    const [runningInv1, setRunningInv1] = useState(false);
    const [runningInv2, setRunningInv2] = useState(false);
    const [runningInv3, setRunningInv3] = useState(false);

    const [runningInv4, setRunningInv4] = useState(false);
    const [runningInv5, setRunningInv5] = useState(false);
    const [runningInv6, setRunningInv6] = useState(false);

    const [runningInv7, setRunningInv7] = useState(false);
    const [runningInv8, setRunningInv8] = useState(false);
    const [runningInv9, setRunningInv9] = useState(false);

    const [showMillon, setShowMillon] = useState(false);
    const [showMillon1, setShowMillon1] = useState(false);
    const [showMillon2, setShowMillon2] = useState(false);

    const classes = useStyles();
    const [isInversion, setIsInversion] = useState('');
    const [gridMayor, setGridMayor] = useState(5);
    const griduno = 12 / 7;
    const [grid, setGrid] = useState(griduno);

    const [digitosInversion, setDigitosInversion] = useState([]);


    const [abrirCalendar, setAbrirCalendar] = useState(false);
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    const meses = [
        ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"],
        ["E", "B", "R", "R", "Y", "N", "L", "O", "P", "T", "V", "C"]
    ];

    const [coma4Dig, setComa4Dig] = useState(false);
    const [coma5Dig, setComa5Dig] = useState(true);
    const [coma6Dig, setComa6Dig] = useState(false);


    const [habiliarSimulacion, setHabilitarSimulacion] = useState(false);
    const [texto, setTexto] = useState(true);

    const [errorInversionText, setErrorInversionText] = useState("Ingrese un monto de inversión");
    const [errorFechaText, setErrorFechaText] = useState("Seleccione una fecha");
    const inputPropsInversion = {
        maxLength: 8
    }

    const toggleAnimation = () => {
        setPositionN1(0);
        setPositionN2(0);
        setPositionN3(0);
        setPositionN4(0);

        setPositionM1(0);
        setPositionM2(0);
        setPositionM3(0);

        setPositionINV1(0);
        setPositionINV2(0);
        setPositionINV3(0);
        setPositionINV4(0);
        setPositionINV5(0);
        setPositionINV6(0);
        setPositionINV7(0);
        setPositionINV8(0);
        setPositionINV9(0);


        setRunningN1(!runningN1);
        setRunningN2(!runningN2);
        setRunningN3(!runningN3);
        setRunningN4(!runningN4);

        setRunningM1(!runningM1);
        setRunningM2(!runningM2);
        setRunningM3(!runningM3);

        setRunningInv1(!runningInv1);
        setRunningInv2(!runningInv2);
        setRunningInv3(!runningInv3);
        setRunningInv4(!runningInv4);
        setRunningInv5(!runningInv5);
        setRunningInv6(!runningInv6);
        setRunningInv7(!runningInv7);
        setRunningInv8(!runningInv8);
        setRunningInv9(!runningInv9);

    };

    // useEffect(() => {
    //     if(!runningN3){
    //         console.log('runningN3', runningN3)
    //         setTexto(false)
    //     }
    // },[])

    //EFECTO AÑO
    useEffect(() => {
        let animationIntervalN1, animationIntervalN2, animationIntervalN3, animationIntervalN4;

        if (runningN1) {
            let contador1 = 0;
            animationIntervalN1 = setInterval(() => {
                setPositionN1((prevPosition) => {
                    // console.log(digitosAno[0])
                    // console.log(posicionesAno.indexOf(prevPosition))
                    if (posicionesAno.indexOf(prevPosition) === 2) {
                        setRunningN1(false);
                        clearInterval(animationIntervalN1);
                    } else {
                        if (contador1 === 9) {
                            contador1 = 0;
                        }
                        // console.log('prevPosition N1', prevPosition)
                        const nextPosition = posicionesAno[contador1];
                        // console.log('nextPosition N1', nextPosition)

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

        if(!runningN1 && !runningN2 && !runningN3 && !runningN4 && terminado){
            setTexto(!texto)
        }

        return () => {
            clearInterval(animationIntervalN1);
            clearInterval(animationIntervalN2);
            clearInterval(animationIntervalN3);
            clearInterval(animationIntervalN4);
        }

    }, [runningN1, runningN2, runningN3, runningN4]);
    //EFECTO MES
    useEffect(() => {
        let animationIntervalM1, animationIntervalM2, animationIntervalM3;

        if (runningM1) {
            let currentIndex1 = 0;
            animationIntervalM1 = setInterval(() => {
                setPositionM1((prevPosition) => {
                    if (posicionMes.indexOf(prevPosition) === 2) {

                        setRunningM1(false);
                        clearInterval(animationIntervalM1);
                    } else {
                        // console.log('prevPosition M1', prevPosition)
                        if (currentIndex1 === 11) {
                            currentIndex1 = 0;
                        }
                        const nextPosition = posicionMes[currentIndex1];
                        // console.log('nextPosition M1', nextPosition)

                        currentIndex1++;
                        return nextPosition;
                    }
                });
            }, velocidad);

            let currentIndex2 = 0;
            animationIntervalM2 = setInterval(() => {
                setPositionM2((prevPosition) => {
                    if (posicionMes.indexOf(prevPosition) === digitosMes) {

                        setRunningM2(false);
                        clearInterval(animationIntervalM2);
                    } else {

                        const nextPosition = posicionMes[currentIndex2];


                        currentIndex2++;
                        return nextPosition;
                    }
                });
            }, velocidad);

            let currentIndex = 0;
            animationIntervalM3 = setInterval(() => {
                setPositionM3((prevPosition) => {
                    if (posicionMes.indexOf(prevPosition) === digitosMes) {

                        setRunningM2(false);
                        clearInterval(animationIntervalM3);
                    } else {
                        // console.log('prevPosition M1', prevPosition)
                        const nextPosition = posicionMes[currentIndex];
                        // console.log('nextPosition M1', nextPosition)

                        currentIndex++;
                        return nextPosition;
                    }
                });
            }, velocidad);

        }

        return () => {
            clearInterval(animationIntervalM1);
            clearInterval(animationIntervalM2);
            clearInterval(animationIntervalM3);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [runningM1, runningM2, runningM3]);
    //EFECTO INVERSION
    useEffect(() => {
        let animationIntervalInv1, animationIntervalInv2, animationIntervalInv3, animationIntervalInv4, animationIntervalInv5;
        let animationIntervalInv6, animationIntervalInv7, animationIntervalInv8, animationIntervalInv9;
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
                        if (digitosTotal > contador5 + 1) {
                            setTexto(!texto);
                        }
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
                        // console.log('posicionesAno.indexOf(prevPosition)', posicionesAno.indexOf(prevPosition))
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
                        if (contador9 === 9) {
                            contador9 = 0;
                        }
                        const nextPosition = posicionesAno[contador9];
                        contador9++;
                        return nextPosition;
                    }
                });
            }, velocidad);
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
        }
    }, [runningInv1, runningInv2, runningInv3, runningInv4, runningInv5, runningInv6, runningInv7, runningInv8, runningInv9]);

    const openCalendar = () => {
        setAbrirCalendar(true);
    }

    const handleDate = (date) => {
        // console.log('date', date)   
        

        if(date === null){
            return;
        }
        const mes = date["$M"];
        const ano = date["$y"];
        const updateFecha = { month: mes, year: ano };
        if (updateFecha !== null) {
            const { year, month } = updateFecha;
            setDigitosMes(month);
            setPositionM1(posicionMes[month]);
            const anos = year.toString().split('').map(i => parseInt(i, 10));
            setDigitosAno(anos);
            setPositionN1(posicionesAno[anos[0]]);
            setPositionN2(posicionesAno[anos[1]]);
            setPositionN3(posicionesAno[anos[2]]);
            setPositionN4(posicionesAno[anos[3]]);
            if (isInversion.length > 0) {
                setHabilitarSimulacion(true);
            }

        }
        if(digitosAno.length === 0){
            setErrorFechaText("Seleccione una fecha");
        }else{
            setErrorFechaText("");
        }
    }

    const handleNumeroInversion = (num) => {
        let numero = num.target.value;
        setIsInversion(numero);
        let longitud = numero.length;
        let grid = 2;
        switch (longitud) {
            case 1:
                longitud = numero.length;
                grid = 12 / (longitud + 1)
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
                longitud = numero.length;
                grid = 12 / (longitud + 1)
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
                longitud = numero.length;
                grid = 12 / (longitud + 1)
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
                longitud = numero.length;
                grid = 12 / (longitud + 2)
                setGridMayor(5);
                setGrid(grid);
                setComa4Dig(true);
                setComa5Dig(false);
                setComa6Dig(false);
                setShowMillon(false);
                setShowMillon1(false);
                setShowMillon2(false);
                break;
            case 5:
                longitud = numero.length;
                grid = 12 / (longitud + 2)
                setGridMayor(5);
                setGrid(grid);
                setComa5Dig(true);
                setComa4Dig(false);
                setComa6Dig(false);
                setShowMillon(false);
                setShowMillon1(false);
                setShowMillon2(false);
                break;
            case 6:
                longitud = numero.length;
                grid = 12 / (longitud + 2)
                setGridMayor(5);
                setGrid(grid);
                setComa6Dig(true);
                setComa5Dig(false);
                setComa4Dig(false);
                setShowMillon(false);
                setShowMillon1(false);
                setShowMillon2(false);
                break;
            case 7:
                longitud = numero.length + 3;
                grid = 12 / longitud
                setGridMayor(6);
                setComa4Dig(true);
                setComa5Dig(false);
                setComa6Dig(false);
                setShowMillon(true);
                setGrid(grid);
                break;
            case 8:

                longitud = numero.length + 3;
                grid = 12 / longitud
                setGridMayor(6);
                setGrid(grid);
                setComa4Dig(false);
                setComa5Dig(true);
                setComa6Dig(false);
                setShowMillon(false);
                setShowMillon1(true);
                setShowMillon2(false);

                break;
            case 9:
                setGridMayor(6);
                longitud = numero.length + 3;
                grid = 12 / longitud;
                setGrid(grid);
                setGridMayor(6);
                setComa4Dig(false);
                setComa5Dig(false);
                setComa6Dig(true);
                setShowMillon(false);
                setShowMillon1(false);
                setShowMillon2(true);
                break;
            default:
                setGrid(1.5);
                break;
        }

        if (longitud === 0) {
            setHabilitarSimulacion(false);
            setErrorInversionText("Ingrese un monto de inversión");
        } else {
            setErrorInversionText("");
        }

        const digitos = numero.toString().split('').map(i => parseInt(i, 10));
        // console.log('digitos', digitos)
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
        }

        if (longitud > 0 && digitosMes > 0) {
            setHabilitarSimulacion(true);
        } else {
            setHabilitarSimulacion(false);
        }
    }

    const openInversion = () => {
        setMostrarTextField(!mostrarTextField);
    }

    return (
        <div className='bg-paper py-5'>
            <Container>
                <div className='d-block text-center'>
                    <Typography variant="h3" component="h3" >
                        <em>Simula tu Rentabilidad</em>
                    </Typography>
                    <Typography variant="P" paragraph>
                        Elige un periodo y monto de inversión para visualizar gráficamente tu rentabilidad potencial.
                    </Typography>
                    <Grid item xs={12} sm={12} container justifyContent="center" className="box_simulator_time">
                        {/* MES */}
                        <Tooltip title={errorFechaText} placement="bottom" arrow>
                            <Grid item xs={12} sm={2} onClick={openCalendar} style={{ cursor: 'pointer' }}>
                                <Grid item xs={12} sm={12} className="box_digits number-container">
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item xs={4}>
                                            <Typography variant="h6"
                                                component="div"
                                                className="box_digit"
                                                style={{ transform: `translate3d(0, -${positionM1}%, 0)` }}>
                                                {meses[0].map((letter, index) => (
                                                    <div key={index}>{letter}</div>
                                                ))}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionM1}%, 0)` }}>
                                                {meses[1].map((letter, index) => (
                                                    <div key={index}>{letter}</div>
                                                ))}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionM1}%, 0)` }}>
                                                {meses[2].map((letter, index) => (
                                                    <div key={index}>{letter}</div>
                                                ))}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <Typography variant="h6" className="px-3 py-1 box_red_info">
                                        Mes
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Tooltip>

                        {/* AÑO */}
                        <Grid item xs={12} sm={2.5} onClick={openCalendar} style={{ cursor: 'pointer' }}>
                            <Grid item xs={12} sm={12} className="box_digits number-container" >
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item xs={3}>
                                        <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionN1}%, 0)` }}>
                                            {numbers.map((num, index) => (
                                                <div key={index}>{num}</div>

                                            ))}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionN2}%, 0)` }}>
                                            {numbers.map((num, index) => (
                                                <div key={index}>{num}</div>
                                            ))}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionN3}%, 0)` }}>
                                            {numbers.map((num, index) => (
                                                <div key={index}>{num}</div>
                                            ))}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionN4}%, 0)` }}>
                                            {numbers.map((num, index) => (
                                                <div key={index}>{num}</div>
                                            ))}
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid>
                                <Typography variant="h6" className="px-3 py-1 box_red_info">
                                    AÑO
                                </Typography>
                            </Grid>
                        </Grid>
                        {/* INVERSION */}
                        <Grid item xs={12} sm={gridMayor} >
                            <Tooltip title={errorInversionText} placement="bottom" arrow
                                slotProps={{
                                    popper: {
                                        modifiers: [{
                                            options: {
                                                name: 'offset',
                                                offset: [0, -14],
                                            },
                                        }]
                                    }
                                }}>
                                <Grid item xs={12} sm={12} className="box_digits number-container" style={{ cursor: 'pointer' }}>
                                    {!mostrarTextField &&

                                        <Grid container spacing={1} alignItems="center" onClick={openInversion} >
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit">
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>S/</div>
                                                    ))}
                                                </Typography>
                                            </Grid>
                                            {/* DIGITO UNO */}
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV1}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>
                                                    ))}
                                                </Typography>
                                            </Grid>
                                            {coma4Dig &&
                                                <Grid item sm={grid} >
                                                    <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV1}%, 0)` }}>
                                                        {numbers.map((num, index) => (
                                                            <div key={index}>,</div>
                                                        ))}
                                                    </Typography>
                                                </Grid>
                                            }
                                            {/* DIGITO DOS */}
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV2}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>
                                                    ))}
                                                </Typography>
                                            </Grid>
                                            {coma5Dig &&
                                                <Grid item sm={grid} >
                                                    <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV1}%, 0)` }}>
                                                        {numbers.map((num, index) => (
                                                            <div key={index}>,</div>
                                                        ))}
                                                    </Typography>
                                                </Grid>
                                            }
                                            {/* DIGITO TRES */}
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV3}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>
                                                    ))}
                                                </Typography>
                                            </Grid>
                                            {coma6Dig &&
                                                <Grid item sm={grid} >
                                                    <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV4}%, 0)` }}>
                                                        {numbers.map((num, index) => (
                                                            <div key={index}>,</div>
                                                        ))}
                                                    </Typography>
                                                </Grid>
                                            }
                                            {/* DIGITO CUATRO  */}
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV4}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>
                                                    ))}
                                                </Typography>
                                            </Grid>
                                            {showMillon && <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV5}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>.</div>
                                                    ))}
                                                </Typography>
                                            </Grid>}
                                            {/* DIGITO CINCO */}
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV5}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>

                                                    ))}
                                                </Typography>
                                            </Grid>
                                            {showMillon1 && <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV6}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>.</div>

                                                    ))}
                                                </Typography>
                                            </Grid>}
                                            {/* DIGITO SEIS */}
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV6}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>

                                                    ))}
                                                </Typography>
                                            </Grid>
                                            {showMillon2 && <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV6}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>.</div>

                                                    ))}
                                                </Typography>
                                            </Grid>}
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV7}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>

                                                    ))}
                                                </Typography>
                                            </Grid>
                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV8}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>
                                                    ))}
                                                </Typography>
                                            </Grid>

                                            <Grid item sm={grid} >
                                                <Typography variant="h6" component="div" className="box_digit" style={{ transform: `translate3d(0, -${positionINV9}%, 0)` }}>
                                                    {numbers.map((num, index) => (
                                                        <div key={index}>{num}</div>
                                                    ))}
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                    }
                                    {mostrarTextField &&
                                        <Grid container spacing={1} alignItems="center">
                                            <Grid item sm={12} xs={12} >
                                                <TextField
                                                    autoComplete='off'
                                                    className={classes.root}
                                                    onMouseLeave={() => setMostrarTextField(false)}
                                                    onBlur={() => setMostrarTextField(true)}
                                                    value={isInversion}
                                                    onChange={handleNumeroInversion}
                                                    inputProps={{ maxLength: 8 }}
                                                    fullWidth
                                                />
                                            </Grid>
                                        </Grid>}
                                </Grid>
                            </Tooltip>

                            <Grid>
                                <Typography variant="h6" className="px-3 py-1 box_red_info">
                                    Inversión
                                </Typography>

                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={3} sm={3} style={{ display: 'none' }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                                <MobileDatePicker locale='es'
                                    open={abrirCalendar}
                                    onClose={() => setAbrirCalendar(false)}
                                    onChange={handleDate}
                                    label="Selecciona una fecha"
                                    views={['year', 'month',]}
                                    style={{ display: 'none' }}
                                    maxDate={dayjs(`2024-03-31`)}
                                    minDate={dayjs(`2014-01-01`)}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={3} sm={3}>

                            <Button className='btn hbt-btn-primary'
                                onClick={toggleAnimation}
                                disabled={!habiliarSimulacion}
                            >
                                {texto ? 'Simular ahora' : 'Ver más'}
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Prueba
