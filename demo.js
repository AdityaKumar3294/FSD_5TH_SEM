const student = {
  name : "Aditya",
  age : 21,
  branch : "CSE",
}

const newTutor = {
  ...student,
  sec : "A"
}

console.log("new object name", newTutor.name);
console.log("new object age", newTutor.age);
console.log("new object branch", newTutor.branch);
console.log("new object Section", newTutor.sec);
