const express = require('express'); //아까 설치한 라이브러리를 첨부해주세요
const app = express(); //첨부한 라이브러리를 가지고 객체를 만들어주세요
app.use(express.urlencoded({extended: true})) 

const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

var db;
MongoClient.connect('mongodb+srv://bhh9860:skcmzlfpa0~@cluster0.ainfsiy.mongodb.net/?retryWrites=true&w=majority', function(에러, client) {
	//연결되면 할 일
	if (에러) return console.log(에러)

	db = client.db('todoapp');

	app.post('/add', function(req, res) {
		value = req.body
		
		db.collection('post').insertOne({
			todoname : value.todo,
			date : value.todo2  
		}, function(에러, 결과) {
			console.log('저장완료');
		});

		res.send('요청완료');
	})



	app.listen(8080, function() {
		console.log('listening on 8080') // 잘 열리면 콘솔로그쳐라
	}); // 서버열기
	
})


app.get('/pet', function(요청, 응답) {
	응답.send('펫 쇼핑사이트입니다');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/write', function(req, res) {
	res.sendFile(__dirname + '/write.html');
})


app.get('/list', function(req, res) {
	db.collection('post').find().toArray(function(에러, 결과) {
		console.log(결과);
	});
	res.render('list.ejs');
})