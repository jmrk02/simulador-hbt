import React, { useState, useRef } from 'react'
import './simulador.css'
export default function Simulador() {

    const [contador, setContador] = useState(0);
    const [velocidad, setVelocidad] = useState(0);
    const [incremento, setIncremento] = useState(0);
    const interval1Ref = useRef(null);
    const interval2Ref = useRef(null);
    const [meses1, setMeses1] = useState(null);
    const [meses2, setMeses2] = useState(null);

    const mes1 = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    const mes2 = ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"];
    const mes3 = ["E", "B", "R", "R", "Y", "N", "L", "O", "T", "T", "V", "C"];

    const num1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const num2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const num3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const num4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];


    const iniciar = () => {
        document.getElementById("iniciar").disabled = true;
        setIncremento(1);

        interval1Ref.current = setInterval(() => {
            setContador(contador => contador + velocidad);
            document.getElementById("slot").innerHTML = num1[contador % num1.length];
            document.getElementById("slot1").innerHTML = num2[contador % num2.length];
            document.getElementById("slot2").innerHTML = num3[contador % num3.length];
            document.getElementById("slot3").innerHTML = num4[contador % num4.length];

            if (velocidad < 100 || incremento < 0) {
                setVelocidad(velocidad => velocidad + incremento);
            }

            if (velocidad > 20) {
                document.getElementById("parar").disabled = false;
            }

            if (velocidad <= 3 && incremento < 0) {
                document.getElementById("parar").disabled = true;
                clearInterval(interval1Ref.current);
                finalizarMovimiento();
            }
        }, 100); // velocidad de animación

        // meses
        setMeses1(setInterval(() => {
            setContador(contador => contador + velocidad);
            document.getElementById("m1").innerHTML = mes1[contador % mes1.length];
            document.getElementById("m2").innerHTML = mes2[contador % mes2.length];
            document.getElementById("m3").innerHTML = mes3[contador % mes3.length];

            if (velocidad < 100 || incremento < 0) {
                setVelocidad(velocidad => velocidad + incremento);
            }

            if (velocidad > 20) {
                document.getElementById("parar").disabled = false;
            }

            if (velocidad <= 3 && incremento < 0) {
                document.getElementById("parar").disabled = true;
                clearInterval(interval1Ref.current);
                finalizarMovimiento();
            }
        }, 100)); // velocidad de animación
    };


    const parar = () => {
        setIncremento(-3);
    };

    const finalizarMovimiento = () => {
        const pos = contador;

        const relativePos = pos % num1.length;
        const posicionFinal = pos - relativePos + 3;

        interval2Ref.current = setInterval(() => {
            setContador(contador => contador + velocidad);
            document.getElementById("slot").innerHTML = num1[contador % num1.length];

            if (contador >= posicionFinal) {
                clearInterval(interval2Ref.current);
                document.getElementById("iniciar").disabled = false;

                const posicion = contador % num1.length;
                document.getElementById("resultado").innerHTML = num1[posicion];
            }
        }, 1);

        const relativePosMes = pos % mes1.length;
        const posicionFinalMes = pos - relativePosMes + 3;

        setMeses2(setInterval(() => {
            setContador(contador => contador + velocidad);
            document.getElementById("m1").innerHTML = mes1[contador % mes1.length];

            if (contador >= posicionFinalMes) {
                clearInterval(interval2Ref.current);
                document.getElementById("iniciar").disabled = false;

                const posicionMes = contador % mes1.length;
                document.getElementById("resultado").innerHTML = mes1[posicionMes];
            }
        }, 1));
    };


    return (
        <div>
            <div className="contenedorMes">
                <div className="item" id="m1">E</div>
                <div className="item" id="m2">N</div>
                <div className="item" id="m3">E</div>
            </div>
            <div className="contenedor">
                <div className="item" id="slot">0</div>
                <div className="item" id="slot1">0</div>
                <div className="item" id="slot2">0</div>
                <div className="item" id="slot3">0</div>
            </div>
            <br />
            <button onClick={iniciar} id="iniciar">Iniciar</button>
            <button onClick={parar} id="parar" disabled>Parar</button>
        </div>
    )
}
