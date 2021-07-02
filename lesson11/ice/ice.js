const apiURL = "https://www.ahfx.com/events.php";
fetch(apiURL)
  .then((response) => response.json())
  .then((events) => {
    console.log(events);

    
    for(let i = 0; i < events.length; i++){
        
        let eventSection = document.createElement('section');
        let dateDiv = document.createElement('div');
        let eventDiv = document.createElement('div');
        let time = document.createElement('p');
        let type = document.createElement('i');
        let eventName = document.createElement('h1');
        let tagDiv = document.createElement('div');
        
        eventName.textContent = events[i].properties.name
        for (let tagCount = 0; tagCount < events[i].tags.length; tagCount++){
            let tag = document.createElement('p');
            tag.textContent = events[i].tags[tagCount];
            tagDiv.appendChild(tag);
            tag.setAttribute('class', events[i].tags[tagCount].split(" ").join(""));
        }
        
        //Start Time and End Time
        time.textContent = "PLACEHOLDER TIME";
        const date = new Date(events[i].properties.start)
        dates = date.toDateString()
        console.log(dates)
        
        type.textContent = "Event Type: " + events[i].type;
        
        eventSection.appendChild(dateDiv);
        eventSection.appendChild(eventDiv);
        eventDiv.appendChild(tagDiv);
        eventDiv.appendChild(eventName);
        eventDiv.appendChild(type);
        
        document.querySelector("#content").appendChild(eventSection);
        
        tagDiv.setAttribute('class', "tagDiv");
    }

  });

  