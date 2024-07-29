// pages/hospital/hospital.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hospitals: [
      {
        id: 1,
        name: '第一医院',
        image: '/img/hospital1.png',
        location: '北京市朝阳区'
      },
      {
        id: 2,
        name: '第二医院',
        image: '/img/hospital1.png',
        location: '上海市浦东新区'
      },
      {
        id: 3,
        name: '第三医院',
        image: '/img/hospital1.png',
        location: '广州市天河区'
      }
    ]
  },

  onHome: function () {
    wx.navigateTo({
        url: '../home/home',
    })
  },

  onSelf: function () {
    wx.navigateTo({
        url: '../self/self',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // this.fetchHospitalData();
  },


  fetchHospitalData: function() {
    const that = this;
    that.setData({
      hospitals: res.data
    });
    // wx.request({
    //   url: 'https://example.com/api/hospitals', // 替换为实际的API地址
    //   method: 'GET',
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     if (res.statusCode === 200) {
    //       that.setData({
    //         hospitals: res.data
    //       });
    //     } else {
    //       console.error('请求失败', res);
    //     }
    //   },
    //   fail(err) {
    //     console.error('请求失败', err);
    //   }
    // });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})