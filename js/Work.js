// 初始化一排 3D 对称画廊
function initCoverflow(shell) {
  const row = shell.querySelector('.work-row');
  const items = Array.from(row.querySelectorAll('.cf-item'));
  if (items.length === 0) return;

  const prevBtn = shell.querySelector('.work-arrow.prev');
  const nextBtn = shell.querySelector('.work-arrow.next');

  const total = items.length;
  let activeIndex = Math.floor(total / 2); // 默认中间那张

  const gap = 260;      // 左右间距
  const depth = 220;    // 远近（Z 轴）
  const angleBase = 35; // 旋转角度基准

  function update() {
    items.forEach((item, i) => {
      const offset = i - activeIndex;
      const abs = Math.abs(offset);

      const translateX = offset * gap;
      const translateZ = -abs * depth;
      const scale = 1 - abs * 0.18;
      const rotateY = -offset * angleBase;

      item.style.zIndex = String(100 - abs);
      item.style.opacity = String(1 - abs * 0.25);
      item.style.transform =
  `translate3d(-65%, -50%, 0px) ` +   // ★ 往左微调
  `translate3d(${translateX}px, 0px, ${translateZ}px) ` +
  `scale(${scale}) rotateY(${rotateY}deg)`;


      item.classList.toggle('is-active', offset === 0);
    });
  }

  // 左右按钮
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      activeIndex = (activeIndex - 1 + total) % total;
      update();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      activeIndex = (activeIndex + 1) % total;
      update();
    });
  }

  // 点击小卡片 → 直接跳到中间
  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      activeIndex = i;
      update();
    });
  });

  update();
}

document.addEventListener('DOMContentLoaded', () => {
  // panel 默认展开
  document.querySelectorAll('.work-panel').forEach(p => p.classList.add('open'));

  // 每一块 coverflow-shell 各自一套 3D 画廊
  document.querySelectorAll('.coverflow-shell').forEach(initCoverflow);
});




