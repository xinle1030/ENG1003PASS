// an object with an array with an object inside the array?

let obj = {
    array:[
        {
            name: "ppl1",
            age: 30,
            studentId: "123456"

        },
        {
            name: "ppl2",
            age: 30,
            studentId: "234567"
        },
        {
            name: "ppl3",
            age: 30,
            studentId: "345678"
        }
    ]
}

let arr = obj["array"]

function my_filter1(name, studentId){
    return (arr.findIndex((elem) => (elem.name == name && elem.studentId == studentId)) != -1)
}

function my_filter2(name, studentId){
    let index_found = arr.findIndex((elem) => (elem.name == name && elem.studentId == studentId))
    // ternary operator
    return ((index_found != -1) ? true : false)
}

function my_filter3(name, studentId){
    let index_found = arr.findIndex((elem) => (elem.name == name && elem.studentId == studentId))
    if (index_found != -1){
        return true
    }
    else{
        return false
    }
}

console.log(my_filter1("ppl1", "123456"))
console.log(my_filter2("ppl1", "123456"))
console.log(my_filter3("ppl1", "123456"))