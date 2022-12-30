var s = parseInt(document.getElementById("giay").textContent)
function start(){
    document.getElementById("giay").innerHTML = s;
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
