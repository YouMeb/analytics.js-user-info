'use strict';

var proto = UserInfo.prototype;

module.exports = UserInfo;

function UserInfo(options) {
  if (!(this instanceof UserInfo)) {
    return new UserInfo(options);
  }
  options || (options = {});
  this.init = options.init;
  this.endpoint = options.endpoint
    || 'http://webtracking.urad.com.tw/user';
}

proto.init = function (analytics, cb) {
  if (!this.init) {
    cb();
    return;
  }
  var endpoint = this.endpoint;
  this.init(analytics.user, function () {
    send(endpoint, analytics.user.toJSON());
    cb();
  });
};

function send(endpoint, data) {
  var json = JSON.stringify(data);
  var img = document.createElement('img');
  img.src = endpoint + '?data=' + encodeURIComponent(json);
}
