var a = Math.floor(Math.random() * 10);
var c = Math.floor(Math.random() * 2); 
document.getElementById('sosanh1').innerHTML = c==1? ">" : "<"
document.getElementById("o1").innerHTML = a
function sosanh(c){
    if(c == 1){ 
        document.getElementById('sosanh1').innerHTML = ">"
    }
    else if(c == 0){
        document.getElementById('sosanh1').innerHTML = "<"
    }
}
function point(inpu,points,a,c){
    if(a == inpu)
        return points;
    if(c==1)//>
        if(a>inpu)
        {
            points++;
            return points;
        }
        else{
            if(points==0)
                return 0;
            else{
                points--;
                return points;
            }
        }
    else if(c==0)
        if(a<inpu)
        {
            points++;
            return points;
        }
        else{
            if(points==0)
                return 0;
            else{
                points--;
                return points;
            }
        }
}

function handle2(){
    var inpu = parseInt(document.getElementById("ketquain").value);
    var points = parseInt(document.getElementById("points").textContent);
    document.getElementById("points").innerHTML = point(inpu,points,a,c);
    localStorage.setItem('Highest_score', point(inpu,points,a,c));
    document.getElementById('ketquain').value = "";
    a = Math.floor(Math.random() * 10);
    c = Math.floor(Math.random() * 2);
    sosanh(c);
    document.getElementById("o1").innerHTML = a;
}