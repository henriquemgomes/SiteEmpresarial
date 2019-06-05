var app = require('./config/server');

//app.use(express.static());

var rotaHome = require('./app/routes/index')(app);

app.listen(3001, function(req, res){
    console.log('Server Express escutando 3001');
});