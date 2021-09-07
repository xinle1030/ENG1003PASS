"use strict";

let user1 = {
    username: "user1",
    email: "user1@gmail.com",
    password: "123456"
}

function showName()
{

    // check if local storage exists or not 
    if (typeof (Storage) !== "undefined"){
        localStorage.setItem(DATA_KEY, JSON.stringify(user1))
    }

}

const DATA_KEY = "SDFGHJK765432";

if (typeof(Storage) !== "undefined"){
    let jsonString = localStorage.getItem(DATA_KEY);
    console.log(jsonString)
    
    // resultAreadRef contains the reference to the HTML element resultArea
    let resultAreaRef = document.getElementById("resultArea");

    // make sure jsonString is not undefined, empty string, null
    if (typeof jsonString != "undefined" && jsonString != "" && jsonString != null){
        // let jsonObj = JSON.parse(jsonString);
        // console.log(jsonObj)
        // for (let key in jsonObj){
        //     resultAreaRef.innerHTML += `${jsonObj[key]}   `;
        // }
        resultAreaRef.innerHTML = jsonString
        
    }
}

