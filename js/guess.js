//document.getElementById("o3").innerHTML = document.getElementById("o1").textContent
var a = Math.floor(Math.random() * 10);
var b = Math.floor(Math.random() * 10);
var c = Math.floor(Math.random() * 3);
document.getElementById("o1").innerHTML = a
document.getElementById("o2").innerHTML = b

function point(c,inpu,p){
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
function start(){
    document.getElementById("points").innerHTML = 0
}
function handle(){
    var c = a + b;
    var inpu = parseInt(document.getElementById("ketquain").value);
    var points = parseInt(document.getElementById("points").textContent);
    document.getElementById("points").innerHTML = point(c,inpu,points)+"";
    localStorage.setItem('Highest_score', point(c,inpu,points));
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * 10);
    document.getElementById("o1").innerHTML = a
    document.getElementById("o2").innerHTML = b
    document.getElementById("ketquain").value = ""
}

