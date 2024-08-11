
Page({
  data: {
    avatarUrl: null
  },
  
  onLoad: function () {
    // 在页面加载时检查用户是否已经授权登录
    this.checkUserAuthorization();
  },
  
  onHome: function () {
    wx.redirectTo({
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
              console.log(res.userInfo);
              that.setData({
                userInfo: res.userInfo
              });
            }
          });
        }
      }
    });
  },
  
  onChooseAvatar: function(e) {
    console.log('123' + e.detail);
    const { avatarUrl } = e.detail;
    this.setData({
      avatarUrl,
    })
  }
});
