let arr= [1,2,3,4,5]

console.log(arr)
console.log(arr[2])

arr.push(6)     // add 6 in last
console.log(arr)
arr.pop()       // pop last element entered
console.log(arr)

arr.shift()      // remove 1st element in array
console.log(arr)

arr.unshift(0,10)   // added multiple value in the start of array
console.log(arr)

let arr2=[5,6,7,8,9]
let arr3= arr.concat(arr2) // arr two arrays to another array
console.log(arr3)
///////////////////////////////////////////////////////////////////////////////
// SORTING ARRAY
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);  //Extracts a section of an array and return
console.log(citrus)
const myBest = fruits.slice(-3, -1);
console.log(myBest)
///////////////////////////////////////////////////////////////////////////////
// array.splice(start,delete,element1,element2,?,elementn)
console.log(fruits)
fruits.splice(2,1,"Kiwi","anb")    // delete one item from index 2 ,and replace it with kiwi
console.log(fruits) 

////////////////////////////////////////////////////////////////////////////////////

var anyString = "Hello new world"; 
var a = anyString.indexOf("w"); // result = 8 
var b = anyString.lastIndexOf("w"); // result =10
console.log(a,b)   

