/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  setInterval(function() {
    document.querySelector(".valor").innerHTML = cambioDeValores();
    document.querySelector("span").innerHTML = cambioDeSignos();
  }, 10000);
};

document.getElementById("boton").addEventListener("click", botonCambiador);

function botonCambiador() {
  document.querySelector(".valor").innerHTML = cambioDeValores();
  document.querySelector(
    ".signo-arriba",
    "signo-abajo"
  ).innerHTML = cambioDeSignos();
}

let cambioDeValores = () => {
  let valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let todosValores = Math.floor(Math.random() * valores.length);
  return valores[todosValores];
};

let cambioDeSignos = () => {
  let variosSignos = ["♣", "♦", "♥", "♠"];
  let todosLosSignos = Math.floor(Math.random() * variosSignos.length);
  return variosSignos[todosLosSignos];
};
