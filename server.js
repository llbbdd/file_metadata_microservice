var express = require('express');
var multer  = require('multer');
var fs = require('fs');

var port = 8080;
var uploadFolder = 'uploads/';

var app = express();
var upload = multer({dest: uploadFolder});

app.get('/', function(req, res){
    fs.readFile('form.html', function (err, data) {
        if(err){
            console.log(err);
        }
        
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Content-Length': data.length
        });
        
        res.write(data);
        res.end();
    });
});

app.post('/', upload.single('file'), function (req, res, next) {
    res.send(JSON.parse('{"size":"' + req.file.size + '"}'));
    res.end();
})

app.listen(port);