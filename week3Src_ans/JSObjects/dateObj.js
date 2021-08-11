/**
 * Forming Date
 */
let today = new Date();

// the month is 0-indexed
let someday = new Date("2011-09-24");    

console.log(today);
console.log(someday);

console.log();

/**
 * Extract Date Data Method
 *  - 0-based index system, so the first value is actually 0, not 1.
 *      - getMonth:     0 - 11
 *      - getDay:       0 - 6
 *      - getHours:     0 - 23
 *      - getSeconds:   0 - 59
 *  - 1-based index system, so first value = 1
 *      - getDate: 1 - 31
 */
const date = new Date();
const [month, day, year]       = [date.getMonth(), date.getDate(), date.getFullYear()];
const [hour, minutes, seconds] = [date.getHours(), date.getMinutes(), date.getSeconds()];

console.log(date);
console.log("month: " + month);
console.log("day: " + day);
console.log("year: " + year);
console.log("hour: " + hour);
console.log("minutes: " + minutes);
console.log("seconds: " + seconds);
