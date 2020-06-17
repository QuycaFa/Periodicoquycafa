let paraOcultar1 = document.getElementById("oculto");
let paraOcultar2 = document.getElementById("oculto1");
let paraOcultar5 = document.getElementById("ocultoT");
let paraOcultar3 = document.getElementById("b1");
let paraOcultar4 = document.getElementById("b2");


function mostrar() {
    paraOcultar1.classList.toggle("w3-hide");
    paraOcultar3.classList.toggle("w3-show");
    paraOcultar4.classList.toggle("w3-hide");
}

function contenido() {
    paraOcultar2.classList.toggle("w3-hide");
}
function contenido2() {
    paraOcultar5.classList.toggle("w3-hide");
}