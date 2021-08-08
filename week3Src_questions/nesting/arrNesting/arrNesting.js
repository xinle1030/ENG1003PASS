/**
 * Array Nesting
 */
let complete_personInfo = [
    "John", 30, "teacher", 5000.00, [
        ["Sally", 21, 99.99],
        ["Kong", 22, 85.00]
    ]
];

let name = complete_personInfo[0];
let age = complete_personInfo[1];
let job = complete_personInfo[2];
let salary = complete_personInfo[3];
let students = complete_personInfo[4];

console.log(students);
for (let index in students){
    let student_name = students[index][0];
    console.log(student_name);
}