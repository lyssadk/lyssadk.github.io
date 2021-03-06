window.addEventListener('load', () => {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    //anonymous function- without a name and you'll only use once but no where else
    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
    
  
    WebFont.load({
        google: {
          families: [
            'Oswald'
          ]
        }}); 
    const requestUTL = 'json/temple.json'
    fetch(requestUTL)
      .then((response) =>{
          return response.json();
      })
      .then((jsonObject) =>{
          console.log(jsonObject);
           Object.entries(jsonObject).forEach(([key,temple])=>{
          //    if (temple.state == 'ID'){
             buildTempleCard(temple);
            buildWeatherCard(temple);
          // }
          });
      });
});

function buildTempleCard(temple){
  console.log(temple);
  let card = document.createElement('section');
  card.classList.add("temple");
  card.innerHTML = `
                    <img src = "${temple.imageurl}" alt="${temple.name}">
                    <h2>${temple.name}</h2> `;
    // loop through closures array
    let closures = document.createElement('div');
    let closureh = document.createElement('h4')
    closureh.textContent='Closures: '
    closures.appendChild(closureh)
    for (let i = 0; i < 4; i++ ){
      
      let closure = document.createElement('p')
        if (temple.closures[i].enddate != 'N/A' ){
          closure.textContent =  temple.closures[i].startdate + ' - ' + temple.closures[i].enddate;}
        else{
          closure.textContent = temple.closures[i].startdate
        }
     closures.appendChild(closure)
     card.appendChild(closures)
    } 
    
    
    // loop through services available
    let sdiv = document.createElement('div')
    sdiv.classList.add("service-div")
    let service = document.createElement('h4')
    service.textContent = 'Services Available: '
    sdiv.appendChild(service)
    for (let s = 0; s<temple.services.available.length; s++){
      let services = document.createElement('p')
      services.textContent = temple.services.available[s]
      sdiv.appendChild(services)
      card.appendChild(sdiv)
    }
  
  let contact = document.createElement('div');
  contact.classList.add('contact-div')
  contact.innerHTML =`
  <h4>Contact Information</h4>
  <p>Phone: ${temple.phone}</p>
  <p> ${temple.address1} </p>
  <p> ${temple.city}</p>
  <p> ${temple.state} ${temple.zip}</p>`;

  card.appendChild(contact);

  document.querySelector("#temple-card").appendChild(card);};




function buildWeatherCard(temple){

 if (temple.name == 'Gilbert Arizona Temple'){
    var requestUTL = 'https://api.openweathermap.org/data/2.5/forecast?zip=85296,us&appid=257d32dd0450e7d16d8ba54383f7bbce&units=imperial'
  };
  if (temple.name == 'Jordan River Utah Temple'){
    var requestUTL = 'https://api.openweathermap.org/data/2.5/forecast?zip=84095,us&appid=257d32dd0450e7d16d8ba54383f7bbce&units=imperial'
    };
  if (temple.name == 'San Diego California Temple'){
    var requestUTL = 'https://api.openweathermap.org/data/2.5/forecast?zip=92122,us&appid=257d32dd0450e7d16d8ba54383f7bbce&units=imperial'
    };
  if (temple.name == 'Mount Timpanogos Utah Temple'){
    var requestUTL = 'https://api.openweathermap.org/data/2.5/forecast?zip=84043,us&appid=257d32dd0450e7d16d8ba54383f7bbce&units=imperial'
    };
  fetch(requestUTL)
      .then((response) =>{
          return response.json();
      })
      .then((weather) =>{
        console.log(weather)
        
        
        /////////////////////////////
/*five day forecast stuff */
////////////////////////////
// filtering the array for temps at 6:00pm
okey = weather.list ;
filter = okey.filter(day => day.dt_txt.includes('18:00:00'));
let card =document.createElement('div');
card.classList.add('card-weather');

      for (let i = 0 ; i < filter.length ; i++){
       
        // creating html elements / adding classes/srcs
        let dayinfo = document.createElement('div')
        dayinfo.classList.add('mi');
        
        
        
        let day = document.createElement('h3');

        let icon  = document.createElement('img');
        let iconsrc = filter[i].weather[0].icon;
        icon.src = `http://openweathermap.org/img/wn/${iconsrc}.png`
        let temp = document.createElement('p');

        // content from api
        temp.textContent = Math.round( filter[i].main.temp) + '??';
         
        // the day stuff, im sure there is an easier way to do this, just ran out of time to figure it out so i did this haha
          var result = new Date();
          var weekdays = new Array(12);
          weekdays[0] = "Sun";
          weekdays[1] = "Mon";
          weekdays[2] = "Tues";
          weekdays[3] = "Wed";
          weekdays[4] = "Thurs";
          weekdays[5] = "Fri";
          weekdays[6] = "Sat";
          weekdays[7] = "Sun";
          weekdays[8] = "Mon";
          weekdays[9] = "Tues";
          weekdays[10] = "Wed";
          weekdays[11] = "Thurs";
          weekdays[12] = "Fri";
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
          dayinfo.appendChild(day);
          dayinfo.appendChild(icon);
          dayinfo.appendChild(temp);
          card.appendChild(dayinfo)
          document.querySelector('#five-day').appendChild(card);
      }
      ////////////////////
      });};

      var slideIndex = 1;
      
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName('temple');
        
        var dots = document.getElementsByClassName('dot');
        if (n > slides.length) {slideIndex = 1} 
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
            
          }
          for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
          }
        slides[slideIndex-1].style.display = "grid"; 
        
        dots[slideIndex-1].className += " active";
      }


      var slideIndex2 = 1;
      showSlides2(slideIndex2);
      showSlides(slideIndex);

      function plusSlides(n) {
        showSlides(slideIndex += n);
        showSlides2(slideIndex2 += n);
      }
      
      function currentSlide(n) { 
        showSlides(slideIndex = n);
        showSlides2(slideIndex2 = n);
      }
      
      function showSlides2(n) {
        var i;
        var slides2 = document.getElementsByClassName('card-weather');
        
        if (n > slides2.length) {slideIndex2 = 1} 
          if (n < 1) {slideIndex2 = slides2.length}
          for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none"; 
          }
          
        slides2[slideIndex2-1].style.display = "grid"; 
        
        
      }