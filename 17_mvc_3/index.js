const express = require("express");
const app = express();
const PORT = 8000;

//view
app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "views"));

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
//localhost:8000/
const indexRouter = require(".routes/comment");
app.use("/", indexRouter);

//404
app.get("*", function (req, res) {
    res.render("404");
})

//PORT
app.listen(PORT, function() {
    console.log(`http://localhost:${PORT}`);
})