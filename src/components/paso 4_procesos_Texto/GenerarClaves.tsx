import { useState } from "react";
import "../../styles/GenerarClaves.css";
import obtenerNumeroPrimoAleatorio from "../../shared/numerosPrimosAleatorios";
import obtenerClaves from "../../shared/obtenerClaves";
function GenerarClaves() {
  let pValor: number;
  let qValor: number;
  const [clavePrivada, setClavePrivada] = useState("(;)");
  const [clavePublica, setClavePublica] = useState("(;)");

  const generarP_Q = () => {
    const p: any = document.getElementById("p");
    const q: any = document.getElementById("q");
    p.value = obtenerNumeroPrimoAleatorio();
    q.value = obtenerNumeroPrimoAleatorio();
    pValor = p.value;
    qValor = q.value;
  };
  const imprimirClaves = () => {
    const p: any = document.getElementById("p");
    const q: any = document.getElementById("q");
    pValor = p.value;
      qValor = q.value;
      
      if (pValor.toString() == "" || qValor.toString() == "") {
          alert("Datos ingresados para 'p' y 'q' incorrectos");
          return;
    }
    const claves = obtenerClaves(pValor, qValor);
    const n = claves.clavePrivada.n;
    const e = claves.clavePrivada.e;
    const d = claves.clavePublica.d;

    setClavePrivada(`(${n};${d})`);
    setClavePublica(`(${n};${e})`);
  };
  return (
    <div className="cont_generarClaves">
      <h2>No tienes clave?</h2>
      <label> Generar llaves (pública y privada):</label> <br />
      <label>
        Recuerda:
        <br />
        <b> Clave pública:</b> Se usa para encriptar
        <br />
        <b> Clave privada:</b> Se usa para desencriptar
      </label>
      <br />
      <br />
      <label>
        Ingresa p y q (ambos números primos diferentes para proceder con la
        generación de las llaves):
      </label>
      <br />
      <label>p</label>{" "}
      <input
        type="number"
        placeholder="Ingrese p"
        className="input_number"
        name="p"
        id="p"
        min={2}
      />{" "}
      <br />
      <label>q</label>{" "}
      <input
        type="number"
        placeholder="Ingrese q"
        className="input_number"
        name="q"
        id="q"
        min={2}
      />
      <br />
      <button className="btn_Accion2" onClick={() => generarP_Q()}>
        Generar p y q aleatoriamente
      </button>
      <br />
      <button className="btn_Accion2" onClick={() => imprimirClaves()}>
        Generar claves
      </button>
      <p>
        clave privada (n;d): <b>{clavePrivada}</b>
      </p>
      <p>
        clave pública (n;e): <b>{clavePublica}</b>
      </p>
    </div>
  );
}
export default GenerarClaves;
