window.addEventListener ('load', () =>{
    const requestUTL = 'js/temple.json'
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
    card.innerHTML = `<h2>${temple.name}</h2> 
                      <img src = "${temple.imageurl}" alt="${temple.name}"> 
                      <p>First President: <b>${temple.presidents[0]}</b></p>
                      <p>Current President: <b>${temple.presidents[temple.presidents.length-1]}</b></p>`;
    document.querySelector("#temples").appendChild(card);

}