//creating Date object

let today = new Date();
console.log("Default date object: ",today)

let epochTime=new Date(0)
console.log("epochtime: ",epochTime)


//getter methods

console.log("getDate: ",today.getDate())
console.log("getFullYear: ",today.getFullYear())
console.log("getDay: ",today.getDay())
console.log("getMonth: ",today.getMonth())
console.log("getTime: ",today.getTime())
console.log("getHours: ",today.getHours())
console.log("getMinutes: ",today.getMinutes())
console.log("getSeconds: ",today.getSeconds())
console.log("getMilliseconds: ",today.getMilliseconds())

let dT = '08/31/2019'
let da=new Date(dT)
console.log(da)

//setter methods
let tmrw = today.setDate(8)
console.log(new Date(tmrw))

let tmrw2 = today.setMonth(11)
console.log(new Date(tmrw2))
