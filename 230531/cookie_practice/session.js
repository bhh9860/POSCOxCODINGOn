const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

const userInfo = { id: "abc", pw: "123" };

//세션설정
app.use(
  session({
    secret: "mysecretKey",
    resave: false,
    saveUninitialized: true,
  })
);

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  const user = req.session.user;
  console.log(user);

  if (user === undefined) {
    res.render("app", { isLogin: false });
  } else {
    res.render("app", { isLogin: true, user: user });
  }
});
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    req.session.user = req.body.id;
    res.redirect("/");
  } else {
    res.send({ result: false });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
