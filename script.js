var ans = document.getElementById("Ans");

function add(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);

    ans.innerHTML="Answer is:"+(n1+n2);
}

function sub(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);

    ans.innerHTML="Answer is:"+(n1-n2);
}

function mul(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);

    ans.innerHTML="Answer is:"+(n1*n2);
}

function div(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);

    ans.innerHTML="Answer is:"+(n1/n2);
}

function modulo(){
    var n1=parseInt(document.getElementById("num1").value);
    var n2=parseInt(document.getElementById("num2").value);

    ans.innerHTML="Answer is:"+(n1%n2);
}