/**
 * index.html
 */
window.flip = function(flip) {
    let cube = document.getElementById("cube")
    cube.setAttribute("class", "")
    cube.classList.add(flip)
}

/**
 * home.html
 */
 let card = document.querySelector(".mdl-card__title")
 let pickUpLine = document.getElementById("pickUpLine")
 let welcomeText = document.getElementById("welcomeText");
 let luckyColor = document.getElementById("luckyColor");
 let luckyColorBtn = document.getElementById("luckyColorBtn");
 
let colors = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple'];
let pickUpLines = [
    "Do you believe in love at first sight-or should I walk by again?",
    "Well, here I am. What are your other two wishes?",
    "Feel my shirt. Know what it's made of? Boyfriend material.",
    "Did you just come out of the oven? Because you're hot.",
    "Know what's on the menu? Me 'n' u.",
    "I was feeling a little off today-but you've turned me on again!",
    "I'm studying to become a historian. I'm especially interested in finding a date.",
    "Are you a magician? Because when I'm looking at you, you make everyone else disappear!",
    "Are you a camera? Because I look at you and smile!",
    "Are you a loan? Because you sure have my interest!",
    "Any chance you have an extra heart? Mine's been stolen!",
    "They say nothing lasts forever-so would you be my nothing?"
]
 
// choose random number
 let color_randomNumber = Math.floor(Math.random()*colors.length);
 let pickUpLine_randomNumber = Math.floor(Math.random()*pickUpLines.length);
 
function setUpInterface(){
    // Color
    let chosenColor = colors[color_randomNumber];
    card.style.backgroundImage = `linear-gradient(to bottom right, ${chosenColor}, white)`;
    luckyColor.innerHTML = `<strong>${chosenColor}</strong>`
    luckyColorBtn.style.color = chosenColor

    // Username
    let userIndex = localStorage.getItem(USER_INDEX_KEY);
    let username = userList.getUser(userIndex).username;
    welcomeText.innerHTML = `<strong>${username}</strong>`

    // PickUpLine
    pickUpLine.innerText = `${pickUpLines[pickUpLine_randomNumber]}`
}

