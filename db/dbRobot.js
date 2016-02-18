var mysql = require('mysql');
var config = require('./db-config');

var dbPool = null;
//获取数据库连接
function getPool() {
    dbPool = dbPool || (dbPool = mysql.createPool({
        host: config._db_host,
        user: config._db_user_name,
        port: config._db_port,
        password: config._db_password,
        database: config._db_name
    }));
    return dbPool;
}

exports.getPool = getPool;
