var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
    var headers = req.headers;
    var ip = headers['x-forwarded-for'];
    var lang = headers['accept-language'].substr(0, headers['accept-language'].indexOf(','));
    var software = headers['user-agent'].match(/\(([^(]+)\)/);
    res.json({
        "ipaddress": ip, "language": lang, "software": software[1]
    });
});

app.listen(port, function(){
    console.log("radical!");
});