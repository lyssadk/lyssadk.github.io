const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];  // temporary checking for valid response and data parsing
    for (let i = 0; i < prophets.length; i++ ) {
        
        let card = document.createElement('section');
        let h2 = document.createElement('h2'); 
        let birth = document.createElement('p');
        let pob = document.createElement('p');
        let image= document.createElement('img');
        
        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        birth.textContent = 'Date Of Birth: ' + prophets[i].birthdate; 
        pob.textContent = 'Place of Birth: ' + prophets[i].birthplace; 
        image.setAttribute('src', prophets[i].imageurl);

        card.appendChild(h2);
        card.appendChild(birth);
        card.appendChild(pob);
        card.appendChild(image);


        document.querySelector('div.cards').appendChild(card);}
});

