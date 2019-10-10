<?php
    $destino= "carlos.brvo@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $asunto = $_POST["asunto"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono:" . $telefono . "\nMensaje:" . $asunto;

    if(!empty($destino)  && !empty($destino)){
        mail($destino,"Contacto", $contenido);
        return true;
    }else{
        return false;
    }

    header("Location:index_snt.html");


?>