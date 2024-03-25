import React, { useState, useEffect } from 'react'
import './simulador.scss'

import { Container, Typography, Button, Grid } from '@mui/material';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { esLocale } from 'date-fns/locale/es'; // Importa el idioma español

export default function Simulador() {

    const mes1 = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    const mes2 = ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"];
    const mes3 = ["E", "B", "R", "R", "Y", "N", "L", "O", "T", "T", "V", "C"];

    const num1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const num2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const num3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const num4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


    const [meses1, setMeses1] = useState('');
    const [meses2, setMeses2] = useState('');
    const [meses3, setMeses3] = useState('');

    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [numero3, setNumero3] = useState('');
    const [numero4, setNumero4] = useState('');

    const [isAnimating, setIsAnimating] = useState(true);


    useEffect(() => {
        let index1 = 0;
        let index2 = 0;
        let index3 = 0;

        let number1 = 0;
        let number2 = 0;
        let number3 = 0;
        let number4 = 0;

        let interval;

        if (isAnimating) {
            interval = setInterval(() => {
                // Incrementamos indice mes
                index1 = (index1 + 1) % mes1.length;
                index2 = (index2 + 1) % mes2.length;
                index3 = (index3 + 1) % mes3.length;

                //incremento indece año
                number1 = (number1 + 1) % num1.length;
                number2 = (number2 + 1) % num2.length;
                number3 = (number3 + 1) % num3.length;
                number4 = (number4 + 1) % num4.length;

                // Actualizar letras de meses
                setMeses1(mes1[index1]);
                setMeses2(mes2[index2]);
                setMeses3(mes3[index3]);

                //actualizar letras del año
                setNumero1(num1[number1]);
                setNumero2(num2[number2]);
                setNumero3(num3[number3]);
                setNumero4(num4[number4]);
            }, 100); // velocidad de la animacion en milisegundos
        }
        return () => clearInterval(interval);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAnimating])


    const handleAnimation = () => {
        setIsAnimating(!isAnimating);
    };

    const handleDate = (date) => {
        console.log(date)
    }


    return (
        <div className="stc-hbt-simulador bg-paper py-5">
            <Container>
                <div className="d-block text-center">
                    <Typography variant="h3" component="h3" >
                        <em>Simula tu Rentabilidad</em>
                    </Typography>
                    <Typography variant="P" paragraph>
                        Elige un periodo y monto de inversión para visualizar gráficamente tu rentabilidad potencial.
                    </Typography>
                    <Grid container justifyContent="center" spacing={2}>
                        <Grid item xs={12} sm={12} container justifyContent="center" className="box_simulator_time p-3 pb-2 mb-3 rounded rounded-4">
                            <Grid item xs={12} sm={1}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker onChange={handleDate} views={['month', 'year']} />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Grid item xs={12} sm={12} className="box_digits">
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item xs={4}>
                                            <Typography variant="h6" component="div" className="box_digit">
                                                {meses1}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="h6" component="div" className="box_digit">
                                                {meses2}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="h6" component="div" className="box_digit">
                                                {meses3}
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
                            <Grid item xs={12} sm={3}>
                                <Grid item xs={12} sm={12} className="box_digits">
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item xs={3}>
                                            <Typography variant="h6" component="div" className="box_digit">
                                                {numero1}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6" component="div" className="box_digit">
                                                {numero2}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6" component="div" className="box_digit">
                                                {numero3}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6" component="div" className="box_digit">
                                                {numero4}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid>
                                    <Typography variant="h6" className="px-3 py-1 box_red_info">
                                        Año
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grid item xs={12} sm={12} className="box_digits">
                                    <Grid container spacing={1} alignItems="center">
                                        <Grid item sm={2} >
                                            <Typography variant="h6" component="div" className="box_digit">
                                                S/
                                            </Typography>
                                        </Grid>

                                        <Grid item sm={2} >
                                            <Typography variant="h6" component="div" className="box_digit">
                                                0
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2} >
                                            <Typography variant="h6" component="div" className="box_digit">
                                                0
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={1} >
                                            <Typography variant="h7" component="div" className="box_digit">
                                                ,
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2} >
                                            <Typography variant="h6" component="div" className="box_digit">
                                                0
                                            </Typography>
                                        </Grid>
                                        <Grid item sm={2} >
                                            <Typography variant="h6" component="div" className="box_digit">
                                                0
                                            </Typography>
                                        </Grid>


                                    </Grid>
                                    {/* <DatePicker label={'"month" and "year"'} views={['month', 'year']} /> */}
                                </Grid>
                                <Grid>
                                    <Typography variant="h6" className="px-3 py-1 box_red_info">
                                        Inversión
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Button className='btn hbt-btn-primary' onClick={handleAnimation} >
                                {/* {isAnimating ? 'Simlar ahora' : 'ver más'} */}
                                {isAnimating ? 'Pausar' : 'Comenzar '}
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={12}>

                        </Grid>
                    </Grid>

                    <Grid>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DatePicker onChange={handleDate} views={['month', 'year']} />
                        </LocalizationProvider>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
