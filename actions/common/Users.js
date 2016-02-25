'use strict';

var DbRobot = require('../../db/dbRobot');
var Sqls = require('./Sqls');
var Errors = require('./Errors');
var Strings = require('./Strings');

exports.createUser = function(userMap, callback){
  var pool = DbRobot.getPool();
  pool.getConnection(function(err, conn){
    console.log(err);
    if (err) {
      callback && callback(err, Errors.fail_db_conn.code, Errors.fail_db_conn.msg);
      return;
    }
    if (conn) {
      var params = [Strings.randomString(20), userMap.user_name];
      console.log(params);
      callback && callback(null, Errors.success.code, []);
    } else {
      callback && callback(err, Errors.empty_db_conn.code, Errors.empty_db_conn.msg);
    }
  });
}
