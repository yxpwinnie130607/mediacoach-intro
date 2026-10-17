import { Magnet } from "@/components/Magnet";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SplitText } from "@/components/SplitText";
import { GlareCard } from "@/components/GlareCard";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const PRODUCT_URL = "https://mediacoach.netlify.app/";
const GITHUB_URL = "https://github.com/yxpwinnie130607/mediacoach.git";

const steps = [
  {
    n: "01",
    title: "贴草稿",
    desc: "把你已有的文案贴进来。不需要从零生成——媒策从你的底稿开始。",
  },
  {
    n: "02",
    title: "开始诊断",
    desc: "系统先读、再判断：哪里空、哪里绕、哪里不像你平时说话。",
  },
  {
    n: "03",
    title: "划改建议",
    desc: "问题与改法以建议层呈现。你可以逐条看 before / after 与改因。",
  },
  {
    n: "04",
    title: "确认后才改",
    desc: "你点接受之前，原文不动。approve-before-act，不是整段替换。",
  },
];

const whyItems = [
  {
    title: "确认前不改原文",
    body: "AI 给出的是建议，不是已写进稿子的定稿。你掌控每一次落笔。",
  },
  {
    title: "风格可以核对",
    body: "改动带来可核对的 before / after 与改因，方便判断「像不像你」。",
  },
  {
    title: "诊断，不是人化器",
    body: "不做过检、不过「去 AI 味」黑盒。主路径始终是贴稿 → 诊断 → 划改。",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="flex-1">
        {/* Hero */}
        <section className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col justify-center overflow-hidden">
          <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="mb-5 text-sm font-medium text-accent">
              Winnie · 个人项目介绍
            </p>
            <SplitText
              text="MediaCoach / 媒策"
              className="max-w-3xl text-4xl font-semibold leading-[1.15] text-ink sm:text-5xl md:text-6xl"
            />
            <ScrollReveal delay={0.2} className="mt-6 max-w-2xl">
              <p className="text-lg text-ink-muted text-pretty sm:text-xl">
                自媒体写作助手。改进草稿靠
                <span className="text-ink">诊断划改</span>
                ，不是整段重写。你写，AI 蓝铅笔，接受前不改原文。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.32} className="mt-10 flex flex-wrap items-center gap-4">
              <Magnet>
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-base font-medium text-white shadow-sm transition-opacity duration-150 hover:opacity-90"
                >
                  在线体验媒策
                </a>
              </Magnet>
              <a
                href="#how"
                className="inline-flex items-center rounded-full border border-ink/15 bg-surface px-6 py-3 text-base font-medium text-ink transition-colors duration-150 hover:border-ink/30"
              >
                看怎么用
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.4} className="mt-14">
              <p className="text-xs uppercase tracking-wide text-ink-muted">
                主路径
              </p>
              <p className="mt-2 max-w-3xl text-sm text-ink text-pretty sm:text-base">
                贴草稿 → 开始诊断 → 划改建议 → 确认后才改原文
              </p>
            </ScrollReveal>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 top-1/4 size-72 rounded-full bg-accent-soft opacity-70 blur-3xl sm:size-96"
          />
        </section>

        {/* Product */}
        <section id="product" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <ScrollReveal>
              <p className="text-sm font-medium text-accent">产品是什么</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-balance text-ink sm:text-4xl">
                不是替你写完一篇，而是帮你把已有稿子改到更像你、更能发。
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <ScrollReveal delay={0.08}>
                <GlareCard className="h-full">
                  <h3 className="text-lg font-semibold text-ink">为谁</h3>
                  <p className="mt-3 text-ink-muted text-pretty">
                    经常发公众号、小红书、短视频脚本的创作者。你已经有底稿，缺的是冷静的第二双眼睛。
                  </p>
                </GlareCard>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <GlareCard className="h-full">
                  <h3 className="text-lg font-semibold text-ink">做什么</h3>
                  <p className="mt-3 text-ink-muted text-pretty">
                    诊断结构、语气与平台不适点，给出可核对的划改建议。风格记忆让改动更贴你的声线。
                  </p>
                </GlareCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How */}
        <section id="how" className="border-t border-line">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <ScrollReveal>
              <p className="text-sm font-medium text-accent">怎么用</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold text-balance text-ink sm:text-4xl">
                四步。每一步都可撤回。
              </h2>
            </ScrollReveal>
            <ol className="mt-14 grid gap-6 sm:grid-cols-2">
              {steps.map((s, i) => (
                <ScrollReveal key={s.n} delay={0.06 * i}>
                  <li className="rounded-2xl border border-line bg-surface p-6">
                    <span className="font-mono text-sm tabular-nums text-accent">
                      {s.n}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-ink-muted text-pretty">{s.desc}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="border-t border-line bg-ink text-white">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <ScrollReveal>
              <p className="text-sm font-medium text-accent">为什么这样做</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-balance sm:text-4xl">
                Approve before act。信任来自可控，不是魔法。
              </h2>
            </ScrollReveal>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {whyItems.map((item, i) => (
                <ScrollReveal key={item.title} delay={0.08 * i}>
                  <div>
                    <div className="mb-4 h-px w-10 bg-accent" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70 text-pretty">
                      {item.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="try" className="border-t border-line bg-accent-soft">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-28">
            <ScrollReveal>
              <h2 className="text-3xl font-semibold text-balance text-ink sm:text-4xl">
                打开媒策，贴一段你的草稿试试
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-ink-muted text-pretty">
                在线产品随时可用。源码在 GitHub 公开，欢迎 star 或提 issue。
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.12} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Magnet>
                <a
                  href={PRODUCT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-accent px-7 py-3.5 text-base font-medium text-white transition-opacity duration-150 hover:opacity-90"
                >
                  mediacoach.netlify.app
                </a>
              </Magnet>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-ink/15 bg-surface px-7 py-3.5 text-base font-medium text-ink transition-colors duration-150 hover:border-ink/30"
              >
                GitHub 仓库
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
