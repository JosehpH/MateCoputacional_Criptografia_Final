import { useState } from "react";
import "../styles/Proyecto.css";
import PASO1_Lectura_Texto from "./Paso1_LecturaTexto";
import Paso2_ElegirDesenEnc from "./Paso2_ElegirDesenEncr";
import Paso3_ElegirAlgoritmo from "./Paso3_ElegirAlgoritmo";
import Paso4_ProcesarSolicitud from "./Paso4_ProcesarSolicitud";
import { useWindowResize } from "../hooks/useWindowResize";

function Proyecto() {
  const [texto, setTexto] = useState("");
  const [tipoProceso, setProceso] = useState(-1);
  const [tipoAlgoritmo, setAlgoritmo] = useState(-1);

  const {windowSize} = useWindowResize();

  return (
    <div className="Proyecto">
    {
      windowSize.width <=1400? (<p>Vista no disponible para este tamaño de dispositivo, el ancho debe ser mayor o igual a 1400px</p>):
     (
     <>
     <PASO1_Lectura_Texto setTexto={setTexto} texto={texto} />
      <Paso2_ElegirDesenEnc tipoProceso={tipoProceso} setProceso={ setProceso} />
      <Paso3_ElegirAlgoritmo tipoAlgoritmo={tipoAlgoritmo} setAlgoritmo={setAlgoritmo} />
      <Paso4_ProcesarSolicitud tipoProceso={tipoProceso} tipoAlgoritmo={tipoAlgoritmo} texto={texto} />
    </>
    )}
    </div>
  );
}
export default Proyecto;
