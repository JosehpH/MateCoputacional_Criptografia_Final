import { useState } from "react";
import Clave from "../../shared/Clave";
import  Procesar   from "../../scripts/RSA/encriptar_desencriptar";

import '../../styles/RSA.css'
import GenerarClaves from "./GenerarClaves";
import ArchivoSalida from "./ArchivoSalida";

function ProcesoRSA({texto_contenido,tipo_proceso,tipo_clave}) {
  const [clave, setClave] = useState(new Clave(0, 0));
  const [textoEncriptado, setTextoEncriptado] = useState("");
  const [claveValida, setClaveValida] = useState(false);

  const procesarClave = (f: any) => {
    const texto = f.target.value;
    console.log("Valor clave publica:", texto);
    const pos_parentesis2: number = texto.indexOf(")");
    const punto_coma: number = texto.indexOf(";");

    const n: number = parseInt(texto.substring(1, punto_coma));
    const x: number = parseInt(
      texto.substring(punto_coma + 1, pos_parentesis2)
    );

    if (isNaN(n) || isNaN(x)) {
     setClaveValida(false)
      setClave(new Clave(0, 0));
    }
    else {
       setClaveValida(true)
      setClave(new Clave(n, x));
    }
  };
  const ProcesarRSA = () =>
  {
    setTextoEncriptado(Procesar(clave, texto_contenido));
    const textareaResultado:any = document.querySelector('textarea.TextAreaResultado');
    textareaResultado.value = textoEncriptado;
  }
  const Icono_Clave = ():JSX.Element => {
    if (!claveValida) return (<><span className="material-symbols-outlined error">warning</span></>);
    else return (<><span className="material-symbols-outlined correcto">check_circle</span></>);
  }
  return (
    <div className="cont_encr_generarClaves">
      <div className="EncriptacionRSA">
        <label>
          Ingresar clave {tipo_clave}: <br />
          Ejm: <b>(145;6)</b>
        </label>
        <input
          type="text"
          className="input_texto"
          name="clavePublica"
          id="clavePublica"
          placeholder={"clave "+tipo_clave}
          onChange={(e) => procesarClave(e)}
        /> <Icono_Clave/>{" "}
        <div className="btn_encriptarRSA" onClick={ProcesarRSA}>{tipo_proceso}</div>
        <textarea
          className="TextAreaResultado"
          placeholder="Resultado"
          readOnly={true}
          required
        ></textarea>
        <br />
        <ArchivoSalida
          tipo={tipo_proceso+ " RSA"}
          texto={textoEncriptado}
        ></ArchivoSalida>
      </div>
      <GenerarClaves/>
    </div>
  );
}
export default ProcesoRSA;
