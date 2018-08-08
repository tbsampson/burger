var orm = require('../config/orm.js');

var burgermodel = { // It's CRUD time...
	create: function (column, values, cb) {  // ------------------------------------------------------- C
		orm.create('burgers',column,values, function (res) {
			cb(res);
			console.log("(C)REATE ok")
		});
	},
    read: function (cb) {     
		orm.read('burgers', function (res) {  // ------------------------------------------------------- R
			cb(res);
			console.log("(R)EAD ok")
		});
	},
	update: function (column, newValue, condition, cb) {  // ------------------------------------------- U
		orm.update('burgers', column, newValue, condition, function (res) {
			cb(res);
			console.log("(U)UPDATE ok")
		});
	},
	delete: function (condition, cb) {  // ------------------------------------------------------------- D
		orm.delete('burgers',condition, function (res) {
			cb(res);
			console.log("(D)DELELTE ok")
		});
	}
};

module.exports = burgermodel;