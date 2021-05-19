// const heading = document.getElementById("heading")
// heading.classList = "pink"
// heading.classList = "align"
// //ClassName and ClassList

// const write = document.getElementById("write")
// write.value = "I came from JS"
// write.type = "button"

// const btn = document.createElement("button")
// btn.innerHTML = "Remove"
// document.body.append(btn)
// btn.addEventListener("click",
// function(){
//     write.remove()
// }
// )

// const link = document.getElementById("link")
// link.href = "http://www.google.com"

const list_item = document.getElementById("list_item")
const btn = document.getElementById("btn")
const list = document.getElementById("list")

btn.addEventListener("click",
function(){
    var item = document.createElement("li")
    item.innerText = list_item.value
    list.appendChild(item)
    list_item.value = ""
})

const remove_btn = document.getElementById("remove_btn")

remove_btn.addEventListener("click",
function(){
    li.remove()
})



