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
import Input from '@mui/material/Input';
import { set } from 'date-fns';
import TextField from '@mui/material/TextField';

// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Animacion() {

  const datePickerRef = React.useRef(null); // Referencia para el DatePicker

  // Función para abrir el calendario
  const handleCalendarOpen = () => {
    console.log('abrir calendario')
    if (datePickerRef.current) {
      datePickerRef.current.getElementsByTagName('input')[0].click(); // Abre el calendario
    }
  };

  const mes1 = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const mes2 = ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"];
  const mes3 = ["E", "B", "R", "R", "Y", "N", "L", "O", "P", "T", "V", "C"];

  const num1 = ["0", "1", "3", "4", "5", "6", "7", "8", "9", "2"];
  const num2 = ["1", "3", "4", "5", "6", "7", "8", "9", "2", "0"];
  const num3 = ["0", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const num4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const inv1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inv2 = ["1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inv3 = ["1", "2", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const inv4 = ["1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inv5 = ["2", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const inv6 = ["5", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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



  const [fecha, setFecha] = useState(null);

  const [isAnimatingM1, setIsAnimatingM1] = useState(false);

  const [isAnimatingN1, setIsAnimatingN1] = useState(false);
  const [isAnimatingN2, setIsAnimatingN2] = useState(false);
  const [isAnimatingN3, setIsAnimatingN3] = useState(false);
  const [isAnimatingN4, setIsAnimatingN4] = useState(false);

  const [showInv1, setShowInv1] = useState(true);
  const [showInv2, setShowInv2] = useState(true);
  const [showInv3, setShowInv3] = useState(true);
  const [isAnimatingInv1, setIsAnimatingInv1] = useState(false);
  const [isAnimatingInv2, setIsAnimatingInv2] = useState(false);
  const [isAnimatingInv3, setIsAnimatingInv3] = useState(false);

  const [isAnimatingInv4, setIsAnimatingInv4] = useState(false);
  const [isAnimatingInv5, setIsAnimatingInv5] = useState(false);
  const [isAnimatingInv6, setIsAnimatingInv6] = useState(false);
  const [showInv6, setShowInv6] = useState(false);


  const [isAnimatingInv7, setIsAnimatingInv7] = useState(false);
  const [isAnimatingInv8, setIsAnimatingInv8] = useState(false);
  const [isAnimatingInv9, setIsAnimatingInv9] = useState(false);
  const [showInv7, setShowInv7] = useState(false);
  const [showInv8, setShowInv8] = useState(false);
  const [showInv9, setShowInv9] = useState(false);

  const [isInversion, setIsInversion] = useState('');


  const [digitos, setDigitos] = useState([]);
  const [digitosMes, setDigitosMes] = useState([]);
  const [digitosInversion, setDigitosInversion] = useState([]);

  const [abrir, setAbrir] = useState(false);

  const velocidad = 100;

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    let number1 = 0;
    let number2 = 0;
    let number3 = 0;
    let number4 = 0;


    let numInv1 = 0;
    let numInv2 = 0;
    let numInv3 = 0;
    let numInv4 = 0;
    let numInv5 = 0;



    let interval1, interval4, interval5, interval6, interval7;

    let interval8, interval9, interval10, interval11, interval12;


    // Animacion meses
    if (isAnimatingM1) {
      interval1 = setInterval(() => {
        index1 = (index1 + 1) % mes1.length;
        index2 = (index2 + 1) % mes2.length;
        index3 = (index3 + 1) % mes3.length;


        setMeses1(mes1[index1]);
        setMeses2(mes2[index2]);
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
          setNumero2(digitos[1])
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




    return () => {
      clearInterval(interval1);

      clearInterval(interval4);
      clearInterval(interval5);
      clearInterval(interval6);
      clearInterval(interval7);

      clearInterval(interval8);
      clearInterval(interval9);
      clearInterval(interval10);
      clearInterval(interval11);
      clearInterval(interval12);

    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnimatingM1,
    isAnimatingN1, isAnimatingN2, isAnimatingN3, isAnimatingN4,
    isAnimatingInv1, isAnimatingInv2, isAnimatingInv3,
    isAnimatingInv4, isAnimatingInv5])

  useEffect(() => {


    if (digitosMes[0] === meses1) {
      setIsAnimatingM1(false)
    }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meses1, numero1, numero2, numero3, numero4, numeroInv1, numeroInv2, numeroInv3, numeroInv4, numeroInv5])

  const handleAnimation = () => {

    setMeses1('M');
    setMeses2('M');
    setMeses3('M');

    setNumero1('0');
    setNumero2('0');
    setNumero3('0');
    setNumero4('0');

    setNumeroInv1('0');
    setNumeroInv2('0');
    setNumeroInv3('0');
    setNumeroInv4('0');
    setNumeroInv5('0');

    if (fecha) {
      setIsAnimatingM1(!isAnimatingM1);

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
    }

    const valor = parseInt(isInversion);
    console.log('valor', typeof (valor), valor);
    const aumento = 0.05 * valor;
    console.log('aumento', aumento)
    // const inversion = valor + aumento;
    setDigitosInversion((valor + aumento).toString().split('').map(i => parseInt(i, 10)));
    console.log('digitosInversion', digitosInversion)

  };

  const handleDate = (date) => {
    console.log('date', date)
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
    setIsInversion(num.target.value);
    // setDigitosInversion(num.target.value.toString().split('').map(i => parseInt(i, 10)));
    const cantidad = num.target.value.length;
    console.log('cantidad', cantidad)

    for (let i = 0; i < cantidad; i++) {
      switch (i) {
        case 0:
          setNumeroInv1(num.target.value.charAt(i));
          break;
        case 1:
          setNumeroInv2(num.target.value.charAt(i));
          break;
        case 2:
          setNumeroInv3(num.target.value.charAt(i));
          break;
        case 3:
          setNumeroInv4(num.target.value.charAt(i));
          break;
        case 4:
          setNumeroInv5(num.target.value.charAt(i));
          break;
        case 5:
          setShowInv6(true);
          setNumeroInv6(num.target.value.charAt(i));
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
              <Grid item xs={12} sm={3} onClick={openCalendar}>
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
              <Grid item xs={12} sm={3} onClick={openCalendar}>
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
              <Grid item xs={12} sm={5}>
                <Grid item xs={12} sm={12} className="box_digits">
                  <Grid container spacing={1} alignItems="center">
                    <Grid item sm={2} >
                      <Typography variant="h6" component="div" className="box_digit">
                        S/
                      </Typography>
                    </Grid>
                    {showInv1 && <Grid item sm={1} >
                      <Typography variant="h6" component="div" className="box_digit">
                        {numeroInv1}
                      </Typography>
                    </Grid>}
                    {showInv2 && <Grid item sm={1} >
                      <Typography variant="h6" component="div" className="box_digit">
                        {numeroInv2}
                      </Typography>
                    </Grid>}
                    <Grid item sm={1} >
                      <Typography variant="h7" component="div" className="box_digit">
                        ,
                      </Typography>
                    </Grid>
                    {showInv3 && <Grid item sm={1} >
                      <Typography variant="h6" component="div" className="box_digit">
                        {numeroInv3}
                      </Typography>
                    </Grid>}

                    <Grid item sm={1} >
                      <Typography variant="h6" component="div" className="box_digit">
                        {numeroInv4}
                      </Typography>
                    </Grid>
                    <Grid item sm={1} >
                      <Typography variant="h6" component="div" className="box_digit">
                        {numeroInv5}
                      </Typography>
                    </Grid>

                    {showInv6 && <Grid item sm={1} >
                      <Typography variant="h7" component="div" className="box_digit">
                        ,
                      </Typography>
                    </Grid>}

                    {showInv6 && <Grid item sm={1} >
                      <Typography variant="h6" component="div" className="box_digit">
                        {numeroInv6}
                      </Typography>
                    </Grid>}

                    {showInv7 && <Grid item sm={1} >
                      <Typography variant="h6" component="div" className="box_digit">
                        {numeroInv7}
                      </Typography>
                    </Grid>}
                    {showInv8 && <Grid item sm={1}  >
                      <Typography variant="h6" component="div" className="box_digit">
                        {numeroInv8}
                      </Typography>
                    </Grid>}

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

            <Grid container style={{ margin: '1rem' }} justifyContent="center" spacing={2}>
              <Grid item xs={3} sm={3} style={{ display: 'none' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <MobileDatePicker
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

              <Grid item xs={3} sm={3} style={{ display: 'none' }}  >
                <TextField
                  label="Ingrese un número"
                  type='number'
                  value={isInversion}
                  onChange={handleNumeroInversion}
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxLength: 6 }}
                />
              </Grid>
            </Grid>




          </Grid>
        </div>
      </Container>

    </div>
  )
}
