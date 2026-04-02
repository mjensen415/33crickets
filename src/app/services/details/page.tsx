export default function ServicesDetails() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest uppercase">The Foundation</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[0.95]">
              Community-Led <br /><span className="text-secondary">Growth Strategy.</span>
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed mb-0 font-body max-w-2xl">
              High-gravity ecosystems are the engine of modern business. We build the social architecture that transforms customers into lifelong evangelists.
            </p>
          </div>
          <div className="lg:col-span-4 lg:pt-24">
            <div className="p-8 bg-surface-container-low rounded-2xl border border-outline-variant/30">
              <h4 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
                High-Trust Markets
              </h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                In an era of AI noise, community is the only moat that remains defensible. We synchronize your community with the tools to scale impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Execution Pillars Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="mb-12">
          <h2 className="font-headline text-2xl font-bold tracking-tight text-on-surface flex items-center gap-3">
            <span className="w-8 h-[1px] bg-outline-variant"></span>
            Synchronized Execution
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 01: Community (The Primary Lead) */}
          <div className="bg-surface-container-highest p-10 rounded-xl flex flex-col justify-between group relative overflow-hidden h-[500px] ring-2 ring-secondary/20 shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
            <div>
              <div className="flex items-center gap-2 mb-12">
                <span className="material-symbols-outlined text-secondary">groups</span>
                <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-secondary">Foundation 01</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6 text-on-surface">Ecosystem Architecture</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">The bedrock of your growth. We design the frameworks that foster authentic connection and brand authority.</p>
              <ul className="space-y-4 font-body text-sm font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Membership Governance</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Engagement Loops</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Advocacy Engines</li>
              </ul>
            </div>
            <a className="flex items-center gap-2 font-headline font-bold text-sm text-secondary group-hover:gap-4 transition-all" href="#">
              Build Foundation <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>

          {/* Pillar 02: RevOps (The Tool) */}
          <div className="bg-primary-container text-on-primary p-10 rounded-xl flex flex-col justify-between group relative overflow-hidden h-[500px]">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-24 bg-primary-fixed opacity-50"></div>
            <div>
              <div className="flex items-center gap-2 mb-12">
                <span className="material-symbols-outlined text-primary-fixed">account_tree</span>
                <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-primary-container">Automation Tool 02</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">RevOps Integration</h3>
              <p className="text-on-primary-container mb-8 leading-relaxed">Capturing community signals. We turn social intent into actionable sales and marketing data.</p>
              <ul className="space-y-4 font-body text-sm font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Intent Signal Mapping</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> CRM Synchronization</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary-fixed"></span> Revenue Attribution</li>
              </ul>
            </div>
            <a className="flex items-center gap-2 font-headline font-bold text-sm text-primary-fixed group-hover:gap-4 transition-all" href="#">
              Connect Operations <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>

          {/* Pillar 03: AI (The Tool) */}
          <div className="bg-surface-container-low p-10 rounded-xl flex flex-col justify-between group relative overflow-hidden pillar-glow-ai h-[500px]">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tertiary-fixed-dim opacity-10 blur-3xl"></div>
            <div>
              <div className="flex items-center gap-2 mb-12">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">psychology</span>
                <span className="font-label text-xs uppercase tracking-[0.2em] font-bold text-on-tertiary-container">Intelligence Tool 03</span>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-6">AI Augmentation</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">Scaling the human touch. We deploy agents to handle the 80% of tasks that shouldn&apos;t slow you down.</p>
              <ul className="space-y-4 font-body text-sm font-medium">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Agent-Led Moderation</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Pattern Recognition</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim"></span> Personalized Outreach</li>
              </ul>
            </div>
            <a className="flex items-center gap-2 font-headline font-bold text-sm text-on-tertiary-container group-hover:gap-4 transition-all" href="#">
              Scale Intelligence <span className="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Integration Section: The Flywheel */}
      <section className="max-w-7xl mx-auto px-6 mb-32 bg-surface-container-lowest py-24 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-surface-container rounded-full relative overflow-hidden flex items-center justify-center p-12">
              <div className="w-full h-full border-[1.5px] border-dashed border-outline-variant rounded-full animate-spin-slow"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 bg-secondary rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-on-secondary font-headline text-2xl font-black">COMMUNITY</span>
                </div>
              </div>
              {/* Floating Nodes representing tools */}
              <div className="absolute top-10 left-10 bg-white p-4 shadow-xl rounded-xl border border-slate-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary-container">account_tree</span>
                <span className="font-label text-[10px] font-bold">REVOPS SYNC</span>
              </div>
              <div className="absolute bottom-20 right-4 bg-white p-4 shadow-xl rounded-xl border border-slate-100 flex items-center gap-3">
                <span className="material-symbols-outlined text-tertiary-fixed-dim">auto_awesome</span>
                <span className="font-label text-[10px] font-bold">AI AUTOMATION</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">Integrated Ecosystem</h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center font-headline font-bold">01</div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-primary">Community as the Data Source</h4>
                  <p className="text-on-surface-variant leading-relaxed">Engagement and sentiment data from your community provides the highest-fidelity signals for your entire revenue engine.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center font-headline font-bold">02</div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-primary">RevOps for Process Integrity</h4>
                  <p className="text-on-surface-variant leading-relaxed">We automate the plumbing. No more manual data entry; your community interactions automatically enrich your CRM and pipeline.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center font-headline font-bold">03</div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2 text-primary">AI for Infinite Scalability</h4>
                  <p className="text-on-surface-variant leading-relaxed">Intelligence tools ensure that as your community grows from hundreds to thousands, the quality of individual interaction never drops.</p>
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
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-8 relative z-10">Deploy Your Community <br />Strategic Identity.</h2>
          <p className="text-on-primary-container text-xl max-w-2xl mx-auto mb-12 relative z-10">We plug into your leadership team to drive these transformations in 90-day sprints, placing your community at the heart of your growth.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <button className="bg-secondary text-on-secondary font-headline font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-all">Schedule Consultation</button>
            <button className="border border-on-primary-container text-on-primary font-headline font-bold py-4 px-10 rounded-xl hover:bg-white/5 transition-all">Download Methodology</button>
          </div>
        </div>
      </section>
    </main>
  );
}
