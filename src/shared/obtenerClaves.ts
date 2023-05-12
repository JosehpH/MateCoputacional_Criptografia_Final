/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const maximoComunDivisorEuclides = (a:number, b:number):number => {
  if (b === 0) return a;
  return maximoComunDivisorEuclides(b, a % b);
};

function hallarD(funcionEuler: number) {
  const posiblesValores: number[] = [];
  let d: number = funcionEuler - 1;

  for (let i = d; i >= 2; i--) {
    if (maximoComunDivisorEuclides(i,funcionEuler)==1) {
      posiblesValores.push(i);
    }
  }
  d = posiblesValores[Math.round(Math.random() * posiblesValores.length)];
  return d;
}

function hallarE(d: number, funcion_euler: number) {
  let e: number = 1;
  let i: number = 2;
  while (1<2){
    if ((d * i) % funcion_euler == 1 && d*i>funcion_euler) {
      e = (i > funcion_euler) ? i % funcion_euler : i;
      return e;
    }
    i++
  }
}

function obtenerClaves(p: number, q: number) {

  //paso 2. obtener n (módulo)
  const n: number = p * q;

  // paso 3: funcion de euler
  const funcion_euler: number = (p - 1) * (q - 1);

  //paso 3.1: obtener d
  let d: number = hallarD(funcion_euler);

  //paso 4: obtener e
  let e: number = hallarE(d, funcion_euler);
  while (d == e) {
    d = hallarD(funcion_euler);
    e = hallarE(d, funcion_euler);
  }
  return {
    clavePrivada: { n: n, e: e },
    clavePublica: { n: n, d: d },
  };
}
export default obtenerClaves;
