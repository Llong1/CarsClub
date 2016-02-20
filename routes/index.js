var actionManager = require('../actions/index');

function initAction(app) {
    var router = {
        method: {
            get: 'get',
            post: 'post'
        },
        run: function () {
            var _rules = actionManager.getRules();
            for (var i = 0; i < _rules.length; i++) {
                if (_rules[i].pattern == undefined || _rules[i].pattern == null) {
                  continue;
                }
                if (_rules[i].method) {
                  if (_rules[i].method.toLowerCase() == router.method.get) {
                      app.get(_rules[i].pattern, _rules[i].action);
                  } else if (_rules[i].method.toLowerCase() == router.method.post) {
                      app.post(_rules[i].pattern, _rules[i].action);
                  } else {
                      app.all(_rules[i].pattern, _rules[i].action);
                  }
                } else {
                  app.all(_rules[i].pattern, _rules[i].action);
                }
            }
        }
    }
    return router;
}

exports.initAction = initAction;
