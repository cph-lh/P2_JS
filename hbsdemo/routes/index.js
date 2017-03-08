var express = require('express');
var router = express.Router();

var persons = require("../model/model");
persons.addTestData();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', {title: 'hbsdemo', plebs: 'plebs', persons: persons.getAll});
});

router.post("/",function(req, res, next){
  var name = req.body.name;
  persons.addPerson(name);
  res.redirect("/");
});

module.exports = router;
