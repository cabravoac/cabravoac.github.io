<?php

    $destino= "carlos.brvo@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $asunto = $_POST["asunto"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono:" . $telefono . "\nMensaje:" . $asunto;
    mail($destino,"Contacto", $contenido);

    echo "Gracias, nos pondremos en contacto";


?>