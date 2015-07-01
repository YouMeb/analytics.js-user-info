'use strict';

var proto = UserInfo.prototype;

module.exports = UserInfo;

function UserInfo(options) {
  if (!(this instanceof UserInfo)) {
    return new UserInfo(options);
  }
  options || (options = {});
  this._init = options.init;
  this._endpoint = options.endpoint
    || 'http://webtracking.urad.com.tw/user';
}

proto.init = function (analytics, cb) {
  if (!this._init) {
    cb();
    return;
  }
  var endpoint = this._endpoint;
  this._init(analytics.user, function () {
    send(endpoint, analytics.user.toJSON());
    cb();
  });
};

function send(endpoint, data) {
  var json = JSON.stringify(data);
  var img = document.createElement('img');
  img.src = endpoint + '?data=' + encodeURIComponent(json);
}
