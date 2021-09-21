"use strict";

mapboxgl.accessToken = MAPBOX_KEY
let map = new mapboxgl.Map({
  container: 'map',
  center: [145.1343136,-37.908],
  zoom: 5,
  style: 'mapbox://styles/mapbox/streets-v9'
});

// Populates the list of countries using countries.js
let countrieslist = document.getElementById("countries");
let countriesOutput = "";
for (let i = 0; i < countryData.length; i++) {
    countriesOutput += `<option value= "${countryData[i]}">`;
}
countrieslist.innerHTML = countriesOutput;

// Global Variables
let country = "";
let lat = "";
let lng = "";
let airportName = "";
let airportCity = "";
let markers = [];
let popUps = [];

// getAirports()
//
// This function is to retrieve the list of airports from the API by making a web service call to Airports API.
//
// returns:
//      This function does not return anything.
function getAirports() {
    removeMarker();
    clearAirportData();

    // retrieve the input from user
    let countryRef = document.getElementById("country");
    let country = countryRef.value;

    let url = `https://eng1003.monash/OpenFlights/airports/`;

    let data = {
        country: country,
        callback: "showAirports"
    }
    webServiceRequest(url, data);
}

// showAirports()
//
// This function is to retrieve and display the airports on the map after making a web service call to Airport API.
//
// argument: airportData: this represents the data of the airport from Airport API.
//
// returns:
//      This function does not return anything.
function showAirports(airportData) {

    let output = "";

    for (let j in airportData) {

        let airportId = airportData[j].airportId;
        let latitude = airportData[j].latitude;
        let longitude = airportData[j].longitude;
        let airportName = airportData[j].name;
        let airportCity = airportData[j].city;

        output += `<option value="${airportId}">${airportName}</option>`;

        airportApiData.addAirportId(airportId);
        airportApiData.addLatitude(latitude);
        airportApiData.addLongitude(longitude);
        airportApiData.addAirportName(airportName);
        airportApiData.addCity(airportCity);
    }

    let listRef = document.getElementById("airportList");
    listRef.innerHTML = output;

    map.panTo([airportApiData.longitude[0], airportApiData.latitude[0]]);
    map.getBounds();

    /*show all airports when a country is selected */
    for (let j in airportApiData.airportId) {
        airportName = airportApiData.airportName[j];
        airportCity = airportApiData.city[j];

        // TODO: Create a marker with the location set to the city coordinates
        let marker = new mapboxgl.Marker({
            "color": "orange"
        });

        markers.push(marker);

        lat = airportApiData.latitude[j];
        lng = airportApiData.longitude[j];
        marker.setLngLat([lng, lat]);

        let popup = new mapboxgl.Popup({
            offset: 45,
            closeOnMove: true
        });

        popUps.push(popup);

        let description = `Country: ${country}<br>City: ${airportCity}<br>Airport: ${airportName}`;
        popup.setHTML(description);

        // TODO: Attach the popup to the marker
        marker.setPopup(popup)

        // TODO: Add the marker to the map
        // Display the marker.
        marker.addTo(map);

        // TODO: Add the popup to the map
        // Display the marker.
        popup.addTo(map);
    }
    updateLocalStorage(AIRPORT_DATA_KEY, airportApiData);
}

// getSource()
//
// This function is to retrieve and store the source airport in local storage..
//
// returns:
//      This function does not return anything.
function getSource() {
    showSelectedAirport();
    let source = Number(document.getElementById("airportList").value);
    updateLocalStorage(SOURCE_DATA_KEY, source);
}

// showSelectedAirport()
//
// This function is to display only the airport selected by the user on the map.
//
// returns:
//      This function does not return anything.
function showSelectedAirport(){
    let source = Number(document.getElementById("airportList").value);
    removeMarker();
    let sourceIndex = airportApiData.airportId.findIndex(id => id == source);

    airportName = airportApiData.airportName[sourceIndex];
    airportCity = airportApiData.city[sourceIndex];

    // TODO: Create a marker with the location set to the city coordinates
    let marker = new mapboxgl.Marker({
        "color": "orange"
    });

    markers.push(marker);

    lat = airportApiData.latitude[sourceIndex];
    lng = airportApiData.longitude[sourceIndex];

    map.setCenter([lng, lat]);
    map.getBounds();

    marker.setLngLat([lng, lat]);

    // TODO: Create a popup with an offset of 45 and set its contents to show 
    //       the city name (from the API) as well as the AQI on seperate lines
    let popup = new mapboxgl.Popup({
        offset: 45,
        closeOnMove: true
    });

    popUps.push(popup);

    let description = `Country: ${country}<br>City: ${airportCity}<br>Airport: ${airportName}`;
    popup.setHTML(description);

    // TODO: Attach the popup to the marker
    marker.setPopup(popup)

    // TODO: Add the marker to the map
    // Display the marker.
    marker.addTo(map);

    // TODO: Add the popup to the map
    // Display the marker.
    popup.addTo(map);

}

// clearAirportData()
//
// This function is to clear all the data stored in Airport class instance called airportApiData.
//
// returns:
//      This function does not return anything.
function clearAirportData() {
    airportApiData.airportId.length = 0;
    airportApiData.airportName.length = 0;
    airportApiData.latitude.length = 0;
    airportApiData.longitude.length = 0;
    airportApiData.city.length = 0;
}

// removeMarker()
//
// This function is to clear all the markers and popups displayed on the map.
//
// returns:
//      This function does not return anything.
function removeMarker() {
    for (let j in markers) {
        markers[j].remove();
        popUps[j].remove();
    }
    markers.length = 0;
    popUps.length = 0;
}

// Code that will run on load
map.on('zoomend', function () {
    // run some code if the zoom changes
    removeMarker();
    getAirports();
});