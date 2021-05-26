// const list = document.getElementById("list")
// const students = ["Bhavya", "Soumith", "Ashwat", "Rehan"] //array
// for (let index = 0; index < students.length; index++)
// {
//     let list_item = document.createElement("div")
//     list_item.innerHTML += students[index]
//     list.append(list_item)
// }   
// //Methods
// let newStudent = "Yazir"
// students.pop("Rehan")
// students.push(newStudent)
// console.log(students)
const addItem = document.getElementById("add_item")
const addButton = document.getElementById("add_button")
const list = document.getElementById("list")
const fruits = [] //an empty array or a list
addButton.addEventListener("click",
function()
{
    let list_item = document.createElement("li")
    // list_item.innerHTML += addItem.value
    fruits.push(addItem.value)
    for (let count = 0; count < fruits.length; count++)
    {
        list_item.innerHTML = fruits[count]
        list.append(list_item)
    }
    addItem.value = ""
})
console.log(fruits)
const reset = document.getElementById("reset")
reset.addEventListener("click",
function()
{
    fruits.pop(addItem.value)
    list_item.innerHTML = fruits[count]
    list.append(list_item)
}
)

