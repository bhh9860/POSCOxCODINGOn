//GET localhost:PORT/
exports.index = (req, res) => {
    //views/index.ejs
    res.render('index');
}