let primitive = "Hello"
console.log("primitive type: ",typeof(primitive))
console.log("Length of primitive: ", primitive.length)

//creating string using constructor function
let str = new String("This is a Obj");
console.log("str type: ",typeof(str))
console.log("Length of str: ", str.length)
//extracting the primitive value from the String object
console.log(str.valueOf());
//or
console.log(str.toString());

//accessing characters
console.log(primitive[2])
console.log(str[3])

//built-in methods
console.log("Built-in Methods");
//toUpperCase(),toLowerCase()
console.log("\ntoUpperCase(),toLowerCase()");
console.log(primitive.toUpperCase())
console.log(primitive.toLowerCase())

//charAt(n)
console.log("\ncharAt(n)");
console.log(primitive.charAt(1))
console.log(primitive.charAt(25)) //=>empty string

//indexOf()
console.log("\nindexOf()");
console.log(primitive.indexOf('l'))
console.log(primitive.indexOf('l',3))
console.log(primitive.indexOf('z')) //=>-1

//lastIndexOf()
console.log("\nlastIndexOf()");
console.log(primitive.lastIndexOf('l'))
console.log(primitive.lastIndexOf('l',2))
console.log(primitive.lastIndexOf('z')) //=>-1

//substring()
console.log("\nsubstring()");
console.log(primitive.substring(2))
console.log(primitive.substring(2,4))

//split()
console.log("\nsplit()");
console.log(primitive.split('e'))
console.log(str.split(' '))

//concat()
console.log("\nconcat()");
console.log(primitive.concat(' world',' xx'))