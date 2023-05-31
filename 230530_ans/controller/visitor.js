//const visitor = require("../model/visitor");
const models = require("../models");
// const seq = models.sequelize;

// seq.sync();

//GET localhost:PORT/
exports.index = (req, res) => {
  //views/index.ejs
  res.render("index");
};
//전체
exports.CgetVisitors = (req, res) => {
  //visitor.getVisitors()는 model에서 가져온 데이터
  //res.render("visitor", { data: visitor.getVisitors() });
  //legacy
  // visitor.MgetVisitors((result) => {
  //   res.render("visitor", { data: result });
  // });
  //sequelize
  models.visitor.findAll().then((result) => {
    console.log(result);
    res.render("visitor", { data: result });
  });
};
//하나씩 querystring
exports.CgetVisitor1 = (req, res) => {
  console.log(req.query);
  // visitor.MgetVisitor1(req.query.id, (value) => {
  //   //res.send(value);
  //   res.render("visitor", { data: value });
  // });
  models.visitor.findOne({ where: { id: req.query.id } }).then((result) => {
    // res.send(result);
    res.render("visitor", { data: [result] });
  });
};
//하나씩 params
exports.CgetVisitor2 = (req, res) => {
  console.log(req.params);

  // //model에서만든 module실행
  // visitor.MgetVisitor1(req.params.id, (value) => {
  //   //res.send(value);
  //   //res.render("visitor", { data: value });
  //   //응답.send() 클라이언트에 응답 데이터를 보낼때 사용
  //   res.send(value);
  // });
  models.visitor.findOne({ where: { id: req.params.id } }).then((result) => {
    // res.send(result);
    //res.render("visitor", { data: result });
    res.send([result]);
  });
};

//등록
exports.CpostVisitor = (req, res) => {
  console.log(req.body);

  // visitor.MpostVisitor(req.body, (value) => {
  //   res.send({
  //     result: true,
  //     id: value,
  //     name: req.body.name,
  //     comment: req.body.comment,
  //   });
  // });
  models.visitor
    .create({ name: req.body.name, comment: req.body.comment })
    .then((result) => {
      console.log(result);
      res.send({
        result: true,
        id: result.dataValues.id,
        name: req.body.name,
        comment: req.body.comment,
      });
    });
};

//수정
exports.CpatchVisitor = (req, res) => {
  console.log(req.body);
  // //모델에서만든 모듈실행
  // visitor.MpatchVisitor(req.body, () => {
  //   res.send({ result: true });
  // });
  models.visitor
    .update(
      {
        name: req.body.name,
        comment: req.body.comment,
      },
      {
        where: { id: req.body.id },
      }
    )
    .then(() => {
      res.send({ result: true });
    });
};

//삭제
exports.CdeleteVisitor = (req, res) => {
  // //모델에서만든 모듈
  // visitor.MdeleteVisitor(req.body.id, (value) => {
  //   res.send({ result: value });
  // });
  models.visitor.destroy({ where: { id: req.body.id } }).then(() => {
    res.send({ result: true });
  });
};
