const API_KEY = "315d20b1ea2df2e04b6bb7ff14062eb9"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response
        .json().then(date => {
        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:last-child')
        city.innerText = date.name
        weather.innerText = `${date.weather[0].main} / ${data.main.temp}`
        
        
    }))
}
function onGeoEroor() {
    alert('Cant find you. Noweather for you.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoEroor) // 위치 좌표
