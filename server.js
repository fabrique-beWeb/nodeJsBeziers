var express = require('express');

var serveur = express();
var routeToto = "/toto";

serveur.get("/",function(request,response){
	response.sendFile(__dirname + "/views/index.html");
});
serveur.get(routeToto,function(request,response){
	response.send("message venant de toto");
});
serveur.post("/toto",function(request,response){
	response.send("message venant de toto en post");
});
serveur.listen(process.env.PORT || 12107);