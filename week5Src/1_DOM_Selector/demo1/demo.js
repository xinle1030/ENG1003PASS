let elem = document.getElementsByClassName("title");
let body1 = document.getElementsByTagName("body")
let body2 = document.querySelector("body")
let pageChangeColor = false;
let flag;

// elem.style.color = "green";
// for (let index in elem){
//     (elem[index]).style.color = "red";
// }

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function btnFunc(){
    console.log("run")
    console.log(pageChangeColor)
    if (!pageChangeColor){
        flag = setInterval(
            function(){
                body2.style.backgroundColor = getRandomColor();
                pageChangeColor = true
            },
            500
        );
    }
    else{
        clearInterval(flag);
        pageChangeColor = false
    }
}

let my_btn = document.getElementById("my_btn");
my_btn.addEventListener("change", btnFunc)