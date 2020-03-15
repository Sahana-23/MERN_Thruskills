//defining object
var res={
    english: 20,
    math: 30,
    "social science": 25
}

console.log("result object: ",res);
console.log("Type of result: ",typeof(res))

//Accessing property
//*dot notation
console.log("Math: ",res.math)

//*bracket notation
console.log("Math: ",res['math']);
console.log("SS: ",res["social science"])

var sub="math"
console.log("Sub=Math: ",res[sub]);

//reassigning
res.math=35;
console.log("new math: ",res.math)

//undefined
console.log("Physics: ",res.physics)

//add new property
res.physics=42
console.log("Physics:",res.physics)

//delete a property
delete res.physics;
console.log("after deletion: ",res)

