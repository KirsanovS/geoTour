var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'))
app.get('/',function(err,res){
	res.sendfile('index');
});

app.listen(8882)
console.log('I listening 8882 port')
