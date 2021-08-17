// https://www.jobstreet.com.my/en/career-insights/engineer/salary

let jobs = [
    {
        title : "civil engineer",
        salary : 3800,
        location : "KL"
    },
    {
        title : "chemical engineer",
        salary : 4000,
        location : "Negeri Sembilan"
    },
    {
        title : "software engineer",
        salary : 4900,
        location : "Perak"
    },
    {
        title : "electrical engineer",
        salary : 3200,
        location : "Melaka"
    },
    {
        title : "mechanical engineer",
        salary : 3500,
        location : "Penang"
    },
]

// The filter() method creates an array filled with all array elements that pass a test (provided by a function).

// Method 1
let dreamJobs1 = jobs.filter(function (job) {
    console.log(job.title);
    return job.salary > 3500;
});
console.log(dreamJobs1);

console.log()

// Method 2
let dreamJobs2 = jobs.filter((job) => {
    console.log(job.title);
    return job.salary > 3500;
});
console.log(dreamJobs2);

console.log()

// Method 3
let dreamJobs3 = jobs.filter((job) => job.salary > 3500);
console.log(dreamJobs3);