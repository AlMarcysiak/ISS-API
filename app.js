
const api_url_iss ='https://api.wheretheiss.at/v1/satellites/25544' 
let lat = document.getElementById("lat");
let long = document.getElementById("long");
let vel = document.getElementById("vel");

const mymap = L.map('mapid').setView([0, 0], 2);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });

tiles.addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'station1.png',
    iconSize: [60, 42],
    iconAnchor: [22, 16], 
    
    
    
});
var marker = L.marker([0, 0], {icon:myIcon}).addTo(mymap);

async function getDataIss (){
    const data = await fetch(api_url_iss).then(data => data.json());
    const {latitude, longitude, velocity} = data;
    lat.textContent = latitude.toFixed(2);
    long.textContent = longitude.toFixed(2);
    vel.textContent = velocity.toFixed(2);
    marker.setLatLng([latitude,longitude]);
    mymap.setView([latitude, longitude], 2);
}

// getDataIss();


function inter(time){
    var idInter = setInterval(getDataIss, time);

}
inter(1000);
