const main = document.getElementById('main');

//Creates the form to get a city
function createForm() {
let form = document.createElement('form');
    form.id = "locationForm";
    let label = document.createElement('label');
    label.for = 'locationName';
    label.textContent = 'Enter the name of a city here';
    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'locationName';
    input.name = 'locationName';
    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = "Submit";
    
    main.appendChild(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        generalWeatherInfo(input.value, input);
        input.value = '';
    });

}

//Creates a div to hold all the weather cards
function createCardDiv(){
    const mainCardDiv = document.createElement('div')
    mainCardDiv.id = 'mainCardDiv';
    main.appendChild(mainCardDiv);
}

//Creates the cards that display the weather cards below main content
function createWeekCard(day, condition, temp){

    let cardDiv = document.createElement('div');
    cardDiv.id = 'cardDiv';
    let dayOfWeek = document.createElement('h2');
    let daysCondition = document.createElement('h3');

    let daysTemp = document.createElement('h3');

    dayOfWeek.textContent = day;
    daysCondition.textContent = condition;
    daysTemp.textContent = `${temp} °C`;

    document.getElementById('mainCardDiv').appendChild(cardDiv);
    cardDiv.appendChild(dayOfWeek);
    cardDiv.appendChild(daysCondition);
    addWeatherIcon(condition, cardDiv);
    cardDiv.appendChild(daysTemp);

}

//Adds a weather Icon depending on the weather of a card
function addWeatherIcon(weather, div) {
    if (weather.indexOf('cloudy') >= 0 || weather.indexOf('Overcast') >= 0 || weather.indexOf('Cloudy') >= 0) {
        let icon = document.createElement('img');
        icon.src = './icons/2682849_cloud_cloudy_day_forecast_sun_icon (2).png'
        div.appendChild(icon);


    }
    else if (weather.indexOf('rain') >= 0) {
        let icon = document.createElement('img');
        icon.src = './icons/2682844_cloud_day_precipitation_rain_snow_icon.png'
        div.appendChild(icon);
        

    }
    else if (weather.indexOf('Sunny') >= 0 || weather.indexOf('Clear') >= 0) {
        let icon = document.createElement('img');
        icon.src = './icons/2682848_day_forecast_sun_sunny_weather_icon.png'
        div.appendChild(icon);

    }

    else if (weather.indexOf('Misty') >= 0){
        let icon = document.createElement('img');
        icon.src = './icons/2682821_fog_foggy_forecast_mist_weather_icon.png'
        div.appendChild(icon);
        
    }

}

//Converts the getDay function to a String literal day
function convertNumToDay(num){
    if (num == 1){
        return 'Monday'
    }
    else if (num == 2){
        return 'Tuesday'
    }
    else if (num == 3){
        return 'Wednesday'
    }
    else if (num == 4){
        return 'Thursday'
    }
    else if (num == 5){
        return 'Friday'
    }
    else if (num == 6){
        return 'Saturday'
    }
    else if (num == 0){
        return 'Sunday'
    }
    }

// Creates the weekly weather forecast for the next 7 days and displays it
async function createWeeklyWeatherForecast(location){
    try{
        const getWeeklyForecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9397db559046499aa78144721231411&q=${location}&days=8`)
        const forecast = await getWeeklyForecast.json();
        console.log(forecast.forecast);
        for (let i = 1; i <8; i++){
            let date = new Date(forecast.forecast.forecastday[i].date); 
            createWeekCard(convertNumToDay(date.getDay()), forecast.forecast.forecastday[i].day.condition.text, forecast.forecast.forecastday[i].day.maxtemp_c)
        }
    }
    catch(err){
        console.log(err);
    }
}

//Removes the current forecast for when the weather location is changed
function removeCurrentForecast(){
    let remCardDiv = document.getElementById('cardDiv');
    remCardDiv.remove();

}

// Creates the weather information for the day and location currently selected
function createMainContent() {
    const countryh1 = document.createElement('h1');
    countryh1.id = 'countryh1';
    const curntWeath = document.createElement('h2');
    curntWeath.id = 'curntWeathh2';
    const curDay = document.createElement('h2');
    curDay.id = 'currDay';
    const locTimeh2 = document.createElement('h2');
    locTimeh2.id = 'locTimeh2';
    const temp_ch3 = document.createElement('h2');
    temp_ch3.id = 'temp_ch3';

    main.appendChild(countryh1);
    main.appendChild(curntWeath);
    main.appendChild(curDay);
    main.appendChild(locTimeh2);
    main.appendChild(temp_ch3);

    return {countryh1, locTimeh2, temp_ch3}

}

// Gets the initial weather info which is set by default to London
async function initialWeatherInfo(){
    try{
        const getWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=9397db559046499aa78144721231411&q=london`);
        const weather = await getWeather.json();

        displayMainContent(weather.location.country,
            weather.location.name,
            weather.current.condition.text,
            weather.location.localtime,
            weather.current.temp_c,
            weather.current.temp_f);
        createWeeklyWeatherForecast('london');

        }
    catch(err){
        console.log(err);
    } 

}

