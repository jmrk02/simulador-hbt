import React, { useState, useEffect } from 'react'
import './Mes.scss'

import { Container, Typography, Button, Grid } from '@mui/material';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { esLocale } from 'date-fns/locale/es'; // Importa el idioma español
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


export default function Animacion() {

  const datePickerRef = React.useRef(null); // Referencia para el DatePicker

  // Función para abrir el calendario
  const handleCalendarOpen = () => {
    if (datePickerRef.current) {
      datePickerRef.current.getElementsByTagName('input')[0].click(); // Abre el calendario
    }
  };

  const mes1 = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const mes2 = ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"];
  const mes3 = ["E", "B", "R", "R", "Y", "N", "L", "O", "P", "T", "V", "C"];

  const num1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const num2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const num3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const num4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

  const [meses1, setMeses1] = useState('M');
  const [meses2, setMeses2] = useState('M');
  const [meses3, setMeses3] = useState('M');

  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState('0');
  const [numero3, setNumero3] = useState('0');
  const [numero4, setNumero4] = useState('0');

  const [fecha, setFecha] = useState(null);

  const [isAnimatingM1, setIsAnimatingM1] = useState(false);
  const [isAnimatingM2, setIsAnimatingM2] = useState(false);
  const [isAnimatingM3, setIsAnimatingM3] = useState(false);


  const [isAnimatingN1, setIsAnimatingN1] = useState(false);
  const [isAnimatingN2, setIsAnimatingN2] = useState(false);
  const [isAnimatingN3, setIsAnimatingN3] = useState(false);
  const [isAnimatingN4, setIsAnimatingN4] = useState(false);


  const [digitos, setDigitos] = useState([]);
  const [digitosMes, setDigitosMes] = useState([]);

  const velocidad = 100;

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    let number1 = 0;
    let number2 = 0;
    let number3 = 0;
    let number4 = 0;

   let interval1, interval2, interval3, interval4, interval5, interval6, interval7;


  
    if (isAnimatingM1) {
      interval1 = setInterval(() => {
        index1 = (index1 + 1) % mes1.length;
        setMeses1(mes1[index1]);
      }, velocidad);
    }

    if (isAnimatingM2) {
      interval2 = setInterval(() => {
        index2 = (index2 + 1) % mes2.length;
        setMeses2(mes2[index2]);
      }, velocidad);
    }

    if (isAnimatingM3) {
      console.log('valor mes 3', meses3)
      
      interval3 = setInterval(() => {
        index3 = (index3 + 1) % mes3.length;
        console.log(index3);
        setMeses3(mes3[index3]);
      }, velocidad);
      
    }


    if (isAnimatingN1) {
      interval4 = setInterval(() => {
        number1 = (number1 + 1) % num1.length;
        setNumero1(num1[number1]);
      }, velocidad);
    }

    if (isAnimatingN2) {
      interval5 = setInterval(() => {
        number2 = (number2 + 1) % num2.length;
        setNumero2(num2[number2]);
        if (parseInt(numero2) === digitos[1]) {
          setNumero2(digitos[1])
          clearInterval(interval5)
        }
      }, velocidad);
    }

    if (isAnimatingN3) {
      interval3 = setInterval(() => {
        number3 = (number3 + 1) % num3.length;
        setNumero3(num3[index3]);
      }, velocidad);
    }
    if (isAnimatingN4) {
      interval7 = setInterval(() => {
        number4 = (number4 + 1) % num4.length;
        setNumero4(num4[number4]);
      }, velocidad);
    }



    // return () => clearInterval(interval);
    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);

      clearInterval(interval4);
      clearInterval(interval5);
      clearInterval(interval6);
      clearInterval(interval7);

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimatingM1, isAnimatingM2, isAnimatingM3, isAnimatingN1, isAnimatingN2, isAnimatingN3, isAnimatingN4])

  useEffect(() => {
    console.log('digito cero', digitos[0])
    console.log('digito uno', digitos[1])
    console.log('digito dos', digitos[2])
    console.log('digito tres', digitos[3])

    console.log('digito MES', digitosMes[0])
    console.log('digito MES', digitosMes[1])
    console.log('digito MES 3', digitosMes[2])


    if (digitosMes[0] === meses1) {
      console.log('primer letra del mes igual')
      setIsAnimatingM1(false)
      setIsAnimatingM2(false)
      setIsAnimatingM3(false)
    }

    // if (digitosMes[1] === meses2) {
    //   console.log('primer segunda del mes igual')
    //   setIsAnimatingM2(false)
    // }

    // console.log('tipo de varible1', typeof(digitosMes[2]))
    // console.log('tipo de varible2', typeof(meses3))
    // if (digitosMes[2] === meses3) {
    //   console.log('primer tercera del mes igual')
    //   setIsAnimatingM3(false)
    // }

    if (parseInt(numero1) === digitos[0]) {
      console.log('primer digito igual')
      setIsAnimatingN1(false)
    }

    if (parseInt(numero2) === digitos[1]) {
      console.log('segundo digito igual')
      setIsAnimatingN2(false)
    }
    if (parseInt(numero3) === digitos[2]) {
      console.log('tercer digito igual')
      setIsAnimatingN3(false)
    }
    if (parseInt(numero4) === digitos[3]) {
      console.log('cuarto digito igual')
      setIsAnimatingN4(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ meses1, numero1, numero2, numero3, numero4])

  const handleAnimation = () => {
    // setIsAnimating(!isAnimating);
    setIsAnimatingM1(!isAnimatingM1);
    setIsAnimatingM2(!isAnimatingM2);
    setIsAnimatingM3(!isAnimatingM3);

    setIsAnimatingN1(!isAnimatingN1);
    setIsAnimatingN2(!isAnimatingN2);
    setIsAnimatingN3(!isAnimatingN3);
    setIsAnimatingN4(!isAnimatingN4);

  };

  const handleDate = (date) => {
    console.log(date)
    const mes = date["$M"];
    const ano = date["$y"];

    const updateFecha = { month: mes, year: ano };
    setFecha(updateFecha)

    if (updateFecha !== null) {
      const { year, month } = updateFecha;
      console.log('year', year.toString().split(''))
      setDigitos(year.toString().split('').map(i => parseInt(i, 10)))
      console.log('month', month.toString().split(''))

      setDigitosMes(meses[month].toString().split(''))
      console.log('digitos', digitos)
      console.log('digitosMes', meses[month].toString().split(''))
      // digitos = year.toString().split('').map(digito => parseInt(digito, 10));
    }

  }


  return (
    <div className="bg-paper py-5">
      <Container>
        <div className="d-block text-center">
          <Typography variant="h3" component="h3" >
            <em>Simula tu Rentabilidad</em>
          </Typography>
          <Typography variant="P" paragraph>
            Elige un periodo y monto de inversión para visualizar gráficamente tu rentabilidad potencial.
          </Typography>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item xs={12} sm={12} container justifyContent="center" className="box_simulator_time p-3 pb-2 mb-3 rounded rounded-4"  >
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
                Simular ahora
              
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>

            </Grid>
          </Grid>

          <Grid>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              {/* <DatePicker onChange={handleDate} views={['month', 'year']} /> */}
              <DatePicker ref={datePickerRef} onChange={handleDate} views={['month','year']} style={{ display: 'none' }} />
            </LocalizationProvider>
          </Grid>

        </div>
      </Container>
    </div>
  )
}
