const comment = require("../model/comment");

exports.main = function(req, res) {
    res.render("index");
}

exports.comments = function(req, res) {
    res.render("comments", {commentInfos: comment.commentInfos()});
}

exports.comment = function(req, res) {
    console.log(req.params);
}