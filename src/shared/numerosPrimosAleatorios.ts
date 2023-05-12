export function esPrimo(n:number) {
     for (let i = 2; i <= Math.sqrt(n); i++) {
       if (n % i == 0) return false;
     }
     return true;
}
function obtenerNumeroPrimoAleatorio() {
  let aleatorio: number;
    do {
         aleatorio = 2 + Math.round(Math.random() * 98);
    } while (!esPrimo(aleatorio))
    return aleatorio;
}
export default obtenerNumeroPrimoAleatorio;