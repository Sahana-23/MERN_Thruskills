let names = ['js','python','java']
console.log("Original Array: ",names)

//push() and pop()
console.log("\nPush and pop")
console.log(names.push("c"))
console.log(names)
console.log(names.pop("c"))
console.log(names)

//shift() and unshift()
console.log("\nshift() and unshift()")
console.log(names.unshift('node'));
console.log(names);
console.log(names.shift());
console.log(names);

//sort() => sorts according to ASCII value
console.log("\nsort()")
let unsorted = [5,7,2,4,11,34,44];
console.log("UNSORTED: ",unsorted)
let sorted = unsorted.sort();
console.log("SORTED: ",sorted)

//slice
console.log("\nslice()")
let fruits = ['apple','orange','mango','grapes','banana','muskmelon']
console.log(fruits)
console.log(fruits.slice(2,5));
console.log(fruits)

//splice()
console.log("\nsplice()")
console.log(fruits.splice(2,2));
console.log(fruits);
console.log(fruits.splice(2,1,'watermelon','papaya'));
console.log(fruits);

//join()
console.log("\njoin()")
console.log(fruits.join('-'))