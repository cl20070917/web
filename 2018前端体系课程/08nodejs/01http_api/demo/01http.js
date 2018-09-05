var http = require('http');

var server = http.createServer();

server.on("request",function(){
	console.log("已收到请求了");
});
server.listen(3000,function(){
	console.log("http://localhost:3000连接");
});
