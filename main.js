const main = document.getElementById('main');

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

function createWeekCard(condition, day, temp){
    let cardDiv = document.createElement('div');
    let dayOfWeek = document.createElement('h2');
    let daysCondition = document.createElement('h3');
    let daysTemp = document.createElement('h3');

    dayOfWeek.textContent = day;
    daysCondition.textContent = condition;
    daysTemp.textContent = temp;

    main.appendChild(cardDiv);
    cardDiv.appendChild(dayOfWeek);
    cardDiv.appendChild(daysCondition);
    cardDiv.appendChild(daysTemp);

}

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

function createMainContent() {
    const countryh1 = document.createElement('h1');
    countryh1.id = 'countryh1';
    const locNameh1 = document.createElement('h1');
    locNameh1.id = 'locNameh1';
    const curntWeath = document.createElement('h2');
    curntWeath.id = 'curntWeathh2';
    const locTimeh2 = document.createElement('h2');
    locTimeh2.id = 'locTimeh2';
    const temp_ch3 = document.createElement('h3');
    temp_ch3.id = 'temp_ch3';

    main.appendChild(countryh1);
    main.appendChild(locNameh1);
    main.appendChild(curntWeath);
    main.appendChild(locTimeh2);
    main.appendChild(temp_ch3);

    return {countryh1, locNameh1, locTimeh2, temp_ch3}

}

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

function displayMainContent(country, locName, currentWeath, locTime, temp_c, temp_f){

    let countryel = document.getElementById('countryh1');
    let locTimeel = document.getElementById('locTimeh2');
    let currentWeathel = document.getElementById('curntWeathh2');
    let temp_cel = document.getElementById('temp_ch3');

    countryel.textContent = `${locName}, ${country}`;
    currentWeathel.textContent = currentWeath;
    locTimeel.textContent = locTime;
    temp_cel.textContent = `${temp_c} °C`;

}
    

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
createMainContent()
initialWeatherInfo();
createForm();


