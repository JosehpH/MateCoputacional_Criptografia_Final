import "../styles/paso2.css";
import { useState } from "react";

const Paso3_ElegirAlgoritmo = ({tipoAlgoritmo,setAlgoritmo}) => {

    const elegirAlgoritmo = (n: number) => {
       if (tipoAlgoritmo == n) {
         setAlgoritmo(-1);
       } else {
         setAlgoritmo(n);
      }
  };
    const btnBase = "btn_Accion";
    const marcado = " marcado";
  return (
    <>
      <h2>PASO 3: Qué algoritmo desea usar?</h2>
      <hr />
      <div className="SeleccionarAccion">
        <div
          className={tipoAlgoritmo != 0 ? btnBase : btnBase + marcado}
          onClick={() => elegirAlgoritmo(0)}
        >
          Algoritmo RSA
        </div>
      </div>
      <hr />
    </>
  );
};
export default Paso3_ElegirAlgoritmo;
