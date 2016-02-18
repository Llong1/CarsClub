'use strict';

var Apis = require("./apis/index");
var Pages = require("./webs/index");

var actions = [];

var apis = Apis.getApis();

if (apis) {
  for (var i = 0; i < apis.length; i++) {
    actions.push(apis[i]);
  }
}

var pages = Pages.getPages();

if (pages) {
  for (var i = 0; i < pages.length; i++) {
    actions.push(pages[i]);
  }
}

function getRules() {
    var rules = [];
    for(var i=0;i<actions.length;i++){
        rules = rules.concat(actions[i].getRules())
    }
    return rules;
}

exports.getRules = getRules;
