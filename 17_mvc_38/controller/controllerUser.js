const user = require("../model/modelUser");

exports.CgetUser = function(req, res) {
    temp = req.query;
    console.log(temp.id)
    user.MgetUser(function(user) {
        res.render('register', {data: user});
    })

};


// 이거랑 같은 말이다.
// function CgetUser(req, res) {
//     user.MgetUser(function(user) {
//         res.render('user', {data:user});
//     })
// };
// module.exports = CgetUser;q