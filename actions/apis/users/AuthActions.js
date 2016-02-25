'use strict';

var LoginModule = require('../../common/Login');

var UsersModule = require('../../common/Users');
var Renders = require('../../common/Renders');
var Errors = require('../../common/Errors');
var rules = [];

/*
 * 登录接口
 */
function login(req, res){
  var un = req.query.user_name, pw = req.query.password;
  if (un == undefined || un == null) {
    res.send({'code': Errors.empty_user_name.code, 'msg': Errors.empty_user_name.msg});
    return;
  }
  LoginModule.login(un, pw, function(err, code, results){
    if (code == Errors.success.code) {
      // 成功
      res.send(results);
    } else {
      res.send({'code': code, 'msg': results});
    }
  });
}

/*
 * 注册接口
 */
function createUser(req, res){
  console.log(req.query);
  UsersModule.createUser(req.query, function(err, code, results){
    if (code == Errors.success.code) {
      // 成功
      res.send(results);
    } else {
      res.send({'code': code, 'msg': results});
    }
  });
}

rules.push({
  pattern: '/api/auth/login',
  method: 'get',
  action: login
});

rules.push({
  pattern: '/api/auth/addUser',
  method: 'get',
  action: createUser
});

exports.getRules = function() {
    console.log("用户权限模块：");
    console.log(rules);
    return rules;
};
