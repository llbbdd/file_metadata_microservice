var express = require('express');
var multer  = require('multer');

var port = 8080;
var uploadFolder = 'uploads/';

var app = express();
var upload = multer({dest: uploadFolder});

app.get('/', function(req, res){
    res.sendFile(process.cwd() + '/form.html');
});

app.post('/', upload.single('file'), function (req, res, next) {
    res.send(JSON.parse('{"size":"' + req.file.size + '"}'));
    res.end();
})

app.listen(port);