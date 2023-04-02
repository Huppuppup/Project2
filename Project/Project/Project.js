var cake_text = document.getElementsByClassName("Cake_buy")
var index = 0;
var slides = document.getElementsByClassName("picture")
var indexImg = document.querySelector(".indexImg")
var signup =document.getElementById("login")
var login = document.getElementById("login")

let Cakes = [
    {
        id: 0,
        name: 'Tiramisu',
        image: 'http://parisgateaux.vn/wp-content/uploads/2021/07/C026-Tiramisu-Y-300x300.jpg', //link ảnh sản phẩm
        price: "300.000d"
    },
    {
        id: 1,
        name: 'Mochi dâu tây',
        image:'http://parisgateaux.vn/wp-content/uploads/2019/12/7bf6904c5298abc6f289-1-300x300.jpg',
        price: "200.000d"
    },
    {
        id: 2,
        name: 'Strawberry flame',
        image:'http://parisgateaux.vn/wp-content/uploads/2019/05/gato-weprff-300x300.jpg',
        price: "300.000d"
    },
    {
        id: 3,
        name: 'Angel',
        image:'http://parisgateaux.vn/wp-content/uploads/2018/08/f30ccfb60d62f43cad73-300x300.jpg',
        price: "400.000d"
    },
    {
        id: 4,
        name: 'Black forest',
        image:'http://parisgateaux.vn/wp-content/uploads/2019/05/%C4%91%E1%BA%A1i-ng%C3%A0n-m%E1%BB%9Bi-300x300.jpg',
        price: "500.000d"
    },
    {
        id: 5,
        name: 'Panna cotta matcha',
        image:'http://parisgateaux.vn/wp-content/uploads/2018/08/C096-C098-%E2%80%93-panna-cotta-matcha-300x300.jpg',
        price: "500.000d"
    },
    {
        id: 6,
        name: 'Eva',
        image:'http://parisgateaux.vn/wp-content/uploads/2018/08/97ae0b482df8d5a68ce9-300x300.jpg',
        price: "600.000d"
    },
    {
        id: 7,
        name: 'Caramel',
        image:'http://parisgateaux.vn/wp-content/uploads/2018/08/caramel-300x300.jpg',
        price: "700.000d"
    },
    {
        id: 8,
        name: 'Browny bear',
        image:'http://parisgateaux.vn/wp-content/uploads/2019/05/Browny-Bear-300x300.jpg',
        price: "800.000d"
    }
]

for(var i in Cakes){
    createItem(Cakes,i)
}

function createItem(Cakes,i){
    let cakeList = document.querySelector(".Cake_container")
    
    let cake = document.createElement("div")
    cake.classList.add("cake")

    let content = document.createElement("div")
    content.classList.add("Cake_content")

    let name = document.createElement("b")
    name.classList.add("Cake_text")
    name.classList.add("Cake_name")
    name.textContent = Cakes[i].name

    let image = document.createElement("img")
    image.classList.add("Cake_IMG")
    image.setAttribute("src",Cakes[i].image)

    let btn = document.createElement("p")
    btn.classList.add("Cake_text")
    btn.classList.add("Cake_buy")
    btn.setAttribute("onmouseover",'change_text(this)')
    btn.setAttribute("onmouseout",'normal(this)')
    btn.textContent = Cakes[i].price
    
    cakeList.appendChild(cake)
    cake.appendChild(image)
    cake.appendChild(content)
    content.appendChild(name)
    content.appendChild(btn)
}
function change_text(x){
    x.style.backgroundColor = "white"
    x.style.color = "black"
    x.innerText = "Buy"
}
function normal(x){
    x.style.backgroundColor = "black"
    x.style.color = "white"
    x.innerText = "300,000 vnd"
}
function showSlideAuto(){
    setInterval(function () {
        index++;
        for (var i = 0; i < 3; i++) {
            slides[i].style.display = "none"
        }
    
        if (index > 2) {
            index = 0;
        }
        slides[index].style.display = "block"
    }, 2000)
}

showSlideAuto()

function previewImage(){
    index--;
    for (var i = 0; i < 3; i++) {
        slides[i].style.display = "none"
    }
    if (index <0) {
        index = 2;
    }
    slides[index].style.display = "block"
}

function nextImage(){
    
    index++;
    for (var i = 0; i < 3; i++) {
        slides[i].style.display = "none"
    }
    if (index >2) {
        index = 0;
    }
    slides[index].style.display = "block"
}
