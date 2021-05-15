// JS Programming Languages
// Logics 
//input 
//output
//manipulating ===> Mixer Grinder
// const 
// function 
//Alice
// Variable or Container
// Bowl
// Bowl of rice, or bowl of icecream, bowl of fruits
// const firstName = "Alice"
// console.log(firstName)
const write = document.getElementById("write")
const box = document.getElementById("box")
const btn = document.getElementById("button")

btn.addEventListener("click",
function (){
    box.innerText = write.value
    write.value = ""
    btn.value = "I am happy to be clicked"
})



