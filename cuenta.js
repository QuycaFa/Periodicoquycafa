
//botones ver mas
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
//Editor
let formulario1 = document.getElementById("file");
let formulario2 = document.getElementById("textr")
let fe = document.getElementById("fe");
function mostrar() {
	formulario1.classList.toggle("w3-hide");
	fe.classList.toggle("w3-hide");
	if(formulario2.classList.toggle("w3-hide") == false) {
		formulario2.classList.toggle("w3-hide");
	};
}
function mostrar2() {
	formulario2.classList.toggle("w3-hide");
	if(formulario1.classList.toggle("w3-hide") == false & fe.classList.toggle("w3-hide") == false) {
		formulario1.classList.toggle("w3-hide");
		fe.classList.toggle("w3-hide");
	};
}
$().ready(function () {
	$("#RichText").richText({
		leftAlign:false,
  	centerAlign:false,
		rightAlign:false,
		fonts:false,
		fontColor:false,
		fileUpload:false,
		Embed:false
	});
});