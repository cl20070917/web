var http = require('http');

var server = http.createServer();

server.on("request", function(request, response) {
	console.log("已收到请求了");
	//response.write('hello');
	var url = request.url;
	if(url === '/') {
		response.end('index page')
	} else if(url === '/login') {
		response.end('login page')
	} else if(url === '/products') {
		var products = [{
				name: '苹果 X',
				price: 8888
			},
			{
				name: '菠萝 X',
				price: 5000
			},
			{
				name: '小辣椒 X',
				price: 1999
			}
		]

		// 响应内容只能是二进制数据或者字符串
		//  数字
		//  对象
		//  数组
		//  布尔值
		response.end(JSON.stringify(products))
	} else {
		response.end('404 Not Found.')
	}

});
server.listen(2000, function() {
	console.log("http://localhost:2000连接");
});