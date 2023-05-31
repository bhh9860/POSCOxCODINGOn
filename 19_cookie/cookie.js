const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;

//쿠키 파서란 쿠키를 쉽게 추출할 수 있도록 도와주는 미들웨어
//쿠키를 파싱해서 req.cookies 객체로 만들어준다.
//req.cookies 객체는 요청된 쿠키를 속성으로 가지고 있다.
//쿠키를 설정하고 싶다면 res.cookie() 메서드를 사용하면 된다.
//res.cookie(name, value, [options])
//name: 쿠키의 이름
//value: 쿠키의 값
//options: 쿠키의 옵션
//옵션에는 maxAge, expires, path, domain, secure, httpOnly 등이 있다.
//maxAge: 쿠키의 만료시간을 밀리초 단위로 설정한다.
//expires: 쿠키의 만료시간을 날짜로 설정한다.
//path: 쿠키의 경로를 설정한다. 기본값은 '/'이다.
//domain: 쿠키의 도메인을 설정한다. 기본값은 현재 도메인이다.
//secure: HTTPS일 경우에만 쿠키가 전송된다.
//httpOnly: 설정 시 자바스크립트에서 쿠키에 접근할 수 없다.
//쿠키를 삭제하고 싶다면 res.clearCookie() 메서드를 사용하면 된다.
//res.clearCookie(name, [options])
//name: 삭제할 쿠키의 이름
//options: 쿠키의 옵션
//옵션에는 path, domain, secure, httpOnly 등이 있다.
//path, domain, secure, httpOnly는 쿠키를 설정할 때와 동일하다.
//쿠키를 삭제할 때는 쿠키의 값을 지정할 필요가 없다.
app.use(cookieParser());

const cookieOptions = {
  maxAge: 1000 * 60
}

//템플릿
app.set('view engine', 'ejs');
app.use("/views", express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.render("index", { data: req.cookies.sibal });
})

app.post("/noneDisplay", (req, res) => {
  res.cookie("sibal", "eba", cookieOptions);
  res.send({ data: req.cookies })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})