var s = parseInt(document.getElementById("giay").textContent)
function start(){
    document.getElementById("giay").innerHTML = s;
    document.getElementById("points").innerHTML = 0
    if(s == 0){
        clearTimeout(timeout);
        window.location.href = "Guess_highest_score.html";
    }
    timeout = setTimeout(function(){
        s--;
        start(s);
    }, 1000);
    document.getElementById("stop").onclick = null;
}
