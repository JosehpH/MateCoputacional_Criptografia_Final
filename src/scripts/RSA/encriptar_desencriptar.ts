/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
import Big from "big.js"
import Clave from "../../shared/Clave";
export function residuo(n: number, expo: number, mod: number):number {
     const _n = Big(n.toString());
     let resultado = _n.pow(expo);
     resultado = resultado.mod(mod);
     return resultado.toNumber();
}
export function Procesar(clavePublica:Clave,texto:string):string {
    let valoresNumericos: number[] = [...texto].map((letra) => { return letra.charCodeAt(0); })
    let textoEncriptado: string = "";
    for (let i = 0; i < valoresNumericos.length; i++) {
        let valor: number = valoresNumericos[i];
        let nuevoValor: number = residuo(valor,clavePublica.x,clavePublica.n);
        textoEncriptado += String.fromCharCode(nuevoValor);
    }
    return textoEncriptado;
}
export default Procesar;