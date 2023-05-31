const models = require("../models");
const { Op } = require("sequelize");

exports.index = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  //views/signup.ejs
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.Cpost_signup = (req, res) => {
  models.User.create({
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  }).then(() => {
    res.send({ result: true });
  });
};

exports.Cpost_signin = (req, res) => {
  //SELECT * FROM user
  models.User.findAll({});
  //SELECT * FROM user  LIMIT 1;
  models.User.findOne({});
  //SELECT name, userid FROM user;
  models.User.findOne({
    //원하는 컬럼 가져올때 attributes사용
    attributes: ["name", "userid"],
  });
  //연산자
  //Op.gt(초과), Op.gte(이상), Op.lt(미만), Op.lte(이하)
  //Op.ne(같지 않음), Op.or(또는), Op.in(배열 요소중 하나), Op.notIn(배열 요소와 모두 다름)
  //SELECT * FROM user WHERE id >= 2;
  models.User.findAll({
    where: {
      id: { [Op.gte]: 2 },
    },
  });
  //SELECT * FROM user WHERE id > 2 OR name = 'aaa';
  models.User.findAll({
    where: {
      [Op.or]: [{ name: "aaa" }, { id: { [Op.gt]: 2 } }],
    },
  });
  //SELECT name, userid FROM user ORDER BY id DESC;
  models.User.findAll({
    attributes: ["name", "userid"],
    order: [["id", "DESC"]],
  });
  //SELECT name, userid FROM user ORDER BY id DESC LIMIT 10;
  //SELECT name, userid FROM user ORDER BY id DESC LIMIT 10 OFFSET 5;
  models.User.findAll({
    attributes: ["name", "userid"],
    order: [["id", "DESC"]],
    limit: 10,
    offset: 5,
  });

  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((value) => {
    console.log("Cpost_signin", value);

    if (value) {
      res.send({ result: true, data: value.dataValues });
    } else {
      res.send({ result: false });
    }
  });
};

exports.Cpost_profile = (req, res) => {
  models.User.findAll({
    where: { userid: req.body.userid },
    limit: 1,
  }).then((value) => {
    console.log("Cpost_profile", value);
    if (value) {
      res.render("profile", { result: true, data: value[0].dataValues });
      // res.send({ result: true, ...value });
    } else {
      res.send({ result: false });
    }
  });
};

exports.Cedit_profile = (req, res) => {
  models.User.update(
    {
      userid: req.body.userid,
      name: req.body.name,
      pw: req.body.pw,
    },
    { where: { id: req.body.id } }
  ).then(() => {
    res.send({ result: true });
  });
};
exports.Cdel_profile = (req, res) => {
  models.User.destroy({
    where: { id: req.body.id },
  }).then(() => {
    res.send({ result: true });
  });
};
