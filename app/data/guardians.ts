export interface Guardian {
  mbti: string;
  name: string;
  nameEn: string;
  keyword: string;
  blessing: string;
  subtitle: string;
  danmaku: string[];
  shareText: string;
  primaryColor: string;
  accentColor: string;
}

export const guardians: Guardian[] = [
  {
    mbti: "INTJ", name: "诸葛亮", nameEn: "Zhuge Liang",
    keyword: "运筹帷幄",
    blessing: "天下大势，尽在掌握",
    subtitle: "你的每一步都是深思熟虑的布局，诸葛亮守护着你的智慧与远见",
    danmaku: ["🧠 脑子里永远有十个计划", "社交耗能警告⚠️", "懒得解释，结果会说明一切", "战略家在线，勿扰", "✨ 运筹帷幄，决胜千里", "低调是我的保护色", "🎯 目标明确，执行力MAX", "天命所归，无需证明"],
    shareText: "测出来我的守护神是诸葛亮，感觉被看穿了😭 你的守护神是谁？→",
    primaryColor: "#1a3a5c", accentColor: "#4a90d9"
  },
  {
    mbti: "INTP", name: "太上老君", nameEn: "Taishang Laojun",
    keyword: "洞悉天机",
    blessing: "万物规律，吾已尽悟",
    subtitle: "你痴迷于追问世界的底层逻辑，太上老君守护着你无边的求知与洞见",
    danmaku: ["🔬 又开始研究没用的东西了", "脑洞比宇宙还大", "说话绕但全是干货", "😴 社交？不如看书", "炼丹炉里悟人生", "别催，我在推演中", "💡 灵感突然！别打扰", "懂我的人太少了"],
    shareText: "太上老君点名守护我这种怪人，扎心又骄傲😂 快来测你是哪路神仙→",
    primaryColor: "#2d1a4a", accentColor: "#9b59b6"
  },
  {
    mbti: "ENTJ", name: "关公", nameEn: "Guan Yu",
    keyword: "义薄云天",
    blessing: "义薄云天，所向披靡",
    subtitle: "你天生为领导而来，关公以忠义之力守护你的霸气与担当",
    danmaku: ["💪 这件事交给我", "不服来战，服了跟我走", "效率低是我的天敌", "🔥 目标就是拿下它", "领袖光环，自动开启", "我说能行就能行", "⚔️ 战场上没有废话", "下属放心，老大在此"],
    shareText: "关公守护我，我的霸气终于有神级认证了🔥 你配到哪位神？来测→",
    primaryColor: "#8b1a1a", accentColor: "#e74c3c"
  },
  {
    mbti: "ENTP", name: "孙悟空", nameEn: "Sun Wukong",
    keyword: "天地任我行",
    blessing: "天地任我行，规则不过是建议",
    subtitle: "你的脑子永远比别人快半拍，孙悟空守护着你的创意与无法无天",
    danmaku: ["🐒 又找到规则的漏洞了", "杠精本精，别来挑战", "无聊是我最大的敌人", "💥 脑洞爆炸，请后退", "辩论？我可以一打十", "又整了个新活儿", "🌪️ 我的想法停不下来", "天庭管不了我这种人"],
    shareText: "孙悟空守护我！果然天不怕地不怕😆 你被哪位神明选中了？测一测→",
    primaryColor: "#d4880a", accentColor: "#f39c12"
  },
  {
    mbti: "INFJ", name: "观音菩萨", nameEn: "Guanyin",
    keyword: "慈悲为怀",
    blessing: "慈悲渡世，你是人间的光",
    subtitle: "你感知他人的痛苦如同感知自己，观音菩萨守护着你的慈悲与使命",
    danmaku: ["🪷 又在帮别人解决问题了", "共情雷达，全天候在线", "我能感觉到你在难过", "✨ 理想主义者的温柔执念", "少说话，多感应", "🌙 独处才能充满能量", "世界需要更多善意", "我只是路过，但我懂你"],
    shareText: "观音菩萨守护我，说我是人间的光，看哭了🥺 你的守护神是谁？快测→",
    primaryColor: "#1a4a3a", accentColor: "#27ae60"
  },
  {
    mbti: "INFP", name: "月老", nameEn: "Yue Lao",
    keyword: "红线牵情",
    blessing: "红线已系，有情人终成眷属",
    subtitle: "你用感情丈量世界的重量，月老守护着你对爱与美好的永恒追寻",
    danmaku: ["🌹 又在脑子里谈恋爱了", "理想型存在于幻想里", "世界对我不够温柔", "🎭 情绪是我的第六感", "红线已备好，等你开窍", "💭 我只是想被真正理解", "写日记比说出口容易", "爱得深，所以容易受伤"],
    shareText: "月老守护我，说我天生重情！有没有同款INFP来抱团😭 测测你的→",
    primaryColor: "#4a1a2a", accentColor: "#e91e8c"
  },
  {
    mbti: "ENFJ", name: "妈祖", nameEn: "Mazu",
    keyword: "庇佑众生",
    blessing: "庇佑众生，你是最温暖的港湾",
    subtitle: "你天生懂得凝聚人心，妈祖以大爱之力守护着你与你在乎的每一个人",
    danmaku: ["🌊 我来了，大家别怕", "朋友的事就是我的事", "💛 团队有我，稳了", "操心雷达覆盖全场", "你还好吗？（我真的在问）", "🌸 集体快乐才是真快乐", "别人难过我比他们先哭", "我只是想让所有人都好"],
    shareText: "妈祖守护我这个操心命！说我是港湾，那我的朋友来靠岸吧😂 你是哪位神？→",
    primaryColor: "#1a3a4a", accentColor: "#3498db"
  },
  {
    mbti: "ENFP", name: "嫦娥", nameEn: "Chang'e",
    keyword: "自由飞翔",
    blessing: "奔月而去，自由是你的信仰",
    subtitle: "你永远在追逐心里那道光，嫦娥守护着你敢于飞翔的灵魂与无限热情",
    danmaku: ["🌕 想法比兔子跑得还快", "三分钟热度也是热度！", "✨ 我对一切都感兴趣", "孤独星球，我也能发光", "今天又爱上了新东西", "🦋 自由比什么都重要", "嫦娥姐姐，我懂你", "热情是我的超能力"],
    shareText: "嫦娥守护我这个追月亮的人！太准了，我就是停不下来😂 你的守护神是谁→",
    primaryColor: "#1a1a3a", accentColor: "#7f8cff"
  },
  {
    mbti: "ISTJ", name: "土地公", nameEn: "Tu Di Gong",
    keyword: "踏实守护",
    blessing: "一方水土，稳如磐石护你周全",
    subtitle: "你用踏实与坚守筑起安全感，土地公守护着你的勤恳与脚踏实地",
    danmaku: ["📋 计划表已更新至三年后", "规则是用来遵守的", "稳！这个字刻骨铭心", "🛡️ 靠谱是我的人设", "说到做到，无需多言", "不喜欢变化，变化不好", "📌 细节决定成败，我来管", "土地公保佑，按时完成任务"],
    shareText: "土地公守护我这个老实人，说我是定海神针😂 你配的是哪路神？测一下→",
    primaryColor: "#3a2a1a", accentColor: "#8b6914"
  },
  {
    mbti: "ISFJ", name: "灶神", nameEn: "Zao Shen",
    keyword: "温暖守家",
    blessing: "烟火人间，温暖永在你身边",
    subtitle: "你把爱藏在每一件小事里，灶神守护着你默默付出的温柔与守护之心",
    danmaku: ["🍜 我来做饭，你们吃好", "付出不求回报（但希望你发现）", "家人平安就是我的愿望", "🏠 有我在，这里就是家", "细心到连你口味都记得", "💛 我只是不擅长说爱你", "帮了你但嘴上说没事", "灶神说了，今年多吃饭"],
    shareText: "灶神守护我！说我把爱藏在烟火里，妈妈看到这条请别哭🥹 你的神是谁→",
    primaryColor: "#3a1a1a", accentColor: "#e67e22"
  },
  {
    mbti: "ESTJ", name: "城隍爷", nameEn: "Cheng Huang",
    keyword: "公正严明",
    blessing: "公正严明，邪祟不侵你左右",
    subtitle: "你维护秩序的意志铁血无私，城隍爷守护着你的原则与不容置疑的威严",
    danmaku: ["⚖️ 规矩不能破，不然不行", "效率低的人我看不下去", "说了几点就是几点", "🔨 该管的事我必须管", "对事不对人，公平最重要", "计划外的事？不存在的", "📊 数据说话，别废话", "城隍爷巡逻中，勿违规"],
    shareText: "城隍爷守护我这个规则卫士，我平时管人管得对吧😤 你被哪位神选中？测→",
    primaryColor: "#2a1a3a", accentColor: "#8e44ad"
  },
  {
    mbti: "ESFJ", name: "送子娘娘", nameEn: "Song Zi Niang Niang",
    keyword: "喜乐圆满",
    blessing: "喜乐圆满，好运连连降你家",
    subtitle: "你把温暖与喜悦传递给身边每一个人，送子娘娘守护着你的爱与圆满心愿",
    danmaku: ["🎀 我来了，气氛就到了", "朋友生日我比他们更激动", "关系好就是要多联系", "🌸 我只想让大家都开心", "被需要感：我的充电宝", "礼物我早就备好了", "💕 团圆饭少了我不行", "送子娘娘保佑，年年有今日"],
    shareText: "送子娘娘守护我！说我自带喜气，身边朋友快来沾沾光😄 你的神是谁→",
    primaryColor: "#4a1a2d", accentColor: "#e74c8b"
  },
  {
    mbti: "ISTP", name: "鲁班", nameEn: "Lu Ban",
    keyword: "巧夺天工",
    blessing: "鬼斧神工，万物皆可拆解重造",
    subtitle: "你天生拥有化繁为简的实战天赋，鲁班守护着你的灵巧双手与独立智慧",
    danmaku: ["🔧 我拆了再说", "话不多，但动手能力第一", "理论？不如我直接做给你看", "🛠️ 坏了？我来修", "不需要说明书", "安静工作中，勿打扰", "⚙️ 细节控，但不说出来", "鲁班附体，没有造不出来的东西"],
    shareText: "鲁班守护我这个动手狂魔！说我天生会拆解万物哈哈哈 你是哪路神仙？→",
    primaryColor: "#1a2a1a", accentColor: "#2ecc71"
  },
  {
    mbti: "ISFP", name: "花神", nameEn: "Hua Shen",
    keyword: "随心绽放",
    blessing: "随心绽放，你本身就是最美的风景",
    subtitle: "你用感官感受世界的美，花神守护着你自由流淌的灵魂与细腻的生命热情",
    danmaku: ["🌸 今天又被花迷住了", "自由是我活着的理由", "不想被定义，谢谢", "🎨 美的东西能治愈一切", "慢生活才是真生活", "🌿 我只是想安静地美丽", "当下最重要，计划明天再说", "花神祝你：永远热爱生活"],
    shareText: "花神守护我！说我随心绽放，把我看哭了🌸 你的守护神是什么风格？快测→",
    primaryColor: "#3a1a2a", accentColor: "#ff69b4"
  },
  {
    mbti: "ESTP", name: "财神爷", nameEn: "Cai Shen",
    keyword: "财运滚滚",
    blessing: "财运滚滚，好运挡也挡不住",
    subtitle: "你敢冲敢拼、把握每一个当下机遇，财神爷守护着你的胆识与横扫千军的气场",
    danmaku: ["💰 机会来了冲就完了", "想太多不如先干再说", "🎲 风险？那叫刺激", "我的嗅觉比狗鼻子还灵", "下一秒什么事都能发生", "💥 现场感MAX，别想挡我", "今天又搞定了一件大事", "财神爷说了，今年暴富"],
    shareText: "财神爷亲自守护我！说我天生嗅到机会就要冲💰 你被哪位神选中了？来测→",
    primaryColor: "#3a2000", accentColor: "#f1c40f"
  },
  {
    mbti: "ESFP", name: "寿星", nameEn: "Shou Xing",
    keyword: "乐天知命",
    blessing: "乐天知命，福寿绵延笑口常开",
    subtitle: "你活在当下的能力无人能及，寿星守护着你的快乐基因与感染全场的生命力",
    danmaku: ["🎉 今天又是开心的一天！", "不开心的事过了就算了", "活在当下，老子最懂", "🎊 派对没有我不行", "笑是最好的护身符", "明天的事明天再说嘛", "🌈 我就是天生自带彩虹", "寿星保佑：快乐多多，烦恼少少"],
    shareText: "寿星守护我这个快乐精！说我福气满满，朋友们快来蹭蹭🎉 你的守护神是谁→",
    primaryColor: "#3a1a00", accentColor: "#e74c3c"
  },
];

