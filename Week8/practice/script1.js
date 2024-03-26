var Obj={
    name: "Hishmat",
    gender: "Male",
    code: 786,
    age: 24
}

const {name,age, ...rest} =Obj  // rest operator
console.log(name, age)
console.log(rest)