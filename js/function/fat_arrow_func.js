// function hello(){
//     console.log('hi')
// }
// can be wriitten as

var hello = ()=>console.log('hi');
hello()

// function sq(n){
//     return n*n
// } 
// can be wriitten as

var sq = n=> n*n
console.log("sq: ", sq(2))

// function add(a,b){
//     return a+b
// } 
// can be wriitten as

var sum = (a,b) =>{
    return (a+b)
}
console.log("sum: ", sum(2,2))
//or

var sum2 = (a,b)=> a+b 
console.log("sum2: ", sum2(3,2))