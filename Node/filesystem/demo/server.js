const http = require('http');
const fs = require('fs')


const server = http.createServer();

// server.on('request', function(req,res) {
//     fs.readFile(__dirname+'/file.txt', function(err, data) {
//         if(err){
//             res.end('Something went wrong')
//         }else {
//             res.end(data)
//         }
//     })
// })



server.on('request', function(req,res) {
    let readStream = fs.createReadStream(__dirname+'/file.txt', 'utf-8');

    readStream.pipe(res);

})


server.listen(3000, () => console.log('Server running on port 3000'))