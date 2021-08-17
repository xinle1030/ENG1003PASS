// Pass functions to another functions, for exp: setInterval(), setTimeOut()

// setInterval(nameOfFunction,delayInMilliseconds) - execute function EVERY delayInMilliseconds

// Method 1: using named function
function display()
{
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDay();
    var year = today.getFullYear();

    var hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();
    var milliseconds = today.getMilliseconds();

    var output = month + '/' + day + '/' + year + ' - ' +
    hour + ':' + minute + ':' + seconds + ':' + milliseconds;

    console.log(output)
}
// setInterval(display, 1000);


// Method 2: using anonymous function
let interval = setInterval(function(){
    var today = new Date();
    var month = today.getMonth();
    var day = today.getDay();
    var year = today.getFullYear();

    var hour = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    var minute = today.getMinutes();
    var seconds = today.getSeconds();
    var milliseconds = today.getMilliseconds();

    var output = month + '/' + day + '/' + year + ' - ' +
    hour + ':' + minute + ':' + seconds + ':' + milliseconds;

    console.log(output)
}, 1000);