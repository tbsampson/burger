var express = require('express');
var router = express.Router();
var burgers = require('../models/burgers.js');

router.get('/', function (req, res) { // -------------------------------------------------------------------- home page
	res.redirect('/burgers');
});

router.post('/burgers/create', function (req, res) {  // ----------------------------------------------------- C
	burgers.create('burger_name', [req.body.name], function () {
		res.redirect('/burgers');
	});
});

router.get('/burgers', function (req, res) {  // ------------------------------------------------------------- R
	burgers.read(function (data) {
		var burgObj = { burgers: data };
		res.render('index', burgObj);
	});
});

router.put('/burgers/update/:id', function (req, res) {  // -------------------------------------------------- U
	var condition = 'id = ' + req.params.id;
	burgers.update('devoured',req.body.devoured,condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {  // ----------------------------------------------- D
	var condition = 'id = ' + req.params.id;
	burgers.delete(condition, function () {
		res.redirect('/burgers');
	});
});

module.exports = router;