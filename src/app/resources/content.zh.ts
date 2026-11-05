import {
  about,
  articles,
  newsletter,
  person,
} from "@/app/resources/content";

export const personZh = {
  ...person,
  role: "高级首席软件工程师",
  displayLocation: "美国加利福尼亚州弗里蒙特",
  languages: ["英语", "普通话"],
};

export const homeZh = {
  title: "杨光庚的个人作品集",
  description: "杨光庚的个人作品集，展示软件工程与产品开发经历。",
  headline: "高级首席软件工程师",
  subline:
    "你好，我是杨光庚，目前在 Palo Alto Networks 担任高级首席软件工程师，常驻加利福尼亚州圣克拉拉。专注于将遗留系统迁移至现代架构、优化性能，并带领前端团队交付可扩展的解决方案。",
};

export const newsletterZh = {
  ...newsletter,
  title: "欢迎联系我，我会尽快回复。",
  description:
    "我一直期待新的机会与挑战。如果你有任何问题或想聊聊项目，欢迎随时联系我。",
};

const experienceAchievements: Record<string, string[]> = {
  "Palo Alto Networks": ["全职现场办公，工作地点为美国加利福尼亚州圣克拉拉。"],
  "Vibrant Wellness": [
    "主导医疗电商平台的端到端架构重建，从 Vue 2 迁移至 Next.js/React.js，解决构建性能、SEO、界面可扩展性和原子化设计等关键问题。",
    "通过 Next.js SSR/SSG 提升性能：GTmetrix 性能等级从 D 提升至 A，LCP 从 3.1 秒降至 1.2 秒，完整加载时间从 8.4 秒降至 1.3 秒，页面体积减少 85%，HTTP 请求减少 60%。",
    "基于 SSR、语义化 HTML 和元数据搭建 SEO 架构，将 Lighthouse SEO 评分从 67 提升至 100，并改善页面可发现性。",
    "为高流量电商平台建立前端测试策略，使用 Jest、Vitest 和 Playwright 覆盖核心业务逻辑及登录、结账、搜索等端到端流程，测试覆盖率达到 85% 以上，生产问题减少 40%。",
    "结合 Google Analytics、Mixpanel 和 Sentry 跟踪用户行为、功能采用率和稳定性；转化率提升 25%，跳出率降低 15%，前端错误率降低 35%。",
    "使用 Tailwind CSS 和 shadcn/ui 设计并构建模块化、可复用的 UI 组件库，与设计师协作交付一致且精确的界面体验。",
    "实现适配不同屏幕的响应式布局和触控友好组件，使移动端转化率提升 22%；通过语义化 HTML、ARIA 和键盘导航提升无障碍体验并满足 WCAG 2.1 指南。",
    "与产品经理及后端工程师协作制定清晰的开发目标，使用 Jira 和 Confluence 跟踪进度，让 API 实现与业务优先级及前端需求保持一致。",
    "担任前端技术负责人，带领 3 人团队以敏捷方式交付功能并持续优化性能；推动架构决策、代码拆分和懒加载等工程实践，并通过 ESLint、Prettier、结对编程和文档建设提升团队协作与代码质量。",
  ],
  "Alexander-Anderson Real Estate Group": [
    "使用 React Native 和 Expo 独立设计并开发面向房地产从业者的跨平台备考应用 CFREE Real Estate Exam Prep，并发布至 Google Play 和 App Store，获得 100 多名用户及积极反馈。",
    "使用 UI Kitten 5 开发高性能界面组件，通过定制主题和响应式布局，为不同设备提供一致体验。",
    "实现应用内购买、推送通知和 Firebase 身份验证等移动端功能，并使用 React Navigation 与 AsyncStorage 支持用户互动和订阅。",
  ],
  "KALO Inc.": [
    "使用 React.js、Redux 和 Material UI 构建响应式单页营销仪表板，提升移动端可用性并优化组件渲染和页面加载速度。",
    "通过自动化部署流水线，将应用及 Node.js API 服务部署至 Heroku；配置环境变量和日志，支持预发布与生产工作流。",
  ],
};

