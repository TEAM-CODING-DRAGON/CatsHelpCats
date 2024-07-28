
Page({
  data: {
    userInfo: null
  },
  
  onLoad: function () {
    // 在页面加载时检查用户是否已经授权登录
    this.checkUserAuthorization();
  },
  
  onHome: function () {
    wx.navigateTo({
        url: '../home/home',
    })
},

  checkUserAuthorization: function() {
    const that = this;
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          // 用户已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function(res) {
              that.setData({
                userInfo: res.userInfo
              });
            }
          });
        }
      }
    });
  },
  
  onGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      // 用户按了允许授权按钮
      this.setData({
        userInfo: e.detail.userInfo
      });
      // 你可以在这里执行登录操作，比如将用户信息发送到服务器
      console.log('用户信息:', e.detail.userInfo);
    } else {
      // 用户按了拒绝按钮
      console.log('用户拒绝了授权');
    }
  }
});
