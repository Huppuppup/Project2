var Cake = document.getElementsByClassName("Cake")
var pink = document.getElementById("pink")
var red = document.getElementById("red")
var purple = document.getElementById("purple")
var blue = document.getElementById("blue")
var green = document.getElementById("green")
var yellow = document.getElementById("yellow")
var T1 = document.getElementById("T1")
var T2 = document.getElementById("T2")
var T3 = document.getElementById("T3")
var T4 = document.getElementById("T4")
var T5 = document.getElementById("T5")
var T6 = document.getElementById("T6")
var text = document.getElementsByClassName("text")
var set_text = document.getElementById("set_text")
// var strawberry = document.getElementById("strawberry")
// var gingerbread = document.getElementById("gingerbread")
// var pine = document.getElementById("pine")
// var lemon = document.getElementById("lemon")
var topping = document.getElementsByClassName("topping")
function set_pink(){
    if(Cake[0].style.backgroundColor != "pink"){
        Cake[0].style.backgroundColor = "pink"
        pink.style.border = "1px solid"
        red.style.border = "0px solid"
        purple.style.border = "0px solid"
        blue.style.border = "0px solid"
        green.style.border = "0px solid"
        yellow.style.border = "0px solid"
        pink.style.height = "36"
        pink.style.width = "36"
    }
    else if(Cake[0].style.backgroundColor == "pink"){
        Cake[0].style.backgroundColor = "white"
        pink.style.border = "0px solid"
        pink.style.height = "40"
        pink.style.width = "40"
    }
}
function set_red(){
    if(Cake[0].style.backgroundColor != "red"){
        Cake[0].style.backgroundColor = "red"
        pink.style.border = "0px solid"
        red.style.border = "1px solid"
        purple.style.border = "0px solid"
        blue.style.border = "0px solid"
        green.style.border = "0px solid"
        yellow.style.border = "0px solid"
        red.style.height = "36"
        red.style.width = "36"
    }
    else if(Cake[0].style.backgroundColor == "red"){
        Cake[0].style.backgroundColor = "white"
        red.style.border = "0px solid"
        red.style.height = "40"
        red.style.width = "40"
    }
}
function set_purple(){
    if(Cake[0].style.backgroundColor != "purple"){
        Cake[0].style.backgroundColor = "purple"
        pink.style.border = "0px solid"
        red.style.border = "0px solid"
        purple.style.border = "1px solid"
        blue.style.border = "0px solid"
        green.style.border = "0px solid"
        yellow.style.border = "0px solid"
        purple.style.height = "36"
        purple.style.width = "36"
    }
    else if(Cake[0].style.backgroundColor == "purple"){
        Cake[0].style.backgroundColor = "white"
        purple.style.border = "0px solid"
        purple.style.height = "40"
        purple.style.width = "40"
    }
}
function set_blue(){
    if(Cake[0].style.backgroundColor != "blue"){
        Cake[0].style.backgroundColor = "blue"
        pink.style.border = "0px solid"
        red.style.border = "0px solid"
        purple.style.border = "0px solid"
        blue.style.border = "1px solid"
        green.style.border = "0px solid"
        yellow.style.border = "0px solid"
        blue.style.height = "36"
        blue.style.width = "36"
        
    }
    else if(Cake[0].style.backgroundColor == "blue"){
        Cake[0].style.backgroundColor = "white"
        blue.style.border = "0px solid"
        blue.style.height = "40"
        blue.style.width = "40"
    }
}
function set_green(){
    if(Cake[0].style.backgroundColor != "green"){
        Cake[0].style.backgroundColor = "green"
        pink.style.border = "0px solid"
        red.style.border = "0px solid"
        purple.style.border = "0px solid"
        blue.style.border = "0px solid"
        green.style.border = "1px solid"
        yellow.style.border = "0px solid"
        green.style.height = "36"
        green.style.width = "36"
    }
    else if(Cake[0].style.backgroundColor == "green"){
        Cake[0].style.backgroundColor = "white"
        green.style.border = "0px solid"
        green.style.height = "40"
        green.style.width = "40"
    }
}
function set_yellow(){
    if(Cake[0].style.backgroundColor != "yellow"){
        Cake[0].style.backgroundColor = "yellow"
        pink.style.border = "0px solid"
        red.style.border = "0px solid"
        purple.style.border = "0px solid"
        blue.style.border = "0px solid"
        green.style.border = "0px solid"
        yellow.style.border = "1px solid"
        yellow.style.height = "36"
        yellow.style.width = "36"
    }
    else if(Cake[0].style.backgroundColor == "yellow"){
        Cake[0].style.backgroundColor = "white"
        yellow.style.border = "0px solid"
        yellow.style.height = "40"
        yellow.style.width = "40"
    }
}
function sqr(){
    Cake[0].style.borderRadius = "0%"
    T1.style.top = "0px"
    T1.style.left = "0px"
    T3.style.top = "0px"
    T3.style.right = "0px"
    T4.style.bottom = "0px"
    T4.style.left = "0px"
    T6.style.bottom = "0px"
    T6.style.right = "0px"
}
function rnd(){
    Cake[0].style.borderRadius = "50%"
    T1.style.top = "100px"
    T1.style.left = "20px"
    T3.style.top = "100px"
    T3.style.right = "20px"
    T4.style.bottom = "100px"
    T4.style.left = "20px"
    T6.style.bottom = "100px"
    T6.style.right = "20px"
}

function strawberry(){
    topping[0].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[1].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[2].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[3].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[4].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[5].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
}

function gingerbread(){
    topping[0].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[1].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[2].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[3].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[4].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[5].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
}
function pine(){
    topping[0].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[1].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[2].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[3].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[4].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[5].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
}
function lemon(){
    topping[0].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/6866/6866595.png)"
    topping[1].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/6866/6866595.png)"
    topping[2].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/6866/6866595.png)"
    topping[3].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/6866/6866595.png)"
    topping[4].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/6866/6866595.png)"
    topping[5].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/6866/6866595.png)"
}
function change_text(){
    text[0].innerText = set_text.value
}
