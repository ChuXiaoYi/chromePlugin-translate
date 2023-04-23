// 在此处替换为您的Google Translate API密钥
const API_KEY = "test";
const TO = "zh-CN";

// 创建一个空的div元素作为popover
const popover = document.createElement("div");
popover.style.position = "absolute";
popover.style.border = "1px solid #ccc";
popover.style.background = "#fff";
popover.style.padding = "10px";
popover.style.zIndex = "9999";
popover.style.display = "none";
document.body.appendChild(popover);

// 调用Google Translate API翻译文本
async function translateText(text) {
  // 显示加载符号
  popover.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  const response = await fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=en&tl=${TO}&q="${text}"`,
    requestOptions
  );
  const data = await response.json();
  console.log(data[0][0][0]);
  return data[0][0][0];
  //   return data.data.translations[0].translatedText;
}

// 当文本被选中时，显示popover
document.addEventListener("mouseup", async (event) => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText !== "") {
    // 翻译文本
    const translatedText = await translateText(selectedText, "en");

    popover.style.display = "block";
    popover.style.top = `${event.pageY + 10}px`;
    popover.style.left = `${event.pageX}px`;
    popover.innerText = translatedText;
  } else {
    popover.style.display = "none";
  }
});

// 当用户单击页面其他地方时，隐藏popover
document.addEventListener("mousedown", (event) => {
  if (event.target !== popover) {
    popover.style.display = "none";
  }
});
