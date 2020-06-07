<?php
$nombre = $_POST["Nombre"];
$correo = $_POST["Email"];
$asunto = $_POST["Asunto"];
$mensaje = $_POST["Mensaje"];

$destinatario = "periodicoquycafa@gmail.com";
$motivo = $_POST["Asunto"];

$enviar = "De: $nombre \n";
$enviar .= "Correo: $correo";
$enviar .= "Asunto: $asunto";
$enviar .= "Mensaje: $mensaje";

mail($destinatario, $motivo, $enviar);
header("location: index.html");


?>