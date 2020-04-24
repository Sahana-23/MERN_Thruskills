//ES7 feature 

function add(a,b){
    return new Promise((resolve,reject)=>{
        if(typeof(a)!= 'number' || typeof(b)!= 'number'){
            reject('Pass number')
        } else {
            resolve(a+b)
        }
    })
}

function square(n){
    return new Promise((resolve,reject)=>{
        if(typeof(n)!= 'number'){
            reject('Pass number')
        } else {
            resolve(n*n)
        }
    })    
}

console.log("Start")
async function handleResult () {
    try {
        let sum = await add(3,3);
        console.log('Async ', sum)
        
        let s = await square(sum);
    
        console.log('Async square ', s) 
    } catch (error) {
        console.log(error)
    }
}
handleResult();
console.log("End")