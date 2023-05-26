const visitor = require("../model/visitor");
//데이터 가공
//~~~~
//
exports.main = (req, res) => {
  res.render("index");
};
exports.getVisior = (req, res) => {
  console.log(visitor.getVisitors());
  res.render("visitor", { data: visitor.getVisitors() });
};