export const aboutZh = {
  ...about,
  label: "关于",
  title: "关于我",
  description: `认识来自${personZh.displayLocation}的${person.name}，一位${personZh.role}。`,
  intro: {
    ...about.intro,
    title: "个人简介",
    description:
      "我是一名常驻弗里蒙特的高级首席软件工程师，目前就职于 Palo Alto Networks，专注于构建可扩展的 Web 应用并推动技术架构迁移。此前在 Vibrant Wellness，我主导医疗电商平台从 Vue 2 向 Next.js/React.js 的端到端重构。凭借前端和移动端开发经验，我将 GTmetrix 性能等级从 D 提升至 A、将 LCP 从 3.1 秒优化至 1.2 秒，并让移动端转化率提升 22%。我重视技术质量与团队协作，曾带领敏捷团队并建立完善的测试和 SEO 架构。",
  },
  work: {
    ...about.work,
    title: "工作经历",
    experiences: about.work.experiences.map((experience) => ({
      ...experience,
      role: experience.company === "Palo Alto Networks"
        ? "高级首席软件工程师"
        : experience.company === "Vibrant Wellness"
          ? "高级软件工程师"
          : "软件工程师",
      achievements: experienceAchievements[experience.company] ?? experience.achievements,
    })),
  },
  studies: {
    ...about.studies,
    title: "教育经历",
    institutions: about.studies.institutions.map((institution, index) => ({
      ...institution,
      description:
        index === 0
          ? "计算机科学硕士，GPA 3.8"
          : "生物工程学士，GPA 3.5",
      location: index === 0 ? "美国纽约州纽约市" : "中国湖南",
    })),
  },
  technical: {
    ...about.technical,
    title: "技术技能",
    skills: about.technical.skills.map((skill, index) => ({
      ...skill,
      title: ["编程语言", "框架与库", "工具及其他"][index] ?? skill.title,
    })),
  },
};

export const projectZh = {
  label: "项目",
  title: "项目作品",
  description: `杨光庚参与构建的软件工程项目。`,
};

const articleTranslations: Record<
  number,
  { title: string; description: string; tags: string[] }
