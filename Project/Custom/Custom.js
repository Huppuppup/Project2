var signup =document.getElementById("login")
var signout = document.getElementById("signout")

if (localStorage.getItem("userNow")) {
    signup.style.display = "none"
} else {
    signout.style.display = "none"
}

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
var sqr_choice = document.getElementsByClassName("sqr_shape")
var rnd_choice = document.getElementsByClassName("rnd_shape")
var cake_choice = document.getElementsByClassName("cake_choice")
var strawberry1 = document.getElementById("strawberry")
var gingerbread1 = document.getElementById("gingerbread")
var pine1 = document.getElementById("pine")
var lemon1 = document.getElementById("lemon")
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
    if(sqr_choice[0].style.backgroundColor == "white" && sqr_choice[0].style.color == "black"){
        sqr_choice[0].style.backgroundColor = "black"
        sqr_choice[0].style.color = "white"
        sqr_choice[0].style.border = "2px solid black"
        rnd_choice[0].style.backgroundColor = "white"
        rnd_choice[0].style.color = "black"
        rnd_choice[0].style.border = "2px solid black"
    }
    else{
        sqr_choice[0].style.backgroundColor = "white"
        sqr_choice[0].style.color = "black"
    }
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
    if(rnd_choice[0].style.backgroundColor == "white" && rnd_choice[0].style.color == "black"){
        rnd_choice[0].style.backgroundColor = "black"
        rnd_choice[0].style.color = "white"
        rnd_choice[0].style.border = "2px solid black"
        sqr_choice[0].style.backgroundColor = "white"
        sqr_choice[0].style.color = "black"
        sqr_choice[0].style.border = "2px solid black"
    }
    else{
        rnd_choice[0].style.backgroundColor = "white"
        rnd_choice[0].style.color = "black"
    }
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
    if(strawberry1.style.backgroundColor == "white" && strawberry1.style.color == "black"){
        strawberry1.style.backgroundColor = "black"
        strawberry1.style.color = "white"
        strawberry1.style.border = "2px solid black"
        gingerbread1.style.backgroundColor = "white"
        gingerbread1.style.color = "black"
        gingerbread1.style.border = "2px solid black"
        pine1.style.backgroundColor = "white"
        pine1.style.color = "black"
        pine1.style.border = "2px solid black"
        lemon1.style.backgroundColor = "white"
        lemon1.style.color = "black"
        lemon1.style.border = "2px solid black"
    }
    else{
        strawberry1.style.backgroundColor = "white"
        strawberry1.style.color = "black"
    }
    topping[0].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[1].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[2].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[3].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[4].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
    topping[5].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/590/590685.png)"
}

function gingerbread(){
    if(gingerbread1.style.backgroundColor == "white" && gingerbread1.style.color == "black"){
        gingerbread1.style.backgroundColor = "black"
        gingerbread1.style.color = "white"
        gingerbread1.style.border = "2px solid black"
        strawberry1.style.backgroundColor = "white"
        strawberry1.style.color = "black"
        strawberry1.style.border = "2px solid black"
        pine1.style.backgroundColor = "white"
        pine1.style.color = "black"
        pine1.style.border = "2px solid black"
        lemon1.style.backgroundColor = "white"
        lemon1.style.color = "black"
        lemon1.style.border = "2px solid black"
    }
    else{
        gingerbread1.style.backgroundColor = "white"
        gingerbread1.style.color = "black"
    }
    topping[0].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[1].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[2].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[3].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[4].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
    topping[5].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/601/601306.png)"
}
function pine(){
    if(pine1.style.backgroundColor == "white" && pine1.style.color == "black"){
        pine1.style.backgroundColor = "black"
        pine1.style.color = "white"
        pine1.style.border = "2px solid black"
        strawberry1.style.backgroundColor = "white"
        strawberry1.style.color = "black"
        strawberry1.style.border = "2px solid black"
        gingerbread1.style.backgroundColor = "white"
        gingerbread1.style.color = "black"
        gingerbread1.style.border = "2px solid black"
        lemon1.style.backgroundColor = "white"
        lemon1.style.color = "black"
        lemon1.style.border = "2px solid black"
    }
    else{
        pine1.style.backgroundColor = "white"
        pine1.style.color = "black"
    }
    topping[0].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[1].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[2].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[3].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[4].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
    topping[5].style.backgroundImage = "url(https://cdn-icons-png.flaticon.com/512/5987/5987797.png)"
}
function lemon(){
    if(lemon1.style.backgroundColor == "white" && lemon1.style.color == "black"){
        lemon1.style.backgroundColor = "black"
        lemon1.style.color = "white"
        lemon1.style.border = "2px solid black"
        strawberry1.style.backgroundColor = "white"
        strawberry1.style.color = "black"
        strawberry1.style.border = "2px solid black"
        gingerbread1.style.backgroundColor = "white"
        gingerbread1.style.color = "black"
        gingerbread1.style.border = "2px solid black"
        pine1.style.backgroundColor = "white"
        pine1.style.color = "black"
        pine1.style.border = "2px solid black"
    }
    else{
        lemon1.style.backgroundColor = "white"
        lemon1.style.color = "black"
    }
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
