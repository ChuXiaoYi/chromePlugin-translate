// 监听来自popup.js文件的消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "enable") {
    // 如果接收到“enable”消息，则将插件开启
    chrome.browserAction.setIcon({ path: "icon_enabled.png" });
    chrome.browserAction.setTitle({ title: "插件已开启" });
  } else if (request.type === "disable") {
    // 如果接收到“disable”消息，则将插件关闭
    chrome.browserAction.setIcon({ path: "icon_disabled.png" });
    chrome.browserAction.setTitle({ title: "插件已关闭" });
  }
});
