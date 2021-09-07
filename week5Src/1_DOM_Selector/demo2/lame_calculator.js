"use strict";

function calculate() {
  // retrieve input value1
  let value1Ref = document.getElementById("value1");
  let value1 = Number(value1Ref.value);

  // retrieve input value2
  let value2Ref = document.getElementById("value2");
  let value2 = Number(value2Ref.value);

  let operatorRef = document.getElementById("operator");
  let operator = operatorRef.value;

  let returnVal = 0;

  switch (operator) {
    case "+":
      returnVal = value1 + value2;
      break;
    case "-":
      returnVal = value1 - value2;
      break;
    case "x":
      returnVal = value1 * value2;
      break;
    case "/":
      returnVal = value1 / value2;
      break;
  }

  // retrieve radio input
  let dpRef = document.querySelector("input[name='decimalPoint']:checked")
  let dp = 0;
  if (dpRef != null){
    dp = Number(dpRef.value)
  }

  // resultAreadRef contains the reference to the HTML element resultArea
  let resultAreaRef = document.getElementById("resultArea");

  // write the output as HTML element to the div section with id resultArea
  resultAreaRef.innerText = returnVal.toFixed(dp);

}
