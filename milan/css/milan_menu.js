
    
function menu(){
        var cover = "";
        var result = "";

        document.getElementById("menu").innerHTML = result;    
    
        console.log(menu);
    
        for(var i=0; i<cover.length; i++){
            result = result + "<div>" + cover[i] + "</div>";
            document.getElementById("menu").innerHTML = result;
        }
}
