
    
function event_boda(){
        var cover = ["event_boda.jpg"];
        var result = "";

        document.getElementById("events").innerHTML = result;    
    
        console.log(event_boda);
    
        for(var i=0; i<cover.length; i++){
            result = result + "<div>" + "<img src='img/" + cover[i] + "'>" + "</div>";
            document.getElementById("events").innerHTML = result;
        }
}


    
function event_openhouse(){
    var cover = ["event_openhouse.jpg"];
    var result = "";

    document.getElementById("events").innerHTML = result;    

    console.log(event_openhouse);

    for(var i=0; i<cover.length; i++){
        result = result + "<div>" + "<img src='img/" + cover[i] + "'>" + "</div>";
        document.getElementById("events").innerHTML = result;
    }
}



