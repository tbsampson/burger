var connection = require('../config/connection.js');

function printQuestionMarks(num) { // I totally borrowed this...
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}

var orm = { // CRUD
	create: function (table,column,values,cb) { // ------------------------------------------------------------------------------ C
		var columnString = column.toString();
		var valuesString = `${values}`;
		var queryString = `INSERT INTO ${table} (${columnString}) VALUES('${values}');`;
		console.log(queryString);
		connection.query(queryString, values, function (err, result) {
			if (err) throw err;
			cb(result);
		});
    },
    
    read: function (table, cb) {  // -------------------------------------------------------------------------------------------- R
		var queryString = `SELECT * FROM ${table};`;
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	update: function  (table, column,newValue,condition, cb) {  // -------------------------------------------------------------- U
		var queryString = `UPDATE ${table} SET ${column} = ${newValue} WHERE ${condition};`;
		console.log(queryString);
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	delete: function (table, condition, cb) {  // ------------------------------------------------------------------------------- D
		var queryString = `DELETE FROM ${table} WHERE ${condition};`;
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;