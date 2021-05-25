const firstNumber = document.getElementById("first_number")
const secondNumber = document.getElementById("second_number")
const add = document.getElementById("add")
const answer = document.getElementById("answer")
const sub = document.getElementById("sub")
const multiply = document.getElementById("multiply")
const division = document.getElementById("division")
const clear = document.getElementById("clear")
add.addEventListener("click",
function(){
   answer.textContent = parseInt(firstNumber.value) + parseInt(secondNumber.value) 
})

sub.addEventListener("click", 
function(){
    answer.textContent = parseInt(firstNumber.value) - parseInt(secondNumber.value)
})

multiply.addEventListener("click",
function(){
    answer.textContent = parseInt(firstNumber.value) * parseInt(secondNumber.value)
})

division.addEventListener("click",
function(){
    answer.textContent = parseInt(firstNumber.value) / parseInt(secondNumber.value)
})

clear.addEventListener("click",
function(){
    firstNumber.value = ""
    secondNumber.value = ""
    answer.textContent = ""
})



