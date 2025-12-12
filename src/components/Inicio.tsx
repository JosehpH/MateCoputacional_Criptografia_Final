import "../styles/Inicio.css";
import { useEffect } from "react";

import imagen_cripto from "../../public/img_criptografia.png";

function Inicio() {
      useEffect(() => {
        efectoNieve();
      });
  return (
    <>
      <canvas></canvas>
      <div className="Inicio">
        <div className="text">
          Bienvenido/a a nuestro proyecto de criptografía del curso Matemática
          Computacional. ¡Disfruta tu visita!
        </div>
        <img src={imagen_cripto} alt="" className="Imagen_Cripto" />
      </div>
    </>
  );
}

//Efecto nieve
function efectoNieve() {
  const canvas:any = document.querySelector("canvas");

  canvas.width = innerWidth;
  canvas.height = innerHeight - 100;
  canvas.style.position = "absolute";
  canvas.style.top = "100px";
  canvas.style.left = "0";
  canvas.style.zIndex = "-1000";
  const ctx = canvas.getContext("2d");

  const getRandomNumber = (min:number, max:number) =>
    Math.floor(Math.random() * (max - min)) + min;

  class SnowFlake {
    x: number;
    y: number;
    speedX: number;
    speedY: number;
    radius: number;
    constructor() {
      this.x = getRandomNumber(0, canvas.width);
      this.y = getRandomNumber(0, canvas.height);
      this.speedX = getRandomNumber(-4, 4);
      this.speedY = getRandomNumber(1, 5);
      this.radius = 5;
    }
    reset = () => {
      if (this.y > canvas.height) {
        this.y = 0;
        this.x = getRandomNumber(0, canvas.width);
        this.speedY = getRandomNumber(1, 5);
      }
    };
    move = () => {
      this.y += this.speedY;
      this.speedX += 0.02;
      this.x += Math.cos(this.speedX);
    };
    draw = () => {
      this.move();
      this.reset();
      ctx.fillStyle = "gainsboro";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    };
  }
  const generateSnowFlakes = () =>
    Array.from({ length: 240 }, () => new SnowFlake());
  const snowflakes = generateSnowFlakes();

  const drawSnowFlakes = () => {
    snowflakes.forEach((flake) => flake.draw());
  };

  const update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // dibujar
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawSnowFlakes();

    requestAnimationFrame(update);
  };

  update();
}
export default Inicio;
