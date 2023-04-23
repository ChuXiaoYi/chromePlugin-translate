// 获取插件开关按钮元素
const toggleButton = document.getElementById('toggleButton');

// 初始为插件关闭状态
let isEnabled = false;

// 为按钮添加点击事件监听器
toggleButton.addEventListener('click', function() {
  if (isEnabled) {
    // 如果插件是开启状态，将其关闭
    isEnabled = false;
    toggleButton.innerHTML = '开启插件';
    chrome.runtime.sendMessage({ type: 'disable' });
  } else {
    // 如果插件是关闭状态，将其开启
    isEnabled = true;
    toggleButton.innerHTML = '关闭插件';
    chrome.runtime.sendMessage({ type: 'enable' });
  }
});
