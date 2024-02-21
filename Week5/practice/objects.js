let student={
    name:"Hishmat rai",
    cms: "021-21-0034",
    dpt: "BS CS",
    age:  24,
    today: new Date()
}
student.semester=7  //  add semester property to the object
console.log(student)
console.log(student.name)

age='age'
console.log(student.age)
console.log(student['age'])
console.log(student[age])
console.log("////////////////////////////////////////////////////")
// for(let x in student){
//     console.log(x);
// }
const myArray = Object.values(student);
let myString = JSON.stringify(student);
console.log(myArray);
console.log(myString);