<?php
$nombre = $_POST["Nombre"];
$correo = $_POST["Correo"];
$asunto = $_POST["Asunto"];
$mensaje = $_POST["Mensaje"];

$enviado = "Nombre: " . $nombre . "<br>Correo: " . $correo . "<br>Asunto: " . $asunto . "<br>Mensaje: " . $mensaje;



use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'periodicoquycafa@gmail.com';                     // SMTP username
    $mail->Password   = 'Periodico2020';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('periodicoquycafa@gmail.com', $nombre);
    $mail->addAddress('periodicoquycafa@gmail.com');     // Add a recipient

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = $enviado;

    $mail->send();
    echo '<script>
        window.history.go(-1);
        </script>
    ';
} catch (Exception $e) {
    echo "No enviado: {$mail->ErrorInfo}";
}

?>