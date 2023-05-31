const express = require('express');
const app = express();
const PORT = 8000;
const session = require('express-session');

const userInfo = {
    id: "정현호",
    pw: "123"
}

//secret: 쿠키를 임의로 변조하는 것을 방지하기 위한 sign 값
//sign 값이란 쿠키를 서명하는 데 사용하는 값이다.
//resave: 요청이 왔을 때 세션에 수정사항이 생기지 않더라도 세션을 다시 저장할지 설정한다.
app.use(session({
    secret: "mysecretKey",
    resave: false,
    saveUninitialized: true
}));

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", (req, res) => {
    //req.body는 input의 name 속성을 키로 하고 그 값을 값으로 가지는 객체이다.
    //req.body.id, req.body.pw로 값을 가져올 수 있다.
    //만약 아이디 비번이 일치한다면
    if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
        //세션에 로그인 정보를 저장한다.
        //세션에 저장하는 방법은 req.session.속성명 = 값;으로 할 수 있다.
        req.session.user = req.body.id;
        res.redirect("/");
    } else {
        res.send("Login Failed");
    }
})

app.get("/", (req, res) => {
    //세션에 로그인 정보가 있다면
    if (req.session.user) {
        res.render("app", { isLogin: true, user: req.session.user });
    } else {
        res.render("app", { isLogin: false });
    }
});

//세션 데이터 삭제
app.get("/logout", (req, res) => {
    //세션을 삭제하려면 req.session.destroy() 메서드를 사용하면 된다.
    req.session.destroy();
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})