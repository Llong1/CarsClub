module.exports = {
  success: {
    code: 100,
    msg: '成功！'
  },
  fail_db_conn: {
    code: -10001,
    msg: '链接数据库失败！'
  },
  empty_db_conn: {
    code: -10002,
    msg: '空数据库链接'
  },
  empty_user_name: {
    code: -20001,
    msg: '用户名不允许为空！'
  },
  unknow_error: {
    code: -40000,
    msg: '未知错误！'
  }
};
