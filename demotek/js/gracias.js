function gracias() {

    var nameValue = document.getElementById('name').value;
    var mailValue = document.getElementById('mail').value;
    var telephoneValue = document.getElementById('telephone').value;
    var subjecValue = document.getElementById('subject').value;

    if(nameValue != '' && mailValue != '' && telephoneValue != '' && subjecValue != ''){
        alert("¡Gracias, tu mensaje fue enviado!");
    }else{
        alert('Completa los campos')
    }

}