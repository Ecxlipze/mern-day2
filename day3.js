const student = {
 name: "Ali",
 age: 20
};

const {name, age} = student;

const subjects = ["JS","React"];

const newSubjects = [...subjects,"Node"];

console.log(`Student: ${name}`);
console.log(newSubjects);