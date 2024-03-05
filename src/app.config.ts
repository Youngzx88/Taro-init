export default defineAppConfig({
  pages: ["pages/index/index","pages/device/index","pages/mine/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    custom: false,
    color: "#909090",
    selectedColor: "#5685e5",
    backgroundColor: "#f9f9f9",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页"
      },
      {
        pagePath: "pages/device/index",
        text: "设备"
      },
      {
        pagePath: "pages/mine/index",
        text: "我的"
      }
    ]
  },
});
