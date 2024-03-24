import React, { useState, useEffect } from 'react';
import './Mes.css'

const Animacion = () => {
  const meses = [
    ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"],
    ["E", "B", "R", "R", "Y", "N", "L", "O", "T", "T", "V", "C"]
  ];

  const mes1 = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  const mes2 = ["N", "E", "A", "B", "A", "U", "U", "G", "E", "C", "O", "I"];
  const mes3 = ["E", "B", "R", "R", "Y", "N", "L", "O", "T", "T", "V", "C"];

  const [month1, setMonth1] = useState('');
  const [month2, setMonth2] = useState('');
  const [month3, setMonth3] = useState('');

  useEffect(() => {
    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    const interval = setInterval(() => {
      // Incrementamos los índices de cada mes
      index1 = (index1 + 1) % mes1.length;
      index2 = (index2 + 1) % mes2.length;
      index3 = (index3 + 1) % mes3.length;

      // Actualizamos los meses con las letras correspondientes
      setMonth1(mes1[index1]);
      setMonth2(mes2[index2]);
      setMonth3(mes3[index3]);
    },100); // Cambia la velocidad de la animación ajustando el intervalo en milisegundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="month-animation">
      {month1}{month2}{month3}
    </div>
  );
};

export default Animacion;
