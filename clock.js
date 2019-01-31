
const secondsHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digital');
const fecha = document.querySelector('.date');

function setTime() {

    const dateNow = new Date();
    const second = dateNow.getSeconds();
    const minute = dateNow.getMinutes();
    const hour = dateNow.getHours(); 

    const secondDegrees = ((second / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    const minuteDegrees = ((minute / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hourDegrees = ((hour / 12) * 360) + 90; 
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;


    digitalClock.innerHTML = (`${hour}:${minute}:${second}`);

}

function addDate() {
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  const month = dateNow.getMonth();
  const day = dateNow.getDate();

  fecha.innerHTML = (`${year}-${month + 1}-${day}`);
}


// next step is to make map load with coordinates set at the right spot 

var map;

function initMap() {
  navigator.geolocation.getCurrentPosition(function(position) {
    const pos = {
      lat : position.coords.latitude,
      lng : position.coords.longitude };
    map = new google.maps.Map(document.getElementById('map'), {
      center: pos,
      zoom: 13
    });
  });
}




setInterval(setTime, 1000);
addDate();


// when you understand node.js, use this https://www.npmjs.com/package/local-reverse-geocoder

// maybe change background picture based on location 




function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}