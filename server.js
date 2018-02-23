var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Task = require('./api/models/mvrAPIServerModel'), // MODEL LOADING
    DataPackage = require('./api/models/DataPackage'), // MODEL LOADING
    bodyParser = require('body-parser'),
    db = 'mvrDB';

// Mongoose instance connection url connection
var mongoose      = require('mongoose');
mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost/' + db);
mongoose.connection
  .on('error', console.error.bind(console, 'DB conenction error'))
  .once('open', function(){console.log('Monitoreo Vital Remoto RESTful API server connected to ' + db)});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/mvrAPIServerRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: 'endpoint: ' + req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Monitoreo Vital Remoto RESTful API server started on: ' + port);
