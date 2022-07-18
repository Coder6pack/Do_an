function light(a,b,listnone) {

    var li = document.getElementById(a);
    li.style.borderLeftColor = "white";
    
    var i = document.getElementById(b);
    i.style.color = "white";
    var ul = document.getElementById(listnone);
    ul.style.display = "block";

}
function normal(a,b,listnone) {

    var li = document.getElementById(a);
    li.style.borderLeftColor = "rgba(255,255,255,0.5)";
    
    var i = document.getElementById(b);
    i.style.color = "rgba(255,255,255,0.75)";
    var ul = document.getElementById(listnone);
    ul.style.display = "none";

}