export function getGuardian(mbti: string): Guardian | undefined {
  return guardians.find(g => g.mbti === mbti.toUpperCase());
}

export interface MBTIOption {
  letter: string;
  label: string;
  description: string;
}

export interface MBTIStep {
  question: string;
  emoji: string;
  options: [MBTIOption, MBTIOption, MBTIOption, MBTIOption];
}

export const steps: MBTIStep[] = [
  {
    // E/I × 2 + E/I × 2
    question: "深夜11点，暗恋的人突然发来「你睡了吗？」",
    emoji: "🌙",
    options: [
      { letter: "E", label: "秒回：没呢，怎么了？", description: "心跳加速但手速更快\n机会来了当然要接" },
      { letter: "E", label: "直接打过去", description: "文字太慢，声音更撩\n打电话才是真勇气" },
      { letter: "I", label: "盯着屏幕看了五分钟才回", description: "想好每个字再发\n不能显得太主动" },
      { letter: "I", label: "假装已读不回，明天再说", description: "深夜情绪不稳定\n清醒的时候再聊" },
    ],
  },
  {
    // N/S × 2 + N/S × 2
    question: "第一次去对方家，你注意到的第一件事是……",
    emoji: "🏠",
    options: [
      { letter: "N", label: "书架上放的书", description: "书单暴露灵魂\n看完立刻分析人格" },
      { letter: "N", label: "墙上挂的画/照片", description: "审美就是世界观\n细节里藏着故事" },
      { letter: "S", label: "冰箱里有什么", description: "吃什么的人就是什么样的人\n民以食为天" },
      { letter: "S", label: "家里干不干净", description: "生活习惯最重要\n这个直接影响以后" },
    ],
  },
  {
    // T/F × 2 + T/F × 2
    question: "你喜欢的人说「我最近压力好大」，你第一反应是……",
    emoji: "🫂",
    options: [
      { letter: "T", label: "帮他分析压力来源", description: "找到根因才能解决\n情绪宣泄治标不治本" },
      { letter: "T", label: "给他列一个解压计划", description: "行动比安慰有用\n我来帮你搞定它" },
      { letter: "F", label: "说「我在呢，说来听听」", description: "他需要的是被听见\n先陪着就够了" },
      { letter: "F", label: "默默帮他订一家好吃的", description: "话不用多\n吃饱了心情自然好" },
    ],
  },
  {
    // J/P × 2 + J/P × 2
    question: "约好周末一起出去，对方说「你来定吧」，你……",
    emoji: "🗓️",
    options: [
      { letter: "J", label: "发来一份详细攻略", description: "几点集合、吃什么、去哪里\n全部安排好了" },
      { letter: "J", label: "提前三天就开始规划", description: "不提前准备会焦虑\n计划好了才能放松玩" },
      { letter: "P", label: "「到时候看心情」", description: "临时起意才有惊喜\n计划会扼杀浪漫" },
      { letter: "P", label: "出门再说，走哪算哪", description: "迷路也是一种探险\n反正在一起就好" },
    ],
  },
  {
    // E/I
    question: "KTV包厢，麦克风空着，你会……",
    emoji: "🎤",
    options: [
      { letter: "E", label: "第一个冲上去抢", description: "等什么等！\n我的主场我做主" },
      { letter: "E", label: "点一首大家都会唱的带动全场", description: "气氛王就是我\n一起嗨才叫嗨" },
      { letter: "I", label: "等别人先唱，我负责打分", description: "观众也是重要角色\n不是不想唱，是在蓄力" },
      { letter: "I", label: "只唱一首然后把麦塞给别人", description: "完成任务就好\n舞台不是我的" },
    ],
  },
  {
    // N/S
    question: "刷到一条新闻「科学家发现平行宇宙存在证据」，你……",
    emoji: "🌌",
    options: [
      { letter: "N", label: "立刻开始想另一个自己在干嘛", description: "平行宇宙的我是不是更勇敢\n做了那些没做的选择" },
      { letter: "N", label: "转发给朋友「你看这个！」然后聊到凌晨", description: "这种话题停不下来\n宇宙和人生都要聊" },
      { letter: "S", label: "看看评论区怎么说", description: "先确认是不是标题党\n不轻易相信没验证的东西" },
      { letter: "S", label: "随手点了个赞就划走了", description: "和我现在的生活没关系\n还是关心今天吃什么" },
    ],
  },
  {
    // T/F
    question: "你暗恋的人发了条朋友圈「好累，不想努力了」，你……",
    emoji: "💬",
    options: [
      { letter: "T", label: "评论「说说看，什么情况？」", description: "了解清楚才能帮上忙\n空洞的安慰没意义" },
      { letter: "T", label: "私信「你目前最大的问题是什么」", description: "直接问核心\n解决问题比共情更有效" },
      { letter: "F", label: "点了个心，然后私信「我懂」", description: "有时候两个字比长篇大论更有力\n感受到就够了" },
      { letter: "F", label: "发语音说「我也是，我们一起摆烂吧」", description: "共情是最好的连接\n一起废了才是真朋友" },
    ],
  },
  {
    // J/P
    question: "手机快没电了，充电器不在身边，你……",
    emoji: "🔋",
    options: [
      { letter: "J", label: "早就备了充电宝，从包里掏出来", description: "有备无患是基本素养\n这种情况我预料到了" },
      { letter: "J", label: "关掉所有后台，开省电模式撑到家", description: "资源管理是门学问\n有序应对不慌张" },
      { letter: "P", label: "到处问人借充电线", description: "求助也是一种能力\n总有人愿意帮" },
      { letter: "P", label: "「没电就没电吧」，享受离线时光", description: "这是宇宙在叫我休息\n断联一会儿挺好的" },
    ],
  },
  {
    // E/I
    question: "你在电梯里，和一个好看的陌生人四目相对，你……",
    emoji: "🛗",
    options: [
      { letter: "E", label: "主动微笑打招呼", description: "帅/美就要说出来\n说不定是缘分的开始" },
      { letter: "E", label: "找个话题搭话", description: "「你也住这层？」\n认识一下又何妨" },
      { letter: "I", label: "迅速低头看手机", description: "眼神交流已经是极限了\n我不擅长这种场合" },
      { letter: "I", label: "若无其事地盯着楼层数字", description: "假装什么都没发生\n电梯快点到吧" },
    ],
  },
  {
    // N/S + T/F 综合压轴题
    question: "睡前，你脑子里最常出现的是……",
    emoji: "🛌",
    options: [
      { letter: "N", label: "各种「如果当时我……」的平行宇宙", description: "停不下来的复盘和幻想\n睡着了还在做剧情梦" },
      { letter: "F", label: "今天有没有人对我冷淡，为什么", description: "反复回放每个细节\n情绪雷达24小时在线" },
      { letter: "T", label: "明天的待办事项和优先级", description: "睡前规划，效率翻倍\n脑子不停转才踏实" },
      { letter: "S", label: "什么都没有，秒睡", description: "躺下就是为了睡觉\n想那么多干嘛" },
    ],
  },
];
