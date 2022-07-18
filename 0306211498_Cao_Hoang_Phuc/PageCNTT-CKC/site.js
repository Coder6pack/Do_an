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
var dem = 1;
function back(){
    var sld = document.getElementById("slideshow");
    dem--;
    if (dem == 0)
    {
        dem = 4;
    }

    sld.style.backgroundImage = "url(image/slide/" + dem + ".png)";
    
    
}
next = function (){
    var sld = document.getElementById("slideshow");
    dem++;
    if (dem == 5)
    {
        dem = 1;
    }
    sld.style.backgroundImage = "url(image/slide/" + dem + ".png)";
    
    
    


}
setInterval(next,3000);

function Hien(a){

    var span = document.getElementById(a);
    span.style.padding = "30px 15px";

}
function An(a) {

    var span = document.getElementById(a);
    span.style.padding = "15px";

}


var count = 1;
function An_ALL() {
    for (var i = count; i < count + 4; i++) {
        document.getElementById("news-" + i).style.display = "none";
    }
}

function back_4(){
    An_ALL();
    count--;
    if (count == 0) {
        count = 3;
    }
    
    for (var i = count; i < count + 4; i++) {
        document.getElementById("news-" + i).style.display = "block";
    }

}
function next_4(){
    An_ALL();
    count++;
    if (count == 4) {
        count = 1;
    }
    
    for (var i = count; i < count + 4; i++) {
        document.getElementById("news-" + i).style.display = "block";
    }

}


function blockk(a,b) {
    document.getElementById(a).style.display = "block";
    document.getElementById("li" + b + "-1").style.transitionDelay = "0s";
    document.getElementById("li" + b + "-4").style.transitionDelay = "0.75s";
    document.getElementById("li" + b + "-2").style.transitionDelay = "0.25s";
    document.getElementById("li" + b + "-3").style.transitionDelay = "0.5s";
    

}
function nonee(a,b) {
    document.getElementById(a).style.display = "none";
    document.getElementById("li" + b + "-4").style.transitionDelay = "0s";
    document.getElementById("li" + b + "-1").style.transitionDelay = "0.75s";
    document.getElementById("li" + b + "-2").style.transitionDelay = "0.5s";
    document.getElementById("li" + b + "-3").style.transitionDelay = "0.25s";
}