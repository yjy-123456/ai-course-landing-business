import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Gift,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import "./styles.css";

const signupFormUrl = "https://rcn0mr1gzi35.feishu.cn/share/base/form/shrcnVFauY5ygNOkpJgnbccikA5";
const wechatQrUrl = `${import.meta.env.BASE_URL}wechat-qr.jpg`;

const painPoints = [
  "AI 工具很多，但不知道怎么用到真实工作里",
  "收藏了很多教程，却没有形成自己的工作流",
  "写文案、做表格、整理资料、准备汇报依然很耗时间",
  "试过 ChatGPT，但输出结果不稳定",
];

const benefits = [
  {
    icon: Bot,
    title: "搭建 AI 工作流",
    text: "把提示词、资料整理、内容生成和复盘变成稳定流程，减少每次从零开始。",
  },
  {
    icon: FileText,
    title: "提升内容效率",
    text: "现场拆解文案、周报、方案、课程大纲等高频任务，课后可以直接套用。",
  },
  {
    icon: BarChart3,
    title: "整理表格资料",
    text: "用 AI 辅助清洗、分类、总结和提炼结构化信息，提升资料处理速度。",
  },
];

const lessons = [
  ["第 1 天", "AI 工具基础与使用边界", "知道哪些工作适合交给 AI，哪些必须自己判断。"],
  ["第 2 天", "高质量提示词写作", "掌握角色、背景、目标、约束和示例的稳定写法。"],
  ["第 3 天", "文案生成与内容改写", "完成朋友圈、公众号、小红书和销售文案改写。"],
  ["第 4 天", "表格、数据与资料整理", "练习分类、提炼、清洗和生成结构化表格。"],
  ["第 5 天", "PPT、周报和汇报辅助", "用 AI 辅助搭结构、写摘要、准备汇报材料。"],
  ["第 6 天", "自动化工作流入门", "把重复任务拆成步骤，形成可复用 SOP。"],
  ["第 7 天", "真实案例点评与个人方案", "根据你的岗位任务，整理个人 AI 使用方案。"],
];

const audiences = ["职场新人", "运营/销售/行政/人事", "自由职业者", "小团队老板", "知识工作者"];

const deliverables = [
  "32 个高频场景提示词模板",
  "7 天课程回放与练习清单",
  "个人 AI 工作流搭建表",
  "结营案例点评与修改建议",
];

const courseFacts = [
  ["开营时间", "6 月 24 日晚 20:00"],
  ["上课方式", "直播 + 回放 + 作业点评"],
  ["适合基础", "零基础可学，不要求编程"],
  ["早鸟价格", "¥199，原价 ¥399"],
];

const faqs = [
  ["零基础可以学吗？", "可以，课程从常见工具和基础提示词开始，不要求编程基础。"],
  ["课程有回放吗？", "有，报名后 30 天内可以反复观看，适合下班后学习。"],
  ["每天需要多久？", "每天建议预留 45-60 分钟，包含课程观看和一次小练习。"],
  ["学完能马上用吗？", "课程围绕具体工作场景练习，包括文案、表格、资料整理和汇报辅助。"],
  ["怎么报名？", "可以填写页面表单，或添加微信咨询课程安排。实际项目中可替换为飞书表单、金数据或腾讯问卷。"],
];

