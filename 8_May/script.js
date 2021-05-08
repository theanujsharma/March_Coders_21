const box = document.getElementById("box")

const black = document.getElementById("black")

const green = document.getElementById("green")

const red = document.getElementById("red")

const blue = document.getElementById("blue")

const body = document.getElementById("body")

black.addEventListener("click",
function (){
    // box.innerHTML="Now, I will change on an event"
    // box.style.backgroundColor="red"
    body.style.backgroundColor="black"
})

green.addEventListener("click",
function (){
    // box.innerHTML="Now, I will change on an event"
    // box.style.backgroundColor="red"
    body.style.backgroundColor="Green"
})

blue.addEventListener("click",
function (){
    // box.innerHTML="Now, I will change on an event"
    // box.style.backgroundColor="red"
    body.style.backgroundColor="Blue"
})

red.addEventListener("click",
function (){
    // box.innerHTML="Now, I will change on an event"
    // box.style.backgroundColor="red"
    body.style.backgroundColor="Red"
})

const myColor = document.getElementById("myColor")

const change = document.getElementById("change")

change.addEventListener("click",
function (){
    body.style.backgroundColor = myColor.value
})









