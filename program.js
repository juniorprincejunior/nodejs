//console.log('HELLO WORLD');

/*var len = process.argv.length;
var sum=0;
for(var i=2;i<len;i++)
    sum+=Number(process.argv[i]);
console.log(sum);*/


/*var fs = require('fs');
var str = fs.readFile(process.argv[2],'utf8',function(err,data){
    var len = data.split("\n").length;
    console.log(len-1); 
});*/


/*var dirRead = require('./5-filtered-ls');

var dir = process.argv[2];
var ext = process.argv[3];

dirRead(dir, ext, function (err, list) {
  if (err)
    return console.error('There was an error:', err);

  list.forEach(function (file) {
    console.log(file);
  });
});*/


/*var fs = require('fs');
var newlines = fs.readFileSync(process.argv[2]).toString().split("\n").length;
console.log(newlines-1);*/

/*var fs = require('fs');
var buffer = fs.readdir(process.argv[2],function(err,list){
    var len = list.length;
    var ext = process.argv[3];
    for(var i=0;i<len;i++){
        if(list[i].indexOf('.'+ext)!=-1)
            console.log(list[i]);
    }
});*/



/*var http = require('http');
var url = process.argv[2];

http.get(url,function(response){
    response.setEncoding('utf8');
    
    response.on('data',function(data){
        console.log(data);
    });
    
    response.on('error', console.error);
    
});*/



var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function(req,res){
    res.writeHead(200, { 'content-type': 'text/plain' });
    
    var stream = fs.createReadStream(file);
    stream.pipe(res);
});
server.listen(port);
