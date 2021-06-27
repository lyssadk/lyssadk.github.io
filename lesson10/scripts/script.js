



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
/////////////////////////////
/*five day forecast stuff */
////////////////////////////
// filtering the array for temps at 6:00pm
okey = info.list 
filter = okey.filter(day => day.dt_txt.includes('18:00:00'))

      for (let i = 0 ; i < filter.length ; i++){
       
        // creating html elements / adding classes/srcs
        let card = document.createElement('div'); 
        card.classList.add('mi')
        
        let day = document.createElement('h3');

        let icon  = document.createElement('img');
        let iconsrc = filter[i].weather[0].icon;
        icon.src = `http://openweathermap.org/img/wn/${iconsrc}.png`
        let temp = document.createElement('p');

        // content from api
        temp.textContent = Math.round( filter[i].main.temp) + '°';
         
        // the day stuff, im sure there is an easier way to do this, just ran out of time to figure it out so i did this haha
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

          // literally don't ask me. this is really rough js i used that def could've been simplified. again, it works but it ain't the most efficient
          switch (ok) {
            case 6:
              day.textContent = weekdays[ok + (i - 6)]
              break;
            default:
              day.textContent = weekdays[ok +(i + 1)]
              break;
          }
          // 

          // adding stuff to page
          card.appendChild(day);
          card.appendChild(icon);
          card.appendChild(temp);
          document.querySelector('#mi-m').appendChild(card);
      }
      /////////////////////////////////////////////////
    /*Current day temperature Information from API */
    //////////////////////////////////////////////////
        const todaySum = 'https://api.openweathermap.org/data/2.5/weather?zip=83263&appid=257d32dd0450e7d16d8ba54383f7bbce&units=imperial'

    fetch(todaySum)
    .then((response) => {

      // making sure it is fetching the stuff 
      if (response.status == 200){
        return response.json();
    }
    else {
        throw new Error('Not found' + response.status)};
    })
    .then((infor) =>{
      console.log(infor)

      //creating more p's
        let currently = document.createElement('p');
        let humidity = document.createElement('p');
        let high = document.createElement('p');
        let low = document.createElement('p');
        let wind= document.createElement('p');
        let chill = document.createElement('p')

        // adding the classes to customize in css
        high.classList.add('mgs');
        low.classList.add('mgs');
        humidity.classList.add('mgs');
        currently.classList.add('mgs');
        wind.classList.add('mgs');
        
        // all the text content stuff yay
        high.textContent = 'High: ' +Math.round(infor.main.temp_max)+'°';
        low.textContent = 'Low: ' +Math.round(infor.main.temp_min)+'°';
        humidity.textContent = 'Humidity: ' +infor.main.humidity +'%';
        currently.textContent = 'Sky: ' +(infor.weather[0].main).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));;
        let t = Math.round(infor.main.temp);
        let s = Math.round(infor.wind.speed)
        wind.textContent = 'Wind Speed: ' +s+'mph';

        document.querySelector('#mi-mg1').appendChild(high);
        document.querySelector('#mi-mg1').appendChild(currently);
        document.querySelector('#mi-mg1').appendChild(low);
        document.querySelector('#mi-mg1').appendChild(humidity);
        document.querySelector('#mi-mg1').appendChild(wind);

        //calculate windchill and add proper text depending on temp
        
        function windchill(t, s){
          if (t>50){
              chill.textContent = 'Wind Chill: n/a';
              document.querySelector('#mi-mg1').appendChild(chill);
          }
          else if (t<=50){
              chill = (35.74 +(.6215 * t) - (35.75 * (s ** .16))+ (0.4275 * t * (s ** .16)));
              chill.textContent = 'Wind Chill:' + chill;
              document.querySelector('#mi-mg1').appendChild(chill);
          }
          chill.classList.add('mgs');
      }
      
      
      
      windchill(t, s)
    });
   
      
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