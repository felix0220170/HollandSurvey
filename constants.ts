
import { HollandType, Question, HollandDescription } from './types';

export const HOLLAND_INFO: Record<HollandType, HollandDescription> = {
  [HollandType.R]: {
    type: HollandType.R,
    name: '现实型 (Realistic)',
    traits: '喜欢具体任务、动手能力强、实用主义者、诚实、坚定。喜欢操作机器和工具。',
    careers: '工程师、技术人员、外科医生、飞行员、建筑师、厨师、职业运动员。',
    advice: '你更喜欢与“物”打交道而非与“人”打交道。建议选择能看到具体产出成果的技术性工作。'
  },
  [HollandType.I]: {
    type: HollandType.I,
    name: '研究型 (Investigative)',
    traits: '善于思考、好奇心强、独立、分析性强、逻辑性佳。乐于钻研理论和科学问题。',
    careers: '科研人员、数学家、软件工程师、心理学家、经济学家、侦探。',
    advice: '你乐于探索真理。适合在需要高度脑力劳动、逻辑推导和独立思考的环境中发挥长处。'
  },
  [HollandType.A]: {
    type: HollandType.A,
    name: '艺术型 (Artistic)',
    traits: '富有想象力、直觉敏锐、不拘一格、感性、追求创意。讨厌条条框框。',
    careers: '设计师、作家、音乐家、摄影师、导演、编剧、时装设计、公共关系。',
    advice: '你渴望自我表达。适合在自由、灵活、能够发挥创造力且审美要求高的环境中工作。'
  },
  [HollandType.S]: {
    type: HollandType.S,
    name: '社会型 (Social)',
    traits: '乐于助人、慷慨、善于社交、合作、有责任感。关心他人的幸福。',
    careers: '教师、咨询师、护士、社会工作者、HR、培训师。',
    advice: '你对他人的需求非常敏感。适合在需要沟通、教育、治疗或启发他人的领域发展。'
  },
  [HollandType.E]: {
    type: HollandType.E,
    name: '企业型 (Enterprising)',
    traits: '雄心勃勃、善于沟通、自信、领导力强、外向。喜欢竞争和管理。',
    careers: '企业家、销售经理、律师、政治家、公关经理、项目经理。',
    advice: '你具有极强的领导力和说服力。适合在需要决策、承担风险、通过影响他人来实现目标的环境中工作。'
  },
  [HollandType.C]: {
    type: HollandType.C,
    name: '常规型 (Conventional)',
    traits: '做事周密、守规矩、高效、有条理、谨慎。喜欢精确 Data 和有序的环境。',
    careers: '会计、审计师、银行职员、税务员、行政管理、统计员。',
    advice: '你喜欢有序、清晰的任务。适合在精确度高、有明确工作标准、讲求合规性的稳定环境中工作。'
  }
};

