// =======================
// 区域文本数据（示例，记得换成你自己的设定）
// =======================
const regionData = {
  region01: {
    title: "起源之地 The Origin Land",
    overview: "这里是星烬海的中心……",
    city: "这里是主城设定……",
    forest: "森林区域生态……",
    lake: "湖泊与海岸……"
  },
  region02: {
    title: "星脉胧庭 Mistbound Starvein",
    overview: "这里是星脉胧庭的概述……",
    city: "主城 / 都城氛围……",
    forest: "雾林、星脉树……",
    lake: "河流、浮岛周边……"
  }
  // 以后继续加 region03, region04...
};

// =======================
// DOM
// =======================
const popup        = document.getElementById("regionPopup");
const popupBg      = document.querySelector(".popup-bg");
const popupClose   = document.querySelector(".popup-close");
const popupContent = document.getElementById("popupContent");

const popupTitleEl   = document.getElementById("popupTitle");
const textOverviewEl = document.getElementById("text-overview");
const textCityEl     = document.getElementById("text-city");
const textForestEl   = document.getElementById("text-forest");
const textLakeEl     = document.getElementById("text-lake");

// =======================
// 打开 / 关闭弹窗（不动 body）
// =======================
//function openPopup(card) {
 // const regionId = card.dataset.region;
 // const data = regionData[regionId];

   //if (data) {
   // popupTitleEl.textContent   = data.title;
   // textOverviewEl.textContent = data.overview;
   // textCityEl.textContent     = data.city;
   // textForestEl.textContent   = data.forest;
   // textLakeEl.textContent     = data.lake;
  //}

  //popup.style.display = "flex";
//}

function openPopup(card) {
  // ……你的填文字逻辑……
  popup.style.display = "flex";
  popup.classList.add("open");
}

function closePopup() {
  popup.classList.remove("open");
  popup.style.display = "none";
}

// 所有卡片绑定打开
document.querySelectorAll(".world-card").forEach(card => {
  card.addEventListener("click", () => openPopup(card));
});

// 背景和 X 关闭
popupBg.addEventListener("click", closePopup);
popupClose.addEventListener("click", closePopup);

// =======================
// 左侧目录 → 右侧内容滚动
// =======================
const navLinks = document.querySelectorAll("#popupNav a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // 切换左侧高亮
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // 滚动到对应段落
    const id = link.getAttribute("href").substring(1);
    const target = document.getElementById(id);
    if (!target) return;

    popupContent.scrollTo({
      top: target.offsetTop,
      behavior: "smooth"
    });
  });
});

// 打开弹窗时默认高亮第一个
function openPopup(card) {
  const regionId = card.dataset.region;
  const data = regionData[regionId];
  if (data) {
    popupTitleEl.textContent   = data.title;
    textOverviewEl.textContent = data.overview;
    textCityEl.textContent     = data.city;
    textForestEl.textContent   = data.forest;
    textLakeEl.textContent     = data.lake;
  }

  popup.style.display = "flex";
  popup.classList.add("open");

  // 默认选中第一项“整体概览”
  navLinks.forEach(l => l.classList.remove("active"));
  if (navLinks[0]) navLinks[0].classList.add("active");
}


// =======================
// 滚动控制：只让框内滚动，背景永远不动
// =======================

// 1）鼠标滚轮在「遮罩区域」上时，完全禁止默认滚动
popupBg.addEventListener("wheel", (e) => {
  e.preventDefault();
}, { passive: false });

// 2）在右侧内容区滚动时，防止顶部 / 底部继续把事件传给页面
popupContent.addEventListener("wheel", (e) => {
  const delta = e.deltaY;
  const atTop = popupContent.scrollTop === 0;
  const atBottom =
    popupContent.scrollHeight - popupContent.clientHeight - popupContent.scrollTop <= 0.5;

  // 往上滚且已经到顶，或者往下滚且到底了 → 吃掉事件
  if ((delta < 0 && atTop) || (delta > 0 && atBottom)) {
    e.preventDefault();
  }
}, { passive: false });

// 3）手机触控同理（简单阻止背景跟随）
popupBg.addEventListener("touchmove", (e) => {
  e.preventDefault();
}, { passive: false });

popupContent.addEventListener("touchmove", (e) => {
  // 这里只允许内容区自己滚，不做额外处理
}, { passive: false });
