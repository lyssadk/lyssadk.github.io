const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    let t = ['Fish Haven', 'Soda Springs', 'Preston']  
    // temporary checking for valid response and data parsing
    for (let i = 0; i < t.length; i++ ) {
        if (towns[i].name = t[i]){
        
        let card = document.createElement('section');
        let name = document.createElement('h2'); 
        let motto = document.createElement('p');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image= document.createElement('img');
        
        
        image.setAttribute('src', towns[i].photo);
        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = towns[i].yearFounded;
        population.textContent = towns[i].currentPopulation;
        rainfall.textContent = towns[i].averageRainfall;
        

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(year);
        card.appendChild(population);
        card.appendChild(rainfall);
        


        document.querySelector('div#town').appendChild(card);}}
});

window.addEventListener('load', () => {

    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    //anonymous function- without a name and you'll only use once but no where else
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
    // To solve the mid resiszing issue with responsive class on
    //window.onresize = () => {}

    const week = document.querySelector('#dayweek');
    var date = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    week.textContent = weekday[date.getDay()];
  //  if (date.getDay() == 6) { alert('PRESTON PANCAKES | Saturdays @  9:00am | Located: City Park Pavillion') };
    const dayNum = document.querySelector('#day');
    dayNum.textContent = date.getDate();

    var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthNum = document.querySelector('#month');
    monthNum.textContent = monthName[date.getMonth()];

    const year = document.querySelector('#year');
    year.textContent = date.getFullYear();

    const cry = document.querySelector("#current-year");
    cry.textContent = date.getFullYear();

    WebFont.load({
        google: {
          families: [
             'Oswald'
          ]
        }}); 

    });