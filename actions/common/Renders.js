function _render(res, req, data, type, path) {
  var t = type == undefined || type == null? "json": type;
  if ("json" == t) {
    // res.setOption('Content-Format', 'application/json');
    res.send(data);
  }
}

exports.render = _render;
exports.json = function(res, req, data){
  _render(res, req, data, 'json', null);
};
