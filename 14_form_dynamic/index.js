const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + 'views'));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/', function(req, res) {
    res.render('index')
}) 

app.get('/ajax', function(req, res) {
    res.send(req.query)
})

app.get('/axios', function(req, res) {
    res.send(req.query);
})

app.get('/fetch', function(req, res) {
    res.send(req.query);
})

app.post('/axios', function(req, res) {
    res.send(req.body);
})

app.post('/ajax',function(req, res) {
    res.send(req.body);
})

app.post('/fetch', function(req, res) {
    res.send(req.body);
})

app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})