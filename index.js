const express = require ('express');
const app = express();
const fetch = require('node-fetch');
//require('dotenv').config();

app.listen(3000, () =>console.log('Listening @ 3000'));
app.use(express.static('public'));


app.get('/netatmo1', async (request, response) => {
const netatmo_api1 = `https://api.netatmo.com/api/getstationsdata?access_token=5f67f50c4820657f86439699|024dc3ceb49bfde5853d232004f3f7a0&device_id=70:ee:50:03:b7:9c`
const netat_response = await fetch(netatmo_api1);
const json = await netat_response.json();
response.json(json);
console.log(json.body.devices[0]);
});