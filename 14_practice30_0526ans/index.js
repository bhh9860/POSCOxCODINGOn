const express = require("express");
const app = express();
const PORT = 8000;

//템플릿
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//임시 database 변수
// const id = "banana";
// const pw = "4321";
// const database = {
//   id: 'banana',
//   pw: '4321'
// }

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
