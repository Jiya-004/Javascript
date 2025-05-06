const weatherform = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "5363b6b92969562d52100b170e66157c";
weatherform.addEventListener("submit", async event=>{
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{

            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);

        }

        
    }
    else{
        displayError("Please enter a city");
    }

});
async function  getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    const response = await fetch(apiUrl);
    console.log(response);
    if(!response.ok){
        throw new Error ("could not fetch data");
    }
    else{
        return await response.json();
    }
}
function displayWeatherInfo(data){
     const {name: city,
        main: {temp,humidity},
        weather: [{description,id}]}= data;
        card.textContent = "";
        card.style.display = "flex";
        const cityDisplay = document.createElement("h1");
        const tempdDisplay = document.createElement("p");
        const humidityDisplay= document.createElement("p");
        const descDisplay = document.createElement("p");
        const weatherEmoji = document.createElement("p");

        cityDisplay.textContent = city;
        tempdDisplay.textContent =`${(temp-273.15).toFixed(1)}°C`;
        humidityDisplay.textContent = `HUmidity: ${humidity}%`;
       descDisplay.textContent = description;
       weatherEmoji.textContent = getWeatherEmoji(id);

        tempdDisplay.classList.add("tempdisplay");
        cityDisplay.classList.add("citydisplay");
        humidityDisplay.classList.add("humidity");
         descDisplay.classList.add("desc");
         weatherEmoji.classList.add("weatheremoji");


        card.appendChild(cityDisplay);
        card.appendChild(tempdDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherEmoji);


        



}
function getWeatherEmoji(weatherId){
    switch(true){
        case(weatherId >= 200 && weatherId <300):
        return "⛈️";
        case(weatherId >= 300 && weatherId <400):
        return "🌧️";
        case(weatherId >= 500 && weatherId <600):
        return "🌧️";
        case(weatherId >= 600 && weatherId <700):
        return "🌨️";
        case(weatherId >= 700 && weatherId <800):
        return "🌫️";
        case(weatherId === 800):
        return "🌞";
        case(weatherId >= 801 && weatherId <810):
        return "☁️";
        default:
            return"❓";
  
    }

}
function  displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent=message;
    errorDisplay.classList.add("errorDisplay");
    
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}