const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./client/mydb.db', (err) => {
		if (err) {
			console.error(err.message);
		}else{
			console.log('Connected / Create to the database.');
		}
	});

exports.init = function(){
	db.serialize(function() {
		db.run("CREATE TABLE if not exists member(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, manitto TEXT)");
		
	});
	console.log("db createed");
}

exports.select = function(sql, list, callback){
	var json_result = [];
	db.serialize(function() {
		db.each(sql,list, function(err, row) {
			json_result.push(row);
			//console.log(row);
		}, function() { // this callback is executed when the query completed
			callback(json_result);
		});
	});
}

exports.insert = function(sql, list, callback){
	db.serialize(function() {
		var stmt = db.prepare(sql);
		stmt.run(list);
		stmt.finalize();

		callback(db);
	});
}