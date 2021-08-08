/**
 * Object Nesting
 */
 let complete_personInfo = {
    name: "John", 
    age: 30, 
    job: "teacher", 
    salary: 5000.00, 
    student1: {
        name: "Sally", 
        age: 21, 
        WAM: 99.99},
    student2: {
        name: "Kong", 
        age: 22, 
        WAM: 85.00}
};

let name = complete_personInfo.name;
let age = complete_personInfo.age;
let job = complete_personInfo.job;
let salary = complete_personInfo.salary;
let student1 = complete_personInfo.student1;
let student2 = complete_personInfo.student2;

for (let key in complete_personInfo){
    if (key.includes("student")){
        console.log(complete_personInfo[key][name]);
        // console.log(complete_personInfo[key]["name"]);
        console.log(complete_personInfo[key].name);
    }
}