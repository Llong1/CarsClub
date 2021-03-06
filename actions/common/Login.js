'use strict';

var DbRobot = require('../../db/dbRobot');
var Sqls = require('./Sqls');
var Errors = require('./Errors');

exports.login = function(user_name, password, callback){
  var pool = DbRobot.getPool();
  pool.getConnection(function(err, conn){
    console.log(err);
    if (err) {
      callback && callback(err, Errors.fail_db_conn.code, Errors.fail_db_conn.msg);
      return;
    }
    if (conn) {
      conn.query(Sqls.QuerySqlLogin
        , [user_name, password]
        , function(error, results) {
            conn.release();
            callback && callback(null, Errors.success.code, results);
          });
    } else {
      callback && callback('empty connection', Errors.empty_db_conn.code, Errors.empty_db_conn.msg);
    }
  });
}
