//document.getElementById("o3").innerHTML = document.getElementById("o1").textContent

var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 10);
function whatis(){
    document.getElementById("o1").innerHTML = a+""
    document.getElementById("o2").innerHTML = b+""
    }
    window.onload = function () {
    whatis();
    }
function point(a,b,inpu,p){
    var c = a + b
    if(c == inpu){
        p += 1;
        return p;
    }
    else{
        if(p == 0)
            return 0;
        else{
            p -=1
            return p;
        }
    }
}
module.exports = point
function start(){
    document.getElementById("points").innerHTML = 0
}
function handle(){
    var inpu = parseInt(document.getElementById("ketquain").value);
    var points = parseInt(document.getElementById("points").textContent);
    document.getElementById("points").innerHTML = point(a,b,inpu,points)+"";
    localStorage.setItem('Highest_score', point(a,b,inpu,points));
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    document.getElementById("o1").innerHTML = a
    document.getElementById("o2").innerHTML = b
    document.getElementById("ketquain").value = ""
}

