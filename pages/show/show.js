// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  deleteStory: function(e) {
    const id = this.data.story.id
    wx.showModal({
      title: 'Are you sure?',
      content: 'This action is permanent!',
      cancelText: "Cancel",
      confirmText: "OK!",
      success(res) {
        if (res.confirm) {
          wx.request({
            url: `http://localhost:3000/api/v1/stories/${id}`,
            method: 'delete',
            success: (res) => {
              wx.reLaunch({
                url: '/pages/stories/stories',
              })
            }
          })
        } else if (res.cancel) {
          
        }
      }
    })
    
  },

  goToEdit: function(e) {
    let id = this.data.story.id
    wx.navigateTo({
      url: `/pages/edit/edit?id=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    const id = options.id
    console.log(options)
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      success: function(res) {
        const story = res.data
        page.setData({story})
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