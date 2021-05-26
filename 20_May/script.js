const studentIN = document.getElementById("student_in")
const studentOut = document.getElementById("student_out")
const count = document.getElementById("count")
const error = document.getElementById("error")
let num = 0 // starting value 
studentIN.addEventListener("click",
function(){
    num = num + 1 //incrementing by 1 // adding things
    if (num < 6)
    {
        count.innerHTML = num
    }
    else
    {
        error.innerHTML = "No other student allowed"
        num = 5
    }
    
})

studentOut.addEventListener("click",
function(){

    num = num - 1 // decrement by 1 //subtract
    count.innerHTML = num
    error.innerHTML = ""
})


