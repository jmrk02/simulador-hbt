
export default (state, action) => {
    switch(action.type) {
        case 'RENTABILIDAD_FONDO2':
            return {
                ...state,
                inversionInicial:  action.payload.montoInicial,
                rentabilidad: action.payload.rentabilidad
            }
            break;
        
        case 'OBTENER_MES_ANIO':
            return {
                ...state,
                mes: action.payload.mes,
                anio: action.payload.anio
            }
            break;
        case 'OBTENER_DATOS':
            return {
                ...state,
                inversionInicial: action.payload.inversionInicial,
                rentabilidad: action.payload.rentabilidad,
                saldoTotal: action.payload.saldoTotal,
                porcentaje: action.payload.porcentaje
                
            }
            break;
    }
}

// saldoTotal : null,
// porcentaje : null,
// inversionInicial : null,
// rentabilidad : null,