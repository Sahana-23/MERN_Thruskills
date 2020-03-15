//Declaration and assigning values
var result= [12,15];
console.log("Result array:",result);
console.log("Result type: ",typeof result);
//accessing particular item in an array
console.log("result[0] type: ",typeof result[0]);

//no fixed length. can assign any index
var social=90;
result[2]=social;
console.log(result);
result[5]=social;
console.log(result);

//undefined
console.log(typeof result[3]);

//reassigning
result[1]=20;
console.log(result);

//length consider empty indexes 
console.log(result.length);

//array can have elements of different datatypes
var x=[1,2,[3,4],"abc"];
console.log(x);

//push possible  to the last index only
x.push(18);
console.log(x);

//pop removes the last element
x.pop();
console.log(x);
x.pop();
console.log(x);

//
var arr= new Array(1,2,3);
console.log(arr,arr.length)

var fix_arr= new Array(5);
console.log(fix_arr,fix_arr.length)
