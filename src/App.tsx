import './App.css'
import { useState } from 'react';
import BarraNavegacion from "./components/BarraNavegacion.tsx";
import "../src/styles/BarraNavegacion.css"
import MiembrosEquipo from './components/MiembrosEquipo.tsx';
import Inicio from './components/Inicio.tsx';
import Proyecto from './components/Proyecto.tsx';

function App() {
  const cambiarColorBody = (color = "#D3D3D3") => {
    const body = document.querySelector("body");
    if (body != null) {
      body.style.backgroundColor = color;
    }
  };
  const [pos, setPos] = useState(1);

  const gestionarVentanas = () => {
    cambiarColorBody();
    if (pos == 1) {
      cambiarColorBody("#fff");
      return <Inicio />
    }
    else if (pos == 3) return <MiembrosEquipo/>;
    else if (pos == 2) return <Proyecto/>;

  };
  return (
    <>
      <BarraNavegacion pos={pos} setPos={setPos} />
        {gestionarVentanas()}

    </>
  );
}

export default App
