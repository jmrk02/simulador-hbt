import React, { useState, useEffect } from 'react';
import './animacion.css';

const Animacion = () => {

    const [num1, setNum1] = useState(2);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(2);
    const [num4, setNum4] = useState(4);

    const velocidad = 100;

    useEffect(() => {
        const interval1 = setInterval(() => {
            
            setNum1(prevNumber => {
                const nextNumber = prevNumber === 9 ? 0 : prevNumber + 1;
                // const nextNumber = (prevNumber % 9) + 1;
                if (nextNumber === 2) {
                    clearInterval(interval1);
                }
                return nextNumber;
            });
        }, velocidad);

        return () => clearInterval(interval1);
    }, []);

    useEffect(() => {
        const interval2 = setInterval(() => {
            setNum2(prevNumber => {
                const nextNumber = prevNumber === 9 ? 0 : prevNumber + 1;
                if (nextNumber === 0) {
                    clearInterval(interval2);
                }
                return nextNumber;
            });
        }, velocidad);

        return () => clearInterval(interval2);
    }, [num1]);

    useEffect(() => {
        const interval3 = setInterval(() => {
            setNum3(prevNumber => {
                const nextNumber = prevNumber === 9 ? 0 : prevNumber + 1;
                if (nextNumber === 2) {
                    clearInterval(interval3);
                }
                return nextNumber;
            });
        }, velocidad);

        return () => clearInterval(interval3);
    }, [num2]);

    useEffect(() => {
        const interval4 = setInterval(() => {
            setNum4(prevNumber => {
                const nextNumber = prevNumber === 9 ? 0 : prevNumber + 1;
                if (nextNumber === 4) {
                    clearInterval(interval4);
                }
                return nextNumber;
            });
        }, velocidad);

        return () => clearInterval(interval4);
    }, [num3]);


    return (

        <div className="ano">
            <div className="number-animation">
                <span id='num1' className={`digit ${num1 === 2 && 'paused'}`}>{num1}</span>
                <span id='num2' className={`digit ${num2 === 0 && 'paused'}`}>{num2}</span>
                <span id='num3' className={`digit ${num3 === 2 && 'paused'}`}>{num3}</span>
                <span id='num4' className={`digit ${num4 === 4 && 'paused'}`}>{num4}</span>
            </div>
            <div> 
                {/* <button onClick={iniciarProceso} > Iniciar </button> */}
            </div>
        </div>

    );
};

export default Animacion;
