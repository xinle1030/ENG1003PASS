function logIn() {
    let usernameRef = document.getElementById("login_username");
    let inputUsername = usernameRef.value;
    let passwordRef = document.getElementById("login_password");
    let inputPassword = passwordRef.value;
  
    // All validations
    // Checking if inputs are empty
    if (inputUsername === "") {
      alert("Please fill in your username.");
    }
    else if (inputPassword === "") {
      alert("Please fill in your password.");
    }
    // Checking if inputs include spaces
    else if (inputUsername.includes(" ")) {
      alert("Username entered should not include spaces.");
    }
    else if (inputPassword.includes(" ")) {
      alert("Password entered should not include spaces.");
    }
    else {
      let usernameIndex = userList.users.findIndex(x => x.username == inputUsername);
      if (userList.users[usernameIndex] === undefined)
      {
        alert("User does not exist.");
      }
      else if (userList.users[usernameIndex].password == inputPassword) {
        updateLocalStorage(USER_INDEX_KEY, usernameIndex);
        alert("Log in successful.");
        window.location = "home.html";
      }
      else {
        alert("Sorry, your password was incorrect. Please double-check again.");
      }
    }
  }