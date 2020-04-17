const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

//map()
//Give array of inventors first and last name 

//using looping
// let fullName=[]
// for(var i=0;i<inventors.length;i++){
//     fullName[i] = inventors[i].first+" "+inventors[i].last
//     // or fullName.push(inventors[i].first+" "+inventors[i].last)
// }
// console.log(fullName)

//using map()
const fullName=inventors.map(ele=>`${ele.first} ${ele.last}`)
console.log(fullName)

//own map()
Array.prototype.myMap=function(cb){
    let newArr=[];
    for(let i = 0; i< this.length; i++) {
       newArr.push(cb(this[i]));
    }
    return newArr;
}

const fullName2=inventors.myMap(ele=>`${ele.first} ${ele.last}`)
console.log("MyMap: ",fullName2)


//filter()
//Filter the list of inventors for those who were born in the 1500's

//using looping
// let fifteen =[]
// for(var i=0;i<inventors.length;i++){
//     if(inventors[i].year>=1500 && inventors[i].year<1600){
//     fifteen.push(inventors[i])
//     }
// }
// console.log(fifteen)

const fifteen = inventors.filter(ele=> ele.year>=1500 && ele.year<1600)
console.log(fifteen)

//own filter()
Array.prototype.myFilter=function(cb){
    let newArr=[]
    for(var i=0;i<this.length;i++){
        if(cb(this[i])){
            newArr.push(this[i])
        }
    }
    return newArr
}
const fifteen2 = inventors.myFilter(ele=> ele.year>=1500 && ele.year<1600)
console.log("myFilter: ",fifteen2)

//sort()
//Sort the inventors by birthdate, oldest to youngest

let sorted = inventors.sort((a,b)=>a.year<b.year?-1:1)
console.log(sorted)

//reduce()
// How many years did all the inventors live?

//using looping
// tot=0;
// for(var i=0;i<inventors.length;i++){
//     tot += inventors[i].passed - inventors[i].year; 
// }
// console.log(tot)

const totYear=inventors.reduce((total,ele)=> total+(ele.passed - ele.year),0)
console.log(totYear)

//own reduce()
Array.prototype.myReduce=function(cb,initVal){
    let val;    
    for(var i=0;i<this.length;i++){
        val = cb(initVal,this[i])
        initVal = val;
  }
  return val;
} 

const totYear2=inventors.myReduce((total,ele)=> total+(ele.passed - ele.year),0)
console.log("MyReduce:",totYear2)
