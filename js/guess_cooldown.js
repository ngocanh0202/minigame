var s = parseInt(document.getElementById("giay").textContent)
function start(){
    document.getElementById("points").innerHTML = 0;
    time();
    document.getElementById("stop").onclick = null;
}
function time(){
    document.getElementById("giay").innerHTML = s;
    if(s == 0){
        clearTimeout(timeout);
        window.location.href = "Guess_highest_score.html";
    }
    timeout = setTimeout(function(){
        s--;
        time();
    }, 1000);
}