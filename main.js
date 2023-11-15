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
        generalWeatherInfo(input.value);
        input.value = '';
    });

}

async function initialWeatherInfo(){
    try{
        const getWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=9397db559046499aa78144721231411&q=london`);
        const weather = await getWeather.json();

        displayMainContent(weather.location.country,
            weather.location.name,
            weather.location.localtime,
            weather.current.temp_c,
            weather.current.temp_f);
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

function displayMainContent(country, locName, locTime, temp_c, temp_f){
    const countryh1 = document.createElement('h1');
    countryh1.textContent = country;
    const locNameh1 = document.createElement('h1');
    locNameh1.textContent = locName;
    const locTimeh2 = document.createElement('h2');
    locTimeh2.textContent = locTime;
    const temp_ch3 = document.createElement('h3');
    temp_ch3.textContent = temp_c;


    main.appendChild(countryh1);
    main.appendChild(locNameh1);
    main.appendChild(locTimeh2);
    main.appendChild(temp_ch3);





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

async function generalWeatherInfo(location) {
    try{
        const getWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=9397db559046499aa78144721231411&q=${location}`);
        const weather = await getWeather.json();
        displayMainContent(weather.location.country,
                            weather.location.name,
                            weather.location.localtime,
                            weather.current.temp_c,
                            weather.current.temp_f);

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
initialWeatherInfo();
createForm();
