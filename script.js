var a = true, b = false;
var u = '', v = '';
const updateScreen = (number) => {
    name2.value = number;
}

function s(){
    window.location.href = "main.html";
    const x = document.getElementById("player1").value;
    const y = document.getElementById("player2").value;
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("x", x);
        localStorage.setItem("y", y);
    }
}
function ss(){
    document.getElementById("name1").innerHTML = localStorage.getItem("x");
    document.getElementById("name2").innerHTML = localStorage.getItem("y");
}
function myfun(){
    var n = Math.floor(Math.random()*6+1);
    var m = "dice"+n+".png";
    document.getElementById("cngImg").src=m;
    if(a === true){
        var score = parseInt(document.getElementById("score1").value);
        score += parseInt(n);
        u+="+"+n;
        document.getElementById("g1").value=u;
        document.getElementById("score1").value=score;
        if(score>=50){
            var win = "Hurray " + localStorage.getItem("x") + " wins. ";
            setTimeout(alert(win), 2000); 
            window.location.href="main.html";
        }
        a = false, b = true;
    }
    else{
        var score = parseInt(document.getElementById("score2").value);
        score += parseInt(n);
        v+="+"+n;
        document.getElementById("g2").value=v;
        document.getElementById("score2").value=score;
        if(score>=50){
            var win = "Hurray " + localStorage.getItem("y") + " wins. ";
            setTimeout(alert(win), 2000); 
            window.location.href="main.html";
        }
        b = false, a = true;
    }
    
}
