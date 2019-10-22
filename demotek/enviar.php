<?php
    $destino= "carlos.brvo@gmail.com";
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $asunto = $_POST["asunto"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono:" . $telefono . "\nMensaje:" . $asunto;
$gotoHtml = "index_snt.html";
    if(!empty($destino)  && !empty($destino)){
        mail($destino,"Contacto", $contenido);
        $gotoHtml = "index_snt.htm";
    }else{
        $gotoHtml = "index_snt.html";
    }

    header("Location:".$gotoHtml);
    
?>