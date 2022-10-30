const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector("#login-form input")
const loginText = document.querySelector("#Login-Text")
const greeting = document.querySelector("#greeting")

const clock = document.querySelector("#clock")
const todoList = document.querySelector("#todo-list")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = 'username'

function getClock() { // paintGreetings 펑션에서 Good morning, {사용자이름}
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    console.log(hours)
    const minutes = String(date.getMinutes()).padStart(2, "0");
   
    const time = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }`;
        
    // const CurrentTime = `${hours}:${minutes}`
}

function onLoginSubmit(event) {
    event.preventDefault()
    const username = loginInput.value
    localStorage.setItem(USERNAME_KEY, username)
    loginForm.classList.add("hidden")
    loginText.classList.add("hidden")

    
    
    paintGreetings(username)
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME)
    clock.classList.remove(HIDDEN_CLASSNAME, username) // 시계
    todoList.classList.remove(HIDDEN_CLASSNAME, username)
    // 여기야 여기라구 ***************************************************************************
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    console.log(hours)
    const minutes = String(date.getMinutes()).padStart(2, "0");
   
    const time = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }`;

    if(hours < 12) {
        greeting.innerText = 'Good morning, ' + username
    } else if(hours >= 12) {
        greeting.innerText = 'Good afternoon, ' + username
    } else if(hours >= 18) {
        greeting.innerText = 'Good evening, ' + username
    }
    
}


const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginText.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit)

} else {
    paintGreetings(savedUsername)
}