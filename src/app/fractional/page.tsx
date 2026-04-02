import Image from "next/image";

export default function FractionalAdvantage() {
  return (
    <main className="pt-32">
      {/* Hero Section: Editorial Depth */}
      <section className="max-w-7xl mx-auto px-6 mb-24 md:mb-40">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start">
          <div className="flex flex-col gap-8">
            <span className="font-label border border-on-tertiary-container/30 px-3 py-1 rounded-full text-xs uppercase tracking-[0.2em] text-on-tertiary-container w-max font-semibold">Strategic Deployment</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] text-primary-container">
              The <span className="text-tertiary-fixed-dim">Fractional</span><br />Advantage.
            </h1>
          </div>
          <div className="mt-4 md:mt-20">
            <p className="text-xl md:text-2xl text-on-surface-variant leading-relaxed font-body max-w-xl">
              Elite operational leadership shouldn&apos;t be gated by a $300k headcount. 33 Crickets provides executive-level execution on a flexible architecture, designed for rapid-growth companies.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-[1px] w-12 bg-outline-variant/30"></div>
              <span className="font-label text-xs font-medium text-outline">ESTABLISHED 2024 • STRATEGIC IDENTITY</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Pillars Bento Grid */}
      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold text-primary-container mb-4">Core Operational Pillars</h2>
            <p className="text-on-surface-variant max-w-2xl">We don&apos;t just advise. We embed within your leadership to execute across the three most critical growth functions of the modern enterprise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* RevOps Pillar */}
            <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/20 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-primary-container mb-6 scale-125">account_tree</span>
                <h3 className="font-headline text-2xl font-bold mb-4">Fractional RevOps</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-lg mb-8">Aligning your sales, marketing, and success teams under a single, data-driven engine. We architect the systems that make growth predictable.</p>
                <ul className="space-y-3 font-label text-sm font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Tech Stack Optimization</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Funnel Velocity Analytics</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> GTM Strategy Execution</li>
                </ul>
              </div>
            </div>

            {/* AI Strategy Pillar */}
            <div className="md:col-span-4 bg-primary-container text-on-primary p-10 rounded-xl relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tertiary-fixed-dim/20 blur-3xl group-hover:bg-tertiary-fixed-dim/30 transition-colors"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-tertiary-fixed-dim mb-6 scale-125">bolt</span>
                <h3 className="font-headline text-2xl font-bold mb-4">AI Integration</h3>
                <p className="text-on-primary-container leading-relaxed mb-6">Moving beyond the hype to implement LLM-driven workflows that save hundreds of human hours weekly.</p>
                <span className="text-xs uppercase tracking-widest font-label text-tertiary-fixed-dim border border-tertiary-fixed-dim/30 px-3 py-1 rounded-full">Automated Alpha</span>
              </div>
            </div>

            {/* Community Pillar */}
            <div className="md:col-span-4 bg-surface-container-high p-10 rounded-xl group">
              <span className="material-symbols-outlined text-secondary mb-6 scale-125">hub</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Community Architecture</h3>
              <p className="text-on-surface-variant leading-relaxed">Building the digital &quot;moat&quot; around your brand through strategic community engagement and loyalty ecosystems.</p>
            </div>

            {/* The "Why Fractional" Block */}
            <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/10 flex flex-col justify-center">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <h3 className="font-headline text-3xl font-extrabold tracking-tight mb-4">Seniority without the Sunk Cost.</h3>
                  <p className="text-on-surface-variant">The traditional hiring model is broken for Series A/B startups. You need the brainpower of a $300k executive, but you only need 10 focused hours of it a week.</p>
                </div>
                <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-surface rounded-lg">
                    <div className="text-3xl font-black text-primary-container">65%</div>
                    <div className="text-xs font-label text-outline uppercase mt-1">Cost Reduction</div>
                  </div>
                  <div className="p-4 bg-surface rounded-lg">
                    <div className="text-3xl font-black text-primary-container">10x</div>
                    <div className="text-xs font-label text-outline uppercase mt-1">Agility Factor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Experience Section */}
      <section className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden shadow-2xl relative">
              <Image 
                alt="Executive Strategy Session" 
                className="w-full h-full object-cover grayscale contrast-125" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC26DkOpCxmk1n-VBx8ZTw5KkheNXlSmMbc0J1dImvFBPpsTvmNljC6lwJrUPVjhGzg1lT8gjC8ydPvvOMf-VI89c8-GZe3NxyQBGR0CnnvT6d4bgn4d8hP2gGQwWKm1oPJqW-RbwqQCqVa-0FkfdFB5flSvMuNYkcbVpwutx2-2Io8Cpc34qL06GPOCNz5Sks2lAX4TwNsLVm_RAkXgxNYWGuvZNVSZjUVFw59gRTuJrlwHle_mMSeBy8qX_s1s29fRcjMhOXHPtYO"
                fill
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-tertiary-fixed-dim text-on-tertiary-fixed p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-headline font-bold text-lg leading-tight italic">&quot;33 Crickets didn&apos;t just give us a deck; they rebuilt our entire engine while we were flying.&quot;</p>
              <p className="mt-4 font-label text-xs uppercase font-bold tracking-widest opacity-70">— CEO, Fintech Global</p>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-primary-container tracking-tight mb-8">The Execution-First Philosophy.</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center font-headline font-black text-primary-container">01</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Architectural Audit</h4>
                  <p className="text-on-surface-variant leading-relaxed">We dismantle your existing processes to find the bottlenecks that are leaking revenue and slowing down your team.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center font-headline font-black text-primary-container">02</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">The 90-Day Sprint</h4>
                  <p className="text-on-surface-variant leading-relaxed">Fractional doesn&apos;t mean slow. We work in high-intensity sprints to deliver tangible structural wins in the first quarter.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center font-headline font-black text-primary-container">03</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Embedded Continuity</h4>
                  <p className="text-on-surface-variant leading-relaxed">We become part of your Slack, your Standups, and your Board meetings. We are your leadership team, just optimized.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA: The Transition */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-primary-container rounded-xl p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <Image 
              alt="Abstract Office Patterns" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUqOKni_rFHdwJHFLn0im7I8k8Y_-JkHy4PAVqrw6i3FZgMOY9072zyJeCvEEWeSL5vTL_tN7Sqr7c0cDBf9dB-8HiJrWNMQ0FvdbVb_HwJbT_zUySSrVqYCpK5RpV-2PcHLNelElcXTpNwu3UVieyTJERXHAJMpVDMc_fOmq96lny4VUx3vxWVPbMySmuveda9tES86bGeM8e4FFxSFJj9tWFhl3KkSeDhb_D9tyXs8Pj-Q8MPVWUOAADS2ZXmDt_lMh39fVjMIJt"
              fill
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-headline text-4xl md:text-6xl font-extrabold text-on-primary tracking-tighter mb-8 leading-tight">Ready to bridge the leadership gap?</h2>
            <p className="text-on-primary-container text-lg mb-12">Stop waiting for the &quot;perfect&quot; full-time hire. Start scaling with fractional excellence today.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed px-10 py-4 rounded-full font-headline font-extrabold text-lg hover:brightness-110 transition-all">Schedule Discovery Session</button>
              <button className="border border-on-primary-container text-on-primary px-10 py-4 rounded-full font-headline font-bold text-lg hover:bg-white/5 transition-all">Download Model PDF</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
