function add(a,b){
    return new Promise((resolve,reject)=>{
        if(typeof(a)!= 'number' || typeof(b)!= 'number'){
            reject('Pass number')
        } else {
            resolve(a+b)
        }
    })
}

// add(2,3).then((data)=>{console.log("Sum: ",data)},(err)=>{console.log(err)})
add(2,3)
    .then(data=>console.log("Sum: ",data))
    .catch((err)=>{console.log(err)})

function square(n){
    return new Promise((resolve,reject)=>{
        if(typeof(n)!= 'number'){
            reject('Pass number')
        } else {
            resolve(n*n)
        }
    })    
}

square(3)
    .then(data=>console.log("Square: ",data))
    .catch((err)=>{console.log(err)})

//all()
Promise.all([add(5,2),square(10)])
    .then(data=>console.log("Res: ",data))
    .catch((err)=>{console.log(err)})

//chaining
console.log("Start")
add(4,3)
    .then(dt=>{
        console.log("Sum: ",dt)
        return square(dt)
    })
    .then(data=>console.log("Square: ",data))
    .catch((err)=>{console.log(err)})
console.log("End")