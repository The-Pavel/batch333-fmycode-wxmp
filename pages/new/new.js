// pages/new/new.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  createStory: function (event) {
    let newStory = {};
    newStory.name = event.detail.value.name
    newStory.text = event.detail.value.text
    wx.request({
      url: 'http://localhost:3000/api/v1/stories',
      method: 'post',
      data: newStory,
      success: function(res) {
        const id = res.data.id
        wx.reLaunch({
          url: `/pages/stories/stories`,
        })
      }
    })
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})