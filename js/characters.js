// 应用状态
let state = {
  selectedCategory: '醉云台',
  selectedCharacterIndex: 0,
  selectedSkinIndex: 0
};

// 初始化应用
function init() {
  renderCategories();
  renderContent();
  setupEventListeners();
}

// 渲染分类列表
function renderCategories() {
  const container = document.getElementById('categories');
  container.innerHTML = categories.map(cat => `
    <button 
      class="category-button ${cat === state.selectedCategory ? 'active' : ''}"
      data-category="${cat}"
    >
      ${cat}
    </button>
  `).join('');
}

// 获取当前筛选的角色
function getFilteredCharacters() {
  return characters.filter(char => char.category === state.selectedCategory);
}

// 获取当前角色
function getCurrentCharacter() {
  return characters[state.selectedCharacterIndex];
}

// 获取当前皮肤
function getCurrentSkin() {
  const char = getCurrentCharacter();
  return char.skins[state.selectedSkinIndex];
}

// 渲染主要内容
function renderContent() {
  const char = getCurrentCharacter();
  const skin = getCurrentSkin();
  
  // 更新背景图
  document.getElementById('bgImage').src = skin.mainImage;
  
  // 更新标题
  document.getElementById('chineseTitle').textContent = char.chineseName;
  document.getElementById('englishTitle').textContent = char.name;
  
  // 更新描述
  document.getElementById('skinInfo').textContent = `${char.title} - ${skin.name} `;
  document.getElementById('skinDescription').textContent = skin.description;
  
  // 渲染皮肤轮播
  renderSkinCarousel();
  
  // 渲染角色卡片
  renderCharacterCards();
}

// 渲染皮肤轮播
function renderSkinCarousel() {
  const char = getCurrentCharacter();
  const container = document.getElementById('skinCarousel');
  const skinsToShow = 2;
  
  const displayedSkins = [];
  for (let i = 0; i < Math.min(skinsToShow, char.skins.length); i++) {
    const index = (state.selectedSkinIndex + i) % char.skins.length;
    displayedSkins.push({ ...char.skins[index], originalIndex: index });
  }
  
  container.innerHTML = displayedSkins.map(skin => `
    <div 
      class="skin-card ${state.selectedSkinIndex === skin.originalIndex ? 'active' : ''}"
      data-skin-index="${skin.originalIndex}"
    >
      <img src="${skin.image}" alt="${skin.name}">
      <div class="skin-overlay"></div>
      ${state.selectedSkinIndex !== skin.originalIndex ? '<div class="skin-overlay-inactive"></div>' : ''}
      <div class="skin-info-overlay">
        <div class="skin-name">${skin.name}</div>
      </div>


      
    </div>
  `).join('');
}

// 渲染角色卡片
function renderCharacterCards() {
  const filteredChars = getFilteredCharacters();
  const currentIndexInCategory = filteredChars.findIndex(c => c.id === getCurrentCharacter().id);
  
  const cardsPerPage = 6;
  const cardPage = Math.floor(currentIndexInCategory / cardsPerPage);
  const startIndex = cardPage * cardsPerPage;
  const displayedCharacters = filteredChars.slice(startIndex, startIndex + cardsPerPage);
  
  const container = document.getElementById('characterCards');
  container.innerHTML = displayedCharacters.map(char => {
    const charIndex = characters.findIndex(c => c.id === char.id);
    return `
      <div class="char-card" data-char-index="${charIndex}">
        <div class="char-card-inner ${charIndex === state.selectedCharacterIndex ? 'active' : ''}">
          <img src="${char.mainImage}" alt="${char.name}">
        </div>
        <div class="char-card-name">${char.name}</div>
      </div>
    `;
  }).join('');
}

// 设置事件监听器
function setupEventListeners() {
  // 分类按钮
  document.getElementById('categories').addEventListener('click', (e) => {
    if (e.target.classList.contains('category-button')) {
      const category = e.target.dataset.category;
      handleCategoryChange(category);
    }
  });
  
  // 皮肤轮播
  document.getElementById('skinCarousel').addEventListener('click', (e) => {
    const skinCard = e.target.closest('.skin-card');
    if (skinCard) {
      const skinIndex = parseInt(skinCard.dataset.skinIndex);
      state.selectedSkinIndex = skinIndex;
      renderContent();
    }
  });
  
  // 皮肤导航按钮
  document.getElementById('prevSkinBtn').addEventListener('click', handlePrevSkin);
  document.getElementById('nextSkinBtn').addEventListener('click', handleNextSkin);
  
  // 角色卡片
  document.getElementById('characterCards').addEventListener('click', (e) => {
    const charCard = e.target.closest('.char-card');
    if (charCard) {
      const charIndex = parseInt(charCard.dataset.charIndex);
      state.selectedCharacterIndex = charIndex;
      state.selectedSkinIndex = 0;
      renderContent();
    }
  });
  
  // 角色导航按钮
  document.getElementById('prevCharBtn').addEventListener('click', handlePrevCharacter);
  document.getElementById('nextCharBtn').addEventListener('click', handleNextCharacter);
  
  // 详情按钮
  document.getElementById('detailBtn').addEventListener('click', showModal);
  
  // 关闭模态框
  document.getElementById('closeModalBtn').addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
}

