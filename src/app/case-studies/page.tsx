import Image from "next/image";

export default function CaseStudies() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="font-label text-xs font-semibold tracking-widest text-on-tertiary-container mb-4 block uppercase">The Proof of Concept</span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold text-editorial-spacing leading-[1.1] text-primary-container">
              Real Impact through Community Strategy.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-md">
              We don&apos;t just build platforms; we architect ecosystems. Explore how we fuse Community engagement with AI precision and RevOps scale.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Gallery Header */}
      <section className="mb-12">
        <div className="flex flex-wrap gap-4 items-center justify-between border-b border-outline-variant/15 pb-8">
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full bg-primary-container text-white text-sm font-semibold">All Success Stories</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-semibold hover:bg-surface-container transition-colors">Community Architecture</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-semibold hover:bg-surface-container transition-colors">RevOps Integration</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-semibold hover:bg-surface-container transition-colors">AI Automation</button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            <span className="text-xs font-label uppercase tracking-wider font-semibold">Filter Results</span>
          </div>
        </div>
      </section>

      {/* Case Study Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Case Study Card 1: Community Focus */}
        <div className="lg:col-span-2 group">
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col md:flex-row">
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <Image 
                alt="Digital community interface" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdeXGpi6U-EMlUPWzC7FfK7k38I8yOuKErwKH7sCSqQWWyElkAKPHQ22NrueSmduxWRo5rbAALeQTvUEBkqaUSCnXJF0NUOCOW76Au3Px29nW80hWoeO-ONHPs5w5XvI6spBuU9v2Kbv8UUlzXymof3ZgPnPTDm6_l2sHt-xtv5dg2YVW1NFdPVBCxDzdBVRC6yQrlh_jSNtMeHvs8ZfVHviooGSECAZUp7JYeb17kmnYaUqsBBuPpnH7th1ORdERNwOhXvzUzVMjx"
                fill
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold uppercase tracking-tighter shadow-sm z-10 text-primary-container">Community Architecture</div>
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center font-bold text-xs text-on-surface-variant">LOGIC+</div>
                  <h3 className="font-headline text-2xl font-bold leading-tight">Scaling a 100k Member Dev Community</h3>
                </div>
                <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
                  Transformational roadmap for a global SaaS provider looking to decentralize support and foster peer-to-peer technical advocacy.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant/15">
                <div>
                  <span className="text-2xl font-extrabold text-tertiary-fixed-dim">30%</span>
                  <p className="text-[10px] font-label uppercase text-on-surface-variant font-bold">Increase in Retention</p>
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-primary-container">2x</span>
                  <p className="text-[10px] font-label uppercase text-on-surface-variant font-bold">Engagement Score</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Card 2: AI Focus */}
        <div className="group">
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-500 h-full border-t-4 border-tertiary-fixed-dim ai-glow flex flex-col">
            <div className="flex justify-between items-start mb-8">
              <div className="w-10 h-10 bg-surface-container-low rounded-full flex items-center justify-center text-sm font-bold">NEX</div>
              <span className="material-symbols-outlined text-tertiary-fixed-dim">auto_awesome</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Autonomous Member Moderation</h3>
            <p className="text-sm text-on-surface-variant mb-12 flex-grow">
              Implementing custom LLMs to handle sentiment analysis and real-time conflict resolution across multiple global channels.
            </p>
            <div className="mt-auto">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-extrabold text-primary-container">94%</span>
                <span className="text-xs text-on-surface-variant font-medium">Reduction in human mod time</span>
              </div>
              <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-tertiary-fixed-dim w-[94%]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Card 3: RevOps Focus */}
        <div className="group">
          <div className="bg-primary-container text-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col">
            <div className="mb-8">
              <span className="text-[10px] font-label font-bold tracking-[0.2em] text-cyan-400 uppercase">RevOps Integration</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Community-to-Pipeline Blueprint</h3>
            <p className="text-sm text-on-primary-container mb-12 flex-grow">
              Connecting community participation metrics directly into Salesforce to identify high-intent enterprise buyers before they fill out a form.
            </p>
            <div className="mt-auto">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-extrabold text-cyan-400">4.5M</span>
                <span className="text-xs text-on-primary-container font-medium">Attributed Revenue</span>
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-primary-container bg-slate-300"></div>
                <div className="w-8 h-8 rounded-full border-2 border-primary-container bg-slate-400"></div>
                <div className="w-8 h-8 rounded-full border-2 border-primary-container bg-slate-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Card 4: Multi-Pillar */}
        <div className="lg:col-span-2 group">
          <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-full flex flex-col md:flex-row-reverse">
            <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
              <Image 
                alt="Technical leadership meeting" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlbvRvYXZ8uNf9B1GxjyuAZ2p3SdTfye-ZMbcVoodZPGKpRO4bKFIM-T2azAB7BV1gFKk0va0foINpErMRldRYAsQUqDn6skv61TyJ3RdNmXykuTwA8f4JxIGIR7A3gMXOO6yM1ITaexRsDwThZ8iBzOmKy_fmmh2eZZh4DB0D88A415lQ17QO4FNiGjttD5s8OTwDXWOsXm7bm_gUNXfKQvJdLlwkbW6NFXLUuubPuRoZW91otefOIH7uiSVw_C8h_0rM-LeGGCtC"
                fill
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <span className="text-[10px] font-label font-bold text-on-surface-variant uppercase mb-4 tracking-widest">Fractional Leadership</span>
              <h3 className="font-headline text-2xl font-bold mb-4">Interim Head of Community for Fintech Unicorn</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Six-month strategic placement to stabilize a rapidly growing community, hire a permanent team, and implement the &quot;Community-First&quot; RevOps stack.
              </p>
              <a className="flex items-center gap-2 text-primary-container font-bold text-sm hover:opacity-80 transition-opacity" href="#">
                Read Full Insight
                <span className="material-symbols-outlined text-lg">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Triad Principle */}
      <section className="mt-32 p-12 bg-white rounded-xl shadow-sm border border-outline-variant/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline text-3xl font-bold mb-6 text-primary-container">The Core Triad</h2>
          <p className="text-on-surface-variant mb-12">Successful growth isn&apos;t a single lever. It&apos;s the synchronization of community momentum, operational efficiency, and technological automation.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-secondary">
              <h4 className="font-headline font-bold mb-2">Community</h4>
              <p className="text-xs text-on-surface-variant">The soul of the brand where trust and advocacy live.</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-primary-container">
              <h4 className="font-headline font-bold mb-2">RevOps</h4>
              <p className="text-xs text-on-surface-variant">The nervous system translating signals into growth.</p>
            </div>
            <div className="p-6 bg-surface-container-low rounded-lg border-l-4 border-tertiary-fixed-dim">
              <h4 className="font-headline font-bold mb-2">AI</h4>
              <p className="text-xs text-on-surface-variant">The multiplier ensuring scale without friction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 text-center py-20 bg-primary-container rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
        </div>
        <div className="relative z-10 px-8">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-8">Ready to Architect Your Ecosystem?</h2>
          <p className="text-on-primary-container text-lg max-w-2xl mx-auto mb-12">
            Every case study started with a single conversation. Let&apos;s explore what a community-led strategy can do for your retention and revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-tertiary-fixed-dim text-primary-container px-10 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all">
              Start Your Success Story
            </button>
            <button className="border border-on-primary-container text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all">
              View Methodology
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
