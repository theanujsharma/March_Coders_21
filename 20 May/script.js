const studentIN = document.getElementById("student_in")
const studentOut = document.getElementById("student_out")
const count = document.getElementById("count")
const error = document.getElementById("error")
let num = 0 // starting value 
studentIN.addEventListener("click",
function(){
    num = num + 1 //incrementing by 1 // adding things
    if (num > 4)
    {
        count.innerHTML = num
        error.innerHTML = "You have reached the limit"
        num = 5
    }
    else
    {
        count.innerHTML = num 
    }
})
studentOut.addEventListener("click",
function(){
    num = num - 1 // decrement by 1 //subtract
    if (num < 5)
    {
        count.innerHTML = num
        error.innerHTML = ""
    }
    
})


