let each_todo = document.getElementsByTagName("li")
let addIcon = document.getElementsByClassName("add-icon")
let input = document.getElementById("new-todo")
let deleteIcons = document.getElementsByClassName("delete-icon")

toDoListener()

function toDoListener(){
    for (let i = 0; i < each_todo.length; i++) {
        each_todo[i].addEventListener("click", function() {
            // this refers to each_todo[i]
            this.classList.toggle("completed");
        });
        deleteIcons[i].addEventListener("click", function() {
            // this refers to deleteIcons[i]
            fadeOutEffect(this.parentNode);
            console.log(this.parentNode)
        })
    }
}

function fadeOutEffect(fadeTarget) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
            fadeTarget.remove()
        }
    }, 25);
}

// to add new to do
// event is a default parameter provided by keypress callback
input.addEventListener("keypress", function(event) {
    // .which detect key code 13 which is "Enter" key
    if (event.keyCode === 13) {
        let todoText = input.value
        input.value = ""
        let ul = document.getElementById("todo-list")
        ul.innerHTML += `<li><span class="material-icons delete-icon">delete</span> ${todoText}</li>`
        deleteIcons = document.getElementsByClassName("delete-icon")
        each_todo = document.getElementsByTagName("li")
        toDoListener()
    }
});