export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section: Obsidian Pillar */}
      <section className="relative min-h-[921px] flex items-center obsidian-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-tertiary-fixed-dim rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-fixed-dim rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim shadow-[0_0_8px_#00dbe9]"></span>
                <span className="text-xs font-label font-bold uppercase tracking-widest text-white/70">Strategic Identity &amp; Growth</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter">
                Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-tertiary-fixed-dim to-primary-fixed-dim">Future of Revenue.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-primary-container max-w-xl leading-relaxed">
                33 Crickets bridges the gap between community-led growth, AI-driven efficiency, and fractional excellence. We don&apos;t just consult; we construct your strategic engine.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-tertiary-fixed-dim text-on-tertiary-fixed font-headline font-bold rounded-xl hover:scale-105 transition-transform">
                  Explore Our Pillars
                </button>
                <button className="px-8 py-4 border border-white/20 text-white font-headline font-bold rounded-xl hover:bg-white/5 transition-colors">
                  Case Studies
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Floating Metric Cards */}
                <div className="glass-card p-6 rounded-2xl translate-y-8">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl mb-4">hub</span>
                  <div className="text-2xl font-headline font-bold text-white">Community</div>
                  <div className="text-white/50 text-sm mt-1">Network-led orchestration</div>
                </div>
                <div className="glass-card p-6 rounded-2xl">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-3xl mb-4">analytics</span>
                  <div className="text-2xl font-headline font-bold text-white">RevOps</div>
                  <div className="text-white/50 text-sm mt-1">Frictionless scale</div>
                </div>
                <div className="glass-card p-6 rounded-2xl translate-y-4">
                  <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl mb-4">psychology</span>
                  <div className="text-2xl font-headline font-bold text-white">AI</div>
                  <div className="text-white/50 text-sm mt-1">Intelligence at scale</div>
                </div>
                <div className="glass-card p-6 rounded-2xl -translate-y-4">
                  <span className="material-symbols-outlined text-primary-fixed-dim text-3xl mb-4">groups</span>
                  <div className="text-2xl font-headline font-bold text-white">Fractional</div>
                  <div className="text-white/50 text-sm mt-1">Elite leadership</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Appeal Section: Content Strategy */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-xs font-label font-bold uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-4">Strategic Heritage</h2>
              <h3 className="text-3xl font-headline font-bold text-on-surface tracking-tight leading-snug">
                Built on Community. <br />Evolved for Intelligence.
              </h3>
              <div className="mt-8 space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  33 Crickets was founded on a simple realization: the most successful modern enterprises aren&apos;t just collections of tools; they are ecosystems.
                </p>
                <p>
                  We leverage our deep-rooted heritage in community consultancy to build high-trust environments, now supercharged by our advanced RevOps and AI frameworks.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-low p-10 rounded-3xl group hover:bg-surface-container transition-colors">
                  <div className="w-12 h-1 bg-secondary mb-8 transition-all group-hover:w-24"></div>
                  <h4 className="text-xl font-headline font-bold mb-4">The Community Engine</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Moving beyond &quot;user bases&quot; to proprietary networks. We design engagement models that drive organic retention and defensible market positioning.
                  </p>
                </div>
                <div className="bg-surface-container-low p-10 rounded-3xl group hover:bg-surface-container transition-colors">
                  <div className="w-12 h-1 bg-tertiary-fixed-dim mb-8 transition-all group-hover:w-24"></div>
                  <h4 className="text-xl font-headline font-bold mb-4">Autonomous Revenue</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    AI is no longer an add-on; it is the infrastructure. We implement custom LLM workflows into your RevOps stack for predictive growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars: Bento Grid Layout */}
      <section className="py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-headline font-extrabold tracking-tighter text-on-surface mb-6">Execution Pillars</h2>
            <p className="text-on-surface-variant">Sophisticated strategy requires multi-dimensional execution. We deliver results through four distinct operational lenses.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Community Pillar */}
            <div className="md:col-span-2 bg-surface-container-low p-8 rounded-[2rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[120px]">diversity_3</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-on-secondary-container">forum</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Community</h3>
                <ul className="space-y-3 text-on-surface-variant text-sm font-medium">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Ecosystem Strategy</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Member Persona Mapping</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Platform Selection &amp; Governance</li>
                </ul>
              </div>
            </div>

            {/* RevOps Pillar */}
            <div className="bg-primary-container p-8 rounded-[2rem] text-white flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-primary-fixed-dim text-4xl mb-6 block">settings_suggest</span>
                <h3 className="text-2xl font-headline font-bold mb-2">RevOps</h3>
                <p className="text-on-primary-container text-sm">Synchronizing sales, marketing, and success for pure scale.</p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-xs font-label uppercase tracking-widest">Performance</span>
                <span className="material-symbols-outlined text-tertiary-fixed-dim group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>

            {/* AI Pillar */}
            <div className="bg-surface-container-high p-8 rounded-[2rem] flex flex-col justify-between group">
              <div>
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-6 block">auto_awesome</span>
                <h3 className="text-2xl font-headline font-bold mb-2">AI Implementation</h3>
                <p className="text-on-surface-variant text-sm">Automating the mundane, augmenting the creative.</p>
              </div>
              <div className="mt-8">
                <span className="inline-block px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold rounded-full uppercase tracking-tighter">New Service</span>
              </div>
            </div>

            {/* Fractional Pillar */}
            <div className="md:col-span-4 bg-surface-container p-12 rounded-[2rem] flex flex-col md:flex-row items-center gap-12 group">
              <div className="flex-1">
                <h3 className="text-3xl font-headline font-bold mb-6">Fractional Delivery Model</h3>
                <p className="text-on-surface-variant max-w-lg leading-relaxed">
                  Get elite leadership without the elite overhead. Our Fractional leaders (CXO, VP Community, Head of RevOps) integrate directly into your team, providing immediate strategic direction and operational hands-on management.
                </p>
                <div className="flex gap-4 mt-8">
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border border-outline-variant/30">Strategic CRO</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border border-outline-variant/30">Lead AI Architect</span>
                  <span className="px-4 py-2 bg-white rounded-full text-xs font-bold border border-outline-variant/30">Community VP</span>
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-video bg-white/50 rounded-2xl flex items-center justify-center border border-outline-variant/10 shadow-inner overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="Executive team collaborating in a modern office" className="w-full h-full object-cover rounded-2xl opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADtqCkKlzh_KktmLDkmOijRbBGcspuU8EJWuv_JNt_Mad8n8j5l70P3EWIwnYJN37jEnPMYhFubsuvc1mqEeHQ2gLBMiFfOAnqtJnBaKkwt3IvSLvXC4d1vGh-BtIxpdI8xg4BmmkTqVDgtyDzP87rmKgXnBiMmU0vw1XMMNsLzVTaBODoHDtUZw9tAqQ7TAFUnLKUNSUZ5PmqHwJHUH38Ji_5IekCKSC54XBEWO5kl3cbB9KX2DKfgp9duJsZvN0uzyv9qQ9d2eT2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tighter mb-8 text-on-surface">Ready to redefine your <span className="italic font-normal">strategic identity?</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto px-10 py-5 bg-primary-container text-on-primary-container rounded-xl font-headline font-bold shadow-xl hover:-translate-y-1 transition-all">
              Schedule an Executive Audit
            </button>
            <button className="w-full md:w-auto px-10 py-5 bg-white text-on-surface border border-outline-variant rounded-xl font-headline font-bold hover:bg-surface-container-low transition-all">
              View Pricing Models
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
