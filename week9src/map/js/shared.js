"use strict";

// Route API
class Airport {
    constructor() {
        // airportData
        this._airportId = [];
        this._airportName = [];
        this._latitude = [];
        this._longitude = [];
        this._city = [];
    }

    get airportId() {
        return this._airportId;
    }
    get airportName() {
        return this._airportName;
    }
    get latitude() {
        return this._latitude;
    }
    get longitude() {
        return this._longitude;
    }
    get city() {
        return this._city;
    }

    // Methods
    // from airportData
    addAirportName(newAirportName) {
        this._airportName.push(newAirportName);
    }
    addAirportId(newAirportId) {
        this._airportId.push(newAirportId);
    }
    addLatitude(lat) {
        this._latitude.push(lat);
    }
    addLongitude(lng) {
        this._longitude.push(lng);
    }
    addCity(newCity) {
        this._city.push(newCity);
    }

    fromData(data) {
        this._airportId = data._airportId;
        this._airportName = data._airportName;
        this._latitude = data._latitude;
        this._longitude = data._longitude;
        this._city = data._city;
    }
}

// checkIfDataExistsLocalStorage()
//
// This function is to check if any data exists in local storage at the defined key.
//
// argument: key: this represents the defined key which holds specific data within local storage.
//
// returns:
//      This function returns a boolean of either true or false.
function checkIfDataExistsLocalStorage(key) {
    let data = localStorage.getItem(key);
    if (data) {
        if (data !== null && data !== "undefined" && data !== "") {
            return true;
        }
    }
    else {
        return false;
    }
}

// updateLocalStorage()
//
// This function is to store the provided data into local storage at the defined key.
//
// argument: key: this represents the defined key which holds specific data within local storage.
//
// argument: data: this represents the data to be stored.
//
// returns:
//      This function does not return anything.
function updateLocalStorage(key, data) {
    let dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
}

// getDataLocalStorage()
//
// This function is to retrieve data from local storage at the defined key.
//
// argument: key: this represents the defined key which holds specific data within local storage.
//
// returns:
//      This function returns the data in the form of object.
function getDataLocalStorage(key) {
    let retrievedData = localStorage.getItem(key);
    let dataObject;
    try {
        dataObject = JSON.parse(retrievedData); // converting to object
    }
    catch (e) {
        console.log(e);
    }
    finally {
        return dataObject;
    }
}

// Code that will run on load
let airportApiData = new Airport();

if (typeof Storage !== "undefined")
{
    console.log("localStorage is available.");
}
else
{
    console.log("localStorage is not supported by current browser.");
}