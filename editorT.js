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