var mysql = require('mysql');
var connection;

// For Heroku
/*
if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
	connection = mysql.createConnection({
	host: 'somehose',
	user: 'user',
	password:'pass',
	database: 'db'
	})
}
*/

// For MAMP
var connection = mysql.createConnection({
	port: 3306,
 	host: 'localhost',
 	user: 'root',
 	password: 'root',
 	database: 'burgers_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connection Sucessful! and connected as id ' + connection.threadId);
});

module.exports = connection;