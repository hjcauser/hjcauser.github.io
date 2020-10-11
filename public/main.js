//const leaflet = require('leaflet');

const netat_url = `netatmo1/`
const mymap = L.map('brucemap').setView([0, 0],14);
const marker = L.marker([0, 0]).addTo(mymap);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

async function getnetatmo() {
    const response = await fetch(netat_url); // - gets data from netat url
    const data = await response.json();  //-turns data from netatmo in to json and stores it in data const
    const lat = data.body.devices[0].place.location[1];
    const lon = data.body.devices[0].place.location[0];
    const sname = data.body.devices[0].station_name;
    const timenow = data.body.devices[0].dashboard_data.time_utc;
    console.log(lat);//logs data in console
    console.log(lon)//logs data in console
    console.log(sname)//logs data in console

    marker.setLatLng([lat, lon]).addTo(mymap);
    mymap.setView([lat, lon], 10);

    const date = new Date(timenow*1000);
    
    document.getElementById('lat').textContent = lat.toFixed(3);
    document.getElementById('lon').textContent = lon.toFixed(3);
    document.getElementById('sname').textContent = sname;
    document.getElementById('date').textContent = date;
    document.getElementById('temp').textContent = data.body.devices[0].dashboard_data.Temperature;
    document.getElementById('CO2').textContent = data.body.devices[0].dashboard_data.CO2;
  }
  getnetatmo(); //calls the function below

  
  //setInterval(getnetatmo, 100000) //refreshes data every 15mins
