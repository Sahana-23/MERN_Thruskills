//** Concepts **
//callback
//error first callback
//callback hell
//***************

function add(a,b,cb){
    if(typeof(a)!= 'number' || typeof(b)!= 'number'){
        cb('pass a number',null)
    } else {
        cb(null,(a+b))
    }
}

add(10,20,(err,data)=>{                 //error first callback
    if(err){
        console.log(err)
    } else {
        console.log("Sum: ",data)
    }
})

function square(n,cb){
    if(typeof(n)!= 'number'){
        cb('Pass a number',null)
    } else{
        cb(null,(n*n))
    }
}

square(2,(err,data)=>{
    if(err){
        console.log(err)
    } else {
        console.log("Square: ",data)
    }
})

//
add(3,3,(err,data)=>{
    if(err){
        console.log(err)
    } else {
        console.log("Sum: ",data)
        square(data,(err,data)=>{
            if(err){
                console.log(err)
            } else {
                console.log("Square: ",data)
            }
        })
    }
})


//callbacks are very useful when asynchronous functions are used

function getProd(a,b){
    setTimeout(()=>{
        return a*b
    },2000)
}
var prod = getProd(2,3)
console.log("Prod",prod) //=> undefined because product is still not returned by the async function

// use callback
function getProd_cb(a,b,cb){
    setTimeout(()=>{cb(a*b)
    },2000)
}
var prod_cb = getProd_cb(2,3,(prod)=>{
    console.log("prod CB",prod)
})

