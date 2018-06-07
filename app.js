var express = require('express');
var app = express();
var port = process.env.PORT || 8888;

app.use(express.json());


// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('www'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/"+ 'index.html');
});

app.get('/list', (req, res) => {
   res.sendFile(__dirname + '/data/' + 'competences.json');

});

// start the server
app.listen(port,  function () {
    console.log('Server started! At http://localhost:' + port);
});