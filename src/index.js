import './styles.css';
import SunI from './sunIcon.png';
import cloudyI from './cloudyIcon.png';
import rainI from './rainIcon.png';
import fogI from './fogIcon.png';
import cloudBack from './cloudBackground.jpg';
import sunBack from './sunBackground.jpg';
import rainBack from './rainBackground.jpg';
import mistBack from './mistBackground.jpg';

const main = document.getElementById('main');

//Creates the form to get a city
function createForm() {
let form = document.createElement('form');
    form.id = "locationForm";
    let label = document.createElement('label');
    label.id = 'locName';
    label.for = 'locationName';
    label.textContent = 'Enter the name of a city here';
    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'locationName';
    input.name = 'locationName';
    let submit = document.createElement('input');
    submit.id = 'submit';
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
function createWeekCard(day, condition, temp_c, temp_f){

    let cardDiv = document.createElement('div');
    cardDiv.id = 'cardDiv';
    let dayOfWeek = document.createElement('h2');
    let daysCondition = document.createElement('h3');
    let daysTemp = document.createElement('h3');
    let unitChange = document.getElementById('changeUnits');

    dayOfWeek.textContent = day;
    daysCondition.textContent = condition;

    let celcius = true;
    unitChange.addEventListener('click', () => {
        if (celcius) {
        daysTemp.textContent = `${temp_f} °F`;
        celcius = false;
        }
        else{
            daysTemp.textContent = `${temp_c} °C`;
            celcius = true;

        }

    })
    daysTemp.textContent = `${temp_c} °C`;

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
        icon.src = cloudyI;
        icon.id = 'icon';
        div.appendChild(icon);


    }
    else if (weather.indexOf('rain') >= 0) {
        let icon = document.createElement('img');
        icon.src = rainI;
        icon.id = 'icon';
        div.appendChild(icon);
        

    }
    else if (weather.indexOf('Sunny') >= 0 || weather.indexOf('Clear') >= 0) {
        let icon = document.createElement('img');
        icon.src = SunI;
        icon.id = 'icon';
        div.appendChild(icon);

    }

    else if (weather.indexOf('Misty') >= 0){
        let icon = document.createElement('img');
        icon.src = fogI;
        icon.id = 'icon';
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
            createWeekCard(convertNumToDay(date.getDay()), forecast.forecast.forecastday[i].day.condition.text, forecast.forecast.forecastday[i].day.maxtemp_c,  forecast.forecast.forecastday[i].day.maxtemp_f)
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
    const changeUnits = document.createElement('button');
    changeUnits.id = 'changeUnits';
    changeUnits.textContent = "Change units";
    const countryh1 = document.createElement('h1');
    countryh1.id = 'countryh1';
    const curntWeath = document.createElement('h2');
    curntWeath.id = 'curntWeathh2';
    const weathIcon = document.createElement('h2');
    weathIcon.id = 'weathIcon';
    const curDay = document.createElement('h2');
    curDay.id = 'currDay';
    const locTimeh2 = document.createElement('h2');
    locTimeh2.id = 'locTimeh2';
    const temp_ch3 = document.createElement('h2');
    temp_ch3.id = 'temp_ch3';

    main.append(changeUnits);
    main.appendChild(countryh1);
    main.appendChild(curntWeath);
    main.appendChild(weathIcon);
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
        main.style.backgroundImage = `url(${rainBack})`;
        main.style.color = 'white';


    }
    else if (weather.indexOf('cloudy') >= 0 || weather.indexOf('Overcast') >= 0){
        main.style.backgroundImage = `url(${cloudBack})`;

        main.style.color = 'white';

    }
    else if (weather.indexOf('Sunny') >= 0 || weather.indexOf('Clear') >= 0){
        main.style.backgroundImage = `url(${sunBack})`;
        main.style.color = 'black';

    }
    else if (weather.indexOf('Misty') >= 0){
        main.style.backgroundImage = `url(${mistBack})`;
        main.style.color = 'black';

    }
}

function convertDate(date){
    const dateArr = date.split(' ');
    console.log(dateArr[0]);
    console.log(dateArr[1]);

    let splitTime = dateArr[1].split(':');
    let firstHalf = splitTime[0];
    let secondHalf = splitTime[1]
    if (Number(firstHalf) >= 13){
        firstHalf = firstHalf - 12;
        secondHalf = `${secondHalf}pm`;
    }
    else if (Number(firstHalf >= 12)){
        secondHalf = `${secondHalf}pm`;

    }
    else{
        secondHalf = `${secondHalf}am`
    }

    let dMY = dateArr[0];
    let dMYArr = dMY.split('-');
    const output = `${firstHalf}:${secondHalf} ${dMYArr[2]}-${dMYArr[1]}-${dMYArr[0]}`


    return output;


    

}

// displays the main content of the current day and weather on the page
function displayMainContent(country, locName, currentWeath, locTime, temp_c, temp_f){

    let countryel = document.getElementById('countryh1');
    let weathIconEl = document.getElementById('weathIcon');
    let locTimeel = document.getElementById('locTimeh2');
    let currentWeathel = document.getElementById('curntWeathh2');
    let currentDay = document.getElementById('currDay');
    let temp_cel = document.getElementById('temp_ch3');
    let icon = document.getElementById('icon');
    let unitChange = document.getElementById('changeUnits');

    countryel.textContent = `${locName}, ${country}`;
    checkAndDisplayWeatherBackground(currentWeath);
    currentWeathel.textContent = currentWeath;
    if (icon){
        icon.remove();
        addWeatherIcon(currentWeath, weathIconEl);
    }
    else {
    addWeatherIcon(currentWeath, weathIconEl);
    }
    locTimeel.textContent = convertDate(locTime);;
    let mainCDate = new Date(locTime);
    let convertedDay = convertNumToDay(mainCDate.getDay());
    console.log(convertedDay); 
    currentDay.textContent = convertedDay;
    let celcius = true;
    unitChange.addEventListener('click', () => {
        if (celcius) {
        temp_cel.textContent = `Temp: ${temp_f} °F`;
        celcius = false;
        }
        else{
            temp_cel.textContent = `Temp: ${temp_c} °C`;
            celcius = true

        }

    })
    temp_cel.textContent = `Temp: ${temp_c} °C`;

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


