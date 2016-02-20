module.exports = {
  QuerySqlLogin: 'select t.* from ti_user t where t.user_name = ? and t.password = ?',
  InsertSqlUser: 'insert into ti_user(id, user_type, user_name, user_tel, password, user_photo, user_point, car_auth_status, sex, birthday, email, in_date, up_date) values(?, \'1\', ?, ?, ?, 0.0, ?, ?, ?, ?, now(), now())'
};
