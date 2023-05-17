// 나 express로 서버만들거에요
const express = require('express');
const app = express();
// 포트주소
const PORT = 8080;
// 나 뷰엔진 ejs(embedded js)를 써서 화면 띄울거에요
app.set('view engine', 'ejs');
// 근데 이제 views폴더 안에 있는 애들로
app.use(express.static(__dirname + 'views'));

//body-parser써서 post놈들 다 해석할거에요
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/', function(req, res) {
    res.render('getForm')
}) 

app.post('/getFormResult', function(req, res) {
    value = req.body
    res.render('getFormResult', value)
    console.log(value)
})

//두근두근 내 서버 해당 포트로 첫오픈하기
app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})