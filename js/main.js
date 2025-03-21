import Cl_hijo1 from "./Cl_hijo1.js";
import Cl_hijo2 from "./Cl_hijo2.js";

let hijo1 = new Cl_hijo1({atribA: 1, atrib1: 3});
let hijo2 = new Cl_hijo2({atribA: 1, atrib2: 4});

let salida = document.getElementById("salida");

salida.innerHTML = `
    <br>${hijo1.calculo()}
    <br>${hijo2.calculo()}`
    