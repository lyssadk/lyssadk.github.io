const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];  
    // temporary checking for valid response and data parsing
    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name =='Soda Springs'){
        
        let card = document.createElement('section');
        let content = document.createElement('div')
        let name = document.createElement('h2'); 
        let motto = document.createElement('p');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let rainfall = document.createElement('p');
        let image= document.createElement('img');
        
        
        image.setAttribute('src', towns[i].photo);
        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        year.textContent = 'Year Founded: '+ towns[i].yearFounded;
        population.textContent = 'Current Population: '+ towns[i].currentPopulation;
        rainfall.textContent = 'Average Rainfall: '+ towns[i].averageRainfall;
        

        card.appendChild(image);
        card.appendChild(content);
        content.appendChild(name);
        content.appendChild(motto);
        content.appendChild(year);
        content.appendChild(population);
        content.appendChild(rainfall);
        


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
    function myFunction() {
          var dots = document.getElementById("dots");
          var moreText = document.getElementById("more");
          var btnText = document.getElementById("myBtn");
        
          if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
          } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
          }
        }
      myBtn.addEventListener('click', () => {myFunction()})
    });