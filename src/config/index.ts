import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "lildengzi 的个人博客",
  author: "lildengzi",
  description:
    "计算机科学与技术专业本科毕业生，热爱嵌入式、后端开发和 AI 应用",
  lang: "zh",
  siteLogo: "/lildengzi.jpg",
  navLinks: [
    { text: "项目", href: "#projects" },
    { text: "关于", href: "#about" },
  ],
  socialLinks: [
    { text: "GitHub", href: "https://github.com/lildengzi" },
    { text: "邮箱", href: "mailto:2580862656@qq.com" },
  ],
  socialImage: "/og-image.png",
  canonicalURL: "https://lildengzi.github.io",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "lildengzi",
    specialty: "计算机科学与技术",
    summary:
      "热爱技术，喜欢折腾嵌入式、后端开发和 AI 应用，善于从 0 到 1 搭建项目并沉淀可复用的经验。",
    email: "2580862656@qq.com",
  },
  experience: [
    {
      company: "计算机科学与技术学院宣传部",
      position: "新媒体运营专员",
      startDate: "2022",
      endDate: "2024",
      summary: [
        "负责公众号运营、活动宣传与图文编辑，提升学院影响力",
      ],
    },
    {
      company: "班级",
      position: "文体委员",
      startDate: "2020",
      endDate: "2024",
      summary: [
        "组织班级文体活动，协调赛事与日常事务",
      ],
    },
  ],
  projects: [
    {
      name: "基于 AI 大模型的集成电路故障诊断系统",
      summary: "全栈 · 多智能体协作 · LangChain，构建多智能体协作系统，实现自动故障根因分析",
      linkPreview: "/",
      linkSource: "https://github.com/lildengzi/aiops-rca",
      image: "/projects/aiops-rca.png",
    },
    {
      name: "基于树莓派和阿里云的远程温湿度控制系统",
      summary: "物联网 · MQTT · 测试，设计可靠性 ≥99.9%、命令延迟 ≤5s 等关键指标，完成 72 小时连续运行测试",
      linkPreview: "/",
      linkSource: "https://github.com/lildengzi",
      image: "/projects/iot.png",
    },
    {
      name: "学校食堂点评系统",
      summary: "Spring Boot + MyBatis，主导全流程测试，编写 20+ 用例，使用 JMeter 完成 100 并发压测",
      linkPreview: "/",
      linkSource: "https://github.com/lildengzi/xdudianping",
      image: "/projects/canteen.png",
    },
  ],
  about: {
    description: `
      你好，我是 lildengzi，一名计算机科学与技术专业的本科毕业生。

      热爱技术，喜欢折腾嵌入式、后端开发和 AI 应用，善于从 0 到 1 搭建项目并沉淀可复用的经验。
      
      熟练掌握：C / C++ / Python / Linux 命令行工具 / Git工具
      
      了解 / 使用过：Java / Go / Spring Boot / MyBatis / MySQL / MQTT / FPGA 基础开发
    `,
    image: "/lildengzi.jpg",
  },
};