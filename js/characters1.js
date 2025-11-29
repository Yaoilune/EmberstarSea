// 角色数据
const characters = [
  {
    id: 1,
    name: "AURELIA",
    chineseName: "奥蕾莉亚",
    category: "醉云台",
    title: "Guardian of Light",

    nickname: "奥蕾莉亚",
    gender: "女",
    birthday: "3月21日",
    age: "18",
    height: "158cm",
    race: "森林灵族",
    energy: "星辉",
    personality: "开朗 / 纯真",
    element: "光",
    birthplace: "醉云台·晨曦林地",
    region: "醉云台",
    affiliation: "晨曦守护者",
    faction: "光之守卫",
    weapon: "长杖",
    occupation: "Guardian of Light（光之守护者）",

    story: "这里写角色的主要故事……",




    description: 'A legendary warrior blessed with the power of the golden sun.',
    mainImage: './images/zhuye.png',
    skins: [
      { 
        id: 1, 
        name: '宝贵之物', 
        image: './images/resonators-small9.png',
        mainImage: './images/resonators-big9.png',
        description: 'The classic Aurelia appearance. Golden armor gleaming in the sunlight.',
        story: `奥蕾莉亚的宝贵之物皮肤背景故事...`,
      },
      { 
        id: 2, 
        name: '幻梦之灵　', 
        image: './images/resonators-small3.png',
        mainImage: './images/resonators-big3.png',
        description: 'Royal ceremonial armor worn during grand celebrations.',
        story: `幻梦之灵的故事内容...`
      }
    ]
  },

  
  {
    id: 2,
    name: 'SHADOW',
    chineseName: '暗影',
    title: 'Master of Darkness',
    category: '仙游境',
    description: 'Shrouded in mystery and wielding forbidden dark arts.',
    mainImage: 'https://images.unsplash.com/photo-1693921978742-c93c4a3e6172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2FycmlvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAzODIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1693921978742-c93c4a3e6172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2FycmlvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAzODIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1693921978742-c93c4a3e6172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwd2FycmlvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDAzODIyOHww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'The original shadow assassin outfit. Dark robes that blend with the night.'
      },
      { 
        id: 2, 
        name: 'Void', 
        image: 'https://images.unsplash.com/photo-1697482612084-70a4c3cecca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyYWN0ZXIlMjBkZXNpZ24lMjBjb25jZXB0fGVufDF8fHx8MTc2NDA5NTM1NHww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1651335944644-33c89ed94cc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2lkJTIwc2hhZG93JTIwY2hhcmFjdGVyfGVufDF8fHx8MTc2NDA5NTc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Infused with void energy from the dark realm.'
      }
    ]
  },
  {
    id: 3,
    name: 'IRONCLAD',
    chineseName: '铁甲',
    title: 'Steel Knight',
    category: '醉云台',
    description: 'A formidable knight encased in impenetrable armor.',
    mainImage: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmlnaHQlMjBhcm1vciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmlnaHQlMjBhcm1vciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1734122373993-36745ac6b688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmlnaHQlMjBhcm1vciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Battle-tested steel armor with countless war stories.'
      }
    ]
  },
  {
    id: 4,
    name: 'MYSTARA',
    chineseName: '秘斯塔拉',
    title: 'Arcane Sorceress',
    category: '浮光曦沐',
    description: 'A powerful mage who has mastered the arcane arts.',
    mainImage: 'https://images.unsplash.com/photo-1760574772950-f37de9dce85c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdlJTIwd2l6YXJkJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MDk1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1760574772950-f37de9dce85c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdlJTIwd2l6YXJkJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MDk1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1760574772950-f37de9dce85c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdlJTIwd2l6YXJkJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MDk1NDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Traditional mage robes with mystical symbols.'
      }
    ]
  },
  {
    id: 5,
    name: 'VIPER',
    chineseName: '毒蛇',
    title: 'Silent Assassin',
    category: '仙游境',
    description: 'A deadly assassin who strikes from the shadows.',
    mainImage: 'https://images.unsplash.com/photo-1652000025920-155f11487525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Nhc3NpbiUyMHJvZ3VlJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc2NDA5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1652000025920-155f11487525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Nhc3NpbiUyMHJvZ3VlJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc2NDA5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1652000025920-155f11487525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Nhc3NpbiUyMHJvZ3VlJTIwY2hhcmFjdGVyfGVufDF8fHx8MTc2NDA5NTQ4Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Sleek tactical gear for maximum stealth.'
      }
    ]
  },
  {
    id: 6,
    name: 'ARTEMIS',
    chineseName: '阿尔忒弥斯',
    title: 'Swift Huntress',
    category: '迷雾沼地',
    description: 'A master archer with unparalleled accuracy.',
    mainImage: 'https://images.unsplash.com/photo-1578305850087-ccd629496775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZXIlMjByYW5nZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1578305850087-ccd629496775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZXIlMjByYW5nZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1578305850087-ccd629496775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoZXIlMjByYW5nZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwOTU0ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Lightweight ranger attire perfect for forests.'
      }
    ]
  },
  {
    id: 7,
    name: 'TITAN',
    chineseName: '泰坦',
    title: 'Mountain Fortress',
    category: '塔里暮雅',
    description: 'An immovable force on the battlefield.',
    mainImage: 'https://images.unsplash.com/photo-1719421976933-6dee24e4b482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5rJTIwd2FycmlvciUyMGFybW9yfGVufDF8fHx8MTc2NDA5ODE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1719421976933-6dee24e4b482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5rJTIwd2FycmlvciUyMGFybW9yfGVufDF8fHx8MTc2NDA5ODE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1719421976933-6dee24e4b482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5rJTIwd2FycmlvciUyMGFybW9yfGVufDF8fHx8MTc2NDA5ODE3MXww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Massive reinforced armor plates.'
      }
    ]
  },
  {
    id: 8,
    name: 'SHADE',
    chineseName: '幽影',
    title: 'Phantom Blade',
    category: '风龙荒域',
    description: 'Moving like smoke through the battlefield.',
    mainImage: 'https://images.unsplash.com/photo-1623913519265-1974e1e90bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaW5qYSUyMGFzc2Fzc2luJTIwd2FycmlvcnxlbnwxfHx8fDE3NjQwOTgxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1623913519265-1974e1e90bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaW5qYSUyMGFzc2Fzc2luJTIwd2FycmlvcnxlbnwxfHx8fDE3NjQwOTgxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1623913519265-1974e1e90bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaW5qYSUyMGFzc2Fzc2luJTIwd2FycmlvcnxlbnwxfHx8fDE3NjQwOTgxNzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Sleek black attire for absolute stealth.'
      }
    ]
  },
  {
    id: 9,
    name: 'SERAPH',
    chineseName: '炽天使',
    title: 'Divine Healer',
    category: '冰冥星',
    description: 'Blessed with celestial healing power.',
    mainImage: 'https://images.unsplash.com/photo-1698453029520-3493436941e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsZXIlMjBzdXBwb3J0JTIwcHJpZXN0fGVufDF8fHx8MTc2NDA5ODE3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1698453029520-3493436941e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsZXIlMjBzdXBwb3J0JTIwcHJpZXN0fGVufDF8fHx8MTc2NDA5ODE3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1698453029520-3493436941e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsZXIlMjBzdXBwb3J0JTIwcHJpZXN0fGVufDF8fHx8MTc2NDA5ODE3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Sacred robes with healing enchantments.'
      }
    ]
  },
  {
    id: 10,
    name: 'RAGE',
    chineseName: '狂怒',
    title: 'Wild Fury',
    category: '拉斯卡西亚(海都)',
    description: 'Fueled by primal fury.',
    mainImage: 'https://images.unsplash.com/photo-1609166806809-5f7728648dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJzZXJrZXIlMjBiYXJiYXJpYW4lMjB3YXJyaW9yfGVufDF8fHx8MTc2NDA5ODE3NHww&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1609166806809-5f7728648dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJzZXJrZXIlMjBiYXJiYXJpYW4lMjB3YXJyaW9yfGVufDF8fHx8MTc2NDA5ODE3NHww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1609166806809-5f7728648dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJzZXJrZXIlMjBiYXJiYXJpYW4lMjB3YXJyaW9yfGVufDF8fHx8MTc2NDA5ODE3NHww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Minimal armor for unrestricted movement.'
      }
    ]
  },
  {
    id: 11,
    name: 'RADIANT',
    chineseName: '光辉',
    title: 'Holy Champion',
    category: '镜渊',
    description: 'A righteous warrior blessed with divine power.',
    mainImage: 'https://images.unsplash.com/photo-1738697216337-962a74e45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhZGluJTIwaG9seSUyMGtuaWdodHxlbnwxfHx8fDE3NjQwODIzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1738697216337-962a74e45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhZGluJTIwaG9seSUyMGtuaWdodHxlbnwxfHx8fDE3NjQwODIzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1738697216337-962a74e45180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhZGluJTIwaG9seSUyMGtuaWdodHxlbnwxfHx8fDE3NjQwODIzMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Blessed armor that shines with inner light.'
      }
    ]
  },
  {
    id: 12,
    name: 'MORTIS',
    chineseName: '死神',
    title: 'Death Lord',
    category: '永夜之地',
    description: 'Master of death magic.',
    mainImage: 'https://images.unsplash.com/photo-1679765811581-a177098d9bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWNyb21hbmNlciUyMGRhcmslMjBtYWdlfGVufDF8fHx8MTc2NDA5ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1679765811581-a177098d9bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWNyb21hbmNlciUyMGRhcmslMjBtYWdlfGVufDF8fHx8MTc2NDA5ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1679765811581-a177098d9bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWNyb21hbmNlciUyMGRhcmslMjBtYWdlfGVufDF8fHx8MTc2NDA5ODE3NXww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Dark robes adorned with bones.'
      }
    ]
  },
  {
    id: 13,
    name: 'VERDANT',
    chineseName: '绿野',
    title: 'Nature Guardian',
    category: '大火山',
    description: 'One with nature itself.',
    mainImage: 'https://images.unsplash.com/photo-1554467840-4f2d308f5f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVpZCUyMG5hdHVyZSUyMG1hZ2ljfGVufDF8fHx8MTc2NDA5ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1554467840-4f2d308f5f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVpZCUyMG5hdHVyZSUyMG1hZ2ljfGVufDF8fHx8MTc2NDA5ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1554467840-4f2d308f5f25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnVpZCUyMG5hdHVyZSUyMG1hZ2ljfGVufDF8fHx8MTc2NDA5ODE3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Living garments woven from vines.'
      }
    ]
  },
  {
    id: 14,
    name: 'ZEN',
    chineseName: '禅',
    title: 'Fist of Enlightenment',
    category: '涅莫瑞亚',
    description: 'A master of martial arts.',
    mainImage: 'https://images.unsplash.com/photo-1550667933-bfb69fb9771d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25rJTIwbWFydGlhbCUyMGFydGlzdHxlbnwxfHx8fDE3NjQwOTgxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    skins: [
      { 
        id: 1, 
        name: 'Default', 
        image: 'https://images.unsplash.com/photo-1550667933-bfb69fb9771d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25rJTIwbWFydGlhbCUyMGFydGlzdHxlbnwxfHx8fDE3NjQwOTgxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        mainImage: 'https://images.unsplash.com/photo-1550667933-bfb69fb9771d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb25rJTIwbWFydGlhbCUyMGFydGlzdHxlbnwxfHx8fDE3NjQwOTgxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
        description: 'Simple robes for complete freedom.'
      }
    ]
  },





