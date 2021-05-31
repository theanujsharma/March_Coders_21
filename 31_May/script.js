//How to declare a variable?
//let 
//var
//const -- You can not use this variable more than once
// var fname = "Anuj"
// fname = "Soumith"
// fname = "Bhavya"
// fname = "Ashwat"
// console.log(fname)

//Data Types : - Strings, Numbers, Boolean

//loop
let students = ["Bhavya", "Soumith", "Ashwat"]
for (let index = 0; index<students.length; index++)
{
    console.log(students[index])
}


//conditionals 
let fname = "John"
if (fname === "Alice") // true or false === is for comparing things
{
    console.log('Hello, Alice')
}
else if(fname === "John")   // true or false
{
    console.log("Hello, John")
}

let isStudent = true 
if (false)
{
    console.log("Let them join the meeting")
}
else if (true)
{
    console.log('Sorry, you are not allowed')
}

console.log(15<8) 

// === is for strictly checking 

function greetings(fname) // making a function on the prompise that I will give you fname
{
    console.log("Hello " + fname)
}

greetings("Alice") // calling a function
greetings("John")
let sname
console.log(sname)

const player = "Anuj"
function players()
{
    let player = "Ashwat" //local variable
    console.log(player)
}
players()