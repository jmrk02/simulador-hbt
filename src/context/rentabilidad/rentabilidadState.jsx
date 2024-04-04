import React, { useReducer } from "react";
import RentabilidadReducer from "./rentabilidadReducer";
import RentabilidadContext from "./rentabilidadContext";

const RentabilidadState = (props) => {
  const initialState = {
    saldoTotal: null,
    porcentaje: null,
    inversionInicial: null,
    rentabilidad: null,
    mes: null,
    anio: null,
  };

  const rentabilidadFondo2 = (montoInicial, rentabilidad) => {
    console.log("montoInicial", montoInicial);
    console.log("rentabilidad", rentabilidad);
    dispatch({
      typeo: "RENTABILIDAD_FONDO2",
      payload: {
        montoInicial: montoInicial,
        rentabilidad: rentabilidad,
      },
    });
  };

  const setMesAnio = (mes, anio) => {
    console.log("mes", mes);
    console.log("anio", anio);
    dispatch({
      type: "OBTENER_MES_ANIO",
      payload: {
        mes: mes,
        anio: anio,
      },
    });
  };

  const setDatosInversion = (inversionInicial, rentabilidad, saldoTotal,porcentaje) => {
    dispatch({
      type: "OBTENER_DATOS",
      payload: {
        saldoTotal: saldoTotal,
        inversionInicial: inversionInicial,
        rentabilidad: rentabilidad,
        porcentaje: porcentaje,
      },
    });
  };

  const obtenerValorCuota = async (monthValue, yearValue, isActualMonth) => {
    try {
      let mesActual;
      let anioActual;
      if (isActualMonth) {
        const fechaActual = new Date();
        const diaActual = fechaActual.getDate();

        let mesAnterior, anioAnterior;

        if (
          diaActual !==
          new Date(
            fechaActual.getFullYear(),
            fechaActual.getMonth() + 1,
            0
          ).getDate()
        ) {
          const fechaMesAnterior = new Date(fechaActual);
          fechaMesAnterior.setMonth(fechaActual.getMonth() - 1);

          mesAnterior = fechaMesAnterior.getMonth() + 1;
          anioAnterior = fechaMesAnterior.getFullYear();
        } else {
          mesAnterior = fechaActual.getMonth() + 1;
          anioAnterior = fechaActual.getFullYear();
        }
        mesActual = mesAnterior;
        anioActual = anioAnterior;
        console.log("Número del mes anterior:", mesAnterior);
        console.log("Año del mes anterior:", anioAnterior);
      } else {
        mesActual = monthValue + 1;
        anioActual = yearValue;
      }
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ month: mesActual, year: anioActual }),
      };

      const url = "https://200.60.145.234/api/privatezone/valores-cuota/dates";
      const response = await fetch(url, requestOptions);
      const resultado = await response.json();

      //   let response =  await fetch('https://serviciosweb.afphabitat.com.pe/api/privatezone/valores-cuota/date',requestOptions)
      // let response = await fetch(
      //     "https://200.60.145.234/api/privatezone/valores-cuota/dates",
      //     requestOptions
      // // );
      // let lastValue;
      // // response.rows.pop().fund2;
      // switch (tipoFondo) {
      //     case 1:
      //         lastValue = response.rows.pop().fund1;
      //         break;
      //     case 2:
      //         lastValue=response.rows.pop().fund2;
      //         break;
      //     case 3:
      //         lastValue=response.rows.pop().fund3;
      //         break;
      // }

      return resultado;
    } catch (error) {
      console.log(error);
    }
  };
  const [state, dispatch] = useReducer(RentabilidadReducer, initialState);

  return (
    <RentabilidadContext.Provider
      value={{
        saldoTotal: state.saldoTotal,
        porcentaje: state.porcentaje,
        inversionInicial: state.inversionInicial,
        rentabilidad: state.rentabilidad,
        mes: state.mes,
        anio: state.anio,
        rentabilidadFondo2,
        setMesAnio,
        setDatosInversion,
        obtenerValorCuota,
      }}
    >
      {props.children}
    </RentabilidadContext.Provider>
  );
};
export default RentabilidadState;
