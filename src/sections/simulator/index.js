import React from "react";
import "./styles.css";
const simulator = () => {
  return (
    <div className="stc-hbt-simulador bg-paper py-5">
        <div className="container">
            <div className="d-block text-center">
                <h3 className="d-block"><em>Simula tu Rentabilidad</em></h3>
                <p>Elige un periodo y monto de inversión para visualizar gráficamente tu rentabilidad potencial.</p>

                <div className="reset-align">
                    <div className="col1">
                        <div className="box_simulator_time d-flex align-items-center justify-content-center p-3 pb-2 mb-3 rounded rounded-4">
                            <div className="box_simulator_first">
                                <div className="box_digits d-flex justify-content-center">
                                    <div className="box_digit">M</div>
                                    <div className="box_digit">M</div>
                                    <div className="box_digit">M</div>
                                </div> 
                                <div className="box_red_info px-3 py-1">Mes</div>
                            </div>
                            <div className="box_simulator_first">
                                <div className="box_digits d-flex justify-content-center">
                                    <div className="box_digit">A</div>
                                    <div className="box_digit">A</div>
                                    <div className="box_digit">A</div>
                                    <div className="box_digit">A</div>
                                </div>
                                <div className="box_red_info px-3 py-1">Año</div>
                            </div>
                            <div className="box_simulator_first">
                                <div className="box_digits d-flex justify-content-center">
                                    <div className="box_digit">S/</div>
                                    <div className="box_digit">0</div>
                                    <div className="box_digit">0</div>
                                    <div className="box_digit">,</div>
                                    <div className="box_digit">0</div>
                                    <div className="box_digit">0</div>
                                    <div className="box_digit">0</div>
                                </div>
                                <div className="box_red_info px-3 py-1">Inversión</div>
                            </div>
                        </div>
                    </div>
                    <div className="col2">
                        <button type="submit" className="btn hbt-btn-primary">Simular ahora</button>
                    </div>
                </div>              
            </div>
        </div>
    </div>
  );
};

export default simulator;
