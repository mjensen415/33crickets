export default function ServicesOverview() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest">STRATEGIC IDENTITY</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.95]">
              The Obsidian <br /><span className="text-on-primary-container">Architectures.</span>
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-on-surface-variant text-lg leading-relaxed mb-0 font-body">
              Moving beyond tactical siloes. We synchronize high-trust communities with automated RevOps and AI intelligence to create unbreakable market positions.
            </p>
          </div>
        </div>
      </section>

      {/* The Three Pillars Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar: Community */}
          <div className="bg-surface-container-low p-10 rounded-xl flex flex-col justify-between group relative overflow-hidden h-[500px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div>
              <div className="flex items-center gap-2 mb-12">
                <span className="material-symbols-outlined text-secondary">groups</span>
                <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-secondary">Pillar 01</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">Community-Led Growth</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Infrastructure for high-gravity ecosystems. We design the social architecture that turns customers into evangelists.</p>
              <ul className="space-y-4 font-body text-sm font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Ecosystem Design</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Governance Frameworks</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Advocacy Engine Setup</li>
              </ul>
            </div>
            <a className="flex items-center gap-2 font-headline font-bold text-sm text-secondary group-hover:gap-4 transition-all" href="/services/details">
              Explore Strategy <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>

          {/* Pillar: RevOps */}
          <div className="bg-primary-container text-on-primary p-10 rounded-xl flex flex-col justify-between group relative overflow-hidden h-[500px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-primary-fixed opacity-50"></div>
            <div>
              <div className="flex items-center gap-2 mb-12">
                <span className="material-symbols-outlined text-primary-fixed">account_tree</span>
                <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-primary-container">Pillar 02</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">RevOps Precision</h3>
              <p className="text-on-primary-container mb-8 leading-relaxed">The internal nervous system. We align sales, marketing, and success data into a single, actionable truth.</p>
              <ul className="space-y-4 font-body text-sm font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Funnel Modernization</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Data Hygiene Automation</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Attribution Modelling</li>
              </ul>
            </div>
            <a className="flex items-center gap-2 font-headline font-bold text-sm text-primary-fixed group-hover:gap-4 transition-all" href="/services/details">
              Scale Operations <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>

          {/* Pillar: AI */}
          <div className="bg-surface-container-low p-10 rounded-xl flex flex-col justify-between group relative overflow-hidden pillar-glow-ai h-[500px]">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tertiary-fixed-dim opacity-10 blur-3xl"></div>
            <div>
              <div className="flex items-center gap-2 mb-12">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">psychology</span>
                <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-tertiary-container">Pillar 03</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">AI Execution</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Practical intelligence integration. We move beyond ChatGPT wrappers into deep workflow automation.</p>
              <ul className="space-y-4 font-body text-sm font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Custom Agent Deployment</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> AI Literacy Training</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Predictive Intelligence</li>
              </ul>
            </div>
            <a className="flex items-center gap-2 font-headline font-bold text-sm text-on-tertiary-container group-hover:gap-4 transition-all" href="/services/details">
              Deploy Intelligence <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Integration Section: The Flywheel */}
      <section className="max-w-7xl mx-auto px-6 mb-32 bg-surface-container-lowest py-24 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Asymmetric Graphic Placeholder */}
            <div className="aspect-square bg-surface-container rounded-full relative overflow-hidden flex items-center justify-center p-12">
              <div className="w-full h-full border-[1.5px] border-dashed border-outline-variant rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-primary-container rounded-full flex items-center justify-center">
                  <span className="text-on-primary font-headline text-2xl font-black">SYNERGY</span>
                </div>
              </div>
              {/* Floating Nodes */}
              <div className="absolute top-10 left-10 bg-white p-4 shadow-xl rounded-xl border border-slate-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">hub</span>
                <span className="font-label text-[10px] font-bold">COMMUNITY DATA</span>
              </div>
              <div className="absolute bottom-20 right-4 bg-white p-4 shadow-xl rounded-xl border border-slate-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">auto_awesome</span>
                <span className="font-label text-[10px] font-bold">AI ENRICHMENT</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">Integrated Execution</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center font-headline font-bold">01</div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-primary">Community Feeding RevOps</h4>
                  <p className="text-on-surface-variant leading-relaxed">Intent signals from community interactions are piped directly into CRM, enabling sales teams to engage with 10x higher relevance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center font-headline font-bold">02</div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-primary">AI Scaling Engagement</h4>
                  <p className="text-on-surface-variant leading-relaxed">Our AI agents don&apos;t replace humans; they handle the 80% of repetitive community queries and data entry, freeing your leaders for high-value strategy.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center font-headline font-bold">03</div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-primary">Continuous Loop Training</h4>
                  <p className="text-on-surface-variant leading-relaxed">We provide C-suite training on managing these interconnected systems, ensuring your team owns the capability, not just the tools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-primary-container rounded-xl p-16 text-center text-on-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8 relative z-10">Ready for Fractional <br />Strategic Identity?</h2>
          <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12 relative z-10">We plug into your leadership team to drive these transformations in 90-day sprints.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <button className="bg-tertiary-fixed-dim text-on-tertiary-fixed font-headline font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all">Schedule Consultation</button>
            <button className="border border-on-primary-container text-on-primary font-headline font-bold py-4 px-10 rounded-xl hover:bg-white/5 transition-all">Download Methodology</button>
          </div>
        </div>
      </section>
    </main>
  );
}
