
Page({
  data: {
    avatarUrl: null,
    loginInfo: "请点击头像登录"
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
  
  getPhoneNumber: function(e) {
    console.log('xxxxxxxxxxxx');
    if (e.detail.errMsg === "getPhoneNumber:ok") {
      const { encryptedData, iv } = e.detail;

      // 使用登录凭证换取 session_key
      wx.login({
        success: res => {
          if (res.code) {
            console.log('log success.'+encryptedData +'yyyy' + iv)
            } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    } else {
      console.log('用户拒绝了授权');
    }
  }
});
