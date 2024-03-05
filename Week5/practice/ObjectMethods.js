const obj1 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj1);
console.log(keys);  // Output: ["a", "b", "c"] 


const obj2 = { a: 1, b: 2, c: 3 };
const values = Object.values(obj2);
console.log(values); // Output: [1, 2, 3]


const obj3 = { a: 1, b: 2, c: 3 };
const entries = Object.entries(obj3);
console.log(entries); // Output: [["a", 1], ["b", 2], ["c", 3]]


const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const mergedObj = Object.assign(target, source);
console.log(mergedObj); // Output: { a: 1, b: 3, c: 4 }


const obj4 = { a: 1, b: 2 };
const properties = Object.getOwnPropertyNames(obj4);
console.log(properties); // Output: ["a", "b"]



const obj5 = { a: 1, b: 2 };
Object.freeze(obj5);
obj5.a = 3; // Attempted change
console.log(obj5); // Output: { a: 1, b: 2 } - no change



const obj6 = { a: 1, b: 2 };
Object.seal(obj6);
obj6.c = 3; // Attempted addition
console.log(obj6)  
// Output: { a: 1, b: 2 } - no new property added
