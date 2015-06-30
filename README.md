user-info
=========

```javascript
analytics.use(UserInfo({
  init: function (user, cb) {
    // 欄位請參考 analytics.js 專案下的文件
    user.set('xxx', 'ooo');
    cb();
  }
}));
```
