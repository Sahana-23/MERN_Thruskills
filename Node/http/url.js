const url = require('url');
let parsedUrl = url.parse('http://localhost:3000/?name=Sahana&lastname=Hegde',true);
console.log(parsedUrl);
console.log(parsedUrl.query)
console.log(parsedUrl.query.name)