
    
function event_boda(id){
        var cover = ["event_boda.jpg"];
       /* var result = "";

        document.getElementById("events").innerHTML = result;    
    
        console.log(event_boda);
    
        for(var i=0; i<cover.length; i++){
            result = result + "<div>" + "<img src='img/" + cover[i] + "'>" + "</div>";
            document.getElementById("events").innerHTML = result;
        }*/
        var controls = document.getElementsByClassName('control');
        console.log(controls);
        if(controls.length > 0){

            for(var i = 0; i< controls.length;i++){
                var className = controls[i].className;
                if(className.indexOf('control2') > -1){
                    controls[i].remove('control2');
                }
            }
        }
        document.getElementById(id).className="control2";

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



