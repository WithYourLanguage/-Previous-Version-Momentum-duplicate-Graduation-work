const clockA = document.querySelector('h2#clock')

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    /*const time = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }`; */
        
    // {초는 필요 없음.} const seconds = String(date.getSeconds()).padStart(2, "0");
    clockA.innerText = `${hours}:${minutes}`
}

getClock()
setInterval(getClock, 1000)