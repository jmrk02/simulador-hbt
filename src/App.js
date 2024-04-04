import "./App.css";

import Prueba from "./Components/Prueba/Prueba";
import "./App.css";
import { useMediaQuery, useTheme } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar los estilos CSS de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useEffect } from "react";

import Header from "./Components/header";
import { BeforeAfter } from "./Components/beforeAfter/BeforeAfter";
import imagenAntigua from "./assets/img/HeroSection-old.png";
import imagenNueva from "./assets/img/HeroSection-new.png";
import imagenAntiguaMobile from "./assets/img/mobile-habi-old.png";
import imagenNuevaMobile from "./assets/img/mobile-habi.png";
// import Simulator from "./Components/simulator";
import StcResultado from "./Components/stcResultado";
import StcFormulario from "./Components/stcFormulario";
import Footer from "./Components/footer";
import RentabilidadState from "./context/rentabilidad/rentabilidadState";

function App() {
  const theme = useTheme();
  const screenMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <RentabilidadState>
      <div className="App">
        <Header />
        <BeforeAfter
          // pointerMove
          beforeImage={screenMobile ? imagenAntiguaMobile : imagenAntigua}
          afterImage={screenMobile ? imagenNuevaMobile : imagenNueva}
        />
        {/* <Simulator /> */}
        <Prueba />
        <StcResultado />
        <StcFormulario />
        <Footer />
      </div>
    </RentabilidadState>
  );
}

export default App;
