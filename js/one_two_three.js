
var a = Math.floor(Math.random() * 3)+1;
function imgAI(){
    if(a==1)
        document.getElementById("AI").src = "img/bua.png"
    if(a==2)
        document.getElementById("AI").src = "img/keo.png"
    if(a==3)
        document.getElementById("AI").src = "img/bao.png"
        document.getElementById("AI").style = "height: 150px;width: 150px;";
}
function replace(x){
    document.getElementById("bao").remove();
    document.getElementById("bua").remove();
    document.getElementById("keo").remove();

    const yourchoose = document.createElement('div')
    yourchoose.className = "row"
    if(x==1)
        yourchoose.innerHTML = '<div class="row01" style="position: relative;left: -28px;"><img src="img/bua.png" style="height: 150px;width: 150px;"></div>';
    if(x==2)
        yourchoose.innerHTML = '<div class="row01" style="position: relative;left: -28px;"><img src="img/keo.png" style="height: 150px;width: 150px;"></div>';;
    if(x==3)
        yourchoose.innerHTML = '<div class="row01" style="position: relative;left: -28px;"><img src="img/bao.png" style="height: 150px;width: 150px;"></div>';;
    
    document.getElementById('kbbcot2').appendChild(yourchoose);
}
//1 bua 2 keo 3 bao
//0 thua 1 hoa 2 thang
function logic(x,a){
    if(a == 1){
        if(x == 1)
            return 1
        if(x == 2)
            return 0
        if(x == 3)
            return 2
    }
    if(a == 2){
        if(x == 1)
            return 2
        if(x == 2)
            return 1
        if(x == 3)
            return 0
    }
    if(a == 3){
        if(x == 1)
            return 0
        if(x == 2)
            return 2
        if(x == 3)
            return 1
    }
}
module.exports = logic

function choose(x){
    switch(logic(x,a)){
        case 0: 
            document.getElementById("ketqua").innerHTML = "Bạn thua!";
            break;
        case 2:
            document.getElementById("ketqua").innerHTML = "Bạn thắng!"
            break;
        case 1:
            document.getElementById("ketqua").innerHTML = "Hòa!"
            break;
    }
    logic(x,a)
    imgAI()
    replace(x)
    var ag = document.getElementById("again");
    ag.style.display = "block"
}
function again(){
    window.location.reload(1);
    a = Math.floor(Math.random() * 3)+1;
}