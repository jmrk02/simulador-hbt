import React, { useState, useEffect } from 'react'
import './Mes.scss'

import { Container, Typography, Button, Grid } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import "dayjs/locale/es";

import TextField from '@mui/material/TextField';

import { makeStyles } from '@mui/styles';
import { set } from 'immutable';

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      color: 'white', // Cambia el color del texto
      fontSize: '1.25rem',
      marginRight: '1px solid #FFF',
      textAlign: 'center',
      fontWeight: 'bold',
      with: '-webkit-fill-available',
    },
  },
});

export default function Animacion() {

  const classes = useStyles();

  const [mostrarTextField, setMostrarTextField] = useState(false);

  const mes1 = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const mes2 = ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"];
  const mes3 = ["E", "B", "R", "R", "Y", "N", "L", "O", "P", "T", "V", "C"];

  const num1 = ["0", "1", "3", "4", "5", "6", "7", "8", "9", "2"];
  const num2 = ["1", "3", "4", "5", "6", "7", "8", "9", "2", "0"];
  const num3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const num4 = ["9", "0", "1", "2", "3", "4", "5", "6", "7", "8"];

  const inv1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inv2 = ["1", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const inv3 = ["1", "2", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const inv4 = ["1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inv5 = ["2", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const inv6 = ["5", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const inv7 = ["3", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inv8 = ["2", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inv9 = ["6", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


  const meses = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];

  const [meses1, setMeses1] = useState('M');
  const [meses2, setMeses2] = useState('M');
  const [meses3, setMeses3] = useState('M');

  const [numero1, setNumero1] = useState('0');
  const [numero2, setNumero2] = useState('0');
  const [numero3, setNumero3] = useState('0');
  const [numero4, setNumero4] = useState('0');


  const [numeroInv1, setNumeroInv1] = useState('-');
  const [numeroInv2, setNumeroInv2] = useState('-');

  const [numeroInv3, setNumeroInv3] = useState('-');
  const [numeroInv4, setNumeroInv4] = useState('-');
  const [numeroInv5, setNumeroInv5] = useState('-');

  const [numeroInv6, setNumeroInv6] = useState('-');
  const [numeroInv7, setNumeroInv7] = useState('-');
  const [numeroInv8, setNumeroInv8] = useState('-');
  const [numeroInv9, setNumeroInv9] = useState('-');



  const [fecha, setFecha] = useState(null);

  const [isAnimatingM1, setIsAnimatingM1] = useState(false);
  const [isAnimatingM2, setIsAnimatingM2] = useState(false);
  const [isAnimatingM3, setIsAnimatingM3] = useState(false);

  const [isAnimatingN1, setIsAnimatingN1] = useState(false);
  const [isAnimatingN2, setIsAnimatingN2] = useState(false);
  const [isAnimatingN3, setIsAnimatingN3] = useState(false);
  const [isAnimatingN4, setIsAnimatingN4] = useState(false);

  const [isAnimatingInv1, setIsAnimatingInv1] = useState(false);
  const [isAnimatingInv2, setIsAnimatingInv2] = useState(false);

  const [dosDigitos, setDosDigitos] = useState(true);
  const [isAnimatingInv3, setIsAnimatingInv3] = useState(false);
  const [tresDigitos, setTresDigitos] = useState(false);


  const [isAnimatingInv4, setIsAnimatingInv4] = useState(false);
  const [isAnimatingInv5, setIsAnimatingInv5] = useState(false);
  const [isAnimatingInv6, setIsAnimatingInv6] = useState(false);
  const [showInv6, setShowInv6] = useState(false);


  const [isAnimatingInv7, setIsAnimatingInv7] = useState(false);
  const [isAnimatingInv8, setIsAnimatingInv8] = useState(false);
  const [isAnimatingInv9, setIsAnimatingInv9] = useState(false);
  const [showInv7, setShowInv7] = useState(false);


  const [isInversion, setIsInversion] = useState('');


  const [digitos, setDigitos] = useState([]);
  const [digitosMes, setDigitosMes] = useState([]);
  const [digitosInversion, setDigitosInversion] = useState([null]);

  const [abrir, setAbrir] = useState(false);

  const velocidad = 90;
  const [grid, setGrid] = useState(2);

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    let number1 = 0;
    let number2 = 0;
    let number3 = 0;
    let number4 = 0;


    let numInv1,numInv2,numInv3,numInv4,numInv5,numInv6,numInv7,numInv8,numInv9 = 0;
    // let numInv2 = 0;
    // let numInv3 = 0;
    // let numInv4 = 0;
    // let numInv5 = 0;
    // let numInv6 = 0;
    // let numInv7,num = 0;
    // let numInv8 = 0;

    let interval1, interval2, interval3, interval4, interval5, interval6, interval7;

    let interval8, interval9, interval10, interval11, interval12, interval13, interval14, interval15, interval16;

    // Animacion meses
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
      interval3 = setInterval(() => {
        index3 = (index3 + 1) % mes3.length;
        setMeses3(mes3[index3]);
      }, velocidad);
    }

    //animacion numeros
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
          clearInterval(interval5)
        }
      }, velocidad);
    }

    if (isAnimatingN3) {
      interval6 = setInterval(() => {
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


    //animacion inversion
    if (isAnimatingInv1) {
      interval8 = setInterval(() => {
        numInv1 = (numInv1 + 1) % inv1.length;
        setNumeroInv1(inv1[numInv1]);
      }, velocidad);
    }

    if (isAnimatingInv2) {
      interval9 = setInterval(() => {
        numInv2 = (numInv2 + 1) % inv2.length;
        setNumeroInv2(inv2[numInv2]);
      }, velocidad);
    }

    if (isAnimatingInv3) {
      interval10 = setInterval(() => {
        numInv3 = (numInv3 + 1) % inv3.length;
        setNumeroInv3(inv3[numInv3]);
      }, velocidad);
    }

    if (isAnimatingInv4) {
      interval11 = setInterval(() => {
        numInv4 = (numInv4 + 1) % inv4.length;
        setNumeroInv4(inv4[numInv4]);
      }, velocidad);
    }

    if (isAnimatingInv5) {
      interval12 = setInterval(() => {
        numInv5 = (numInv5 + 1) % inv5.length;
        setNumeroInv5(inv5[numInv5]);
      }, velocidad);
    }

    if (isAnimatingInv6) {
      interval13 = setInterval(() => {
        numInv6 = (numInv6 + 1) % inv6.length;
        setNumeroInv6(inv6[numInv6]);
      }, velocidad);
    }

    if (isAnimatingInv7) {
      interval14 = setInterval(() => {
        numInv7 = (numInv7 + 1) % inv7.length;
        setNumeroInv7(inv7[numInv7]);
      }, velocidad);
    }

    if (isAnimatingInv8) {
      interval15 = setInterval(() => {
        numInv8 = (numInv8 + 1) % inv8.length;
        setNumeroInv8(inv8[numInv8]);
      }, velocidad);
    }

    if (isAnimatingInv9) {
      interval16 = setInterval(() => {
        numInv9 = (numInv9 + 1) % inv9.length;
        setNumeroInv9(inv9[numInv9]);
      }, velocidad);
    }



    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);

      clearInterval(interval4);
      clearInterval(interval5);
      clearInterval(interval6);
      clearInterval(interval7);

      clearInterval(interval8);
      clearInterval(interval9);
      clearInterval(interval10);
      clearInterval(interval11);
      clearInterval(interval12);
      clearInterval(interval13);
      clearInterval(interval14);
      clearInterval(interval15);
      clearInterval(interval16);

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimatingM1, isAnimatingM2, isAnimatingM3,
    isAnimatingN1, isAnimatingN2, isAnimatingN3, isAnimatingN4,
    isAnimatingInv1, isAnimatingInv2, isAnimatingInv3,
    isAnimatingInv4, isAnimatingInv5, isAnimatingInv6, isAnimatingInv7,isAnimatingInv8,isAnimatingInv9])

  useEffect(() => {


    if (digitosMes[0] === meses1) {
      setIsAnimatingM1(false)
    }
    if (digitosMes[1] === meses2) {
      setIsAnimatingM2(false)
    }
    if (digitosMes[2] === meses3) {
      setIsAnimatingM3(false)
    }

    if (parseInt(numero1) === digitos[0]) {
      setIsAnimatingN1(false)
    }

    if (parseInt(numero2) === digitos[1]) {
      setIsAnimatingN2(false)
    }
    if (parseInt(numero3) === digitos[2]) {
      setIsAnimatingN3(false)
    }
    if (parseInt(numero4) === digitos[3]) {
      setIsAnimatingN4(false)
    }

    if (parseInt(numeroInv1) === digitosInversion[0]) {
      setIsAnimatingInv1(false)
    }
    if (parseInt(numeroInv2) === digitosInversion[1]) {
      setIsAnimatingInv2(false)
    }
    if (parseInt(numeroInv3) === digitosInversion[2]) {
      setIsAnimatingInv3(false)
    }
    if (parseInt(numeroInv4) === digitosInversion[3]) {
      setIsAnimatingInv4(false)
    }
    if (parseInt(numeroInv5) === digitosInversion[4]) {
      setIsAnimatingInv5(false)
    }
    if (parseInt(numeroInv6) === digitosInversion[5]) {
      setIsAnimatingInv6(false)
    }
    if (parseInt(numeroInv7) === digitosInversion[6]) {
      setIsAnimatingInv7(false)
    }
    if(parseInt(numeroInv8) === digitosInversion[7]){
      setIsAnimatingInv8(false)
    }
    if(parseInt(numeroInv9) === digitosInversion[8]){
      setIsAnimatingInv9(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meses1, numero1, numero2, numero3, numero4, numeroInv1, numeroInv2, numeroInv3, numeroInv4, numeroInv5, numeroInv6, numeroInv7,numeroInv8,numeroInv9])

  const handleAnimation = () => {

    setMeses1('M');
    setMeses2('M');
    setMeses3('M');

    setNumero1(num1[0]);
    setNumero2(num2[0]);
    setNumero3(num3[0]);
    setNumero4(num4[0]);

    setNumeroInv1('0');
    setNumeroInv2('0');
    setNumeroInv3('0');
    setNumeroInv4('0');
    setNumeroInv5('0');
    setNumeroInv6('0');
    setNumeroInv7('0');

    if (fecha) {
      setIsAnimatingM1(!isAnimatingM1);
      setIsAnimatingM2(!isAnimatingM2);
      setIsAnimatingM3(!isAnimatingM3);

      setIsAnimatingN1(!isAnimatingN1);
      setIsAnimatingN2(!isAnimatingN2);
      setIsAnimatingN3(!isAnimatingN3);
      setIsAnimatingN4(!isAnimatingN4);
    }


    if (digitosInversion.length > 0) {
      setIsAnimatingInv1(!isAnimatingInv1);
      setIsAnimatingInv2(!isAnimatingInv2);
      setIsAnimatingInv3(!isAnimatingInv3);
      setIsAnimatingInv4(!isAnimatingInv4);
      setIsAnimatingInv5(!isAnimatingInv5);
      setIsAnimatingInv6(!isAnimatingInv6);
      setIsAnimatingInv7(!isAnimatingInv7);
      setIsAnimatingInv8(!isAnimatingInv8);
      setIsAnimatingInv9(!isAnimatingInv9);
    }

    const valor = parseInt(isInversion);
    const aumento = 0.05 * valor;
    setDigitosInversion((valor + aumento).toString().split('').map(i => parseInt(i, 10)));
    setMostrarTextField(false);
  };

  const handleDate = (date) => {
    const mes = date["$M"];
    const ano = date["$y"];

    const updateFecha = { month: mes, year: ano };
    setFecha(updateFecha)

    if (updateFecha !== null) {
      const { year, month } = updateFecha;
      setDigitos(year.toString().split('').map(i => parseInt(i, 10)));
      setDigitosMes(meses[month].toString().split(''));

      setMeses1(meses[month][0]);
      setMeses2(meses[month][1]);
      setMeses3(meses[month][2]);

      setNumero1(year.toString().split('')[0]);
      setNumero2(year.toString().split('')[1]);
      setNumero3(year.toString().split('')[2]);
      setNumero4(year.toString().split('')[3]);
    }

  }


  const handleNumeroInversion = (num) => {

    let numero = num.target.value;
    setIsInversion(num.target.value)
    let longitud = num.target.value.length;
    if (longitud > 0) {
      switch (longitud) {
        case 4:
          numero = '0' + num.target.value;
          longitud = numero.length
          setGrid(2);
          setDosDigitos(true);
          setTresDigitos(false);
          setShowInv6(false);
          setShowInv7(false);
          break;
        case 5:
          // setIsInversion(numero)
          setGrid(2)
          setDosDigitos(true);
          setTresDigitos(false);
          setShowInv6(false);
          setShowInv7(false);
          break;
        case 6:
          // setIsInversion(numero)
          setGrid(1.5);
          setDosDigitos(false);
          setTresDigitos(true);
          setShowInv6(true);
          setShowInv7(false);
          break;
        case 7:
          // setIsInversion(numero)
          numero = '00' + num.target.value;
          console.log(numero.length)
          longitud = numero.length
          setGrid(0.5);
          setShowInv7(true);
          // setShowInv8(true);
          // setShowInv9(true);
          break;
        case 8:
          // setIsInversion(numero)
          numero = '0' + num.target.value;
          longitud = numero.length
          console.log(numero.length)
          setGrid(1);
          setShowInv7(true);
          // setShowInv8(true);
          // setShowInv9(true);
          break;
        default:
          break;
      }
    } else {
      numero = '';
    }

    console.log(numero.toString().split('').map(i => parseInt(i, 10)))
    setDigitosInversion(numero.toString().split('').map(i => parseInt(i, 10)));
    

    for (let i = 0; i < longitud; i++) {
      switch (i) {
        case 0:
          console.log('numero 1', numero.charAt(i))

          setNumeroInv1(numero.charAt(i));
          break;
        case 1:
          setNumeroInv2(numero.charAt(i));
          break;
        case 2:
          setNumeroInv3(numero.charAt(i));
          break;
        case 3:
          setNumeroInv4(numero.charAt(i));
          break;
        case 4:
          setNumeroInv5(numero.charAt(i));
          break;
        case 5:
          setNumeroInv6(numero.charAt(i));
          break;
        case 6:
          setNumeroInv7(numero.charAt(i));
          break;
        case 7:
          console.log('numero 7', numero.charAt(i))
          setNumeroInv8(numero.charAt(i));
          break;
        case 8:
          console.log('numero 8', numero.charAt(i))
          setNumeroInv9(numero.charAt(i));
          break;
        // Agregar más casos si es necesario
        default:
          break;
      }
    }
  }

  const openCalendar = () => {
    setAbrir(true);
  }

  const openInversion = () => {
    console.log('click')
    setMostrarTextField(!mostrarTextField);
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
          <Grid justifyContent="center" >
            <Grid item xs={12} sm={12} container justifyContent="center" className="box_simulator_time p-3 pb-2 mb-3 rounded rounded-4"  >
              {/* MES */}
              <Grid item xs={12} sm={3} onClick={openCalendar} style={{ cursor: 'pointer' }}>
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

              {/* ANO */}
              <Grid item xs={12} sm={3} onClick={openCalendar} style={{ cursor: 'pointer' }}>
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

              {/* INVERSION */}
              <Grid item xs={12} sm={5} >
                <Grid item xs={12} sm={12} className="box_digits" style={{ cursor: 'pointer' }}>
                  {!mostrarTextField &&
                    <Grid container spacing={1} alignItems="center" onClick={openInversion} >
                      <Grid item sm={2} >
                        <Typography variant="h6" component="div" className="box_digit">
                          S/
                        </Typography>
                      </Grid>
                      <Grid item sm={grid} >
                        <Typography variant="h6" component="div" className="box_digit">
                          {numeroInv1}
                        </Typography>
                      </Grid>
                      <Grid item sm={grid} >
                        <Typography variant="h6" component="div" className="box_digit">
                          {numeroInv2}
                        </Typography>
                      </Grid>
                      {dosDigitos && <Grid item sm={1} >
                        <Typography variant="h7" component="div" className="box_digit">
                          ,
                        </Typography>
                      </Grid>
                      }
                      <Grid item sm={grid} >
                        <Typography variant="h6" component="div" className="box_digit">
                          {numeroInv3}
                        </Typography>
                      </Grid>
                      {tresDigitos && <Grid item sm={1} >
                        <Typography variant="h7" component="div" className="box_digit">
                          ,
                        </Typography>
                      </Grid>
                      }
                      <Grid item sm={grid} >
                        <Typography variant="h6" component="div" className="box_digit">
                          {numeroInv4}
                        </Typography>
                      </Grid>
                      <Grid item sm={1} >
                        <Typography variant="h6" component="div" className="box_digit">
                          {numeroInv5}
                        </Typography>
                      </Grid>

                      {showInv6 && <Grid item sm={grid} >
                        <Typography variant="h7" component="div" className="box_digit">
                          {numeroInv6}
                        </Typography>
                      </Grid>}
                      {showInv7 && <Grid item sm={1} >
                        <Typography variant="h7" component="div" className="box_digit">
                          ,
                        </Typography>
                      </Grid>}

                      {showInv7 && <Grid item sm={grid}>
                        <Typography variant="h7" component="div" className="box_digit">
                          {numeroInv7}
                        </Typography>
                      </Grid>}
                      {showInv7 && <Grid item sm={grid}>
                        <Typography variant="h7" component="div" className="box_digit">
                          {numeroInv8}
                        </Typography>
                      </Grid>}
                      {showInv7 && <Grid item sm={grid}>
                        <Typography variant="h7" component="div" className="box_digit">
                          {numeroInv9}
                        </Typography>
                      </Grid>}
                    </Grid>}

                  {mostrarTextField &&
                    <Grid container spacing={1} alignItems="center">
                      <Grid item sm={12} xs={12} >
                        <TextField
                          autoComplete='off'
                          className={classes.root}
                          onMouseLeave={() => setMostrarTextField(false)}
                          // onBlur={() => setMostrarTextField(true)}
                          value={isInversion}
                          onChange={handleNumeroInversion}
                          inputProps={{ maxLength: 9 }}
                        />
                      </Grid>
                    </Grid>}

                </Grid>
                <Grid>
                  <Typography variant="h6" className="px-3 py-1 box_red_info">
                    Inversión
                  </Typography>
                  {/* {mostrarTextField && (
                    <TextField
                      className="textFieldTransition"
                      label="Inversión"
                      onBlur={() => setMostrarTextField(false)}
                      value={isInversion}
                      onChange={handleNumeroInversion}
                      inputProps={{ maxLength: 7 }}
                      style={{ position: 'absolute', zIndex: 1, marginLeft: '-145px', background: '#f0f0f0' }}
                    />
                  )} */}
                </Grid>
              </Grid>

            </Grid>

            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={3} sm={3} style={{ display: 'none' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                  <MobileDatePicker locale='es'
                    open={abrir}
                    onClose={() => setAbrir(false)}
                    onChange={handleDate}
                    label="Selecciona una fecha"
                    views={['month', 'year']}
                    style={{ display: 'none' }}
                  />
                </LocalizationProvider>
              </Grid>

              <Grid item xs={3} sm={3}>
                <Button className='btn hbt-btn-primary' onClick={handleAnimation} >
                  Simular ahora
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>

    </div>
  )
}
