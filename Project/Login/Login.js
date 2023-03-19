var account = document.getElementById("in1").value
var title = document.getElementsByTagName("title")
var num = document.getElementById("Num")
var in1 = document.getElementById("in1")
var password = document.getElementById("in3").innerText
var but1 = document.getElementById("bu1")
var but2 = document.getElementById("b2")
var f1 = document.getElementById("f1")
var f2 = document.getElementById("f2")

f1.style.display = "flex"
f2.style.display = "none"

function change(){
    f1.style.display = "none"
    f2.style.display = "flex"
}