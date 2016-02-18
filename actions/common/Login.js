'use strict';

var DbRobot = require('../../db/dbRobot');
var Sqls = require('./Sqls');

var loginSql = "";

exports.login = function(user_name, password, callback){
  var pool = DbRobot.getPool();
  pool.getConnection(function(err, conn){
    conn.query(Sqls.QuerySqlLogin
      , [user_name, password]
      , function(error, results) {
          conn.release();
          callback && callback(error, results);
        });
  });
}
