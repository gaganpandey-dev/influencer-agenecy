import Link from "next/link";

const PROJECTS = [
  {
    title: "Fintech App Launch Campaign",
    category: "YouTube · Finance",
    outcome: "2.9x ROAS · 1.4M+ views",
    summary:
      "Executed a creator-led launch strategy with finance educators and trusted niche voices to drive high-intent user acquisition.",
  },
  {
    title: "D2C Skincare Growth Program",
    category: "Instagram · D2C",
    outcome: "+18% new customers",
    summary:
      "Scaled acquisition using reels, creator whitelisting and repeat collaborations with micro-influencers in beauty and lifestyle.",
  },
  {
    title: "UGC Content Engine for SaaS",
    category: "UGC · SaaS",
    outcome: "60+ ad-ready assets",
    summary:
      "Built a repeatable UGC pipeline to produce conversion-focused content for paid campaigns, landing pages and testing.",
  },
  {
    title: "Gaming Brand Meme Campaign",
    category: "Memes · Gaming",
    outcome: "4.5M impressions in 7 days",
    summary:
      "Used meme pages, trend-native creative and fast execution to drive mass awareness during a high-attention product push.",
  },
];

export default function WorkGallery() {
  return (
    <section id="work-preview" className="bg-slate-950 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl">
              Campaigns built for measurable outcomes
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              A few examples of how we help brands use creators, UGC and
              performance-led execution to generate awareness, acquisition and growth.
            </p>

            <Link
              href="/work"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Explore all work
              <span>→</span>
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold leading-snug text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm font-semibold text-emerald-300">
                  {project.outcome}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}