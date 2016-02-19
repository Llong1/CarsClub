'use strict';

var routers = require('./routes/index');

function initApp(app, port){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.set('view options', {
        'open': '{{',
        'close': '}}'
    });
    app.engine('.html', ejs.__express);
    app.use(express.static('public'));
    routers.initAction(app).run();
}

var express = require('express')
  , app = express();
var ejs = require('ejs');
var config = require('./config-sample');

var port = config._DEBUG ? 8888 : 18080;

initApp(app, port);

var server = app.listen(port, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log('Example app listening at http://%s:%s', host, port);
});