{
  id: 101,
  name: "SIMAYI",
  chineseName: "司马懿",
  title: "晨曦集团总裁",
  category: "醉云台",
  description: "沉稳冷静、目标清晰、对外冷漠但对你宠到骨子里。他的一切行动都围绕保护你展开。他擅长制定策略，并在最黑暗的时刻保持清醒。",
  mainImage: "./images/characters/simayi/skin-default.png",

  skins: [
    {
      id: 1,
      name: "Default",
      image: "./images/characters/simayi/skin-default-thumb.png",
      mainImage: "./images/characters/simayi/skin-default.png",
      description: "司马懿平时的工作形象，深色西装与金丝眼镜，是晨曦集团员工心中的神秘冷感总裁。"
    },
    {
      id: 2,
      name: "Casual",
      image: "./images/characters/simayi/skin-casual-thumb.png",
      mainImage: "./images/characters/simayi/skin-casual.png",
      description: "少见的休息日，他换上轻松的毛衣与家居服，只在你面前展现柔和的一面。"
    }
  ]
},

{
  id: 102,
  name: "MACHAO",
  chineseName: "马超",
  title: "耀骑·疾锋",
  category: "醉云台",
  description: "热烈、直接、能量永远满格，永远第一个冲上来保护你。他眼里容不下任何欺负你的人，行动永远比语言快一步。",
  mainImage: "./images/characters/machao/skin-default.png",

  skins: [
    {
      id: 1,
      name: "Default",
      image: "./images/characters/machao/skin-default-thumb.png",
      mainImage: "./images/characters/machao/skin-default.png",
      description: "身披银蓝色轻装铠甲，像随时准备带你飞过山脉的烈风战骑。"
    },
    {
      id: 2,
      name: "Rider",
      image: "./images/characters/machao/skin-rider-thumb.png",
      mainImage: "./images/characters/machao/skin-rider.png",
      description: "机车夹克、金属护臂与夜色下的引擎声，是只属于他的速度浪漫。"
    }
  ]
},

