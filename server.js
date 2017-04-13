var http = require('http');

var ip = '127.0.0.1';
var port = 12107;

var server = http.createServer(
	function(request,response){
		response.statusCode = 200;
		response.setHeader('Content-Type','text/plain');
		response.end('allez vous faire foutre les marseillais/parisiens');
		
	}

);

server.listen(port,ip,function(){
	console.log('le serveur tourne aussi bien que le psg');
});