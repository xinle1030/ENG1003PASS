// OOP
/** 
 * shared.js 
 * This file contains shared code that runs on both home.html and index.html
 */

 "use strict";

 const USERLIST_DATA_KEY = "userListLocalData";
 const USER_DATA_KEY = "userLocalData";
 const USER_INDEX_KEY = "selectedUserIndex";

 class User {
     constructor(id, username, password) {
         this._id = id;
         this._username = username;
         this.password = password;
     }
 
     get id() {
         return this._id;
     }
 
     get username() {
         return this._username;
     }
 
     get password() {
         return this._password;
     }
 
     set username(username) {
         this._username = username;
     }
 
     set password(password) {
         this._password = password;
     }
 
     fromData(data) {
         this._id = data._id;
         this._username = data._username;
         this._password = data._password;
     }

 }
 

 class UserList {
    // Constructor
    constructor() {
        // Private attributes
        this._users = [];
    }

    // Accessors
    get users() {
        return this._users;
    }
    get count() {
        return this._users.length;
    }

    // Methods
    addUser(id, username, password) {
        let user = new User(id, username, password);
        this._users.push(user);
    }

    getUser(index) {
        return this._users[index];
    }

    fromData(data) {
        this._users = [];
        for (let i = 0; i < data._users.length; i++) {
            let user = new User();
            user.fromData(data._users[i]);
            this._users.push(user);
        }
    }
}

function checkForLocalStorage(key) {
    let data = localStorage.getItem(key);
    if (data !== null && data !== undefined && data !== ""){
        return true
    }
    else{
        return false
    }
}
 
 function updateLocalStorage(key, data) {
     let dataString = JSON.stringify(data)
     localStorage.setItem(key, dataString)
}

 function getDataLocalStorage(key) {
     let retrievedData = localStorage.getItem(key)
     let dataObject;
     try{
         dataObject = JSON.parse(retrievedData)
     }
     catch(e){
         console.log(e)
     }
     finally{
         return dataObject;
     }
}
 
let userList = new UserList();

 
if (typeof Storage !== "undefined")
{
    console.log("localStorage is available.");
    if (checkForLocalStorage(USERLIST_DATA_KEY)){
        let data = getDataLocalStorage(USERLIST_DATA_KEY)
        userList.fromData(data)
    }
    else{
        let newId = "001"
        userList.addUser(userId, "anonymous user", "")
        updateLocalStorage(USERLIST_DATA_KEY, userList)
    }

    if (!checkForLocalStorage(USER_INDEX_KEY)){
        let index = 0;
        updateLocalStorage(USER_INDEX_KEY, index)
    }

}
else
{
    console.log("localStorage is not supported by current browser.");
}
