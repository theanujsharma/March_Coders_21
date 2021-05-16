// Document Object Model
// let 
// const 
// var
// declare a variable 
const student_name = "Alice"
console.log(student_name)

let fname = "John"
console.log(fname)

var lname = "White"
console.log(lname)

// How to declare a variable?
// 1) name only contain letters, numbers, symbols $ _
// 2) first character must not be a number 


var firstName = "James"
console.log(firstName)

// What is an array? 
// Answer : - It is a collection of similar items.

const fruits = ["Apple", "Mango", "Kiwi", "Banana"]
console.log(fruits[3])

// loop
// condition =, >, <
const marks = 90
if (marks === 90)
{
    console.log("You got 90")
}
else if(marks < 90)
{
    console.log("You got A")
}



const btn = document.getElementById("btn")

btn.addEventListener("click",
function(){

    const body = document.getElementById("body")

    if (true)
    {
        body.style.backgroundColor = "black"
        btn.value = "Light Mode"
    }
    else
    {
        body.style.backgroundColor = "white"
        btn.value = "Dark Mode"
    }
}
)