{
  id: 103,
  name: "YAO",
  chineseName: "小瑶",
  title: "十尾净灵·星烬之眷",
  category: "醉云台",
  description: "天生带着净化之力的十尾灵狐，温柔敏感又充满创造力。她能感受到世界脉动，也能治愈他人的情绪。在爱的人面前会变得软软的。",
  mainImage: "./images/characters/yao/skin-default.png",

  skins: [
    {
      id: 1,
      name: "Default",
      image: "./images/characters/yao/skin-default-thumb.png",
      mainImage: "./images/characters/yao/skin-default.png",
      description: "柔白尾毛、银色灵纹与淡金瞳，十尾灵狐最原初的样貌。"
    },
    {
      id: 2,
      name: "Celestial",
      image: "./images/characters/yao/skin-celestial-thumb.png",
      mainImage: "./images/characters/yao/skin-celestial.png",
      description: "星辰织羽、金丝玉铃，与跃动的灵火光点，是她化形时最神圣的一刻。"
    }
  ]
}



];

const categories = ['醉云台', '仙游境', '浮光曦沐', '塔里暮雅', '风龙荒域', '冰冥星', '迷雾沼地', '拉斯卡西亚(海都)', '镜渊', '永夜之地', '大火山', '涅莫瑞亚', '流光穹极'];