function App() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand">
            <Sparkles size={22} />
            <span>AI 提效实战营</span>
          </div>
          <a className="navCta" href="#signup">
            预约试听
          </a>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">7 天线上训练营 · 第一期招募中</p>
            <h1>掌握职场 AI 工具流，把每天的重复工作交给更稳定的方法</h1>
            <p className="heroText">
              从提示词、文案生成、表格整理到汇报辅助，用真实工作任务训练你的 AI 协作能力。适合想把 AI 真正用进工作的知识工作者。
            </p>
            <div className="heroActions">
              <a className="primaryBtn" href="#signup">
                立即预约试听 <ArrowRight size={18} />
              </a>
              <a className="secondaryBtn" href="#wechat">
                <MessageCircle size={18} /> 微信咨询
              </a>
            </div>
            <div className="metrics">
              <span>7 天实战</span>
              <span>12 个场景</span>
              <span>1 套个人工作流</span>
            </div>
          </div>

          <aside className="heroPanel" aria-label="课程报名信息">
            <div className="panelHeader">
              <CalendarDays size={20} />
              <span>本期开营信息</span>
            </div>
            <strong>¥199 早鸟席</strong>
            <p>6 月 24 日开营，剩余 18 席。报名后发送试听课、课表和练习资料。</p>
            <dl className="facts">
              {courseFacts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="miniList">
              <span>提示词模板</span>
              <span>工作流示例</span>
              <span>案例点评</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">为什么现在学</p>
          <h2>你可能已经试过 AI，但还没有形成自己的工作方法</h2>
        </div>
        <div className="painGrid">
          {painPoints.map((item) => (
            <div className="painItem" key={item}>
              <CheckCircle2 size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="sectionHead">
          <p className="eyebrow">学完获得</p>
          <h2>学完你会带走一套能反复使用的 AI 工作流</h2>
        </div>
        <div className="benefitGrid">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <article className="benefitCard" key={item.title}>
                <Icon size={26} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">适合人群</p>
          <h2>适合想把 AI 用在真实工作里的知识工作者</h2>
          <div className="tagList">
            {audiences.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <aside className="teacher">
          <Users size={24} />
          <h3>小班陪跑 + 案例点评</h3>
          <p>课程以真实任务为练习对象，帮助你把工具使用转化为自己的工作流程。</p>
          <ul className="checkList">
            <li>适合：想系统学习 AI 提效的人</li>
            <li>不适合：只想收集工具清单、不愿练习的人</li>
          </ul>
        </aside>
      </section>

      <section className="section muted">
        <div className="sectionHead">
          <p className="eyebrow">课程安排</p>
          <h2>7 天课程安排</h2>
        </div>
        <div className="timeline">
          {lessons.map(([day, title, text]) => (
            <div className="lesson" key={day}>
              <span>{day}</span>
              <div>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <p className="eyebrow">报名权益</p>
          <h2>报名后不只看课，还会拿到可直接复用的资料</h2>
        </div>
        <div className="deliverGrid">
          {deliverables.map((item) => (
            <article className="deliverItem" key={item}>
              <Gift size={22} />
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section muted">
        <div className="sectionHead">
          <p className="eyebrow">学员反馈</p>
          <h2>学员反馈</h2>
        </div>
        <div className="quoteGrid">
          <blockquote>以前我只是偶尔问 AI 问题，现在知道怎么把它放进每天的工作流程里。</blockquote>
          <blockquote>最有用的是提示词和案例拆解，能直接改自己的工作文档。</blockquote>
          <blockquote>课程不只是讲工具，而是让我知道哪些事情适合交给 AI，哪些事情需要自己判断。</blockquote>
        </div>
      </section>

      <section className="section split signupSection">
        <div>
          <p className="eyebrow">立即报名</p>
          <h2>留下联系方式，领取试听课和本期课表</h2>
          <p className="sectionIntro">
            页面按钮已接入飞书表单。点击提交后会打开真实报名表，报名数据进入飞书多维表格，方便后续跟进。
          </p>
          <div className="offerBox">
            <ShieldCheck size={24} />
            <div>
              <h3>第 1 期早鸟价 ¥199</h3>
              <p>包含 7 天直播课、30 天回放、提示词模板、作业清单和结营点评。名额满后恢复 ¥399。</p>
            </div>
          </div>
          <div className="faqList">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>

        <aside className="signup signupEntry" id="signup">
          <div className="formTitle">
            <Clock3 size={22} />
            <div>
              <h3>预约试听</h3>
              <p>进入飞书表单填写，提交后数据会自动进入飞书多维表格。</p>
            </div>
          </div>
          <div className="signupSteps" aria-label="报名流程">
            <div>
              <span>1</span>
              <p>填写姓名、微信、职业和学习需求</p>
            </div>
            <div>
              <span>2</span>
              <p>提交后进入飞书数据表，方便后续联系</p>
            </div>
            <div>
              <span>3</span>
              <p>24 小时内发送试听课和本期课表</p>
            </div>
          </div>
          <a className="signupButton" href={signupFormUrl} target="_blank" rel="noreferrer">
            进入飞书表单报名 <ArrowRight size={18} />
          </a>
          <p className="formHint">
            当前版本采用飞书表单收集线索，稳定、可导出，也便于客户自己维护数据。
            <a href={signupFormUrl} target="_blank" rel="noreferrer">
              直接打开表单
            </a>
          </p>
        </aside>
      </section>

      <section className="wechat" id="wechat">
        <div>
          <p className="eyebrow">微信咨询</p>
          <h2>想了解课程安排？添加微信咨询</h2>
          <p>扫码添加微信，适合想先确认课程安排、适合人群和学习方式的同学。</p>
        </div>
        <div className="qr">
          <img src={wechatQrUrl} alt="微信二维码" />
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