// 处理分类变更
function handleCategoryChange(category) {
  state.selectedCategory = category;
  const filtered = getFilteredCharacters();
  if (filtered.length > 0) {
    state.selectedCharacterIndex = characters.findIndex(c => c.id === filtered[0].id);
    state.selectedSkinIndex = 0;
  }
  renderCategories();
  renderContent();
}

// 上一个皮肤
function handlePrevSkin() {
  const char = getCurrentCharacter();
  if (state.selectedSkinIndex > 0) {
    state.selectedSkinIndex--;
  } else {
    state.selectedSkinIndex = char.skins.length - 1;
  }
  renderContent();
}

// 下一个皮肤
function handleNextSkin() {
  const char = getCurrentCharacter();
  if (state.selectedSkinIndex < char.skins.length - 1) {
    state.selectedSkinIndex++;
  } else {
    state.selectedSkinIndex = 0;
  }
  renderContent();
}

// 上一个角色
function handlePrevCharacter() {
  const filteredChars = getFilteredCharacters();
  const currentIndexInCategory = filteredChars.findIndex(c => c.id === getCurrentCharacter().id);
  
  let newChar;
  if (currentIndexInCategory > 0) {
    newChar = filteredChars[currentIndexInCategory - 1];
  } else {
    newChar = filteredChars[filteredChars.length - 1];
  }
  
  state.selectedCharacterIndex = characters.findIndex(c => c.id === newChar.id);
  state.selectedSkinIndex = 0;
  renderContent();
}

// 下一个角色
function handleNextCharacter() {
  const filteredChars = getFilteredCharacters();
  const currentIndexInCategory = filteredChars.findIndex(c => c.id === getCurrentCharacter().id);
  
  let newChar;
  if (currentIndexInCategory < filteredChars.length - 1) {
    newChar = filteredChars[currentIndexInCategory + 1];
  } else {
    newChar = filteredChars[0];
  }
  
  state.selectedCharacterIndex = characters.findIndex(c => c.id === newChar.id);
  state.selectedSkinIndex = 0;
  renderContent();
}

// 显示模态框
function showModal() {
  const char = getCurrentCharacter();
  const skin = getCurrentSkin();

  // 第二行左侧 Tab 显示角色中文名
    // 第二行左侧 Tab 显示角色中文名
  document.getElementById("modalInfoTab").textContent = char.chineseName || char.name;



  // 资料区
  document.getElementById('modalNickname').textContent   = char.nickname    || "---";
  document.getElementById('modalGender').textContent     = char.gender      || "---";
  document.getElementById('modalBirthday').textContent   = char.birthday    || "---";
  document.getElementById('modalAge').textContent        = char.age         || "---";
  document.getElementById('modalHeight').textContent     = char.height      || "---";
  document.getElementById('modalRace').textContent       = char.race        || "---";
  document.getElementById('modalEnergy').textContent     = char.energy      || "---";
  document.getElementById('modalPersonality').textContent= char.personality || "---";

  document.getElementById('modalElement').textContent    = char.element     || "---";
  document.getElementById('modalFaction').textContent    = char.faction     || "---";
  document.getElementById('modalRegion').textContent     = char.region      || "---";
  document.getElementById('modalAffiliation').textContent= char.affiliation || "---";
  document.getElementById('modalBirthplace').textContent = char.birthplace  || "---";
  document.getElementById('modalWeapon').textContent     = char.weapon      || "---";
  document.getElementById('modalOccupation').textContent = char.occupation  || "---";

  // 背景故事：优先皮肤故事，其次角色故事
  const storyText = skin.story || char.story || "";
  document.getElementById('modalStory').textContent = storyText;

  // 打开时默认回到“资料”这一页
  const infoTabBtn  = document.getElementById('modalInfoTab');
  const storyTabBtn = document.getElementById('modalStoryTab');
  const tabInfo  = document.getElementById('tabInfo');
  const tabStory = document.getElementById('tabStory');

  infoTabBtn.classList.add('active');
  storyTabBtn.classList.remove('active');
  tabInfo.classList.add('active');
  tabStory.classList.remove('active');


  
  document.getElementById('detailModal').style.display = 'flex';
}



// 关闭模态框
function closeModal() {
  document.getElementById('detailModal').style.display = 'none';
}






// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);







// ========== Modal Tab Switch ==========
const infoTabBtn = document.getElementById("modalInfoTab");
const storyTabBtn = document.getElementById("modalStoryTab");

const tabInfo = document.getElementById("tabInfo");
const tabStory = document.getElementById("tabStory");

// 点击“角色名字” ⇒ 显示资料页
infoTabBtn.addEventListener("click", () => {
  infoTabBtn.classList.add("active");
  storyTabBtn.classList.remove("active");

  tabInfo.classList.add("active");
  tabStory.classList.remove("active");
});

// 点击“背景故事” ⇒ 显示故事页
storyTabBtn.addEventListener("click", () => {
  storyTabBtn.classList.add("active");
  infoTabBtn.classList.remove("active");

  tabStory.classList.add("active");
  tabInfo.classList.remove("active");

});
