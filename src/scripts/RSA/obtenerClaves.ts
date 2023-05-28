/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const maximoComunDivisorEuclides = (a:number, b:number):number => {
  if (b === 0) return a;
  return maximoComunDivisorEuclides(b, a % b);
};

function hallarD(funcionEuler: number) {
  const posiblesValores: number[] = [];
  let d: number = funcionEuler - 1;

  for (let i = 2; i <= d; i++) {
    if (maximoComunDivisorEuclides(i,funcionEuler)==1) {
      posiblesValores.push(i);
    }
  }
  d = posiblesValores[Math.floor(Math.random() * posiblesValores.length)];
  return d;
}

function hallarE(d: number, funcion_euler: number) {
  let e: number = 1;
  let i: number = 1;

  // d * e =  1 mod funcion_euler
  // paso 1: ----
  //Hallar un número que multiplicado con d sea multiplo de funcion_euler + 1

  let cumple = false;
  while (!cumple) {
    i++;
    cumple = (d * i - 1) % funcion_euler == 0 && d * i >= funcion_euler;
  }

  // paso 2: ----
  //En cado de que i sea mayor a funcion_euler se retornará el resto
  e = i >= funcion_euler ? i % funcion_euler : i;
  return e;
}

function obtenerClaves(p: number, q: number) {

  //paso 2. obtener n (módulo)
  const n: number = p * q;

  // paso 3: funcion de euler
  const funcion_euler: number = (p - 1) * (q - 1);

  //paso 3.1: obtener d
  const d: number = hallarD(funcion_euler);

  //paso 4: obtener e
  const e: number = hallarE(d, funcion_euler);

  return {
    clavePrivada: { n: n, e: e },
    clavePublica: { n: n, d: d },
  };
}
export default obtenerClaves;
