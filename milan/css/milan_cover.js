
    
function muestra(){
        var cover = ["mi19004_33.jpg"];
        var result = "";

        document.getElementById("muestra").innerHTML = result;    
    
        console.log(muestra);
    
        for(var i=0; i<cover.length; i++){
            result = result + "<div>" + "<img src='img/" + cover[i] + "'>" + "</div>";
            document.getElementById("muestra").innerHTML = result;
        }
}


    
function muestra1(){
    var cover = ["mi19004_44.jpg"];
    var result = "";

    document.getElementById("muestra").innerHTML = result;    

    console.log(muestra1);

    for(var i=0; i<cover.length; i++){
        result = result + "<div>" + "<img src='img/" + cover[i] + "'>" + "</div>";
        document.getElementById("muestra").innerHTML = result;
    }
}


function muestra2(){
    var cover = ["mi19004_100.jpg"];
    var result = "";

    document.getElementById("muestra").innerHTML = result;    

    console.log(muestra1);

    for(var i=0; i<cover.length; i++){
        result = result + "<div>" + "<img src='img/" + cover[i] + "'>" + "</div>";
        document.getElementById("muestra").innerHTML = result;
    }
}


function muestra3(){
    var cover = ["mi19004_55.jpg"];
    var result = "";

    document.getElementById("muestra").innerHTML = result;    

    console.log(muestra1);

    for(var i=0; i<cover.length; i++){
        result = result + "<div>" + "<img src='img/" + cover[i] + "'>" + "</div>";
        document.getElementById("muestra").innerHTML = result;
    }
}

