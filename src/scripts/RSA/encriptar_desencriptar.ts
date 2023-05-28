/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
import Big from "big.js"
import Clave from "./Clave";
export function residuo(n: number, expo: number, mod: number):number {
    const _n = Big(n.toString());
     let resultado = _n.pow(expo);
     resultado = resultado.mod(mod);
     return resultado.toNumber();
}
function obtenerValoresNumericos(texto:string):string[] {
  let valoresNumericos:string[] = [];
  for (let i = 0; i < texto.length; i++) {
    let valorUnicode = texto.charCodeAt(i);
      valoresNumericos.push(valorUnicode.toString(16));
      console.log(valorUnicode.toString(16));
    }
  return valoresNumericos;
}
function convertirNumeros_Texto(clave:Clave,bloquesNumericos:string[]) {
  let texto:string = "";
  for (let i = 0; i < bloquesNumericos.length; i++) {
      let valorUnicode = parseInt(bloquesNumericos[i], 16);
      valorUnicode = residuo(valorUnicode, clave.x, clave.n);
        texto += String.fromCharCode(valorUnicode);
    }
  return texto;
}
export function Procesar(clave:Clave,texto:string):string {
    let valoresNumericos: string[] = obtenerValoresNumericos(texto);
    let textoProcesado: string = convertirNumeros_Texto(clave,valoresNumericos);
    return textoProcesado;
}
export default Procesar;