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
                    <h2>${temple.name}</h2> 
                    <h4>Closures: </h4>`;
    // loop through closures array
    let closures = document.createElement('div');
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
    let service = document.createElement('h4')
    service.textContent = 'Services Available: '
    card.appendChild(service)
    for (let s = 0; s<temple.services.available.length; s++){
      let services = document.createElement('p')
      services.textContent = temple.services.available[s]
      card.appendChild(services)
    }

  let contact = document.createElement('div');
  contact.innerHTML =`
  <h4>Contact Information</h4>
  <p>Phone: ${temple.phone}</p>
  <p>Address: </>
  <p>${temple.address1}</p>
  <p>${temple.city}</p>
  <p>${temple.state} ${temple.zip}</p>`;

  card.appendChild(contact);

  document.querySelector("#temple-card").appendChild(card);
}

function closures(temple){
 

}