// Checks the current weather and changes the background accordingly
function checkAndDisplayWeatherBackground(weather){
    if (weather.indexOf('rain') >= 0){
        main.style.backgroundImage = 'url(./images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg)';
        main.style.color = 'white';


    }
    else if (weather.indexOf('cloudy') >= 0 || weather.indexOf('Overcast') >= 0){
        main.style.backgroundImage = 'url(./images/daoudi-aissa-Pe1Ol9oLc4o-unsplash.jpg)';

        main.style.color = 'white';

    }
    else if (weather.indexOf('Sunny') >= 0 || weather.indexOf('Clear') >= 0){
        main.style.backgroundImage = 'url(./images/david-law-sd-34z9t13g-unsplash.jpg)';
        main.style.color = 'black';

    }
    else if (weather.indexOf('Misty') >= 0){
        main.style.backgroundImage = 'url(./images/cristofer-maximilian-YmsrXcDf0J8-unsplash.jpg)';
        main.style.color = 'black';

    }
}

// displays the main content of the current day and weather on the page
function displayMainContent(country, locName, currentWeath, locTime, temp_c, temp_f){

    let countryel = document.getElementById('countryh1');
    let locTimeel = document.getElementById('locTimeh2');
    let currentWeathel = document.getElementById('curntWeathh2');
    let currentDay = document.getElementById('currDay');
    let temp_cel = document.getElementById('temp_ch3');

    countryel.textContent = `${locName}, ${country}`;
    checkAndDisplayWeatherBackground(currentWeath);
    currentWeathel.textContent = currentWeath;
    addWeatherIcon(currentWeath, currentWeathel);
    locTimeel.textContent = locTime;
    let mainCDate = new Date(locTime);
    let convertedDay = convertNumToDay(mainCDate.getDay());
    console.log(convertedDay); 
    currentDay.textContent = convertedDay; 
    temp_cel.textContent = `${temp_c} °C`;

}
    
// gets the current weather
async function getWeather(){
    try{
        const getWeather = await fetch('http://api.weatherapi.com/v1/current.json?key=9397db559046499aa78144721231411&q=london')
        const weather = await getWeather.json();
        console.log(weather);
    }
    catch(err){
        console.log(err);
    }
}

// Takes a location and then gives you information on todays weather and then the next 7 days of weather.
async function generalWeatherInfo(location, submit) {
    try{
        const getWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=9397db559046499aa78144721231411&q=${location}`);
        const weather = await getWeather.json();
        displayMainContent(weather.location.country,
                            weather.location.name,
                            weather.current.condition.text,
                            weather.location.localtime,
                            weather.current.temp_c,
                            weather.current.temp_f);
        for (i=1; i< 8; i++){
        removeCurrentForecast();
        }
        createWeeklyWeatherForecast(location);

        console.log(weather.location.country);
        console.log(weather.location.name);
        console.log(weather.location.localtime);
        console.log(`${weather.current.temp_c} C`);
        console.log(`${weather.current.temp_f} F`);

        }
    catch(err){
        console.log(err);
    } 
}
createMainContent();
initialWeatherInfo();
createForm();
createCardDiv();


