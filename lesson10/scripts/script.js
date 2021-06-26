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
        }})});