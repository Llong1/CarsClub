'use strict';
var LoginModule = require('../../common/Login');
var Renders = require('../../common/Renders');
var rules = [];

function login(req, res){
  LoginModule.login('', '', function(err, results){
    console.error(err);
  });
  res.send({id: '123'});
}

rules.push({
  pattern: '/api/login',
  method: 'get',
  action: login
});

exports.getRules = function() {
    console.log("用户权限模块：");
    console.log(rules);
    return rules;
};
