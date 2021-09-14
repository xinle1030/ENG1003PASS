function logOut() {
    if (confirm("Are you sure you want to log out?")) {
      // Runs if user clicks 'OK'
      updateLocalStorage(USER_INDEX_KEY, 0);
      alert("Log out successful.");
      window.location = "index.html";
    }
  }