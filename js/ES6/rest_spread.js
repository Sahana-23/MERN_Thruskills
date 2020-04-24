//rest
//example1
authorInfo = ['abcd','25','title1','title2','title3']
var [name,age,...titles]=authorInfo;
console.log("Name: ",name)
console.log("Age: ",age)
console.log("Titles: ",titles)

//example2
function add(...num){
    console.log("Numbers: ",num)
    var sum=0;
    for(i=0;i<num.length;i++){
        sum+=num[i]
    }
    console.log("Sum: ",sum)
}

add(1)
add(1,2)
add(1,2,3)

//spread
let arr = [65,34,56,78,90];
console.log(Math.max(arr))
console.log(...arr)
console.log(Math.max(...arr))
