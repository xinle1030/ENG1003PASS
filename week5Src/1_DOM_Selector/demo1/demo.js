let elem = document.getElementsByClassName("title");
let body1 = document.getElementsByTagName("body")
let body2 = document.querySelector("body")
let pageChangeColor = false;
let flag;

// body2.style.color = "green";
// body1.style.color = "green";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function btnFunction(){
  if (pageChangeColor != true){
    flag = setInterval(
      function(){
        body2.style.backgroundColor = getRandomColor();
      }, 500
    )
    pageChangeColor = true
  }
  else{
    clearInterval(flag)
    pageChangeColor = false
  }
}

let btn = document.getElementById("my_btn")
btn.addEventListener("click", btnFunction)