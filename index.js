
const searchBox = document.getElementById("cityValue");
const searchBtn = document.querySelector(".search button");



searchBtn.addEventListener("click", ()=>{
    
    async function checkWeather(city){
        console.log(city);
const apiKey = "0b670580ea3eb82757caeea9bc34b781";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}` ;
const response = await fetch(apiUrl);
var data = await response.json();


console.log(data);
 
document.querySelector(".City").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


// document.querySelector(".weather").style.display = "block";

} 
console.log(searchBox.value);

    checkWeather(searchBox.value); 

})


