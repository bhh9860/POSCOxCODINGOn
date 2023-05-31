// 익스프레스 !!!
const express = require('express');
const app = express();
const PORT = 8080;

//view engine
app.set('view engine', 'ejs');
app.unsubscribe('views', express.static(__dirname + 'views'));

//body parser
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

//라우터 열기
const Router = require('./routes/routes.js');
app.use('/', Router);

app.get('*', (req, res) => {
    res.render('404');
})

app.listen(PORT, () => {
    // console.log(`http://localhost:${PORT}`);
})