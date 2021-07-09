window.addEventListener('load', () => {
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
                    <p>Closures: <b>${temple.closures[0].startdate}</b></p>
                    <p>Services: <b>${temple.services.available[0]}</b></p>`;
  document.querySelector("#temple-card").appendChild(card);

}