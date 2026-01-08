let inp = document.querySelector("input");
let btn = document.querySelector("button");

let cityName = document.querySelector("#city");
let temp = document.querySelector("#temp");
let feels = document.querySelector("#feels");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");
// key = 02f7ad1517b1e273239b03e29a968b6c

async function getWeather() {
    try {
        let city = inp.value.toLowerCase();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=02f7ad1517b1e273239b03e29a968b6c&units=metric`;
        let res = await axios.get(url);
        cityName.innerText = res.data.name; //city name
        temp.innerText = ("Temperature: "+res.data.main.temp); //temp
        feels.innerText = ("Feels like: "+res.data.main.feels_like); //feels like
        humidity.innerText = ("Humidity: "+res.data.main.humidity); //humidity
        wind.innerText = (`Wind Speed: `+res.data.wind.speed); //wind speed
        inp.value = "";
    } catch (err) {
        console.log("Error: " + err);
    }
}

btn.addEventListener("click", getWeather);
inp.addEventListener("keydown",function (event) {
    if(event.key === "Enter"){
        getWeather();
    }
})
