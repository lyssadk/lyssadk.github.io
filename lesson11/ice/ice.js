const apiURL = "https://www.ahfx.com/events.php";
fetch(apiURL)
  .then((response) => response.json())
  .then((events) => {
    console.log(events);

    let months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December"];

    for(let i = 0; i < events.length; i++){
        
        let eventSection = document.createElement('section');
        let dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        let eventDiv = document.createElement('div');
        let time = document.createElement('p');
        let type = document.createElement('p');
        let eventName = document.createElement('h1');
        let tagDiv = document.createElement('div');
        let day = document.createElement('h1');
        let month = document.createElement('p');
        let year = document.createElement('p');
        let organizer = document.createElement('p');

        eventName.textContent = events[i].properties.name
        organizer.textContent = "Organized by: " + events[i].properties.organized_by;
        organizer.setAttribute('class', "eventOrganizer");
        
        for (let tagCount = 0; tagCount < events[i].tags.length; tagCount++){
            let tag = document.createElement('p');
            tag.textContent = events[i].tags[tagCount];
            tagDiv.appendChild(tag);
            tag.setAttribute('class', events[i].tags[tagCount].split(" ").join(""));

            if(events[i].tags[tagCount] == "Event Over"){
                organizer.textContent = "";
            }
        }


        //Start Time and End Time
        let startdate = new Date(events[i].properties.start);
        let enddate = new Date(events[i].properties.end);
        day.textContent = startdate.getDate();
        year.textContent = startdate.getFullYear();
        mon = startdate.getMonth();
        month.textContent = months[mon];
        
        time.innerHTML = 	"&#128337 Time: " + startdate.toLocaleTimeString().substring(0,5) + startdate.toLocaleTimeString().substr(8,8) + '-' + enddate.toLocaleTimeString().substring(0,5) + enddate.toLocaleTimeString().substr(8,8);
        
         
        
        
        type.textContent = "Event Type: " + events[i].type;
        type.setAttribute('class', "eventType");
        
        eventSection.appendChild(dateDiv);
        eventSection.appendChild(eventDiv);
        eventDiv.appendChild(tagDiv);
        eventDiv.appendChild(eventName);
        eventDiv.appendChild(time);
        eventDiv.appendChild(type);
        eventDiv.appendChild(organizer);
        dateDiv.appendChild(year)
        dateDiv.appendChild(day);
        dateDiv.appendChild(month);
        
        
        document.querySelector("#content").appendChild(eventSection);
        
        tagDiv.setAttribute('class', "tagDiv");
    }

  });

  