> = {
  19: {
    title: "带领前端团队完成平台迁移",
    description: "从 Vue 2 重建至 Next.js 的过程中，哪些工作真正重要：架构决策、敏捷交付、代码质量，以及在旧应用仍需持续发布时如何让小团队保持协同。",
    tags: ["团队管理", "迁移", "工程实践"],
  },
  18: {
    title: "无障碍电商：实践 WCAG 2.1",
    description: "在真实电商重建项目中实践语义化 HTML、ARIA 和键盘导航：实现与测试方法，以及无障碍改进如何同时提升移动端转化。",
    tags: ["无障碍", "WCAG", "前端"],
  },
  17: {
    title: "使用 React Native 与 Expo 构建跨平台应用",
    description: "开发房地产考试备考应用 CFREE 的经验：React Native、Expo、应用内购买、推送通知和 Firebase Auth，以及发布到 App Store 与 Google Play 的实践。",
    tags: ["React Native", "Expo", "移动开发"],
  },
  16: {
    title: "前端工程师的产品分析实践",
    description: "如何结合 Google Analytics 4、Mixpanel 与 Sentry 追踪数据、避免重复事件，并通过数据埋点提升转化率、减少前端错误。",
    tags: ["数据分析", "Sentry", "Mixpanel"],
  },
  15: {
    title: "Next.js 电商平台的 SEO 架构",
    description: "如何将 Lighthouse SEO 评分从 67 提升至 100：SSR、语义化 HTML、元数据与可抓取性，以及导致商品页无法被发现的常见问题。",
    tags: ["SEO", "Next.js", "电商"],
  },
  14: {
    title: "大型 React 代码库中的 TypeScript 模式",
    description: "让持续增长的 React 应用更易重构的 TypeScript 实践：领域类型、API 边界、可辨识联合类型，以及如何避免 any 扩散。",
    tags: ["TypeScript", "React", "架构"],
  },
  13: {
    title: "高流量结账流程的前端测试策略",
    description: "在医疗电商平台中使用 Jest、Vitest 和 Playwright：单元测试与端到端测试的分工，以及如何在不拖慢团队的情况下实现 85% 以上覆盖率。",
    tags: ["测试", "Playwright", "Jest"],
  },
  12: {
    title: "如何将 LCP 从 3.1 秒优化至 1.2 秒",
    description: "真实电商重建项目中的 Core Web Vitals 实战：哪些改动确实改善了最大内容绘制，哪些没有效果，以及如何在上线后保持成果。",
    tags: ["性能", "Core Web Vitals", "Next.js"],
  },
  0: {
    title: "构建可扩展的 React 应用",
    description: "介绍大型 React 应用的架构实践，涵盖状态管理、组件组织和性能优化，帮助构建易维护的代码库。",
    tags: ["React", "架构", "性能"],
  },
  1: {
    title: "系统设计：设计 StarWidget 评分组件",
    description: "从组件架构、状态管理和 API 设计出发，构建可扩展的星级评分组件，并处理分布式环境中的边界情况。",
    tags: ["系统设计", "架构"],
  },
  2: {
    title: "前端工程师行为面试问题",
    description: "整理技术面试中常见的行为类问题，并介绍如何使用 STAR 方法准备答案、清晰自信地表达。",
    tags: ["行为面试", "前端面试"],
  },
  3: {
    title: "2024 前端学习路线图",
    description: "成为前端开发者的完整指南，涵盖 HTML/CSS、现代 JavaScript、React 生态、构建工具、测试和部署策略。",
    tags: ["前端", "学习路线", "职业发展"],
  },
  4: {
    title: "深入理解 React Hooks：useState、useEffect 与自定义 Hooks",
    description: "全面介绍常见 React Hooks、自定义 Hooks 的构建方式、常用模式、最佳实践和性能优化技巧。",
    tags: ["React", "Hooks", "JavaScript"],
  },
  5: {
    title: "技术面试准备：前端方向",
    description: "前端技术面试备考指南，涵盖 JavaScript 基础、React、算法、系统设计基础，以及带真实示例与解析的编程练习。",
    tags: ["技术面试", "前端", "JavaScript"],
  },
  6: {
    title: "面向前端工程师的系统设计",
    description: "介绍前端系统设计中的 CDN、缓存、微前端、性能监控和可扩展组件设计模式。",
    tags: ["系统设计", "前端架构", "性能"],
  },
  7: {
    title: "从 Vue 2 迁移到 React：经验与教训",
    description: "大型应用迁移的实战经验，涵盖组件映射、状态管理迁移、路由差异，以及降低迁移期间停机风险的策略。",
    tags: ["React", "Vue", "迁移", "架构"],
  },
  8: {
    title: "现代 CSS：Grid、Flexbox 与组件优先设计",
    description: "掌握 Grid 与 Flexbox 布局，构建响应式界面，实践组件优先方法，并优化大型应用中的 CSS 性能。",
    tags: ["CSS", "前端", "响应式设计"],
  },
  9: {
    title: "JavaScript 性能优化技巧",
    description: "深入探讨内存管理、事件循环、代码拆分、懒加载与性能分析，帮助构建更快速的 Web 应用。",
    tags: ["JavaScript", "性能", "优化"],
  },
  10: {
    title: "使用 React 与 Storybook 构建组件库",
    description: "逐步构建可扩展组件库：设计系统、组件 API、Storybook 文档、测试策略与 npm 发布流程。",
    tags: ["React", "组件库", "Storybook"],
  },
  11: {
    title: "Next.js 性能优化：SSR、SSG 与更多实践",
    description: "Next.js 性能优化指南，涵盖服务端渲染、静态生成、图片优化、Core Web Vitals 与部署实践。",
    tags: ["Next.js", "性能", "SSR", "SSG"],
  },
};

export const articlesZh = {
  label: "文章",
  title: "技术文章",
  description: "关于 Web 开发、系统架构与软件工程的技术文章、教程和实践分享。",
  data: articles.data.map((article) => {
    const translation = articleTranslations[article.id];
    return {
      ...article,
      ...translation,
      date: new Intl.DateTimeFormat("zh-CN", {
        timeZone: "UTC",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(new Date(article.date)),
      link: `/zh/articles/${article.id}`,
    };
  }),
};
