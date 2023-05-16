const express = require('express');
const app = express();
const PORT = 8000;

// app.use('/static/', express.static("public"));
// app.use(epress.static(__dirname+"/public"));

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "views"));

app.get('/', function(req, res) {
    // res.send('hello express');
    res.render('test');
});

app.listen(PORT, function() {
    console.log(`${PORT}가 열렸습니다. localhost:${PORT}`);
})