// 此处 QUESTIONS 严格对应 Excel 导入的格式。您可以根据需要在这里批量替换文本。
// 注意：typeName 属性虽然保留在 Question 接口中，但在 App 界面上已经彻底移除显示。
export const QUESTIONS: Question[] = [
  // Realistic (R)
  { id: 1, type: HollandType.R, typeName: "R", text: "我会修理或调试机械零件", answerFormat: 'BINARY' },
  { id: 2, type: HollandType.R, typeName: "R", text: "我会使用工具制作木工制品", answerFormat: 'BINARY' },
  { id: 3, type: HollandType.R, typeName: "R", text: "我喜欢在户外进行重体力劳动", answerFormat: 'RATING' },
  { id: 4, type: HollandType.R, typeName: "R", text: "我喜欢学习如何操作精密机床", answerFormat: 'BINARY' },
  { id: 5, type: HollandType.R, typeName: "R", text: "我觉得修理家庭电器是一件有趣的事", answerFormat: 'RATING' },
  { id: 6, type: HollandType.R, typeName: "R", text: "我喜欢参加徒步探索或野外生存挑战", answerFormat: 'BINARY' },
  { id: 7, type: HollandType.R, typeName: "R", text: "我喜欢研究各类复杂引擎的工作原理", answerFormat: 'RATING' },
  { id: 8, type: HollandType.R, typeName: "R", text: "我喜欢种植作物、打理园艺或养殖动物", answerFormat: 'BINARY' },
  { id: 9, type: HollandType.R, typeName: "R", text: "我喜欢具体、看得见摸得着的工作产出", answerFormat: 'RATING' },
  { id: 10, type: HollandType.R, typeName: "R", text: "我会电路安装或维护工作", answerFormat: 'BINARY' },
  { id: 11, type: HollandType.R, typeName: "R", text: "我喜欢在建筑工地上指挥施工流程", answerFormat: 'BINARY' },
  { id: 12, type: HollandType.R, typeName: "R", text: "我擅长解决各种实际操作中的障碍", answerFormat: 'RATING' },
  { id: 13, type: HollandType.R, typeName: "R", text: "我会安装电脑硬件系统", answerFormat: 'BINARY' },
  { id: 14, type: HollandType.R, typeName: "R", text: "我更愿意动手修理东西而非讨论理论", answerFormat: 'RATING' },
  { id: 15, type: HollandType.R, typeName: "R", text: "我喜欢学习驾驶各种特殊功能的车辆", answerFormat: 'BINARY' },

  // Investigative (I)
  { id: 16, type: HollandType.I, typeName: "I", text: "我喜欢在实验室里研究微观世界的变化", answerFormat: 'BINARY' },
  { id: 17, type: HollandType.I, typeName: "I", text: "我喜欢钻研晦涩难懂的科学理论", answerFormat: 'BINARY' },
  { id: 18, type: HollandType.I, typeName: "I", text: "我乐于对复杂的社会数据进行统计分析", answerFormat: 'RATING' },
  { id: 19, type: HollandType.I, typeName: "I", text: "我经常思考宇宙的起源和未来的科学趋势", answerFormat: 'RATING' },
  { id: 20, type: HollandType.I, typeName: "I", text: "我喜欢编写代码来优化一个复杂的数学模型", answerFormat: 'BINARY' },
  { id: 21, type: HollandType.I, typeName: "I", text: "我喜欢通过实验数据去推翻一个旧的认知", answerFormat: 'BINARY' },
  { id: 22, type: HollandType.I, typeName: "I", text: "我擅长从碎片化的信息中找到底层逻辑", answerFormat: 'RATING' },
  { id: 23, type: HollandType.I, typeName: "I", text: "我喜欢阅读那些深度烧脑的学术论文", answerFormat: 'BINARY' },
  { id: 24, type: HollandType.I, typeName: "I", text: "我认为真相往往隐藏在冷静的逻辑背后", answerFormat: 'RATING' },
  { id: 25, type: HollandType.I, typeName: "I", text: "我喜欢研究药物的分子构成对人体的反应", answerFormat: 'BINARY' },
  { id: 26, type: HollandType.I, typeName: "I", text: "我对一切未知事物都有着强烈的探究欲", answerFormat: 'RATING' },
  { id: 27, type: HollandType.I, typeName: "I", text: "我喜欢探索气候变化的长期规律", answerFormat: 'BINARY' },
  { id: 28, type: HollandType.I, typeName: "I", text: "我更喜欢独自一人安静地解决高难度问题", answerFormat: 'RATING' },
  { id: 29, type: HollandType.I, typeName: "I", text: "我喜欢研究密码学或信息安全技术", answerFormat: 'BINARY' },
  { id: 30, type: HollandType.I, typeName: "I", text: "我觉得大脑高强度运转是一件很爽的事", answerFormat: 'RATING' },

  // Artistic (A)
  { id: 31, type: HollandType.A, typeName: "A", text: "我喜欢随手画下生活中的灵感瞬间", answerFormat: 'BINARY' },
  { id: 32, type: HollandType.A, typeName: "A", text: "我喜欢打破常规，尝试不一样的生活方式", answerFormat: 'RATING' },
  { id: 33, type: HollandType.A, typeName: "A", text: "我喜欢设计一个极具个人风格的艺术展厅", answerFormat: 'BINARY' },
  { id: 34, type: HollandType.A, typeName: "A", text: "我经常会有一些别人觉得不切实际的想法", answerFormat: 'RATING' },
  { id: 35, type: HollandType.A, typeName: "A", text: "我喜欢创作一段能够打动人心的旋律", answerFormat: 'BINARY' },
  { id: 36, type: HollandType.A, typeName: "A", text: "我非常看重日常物品的设计感与美学体验", answerFormat: 'RATING' },
  { id: 37, type: HollandType.A, typeName: "A", text: "我想写一部反应真实社会的先锋文学作品", answerFormat: 'BINARY' },
  { id: 38, type: HollandType.A, typeName: "A", text: "我讨厌任何形式的重复性机械工作", answerFormat: 'RATING' },
  { id: 39, type: HollandType.A, typeName: "A", text: "我喜欢尝试通过服装表达我不妥协的态度", answerFormat: 'BINARY' },
  { id: 40, type: HollandType.A, typeName: "A", text: "我认为直觉比逻辑能带我去更远的地方", answerFormat: 'RATING' },
  { id: 41, type: HollandType.A, typeName: "A", text: "我喜欢策划一场极具视觉张力的发布会", answerFormat: 'BINARY' },
  { id: 42, type: HollandType.A, typeName: "A", text: "我追求生活中的艺术感和自由表达的权利", answerFormat: 'RATING' },
  { id: 43, type: HollandType.A, typeName: "A", text: "在舞台上进行极具个人色彩的表演", answerFormat: 'BINARY' },
  { id: 44, type: HollandType.A, typeName: "A", text: "我希望能在一个没有条条框框的环境下工作", answerFormat: 'RATING' },
  { id: 45, type: HollandType.A, typeName: "A", text: "我喜欢利用现代技术创作数字艺术作品", answerFormat: 'BINARY' },

  // Social (S)
  { id: 46, type: HollandType.S, typeName: "S", text: "我喜欢帮助身边的人解决心理上的困扰", answerFormat: 'BINARY' },
  { id: 47, type: HollandType.S, typeName: "S", text: "我非常乐于将我所知道的知识教给别人", answerFormat: 'RATING' },
  { id: 48, type: HollandType.S, typeName: "S", text: "我喜欢作为志愿者参与国际支教活动", answerFormat: 'BINARY' },
  { id: 49, type: HollandType.S, typeName: "S", text: "我能迅速感知到他人的情绪需求并给予安慰", answerFormat: 'RATING' },
  { id: 50, type: HollandType.S, typeName: "S", text: "我喜欢组织社区聚会以增进邻里之间的感情", answerFormat: 'BINARY' },
  { id: 51, type: HollandType.S, typeName: "S", text: "我认为服务社会是实现个人价值的最好途径", answerFormat: 'RATING' },
  { id: 52, type: HollandType.S, typeName: "S", text: "我喜欢在纠纷中担任公平公正的调解员", answerFormat: 'BINARY' },
  { id: 53, type: HollandType.S, typeName: "S", text: "我喜欢在团队中扮演那种照顾大家的角色", answerFormat: 'RATING' },
  { id: 54, type: HollandType.S, typeName: "S", text: "我喜欢负责接待和引导那些迷茫的新人", answerFormat: 'BINARY' },
  { id: 55, type: HollandType.S, typeName: "S", text: "我更倾向于在充满人文关怀的环境中工作", answerFormat: 'RATING' },
  { id: 56, type: HollandType.S, typeName: "S", text: "我喜欢为残障人士设计更便捷的生活方案", answerFormat: 'BINARY' },
  { id: 57, type: HollandType.S, typeName: "S", text: "我觉得与人沟通交流是一件非常有成就感的事", answerFormat: 'RATING' },
  { id: 58, type: HollandType.S, typeName: "S", text: "我喜欢投身于旨在改善公共福利的非营利组织", answerFormat: 'BINARY' },
  { id: 59, type: HollandType.S, typeName: "S", text: "我愿意花费精力去建立那种深厚的人际连接", answerFormat: 'RATING' },
  { id: 60, type: HollandType.S, typeName: "S", text: "我喜欢通过教育改变一个人的命运轨迹", answerFormat: 'BINARY' },

  // Enterprising (E)
  { id: 61, type: HollandType.E, typeName: "E", text: "我喜欢说服客户购买一项极具潜力的理财产品", answerFormat: 'BINARY' },
  { id: 62, type: HollandType.E, typeName: "E", text: "我渴望成为某个领域的最高领导者", answerFormat: 'RATING' },
  { id: 63, type: HollandType.E, typeName: "E", text: "我喜欢在董事会上慷慨激昂地陈述商业远景", answerFormat: 'BINARY' },
  { id: 64, type: HollandType.E, typeName: "E", text: "我非常享受那种通过谈判达成共赢的过程", answerFormat: 'RATING' },
  { id: 65, type: HollandType.E, typeName: "E", text: "我喜欢管理一个具有极高KPI要求的精英团队", answerFormat: 'BINARY' },
  { id: 66, type: HollandType.E, typeName: "E", text: "我喜欢挑战那些高风险但也意味着高回报的机会", answerFormat: 'RATING' },
  { id: 67, type: HollandType.E, typeName: "E", text: "我喜欢利用我的社会关系网快速推进项目落地", answerFormat: 'BINARY' },
  { id: 68, type: HollandType.E, typeName: "E", text: "我对于权力和行政管理有着极强的本能驱动", answerFormat: 'RATING' },
  { id: 69, type: HollandType.E, typeName: "E", text: "我喜欢经营一家在市场中极具竞争力的连锁店", answerFormat: 'BINARY' },
  { id: 70, type: HollandType.E, typeName: "E", text: "我喜欢在公开场合发表演讲并展现个人魅力", answerFormat: 'RATING' },
  { id: 71, type: HollandType.E, typeName: "E", text: "我喜欢通过策略并购来扩大公司的商业版图", answerFormat: 'BINARY' },
  { id: 72, type: HollandType.E, typeName: "E", text: "我认为个人成功很大程度上取决于影响他人的能力", answerFormat: 'RATING' },
  { id: 73, type: HollandType.E, typeName: "E", text: "我喜欢代表组织出席各种高端商务晚宴和社交场合", answerFormat: 'BINARY' },
  { id: 74, type: HollandType.E, typeName: "E", text: "我追求财务自由和社会地位的快速提升", answerFormat: 'RATING' },
  { id: 75, type: HollandType.E, typeName: "E", text: "我喜欢在动荡的市场环境中做出果断且正确的决策", answerFormat: 'BINARY' },

  // Conventional (C)
  { id: 76, type: HollandType.C, typeName: "C", text: "我喜欢确保成千上万条财务数据核算得一分不差", answerFormat: 'BINARY' },
  { id: 77, type: HollandType.C, typeName: "C", text: "我喜欢那种规则明确、不需要频繁变动的工作", answerFormat: 'RATING' },
  { id: 78, type: HollandType.C, typeName: "C", text: "我喜欢为公司的所有档案建立极其严密的分类系统", answerFormat: 'BINARY' },
  { id: 79, type: HollandType.C, typeName: "C", text: "我做事讲究程序，特别反感那些随意的流程", answerFormat: 'RATING' },
  { id: 80, type: HollandType.C, typeName: "C", text: "我喜欢处理大量复杂的报关单据或审计材料", answerFormat: 'BINARY' },
  { id: 81, type: HollandType.C, typeName: "C", text: "我追求极致的细节完美，甚至会反复核对同一个数据", answerFormat: 'RATING' },
  { id: 82, type: HollandType.C, typeName: "C", text: "我喜欢作为行政主管，确保整个办公室的高效运转", answerFormat: 'BINARY' },
  { id: 83, type: HollandType.C, typeName: "C", text: "我喜欢待在一个职权分明、纪律严明的企业中", answerFormat: 'RATING' },
  { id: 84, type: HollandType.C, typeName: "C", text: "我喜欢编写详尽的年度财务预算和决算报告", answerFormat: 'BINARY' },
  { id: 85, type: HollandType.C, typeName: "C", text: "我觉得整理琐碎的杂物并使之有序是一件快乐的事", answerFormat: 'RATING' },
  { id: 86, type: HollandType.C, typeName: "C", text: "我喜欢按照固定周期的系统维护流程进行巡检", answerFormat: 'BINARY' },
  { id: 87, type: HollandType.C, typeName: "C", text: "我更倾向于在已知的安全边界内发挥我的效率", answerFormat: 'RATING' },
  { id: 88, type: HollandType.C, typeName: "C", text: "我喜欢学习最新的财税法规并精准应用到账务中", answerFormat: 'BINARY' },
  { id: 89, type: HollandType.C, typeName: "C", text: "我习惯于提前规划好一周甚至一月的工作进度表", answerFormat: 'RATING' },
  { id: 90, type: HollandType.C, typeName: "C", text: "我喜欢使用专业的数据库管理系统进行资产录入", answerFormat: 'BINARY' },
];
