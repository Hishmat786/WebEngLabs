const number = 0;
console.log(`my friends are ${(number>0 ? number : "No friend ")} `);

console.log(`I have ${(number>100 ? "Many friends" : "less friend")} `);

var Obj={
    name: "Hishmat",
    gender: "Male",
    code: 786,
    age: 24
}

var obj1= {... Obj}     //Sprid operater
obj1.name="Himanshu";

console.log(Obj)
console.log(obj1)


array = [1,2,3,4,5,6,7,8,9]

arr = [... array]

arr[0]= 10

console.log(array)
console.log(arr)