const toDoForm = document.getElementById('todo-form')
const toDoInput = document.querySelector('#todo-form input')
const toDoList = document.getElementById('todo-list')

const TODOS_KEY ="todos"

let toDos = []

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event) {
    

    const li = event.target.parentElement;
    li.remove()
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    toDoForm.classList.remove(HIDDEN_CLASSNAME)
    saveToDos()
    

}



function paintToDo(newTodo) {
    const li = document.createElement('li')
    li.id = newTodo.id
    const span = document.createElement('span')
    span.innerText = newTodo.text 
    const button = document.createElement('button')
    button.innerText = "✅"

    toDoForm.classList.add("hidden")

    button.addEventListener('click', deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)

}


function handleToDoSubmit(event) {
    event.preventDefault()
    const newTodo = toDoInput.value // ToDo 입력값이 삭제되기 전 저장
    toDoInput.value = ""
    const newTodoobj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoobj)
    paintToDo(newTodoobj) // ToDo 입력값을 paintToDo 펑션에 보냄
    saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

function sayHello(item) {
    console.log("this is the turn of", item)
}

const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos)
    toDos = parsedToDos
    parsedToDos.forEach(paintToDo)
}   
