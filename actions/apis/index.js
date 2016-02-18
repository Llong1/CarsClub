var AuthActions = require('./users/AuthActions');

var apis = [];
apis.push(AuthActions);

exports.getApis = function(){
  console.log("获取接口路由。。。");
  console.log(apis);
  return apis;
}
