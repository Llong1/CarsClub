function _render(res, path, data, type) {
  var t = type == undefined || type == null? "json": type;
  if ("json" == t) {
    res.send();
  }
}

exports.render = _render;
