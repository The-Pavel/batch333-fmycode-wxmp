// pages/edit/edit.js
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
    const page = this
    const id = options.id
    // console.log(options)
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      success: function (res) {
        const story = res.data
        page.setData({ story })
      }
    })
  },

  updateStory: function(event) {
    console.log(event)
    let id = this.data.story.id
    let newStory = {};
    newStory.name = event.detail.value.name
    newStory.text = event.detail.value.text
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'put',
      data: newStory,
      success: function (res) {
        console.log(res)
        const id = res.data.id
        wx.redirectTo({
          url: `/pages/show/show?id=${id}`,
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