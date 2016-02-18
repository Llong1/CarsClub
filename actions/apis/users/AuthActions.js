'use strict';

var rules = [];

function login(req, res){
  
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
