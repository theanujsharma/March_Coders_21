const write = document.getElementById("write")
const btn = document.getElementById("btn")
const box = document.getElementById("box")
btn.addEventListener("click",
function (){
    let entry = document.createElement("p")
    box.append(entry)
    entry.innerHTML = write.value
})