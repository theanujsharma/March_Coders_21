const studentIN = document.getElementById("student_in")
const studentOut = document.getElementById("student_out")
const count = document.getElementById("count")
let num = 0 // starting value 
studentIN.addEventListener("click",
function(){
    num = num + 1 //incrementing by 1 // adding things
    count.innerHTML = num
})
studentOut.addEventListener("click",
function(){
    num = num - 1 // decrement by 1 //subtract
    count.innerHTML = num
})


