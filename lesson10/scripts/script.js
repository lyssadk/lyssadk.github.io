



async function getWeather(){
  const requestURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=257d32dd0450e7d16d8ba54383f7bbce&units=imperial';
  const response = await fetch(requestURL)

  if (response.status == 200){
      return response.json();
  }
  else {
      throw new Error('Not found' + response.status)};};

function Weather(){
  const w = getWeather()
  .then(function(info){
      console.log(info)

/*five day forecast stuff */
      for (let i = 0 ; i < 5 ; i++){

        let card = document.createElement('div'); 
        card.classList.add('mi')
        
        let day = document.createElement('h3');

        let icon  = document.createElement('img');
        let iconsrc = document.createAttribute('src')
        iconsrc.value = info.list[i].weather.icon;
        icon.setAttributeNode(iconsrc)

        let temp = document.createElement('p');

        temp.textContent = Math.round( info.list[i+1].main.temp) + '°';
         
          var result = new Date();
          var weekdays = new Array(12);
          weekdays[0] = "Sunday";
          weekdays[1] = "Monday";
          weekdays[2] = "Tuesday";
          weekdays[3] = "Wednesday";
          weekdays[4] = "Thursday";
          weekdays[5] = "Friday";
          weekdays[6] = "Saturday";
          weekdays[7] = "Sunday";
          weekdays[8] = "Monday";
          weekdays[9] = "Tuesday";
          weekdays[10] = "Wednesday";
          weekdays[11] = "Thursday";
          weekdays[12] = "Friday";
          ok = result.getDay();

          switch (ok) {
            case 6:
              day.textContent = weekdays[ok + (i - 6)]
              break;
            default:
              day.textContent = weekdays[ok +(i + 1)]
              break;
          }
          card.appendChild(day);
          card.appendChild(icon);
          card.appendChild(temp);
          document.querySelector('#mi-m').appendChild(card);
      }

        /*Current day temperature Information from API */
        let currently = document.createElement('p');
        let ctemp = document.createElement('p');
        let humidity = document.createElement('p');
        let high = document.createElement('p');
        let low = document.createElement('p');
        let wind= document.createElement('p');

        high.classList.add('mgs');
        low.classList.add('mgs');
        humidity.classList.add('mgs');
        currently.classList.add('mgs');
        ctemp.classList.add('mgs');
        wind.classList.add('mgs');

        high.textContent = 'High: ' +Math.round(info.list[0].main.temp_max)+'°';
        low.textContent = 'Low: ' +Math.round(info.list[0].main.temp_min)+'°';
        humidity.textContent = 'Humidity: ' +info.list[0].main.humidity;
        currently.textContent = 'Sky: ' +(info.list[0].weather[0].description).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));;
        ctemp.textContent = 'Temperature: ' +Math.round(info.list[0].main.temp)+'°';
        wind.textContent = 'Wind Speed: ' +Math.round(info.list[0].wind.speed)+'mph';
        
        document.querySelector('#mi-mg1').appendChild(currently);
        document.querySelector('#mi-mg1').appendChild(ctemp);
        document.querySelector('#mi-mg1').appendChild(high);
        document.querySelector('#mi-mg1').appendChild(low);
        document.querySelector('#mi-mg1').appendChild(humidity);
        document.querySelector('#mi-mg1').appendChild(wind);
      
  });

};


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
        }})})
        
        Weather();
        ;