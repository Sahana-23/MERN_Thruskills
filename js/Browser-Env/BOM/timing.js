//
setTimeout(()=>console.log("one Second"),1000)

//
// setInterval(()=>console.log("Every 2 second"),2000)
var count=1;
var id = setInterval(()=>{
    if(count==5){
    clearInterval(id)
    }
    console.log("Every 2 seconds")
    count++;
},2000)