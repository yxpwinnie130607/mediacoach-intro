export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-semibold text-ink">MediaCoach / 媒策</p>
          <p className="mt-1 text-sm text-ink-muted text-pretty">
            Winnie 的个人项目 · 自媒体写作助手
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-ink-muted">
          <a
            href="https://mediacoach.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            在线产品
          </a>
          <a
            href="https://github.com/yxpwinnie130607/mediacoach.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            GitHub
          </a>
          <a href="#top" className="hover:text-ink">
            回到顶部
          </a>
        </div>
      </div>
    </footer>
  );
}
