//example 1
let name = 'JS';
let age = 25;
let gender = 'Male';

let obj = {
    name,
    age,
    gender,

    description() {
        console.log('I m description function')
    }

}

console.log(obj);

obj.description();

//example 2

//object literals before ES6
// function ex(num1,num2){
//     return {
//         num1:num1,
//         num2:num2,
//         sum: ()=>{
//           console.log("Sum: ",num1+num2)
//         }
//     }
// }
// console.log("obj: ", ex(2,3))
// ex(2,3).sum()

//ES6 version
function ex(num1,num2){
    return {
        num1,
        num2,
        sum(){
            console.log("Sum: ",num1+num2)
        }
    }
}

console.log("obj: ", ex(2,3))
ex(2,3).sum()