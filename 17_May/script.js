const btn = document.getElementById("btn")
const date = document.getElementById("date")
// date.innerHTML = Date()
// btn.addEventListener("click", 
// function (){
//     date.innerHTML = Date()
// })
const heading = document.getElementsByTagName("h1")[0]


heading.addEventListener("mouseover",
function (){
    heading.style.color = "pink"
    heading.textContent = "When we change something"
}
)

const box = document.querySelector(".box")
box.textContent = "To Enter, type your name"

const box_one = document.querySelector("#box_one")
box_one.innerHTML = "Look, I work for all"

//conditionals
// if,  else, else if

 // single one is used to assign the variable

btn.addEventListener("click",
function (){
    const fname = document.getElementById("fname")
    if (fname.value == "Alice")
    {
        box.innerHTML = "You can come in"
    }
    else if (fname.value == "delivery")
    {
        box.innerHTML = "You can leave the package at the door"
    }
    else
    {
        box.innerHTML = "Sorry, you are not allowed"
    }
})






