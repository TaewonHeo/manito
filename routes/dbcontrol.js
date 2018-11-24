var express = require('express');
var router = express.Router();
var dbconnect = require('../custom/sqlite');

dbconnect.init();


router.post('/selectmanitto', function(req, res) {
	var data = req.body;
	console.log(data.names);
	var sel_sql = `SELECT * FROM member Where name='${data.names}'`;
	dbconnect.select(sel_sql,[],function(json_result){
		var json_result = json_result;
		res.send(json_result);
	});
});

module.exports = router;