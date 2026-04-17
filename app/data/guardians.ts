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

export interface MBTIStep {
  question: string;
  emoji: string;
  optionA: { letter: string; label: string; description: string };
  optionB: { letter: string; label: string; description: string };
}

export const steps: MBTIStep[] = [
  {
    question: "朋友突然说「今晚聚餐，来不来？」",
    emoji: "🍜",
    optionA: { letter: "E", label: "冲！马上出发", description: "社交续命，不去白不去\n多一个人多一份热闹" },
    optionB: { letter: "I", label: "找个借口推了", description: "我的沙发才是真爱\n今晚属于我和我自己" },
  },
  {
    question: "你在一个陌生人满满的派对上……",
    emoji: "🎉",
    optionA: { letter: "E", label: "主动搭讪五个人", description: "认识新朋友超开心\n今晚说不定能交到铁子" },
    optionB: { letter: "I", label: "找角落蹲着玩手机", description: "人太多了脑子嗡嗡的\n等主人来找我就好" },
  },
  {
    question: "连续工作三天后，你最想……",
    emoji: "😮‍💨",
    optionA: { letter: "E", label: "约朋友出去嗨", description: "憋坏了！需要人气充电\n出去玩才能满血复活" },
    optionB: { letter: "I", label: "一个人宅家发呆", description: "终于可以安静一下了\n独处才是真正的休息" },
  },
  {
    question: "看到天上的云，你第一反应是……",
    emoji: "☁️",
    optionA: { letter: "N", label: "那朵像条龙！", description: "脑洞大开停不下来\n已经想好后续故事了" },
    optionB: { letter: "S", label: "今天天气不错", description: "云就是云，很美\n脚踏实地看眼前就好" },
  },
  {
    question: "买了一个新玩意儿，你会……",
    emoji: "📦",
    optionA: { letter: "N", label: "直接上手摸索", description: "说明书是什么东西？\n凭感觉肯定能搞定" },
    optionB: { letter: "S", label: "先把说明书看完", description: "步骤清晰才不会出错\n一步一步来最稳" },
  },
  {
    question: "朋友跟你哭诉失恋，你会……",
    emoji: "😭",
    optionA: { letter: "T", label: "分析他哪里做错了", description: "理性复盘才能避免下次\n情绪过了要找原因" },
    optionB: { letter: "F", label: "先抱着他哭一场", description: "此刻他需要的是共情\n道理以后再说" },
  },
  {
    question: "团队方案有明显漏洞，你会……",
    emoji: "📋",
    optionA: { letter: "T", label: "直接指出问题", description: "说清楚才能改进\n对事不对人，没毛病" },
    optionB: { letter: "F", label: "私下悄悄提醒", description: "当众说会让人难堪\n照顾情绪更重要" },
  },
  {
    question: "你选礼物的标准是……",
    emoji: "🎁",
    optionA: { letter: "T", label: "实用第一，贵不如用", description: "送对了才有意义\n颜值再高没用就是废" },
    optionB: { letter: "F", label: "有心意比啥都强", description: "礼轻情意重嘛\n看到就想到我才是关键" },
  },
  {
    question: "出去旅游，你的行程是……",
    emoji: "✈️",
    optionA: { letter: "J", label: "提前做好攻略", description: "每个景点几点到几点\n错峰出行，效率拉满" },
    optionB: { letter: "P", label: "走到哪算哪", description: "计划赶不上变化\n说不定路上有惊喜" },
  },
  {
    question: "手机桌面是什么样的？",
    emoji: "📱",
    optionA: { letter: "J", label: "整整齐齐，分类清晰", description: "图标必须对齐\n乱了看着就难受" },
    optionB: { letter: "P", label: "乱成一锅粥但我找得到", description: "反正我知道在哪\n整理太浪费时间了" },
  },
];
