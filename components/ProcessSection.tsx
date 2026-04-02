export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Share your campaign goal",
      description:
        "Tell us your category, target audience, budget range and campaign objective so we can understand what success should look like.",
    },
    {
      number: "02",
      title: "We plan and shortlist creators",
      description:
        "We build the campaign approach, identify suitable creators, and align on content direction, timelines and execution flow.",
    },
    {
      number: "03",
      title: "Launch, manage and optimize",
      description:
        "We coordinate the campaign, track performance closely and improve results using learnings from the best-performing creators and content.",
    },
  ];

  return (
    <section id="process" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-slate-950 sm:text-4xl">
            A clear path from brief to campaign launch
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-700">
            We keep the process simple, fast and transparent so your team can move
            from idea to execution without unnecessary back and forth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {step.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}