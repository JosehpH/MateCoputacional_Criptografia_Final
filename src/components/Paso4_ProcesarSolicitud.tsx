/* eslint-disable @typescript-eslint/no-inferrable-types */
import "../styles/paso4.css";
import ProcesoRSA from "./paso 4_procesos_Texto/ProcesoRSA";
const Paso4_ProcesarSolicitud = ({ tipoProceso, tipoAlgoritmo, texto }) => {
  const Proceso = (): JSX.Element => {
    console.log("Proceso: ", tipoProceso, " Algoritmo: ", tipoAlgoritmo);

    if (tipoProceso == 0 && tipoAlgoritmo == 0)
      return (
        <ProcesoRSA
          texto_contenido={texto}
          tipo_proceso="Encriptar"
          tipo_clave="pública"
        ></ProcesoRSA>
      );
    else if (tipoProceso == 1 && tipoAlgoritmo == 0)
      return (
        <ProcesoRSA
          texto_contenido={texto}
          tipo_proceso="Desencriptar"
          tipo_clave="privada"
        ></ProcesoRSA>
      );
    else {
      return <></>;
    }
  };
  return (
    <>
      <h2>PASO 4: Complete los campos requeridos</h2>
      <hr />
      {Proceso()}
    </>
  );
};
export default Paso4_ProcesarSolicitud;
