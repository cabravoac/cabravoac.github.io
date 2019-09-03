
    
function galeria(){
        var cover = ["mini1.jpg", "mini2.jpg", "mini3.jpg", "mini4.jpg", "mini5.jpg", "mini6.jpg", "mini7.jpg"];
        var dato = ["Maleta", "Gorra", "Classic Jersey", "Balón #4", "Pants de Juego", "Cartera", "Reloj"];
        var result = "";
    
        console.log(galeria);
    
        for(var i=0; i<cover.length; i++){
            result = result + "<div>" + "<a href=#>" + "<img src='img/" + cover[i] + "'>" + "<p>" + dato[i] + "</p>" + "</a>" + "</div>";
            document.getElementById("result").innerHTML = result;
        }
     
        console.log(result);
}