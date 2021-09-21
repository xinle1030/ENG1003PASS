"use strict";

mapboxgl.accessToken = MAPBOX_KEY
let map = new mapboxgl.Map({
  container: 'map',
  center: [145.1343136,-37.908],
  zoom: 16,
  style: 'mapbox://styles/mapbox/streets-v9'
});

let locations = [
{
    coordinates: [145.1343136,-37.908],
    description: "location : Australia Post Mount Waverley"
},
{
    coordinates: [145.123612, -37.920469],
    description: "Name : Dr. Tan <br>location : Monash Medical Centre <br>Order # : 368975142 <br>Sign req : Yes"

},
{
    coordinates: [145.13203, -37.915669],
    description: "Name : Mr. Nisal <br>location : Mannix College <br>Order # : 875412847 <br>Sign req : Yes"

},
{
    coordinates: [145.142785, -37.905812],
    description: "Name : Ms. White <br>location : Rusden House <br>Order # : 698547158 <br>Sign req : No"
}
];

let removeLayerId = [];

for (let i = 0; i < locations.length; i++)
{
  let location = locations[i];

  let marker = new mapboxgl.Marker({ "color": "#FF8C00" });
  marker.setLngLat(location.coordinates);

  let popup = new mapboxgl.Popup({ offset: 45});
  popup.setHTML(location.description);

  marker.setPopup(popup)

  // Display the marker.
  marker.addTo(map);

  // Display the popup.
  popup.addTo(map);
}

function showPath(locations)
{
    let newId = (Math.floor(Math.random() * 100000000)).toString();
    removeLayerId.push(newId);
    let color = Math.random().toString(16).substr(-6);
    map.addSource(`${newId}`, {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': locations
            }
        }
    });
    map.addLayer({
        'id': `${newId}`,
        'type': 'line',
        'source': `${newId}`,
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': `#${color}`,
            'line-width': 5
        }
    });
}

function callShowPath(){
        for (let i = 0; i < locations.length - 1; i += 2){
            let locationsToDraw = [locations[i].coordinates, locations[i+1].coordinates]
            showPath(locationsToDraw)
        }
}

function clearPath(){
    for (let j in removeLayerId) {
        map.removeLayer(removeLayerId[j]);
    }
    removeLayerId = [];
}


map.on("load",callShowPath);