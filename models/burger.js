var orm = require("../config/orm.js");

var burger = {
  create: function(cols, vals, cb) { // ------------------------------------------- C
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  all: function(cb) {
    orm.all("burgers", function(res) { // ----------------------------------------- R
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) { // --------------- U
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) { // --------------------------- D
      cb(res);
    });
  }
};

module.exports = burger;
