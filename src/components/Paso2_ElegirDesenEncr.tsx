import '../styles/paso2.css'
import { useState } from "react";

const Paso2_ElegirDesenEnc = ({tipoProceso,setProceso}) => {
  const elegirProceso = (n:number) => {
    if (tipoProceso == n) {
      setProceso(-1);
    }
    else {
      setProceso(n);
    }
  }
  
  const btnBase = "btn_Accion";
  const marcado = " marcado";
  return (
    <>
      <h2>PASO 2: Qué desea hacer con el texto?</h2>
      <hr />
      <div className="SeleccionarAccion">
        <div
          className={tipoProceso != 0 ? btnBase : btnBase + marcado}
          onClick={() => elegirProceso(0)}
        >
          ENCRIPTAR
        </div>
        <div
          className={tipoProceso != 1 ? btnBase : btnBase + marcado}
          onClick={() => elegirProceso(1)}
        >
          DESENCRIPTAR
        </div>
      </div>
      <hr />
    </>
  );
};
export default Paso2_ElegirDesenEnc;
