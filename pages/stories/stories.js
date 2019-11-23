// pages/stories/stories.js
var app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    batchNumber: "#333",
    day: "Friday",
    loggedIn: true
  },

  cardClick: function(event) {
    console.log(event)
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },

  logInUser: function() {
    this.setData({loggedIn: true})
    console.log(app.globalData)
    const userInfo = app.globalData.userInfo
    this.setData({ userInfo: userInfo })
    // console.log(this.data)
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    wx.request({
      url: 'http://localhost:3000/api/v1/stories',
      success: function (res) {
        const stories = res.data.stories
        page.setData({stories: stories})
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */

  onReady: function () {
    // this.data is GETTING the data of the page
   const batchNumber = this.data.batchNumber
   // I make an POST request to save a new batch on the server
  //  console.log(this.data)
    
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // I am connecting to an API to get the latest day
    const todaysDay = "Saturday"
    // this.setData({new_key: new_value}) is SETTING the data of the page
    this.setData({day: todaysDay})
    this.setData({favoriteCodingLang: "JS"})
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