"use strict";

mapboxgl.accessToken = MAPBOX_KEY
let map = new mapboxgl.Map({
  container: 'map',
  center: [145.1343136,-37.908],
  zoom: 14,
  style: 'mapbox://styles/mapbox/streets-v9'
});

let current_lat = "";
let current_lng = "";
let markers = [];
let popUps = [];
let removeLayerId = [];

function callGetUserLocation(){
    getUserCurrentLocationUsingGeolocation(getUserLocationCallback)
} 

function getUserLocationCallback(lat, lng){
    current_lat = lat;
    current_lng = lng;
    console.log(current_lat)
    console.log(current_lng)
}

function callShowPoi(){
    let query = document.getElementById("searchCategory").value
    sendXMLRequestForPlaces(query, current_lng, current_lat, showPoiCallback)
}

function showPoiCallback(data){
    removeMarker()
    let locations = [];
    for (let i in data.features){
        let each_feature = (data.features)[i]
        let coordinates = each_feature.geometry.coordinates
        let place_name = each_feature.place_name
        let obj = {
            coordinates: coordinates, 
            place_name: place_name
        }
        locations.push(obj)
    }
    map.panTo(locations[0].coordinates)
    showMarkers(locations)
}

function showMarkers(locations){
    for (let i = 0; i < locations.length; i++)
    {
      let coordinates = locations[i].coordinates;
      let place_name = locations[i].place_name;
    
      let marker = new mapboxgl.Marker({ "color": "#FF8C00" });
      marker.setLngLat(coordinates);
    
      let popup = new mapboxgl.Popup({ offset: 45});
      popup.setHTML(place_name);
    
      marker.setPopup(popup)
    
      // Display the marker.
      marker.addTo(map);
    
      // Display the popup.
      popup.addTo(map);

      markers.push(marker)
      popUps.push(popup)
    }
}

function removeMarker() {
    for (let j in markers) {
        markers[j].remove();
        popUps[j].remove();
    }
    markers.length = 0;
    popUps.length = 0;
}