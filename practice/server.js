const express = require('express'); //아까 설치한 라이브러리를 첨부해주세요
const app = express(); //첨부한 라이브러리를 가지고 객체를 만들어주세요
app.use(express.urlencoded({extended: true})) 

app.listen(8080, function() {
	console.log('listening on 8080') // 잘 열리면 콘솔로그쳐라
}); // 서버열기

app.get('/pet', function(요청, 응답) {
	응답.send('펫 쇼핑사이트입니다');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/write', function(req, res) {
	res.sendFile(__dirname + '/write.html');
})

app.post('/add', function(req, res) {
	console.log(req.body.todo);
	res.send('요청완료');
})