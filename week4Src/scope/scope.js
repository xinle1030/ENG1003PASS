let x = 0;
let y = 0;

callMeOften1();
callMeOften1();
callMeOften1();
console.log("");
callMeOften2();
callMeOften2();
console.log("");

function callMeOften1() {
  let x = 0;
  x++;
  console.log("callMeoften1: x = " + x);
  y++;
  console.log("callMeoften1: y = " + y);
}