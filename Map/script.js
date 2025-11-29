// =======================
// ⭐ 区域资料（你可以自己改内容）
// =======================

const regionData = {

    1: {
        title: "仙游镜（起源之地）",
        image: "./images/Map.PNG",
        description: "世界脉动最初之处，灵光汇聚之地。",
        subregions: ["起源之环", "流华池", "观星岭"]
    },

    2: {
        title: "浮光曦沐",
        image: "./images/Map.PNG",
        description: "晨光照耀的清灵之境，薄雾与浮光交织。",
        subregions: ["曦光谷", "晨沐湖"]
    },

    3: {
        title: "沙炎安卡",
        image: "./images/Map.PNG",
        description: "白沙残阳与古战线的交界。",
        subregions: ["残阳长壁", "安卡绿洲"]
    },

    4: {
        title: "迷雾沼地",
        image: "./images/Map.PNG",
        description: "瘴气与星芒交织的诡异湿地。",
        subregions: ["雾潮林", "黑沼窟"]
    },

    5: {
        title: "巫林",
        image: "./images/Map.PNG",
        description: "灵语与暗影交错的古老森林。",
        subregions: ["灵隐树阵", "月祭台"]
    },

    6: {
        title: "冰冥星",
        image: "./images/Map.PNG",
        description: "寒辉冻结星海之地。",
        subregions: ["陨冰环带", "冰冠大殿"]
    },

    7: {
        title: "风龙荒域",
        image: "./images/Map.PNG",
        description: "风暴咆哮与巨龙骨鸣的荒原。",
        subregions: ["龙脊峰", "风暴裂口"]
    },

    8: {
        title: "镜渊",
        image: "./images/Map.PNG",
        description: "倒影与深渊叠合之境。",
        subregions: ["折像城", "反光湖"]
    },

    9: {
        title: "拉斯卡西亚（海都）",
        image: "./images/Map.PNG",
        description: "海潮与文明交汇的漂浮海城。",
        subregions: ["潮汐港", "蓝砂市场"]
    },

    10: {
        title: "寒渊海域",
        image: "./images/Map.PNG",
        description: "寒潮与深海洋流交错的边境海域。",
        subregions: ["深潮原", "北寒港", "冰封峡湾"]
    },

    11: {
        title: "永夜之地",
        image: "./images/Map.PNG",
        description: "无光笼罩的寒彻荒域。",
        subregions: ["黑月谷", "霜影平原"]
    },

    12: {
        title: "大火山",
        image: "./images/Map.PNG",
        description: "岩浆奔腾，炽焰不息的古老火山。",
        subregions: ["赤岩深径", "熔火山心"]
    },

    13: {
        title: "流光穹极",
        image: "./images/Map.PNG",
        description: "极光观测塔所在的天穹之境。",
        subregions: ["穹极观测塔", "轨道环城"]
    }
};



// =======================
// 获取 DOM
// =======================

const infoPanel = document.getElementById("infoPanel");
const panelToggle = document.getElementById("panelToggle");

const infoTitle = document.getElementById("info-title");
const infoImage = document.getElementById("info-image");
const infoDescription = document.getElementById("info-description");

const subregionList = document.getElementById("subregionList");
const mapPoints = document.querySelectorAll(".map-point");

const backButton = document.getElementById("backButton");
const regionTabs = document.getElementById("regionTabs");

let currentRegionId = null;


// =======================
// ⭐ 面板展开/收起（A 型折叠条）
// =======================

panelToggle.addEventListener("click", () => {
    infoPanel.classList.toggle("show");
});


// =======================
// ⭐ 地图点点击 → 打开区域
// =======================

mapPoints.forEach(point => {
    point.addEventListener("click", () => {
        const id = point.dataset.id;
        showRegion(id);
        infoPanel.classList.add("show");
    });
});


// =======================
// ⭐ 展示大区域（含“总览”）
// =======================

function showRegion(id) {
    const data = regionData[id];
    if (!data) return;

    currentRegionId = id;

    infoTitle.textContent = data.title;
    infoImage.src = data.image;
    infoDescription.textContent = data.description;

    // 清空子区域列表
    subregionList.innerHTML = "";

    // 👉 总览按钮（不会关闭面板）
    const overview = document.createElement("li");
    overview.textContent = "总览";
    overview.className = "subregion-item active";
    overview.addEventListener("click", () => showRegion(id));
    subregionList.appendChild(overview);

    // 👉 子区域按钮
    data.subregions.forEach(sub => {
        const li = document.createElement("li");
        li.textContent = sub;
        li.className = "subregion-item";

        li.addEventListener("click", () => {
            showSubregion(id, sub, data.description, data.image, li);
        });

        subregionList.appendChild(li);
    });
}


// =======================
// ⭐ 进入子区域（保持面板打开）
// =======================

function showSubregion(regionId, subName, regionDesc, regionImg, li) {
    infoTitle.textContent = subName;
    infoDescription.textContent = regionDesc + "（子区域：" + subName + "）";
    infoImage.src = regionImg;

    // 高亮当前子区域
    [...subregionList.children].forEach(n => n.classList.remove("active"));
    li.classList.add("active");
}


// =======================
// ⭐ Back 按钮（正常可用）
// =======================

backButton.addEventListener("click", () => {
    history.back();
});


// =======================
// ⭐ 下方区域 tabs（自动生成）
// =======================

function generateTabs() {
    Object.keys(regionData).forEach(id => {
        const tab = document.createElement("div");
        tab.className = "region-tab";
        tab.textContent = regionData[id].title;

        tab.addEventListener("click", () => {
            showRegion(id);
            infoPanel.classList.add("show");

            [...regionTabs.children].forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
        });

        regionTabs.appendChild(tab);
    });
}

generateTabs();
