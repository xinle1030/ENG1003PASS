function logOut() {
    if (confirm("Are you sure you want to log out?")) {
      // Runs if user clicks 'OK'
      let i = getDataLocalStorage(USER_INDEX_KEY);
      userList.users[i].status = false;
      updateLocalStorage(USERLIST_DATA_KEY, userList);
      updateLocalStorage(USER_INDEX_KEY, 0);
      alert("Log out successful.");
      window.location = "index.html";
    }
  }