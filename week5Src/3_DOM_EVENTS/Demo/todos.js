// select all elements with li tag
// let lis = document.querySelectorAll("li");
lis = document.getElementsByClassName("list");

// loops through the elements with li tag 
for (let i = 0; i < lis.length; i++) {
    // when hover
    lis[i].addEventListener("mouseover", function() {
        // this refers to lis[i]
        this.classList.add("selected");
    });

    // when hover is over
    lis[i].addEventListener("mouseout", function() {
        // this refers to lis[i]
        this.classList.remove("selected");
    });

    lis[i].addEventListener("click", function() {
        // this refers to lis[i]
        this.classList.toggle("done");
    });
}