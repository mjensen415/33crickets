import Image from "next/image";

export default function Schedule() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-20">
        <div className="inline-block mb-4">
          <span className="font-label text-xs font-bold tracking-[0.05em] uppercase text-tertiary-fixed-dim bg-primary-container px-3 py-1 rounded-full">Strategic Identity</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface max-w-4xl leading-[1.1]">
          Scale with Architectural <br /> <span className="text-on-primary-container">Precision.</span>
        </h1>
        <p className="mt-8 text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed">
          Connect with our fractional leadership team to audit your RevOps, integrate enterprise AI, or refine your digital community strategy.
        </p>
      </header>

      {/* Main Interaction Area */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
        {/* Left: Inquiry Form (Asymmetric focus) */}
        <section className="bg-surface-container-low p-8 md:p-12 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed-dim/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          <h2 className="font-headline text-2xl font-bold mb-8 text-on-surface">Initial Inquiry</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Full Name</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none text-on-surface placeholder:text-outline-variant" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Work Email</label>
                <input className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none text-on-surface placeholder:text-outline-variant" placeholder="john@company.com" type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Area of Interest</label>
              <div className="flex flex-wrap gap-3 mt-2">
                <button className="px-5 py-2 rounded-full border border-outline-variant/30 text-sm font-medium hover:bg-primary-container hover:text-white transition-all" type="button">RevOps Audit</button>
                <button className="px-5 py-2 rounded-full border border-outline-variant/30 text-sm font-medium hover:bg-primary-container hover:text-white transition-all" type="button">AI Integration</button>
                <button className="px-5 py-2 rounded-full border border-outline-variant/30 text-sm font-medium hover:bg-primary-container hover:text-white transition-all" type="button">Fractional CMO</button>
                <button className="px-5 py-2 rounded-full border border-outline-variant/30 text-sm font-medium hover:bg-primary-container hover:text-white transition-all" type="button">Community Build</button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-label text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Context or Challenge</label>
              <textarea className="w-full bg-surface-container-lowest border-none rounded-xl p-4 focus:ring-1 focus:ring-tertiary-fixed-dim transition-all outline-none text-on-surface placeholder:text-outline-variant" placeholder="Briefly describe your strategic goals..." rows={4}></textarea>
            </div>

            <button className="w-full bg-primary-container text-white py-5 rounded-xl font-headline font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center gap-3">
              Submit Inquiry
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </section>

        {/* Right: Calendar/CTA Column */}
        <div className="space-y-8">
          {/* Direct Booking Card */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-fixed">calendar_today</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg">Direct Booking</h3>
                <p className="text-sm text-on-surface-variant">Skip the form, find a time.</p>
              </div>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Prefer a direct conversation? Access our executive calendar to schedule a 15-minute introductory briefing.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low">
                <span className="material-symbols-outlined text-tertiary-fixed-dim" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                <span className="text-sm font-semibold">Available this week</span>
              </div>
              <a className="block w-full text-center py-4 rounded-xl border-2 border-primary-container text-primary-container font-bold hover:bg-primary-container hover:text-white transition-all" href="#">
                Open Calendar
              </a>
            </div>
          </div>

          {/* Pillar Trust Indicators */}
          <div className="space-y-6 px-4">
            <h4 className="font-label text-xs font-bold uppercase tracking-widest text-outline">What to Expect</h4>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed-dim">verified_user</span>
              <div>
                <p className="font-bold text-sm">Strategic Alignment</p>
                <p className="text-xs text-on-surface-variant">We only take projects where we can guarantee 10x ROI.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed-dim">speed</span>
              <div>
                <p className="font-bold text-sm">Rapid Response</p>
                <p className="text-xs text-on-surface-variant">Initial review of all inquiries within 24 business hours.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-tertiary-fixed-dim">lock</span>
              <div>
                <p className="font-bold text-sm">Full Confidentiality</p>
                <p className="text-xs text-on-surface-variant">Your business data and intent are protected by enterprise security.</p>
              </div>
            </div>
          </div>

          {/* Ghost Image Card */}
          <div className="relative h-48 rounded-xl overflow-hidden group">
            <Image 
              alt="Architectural office interior" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4V4cnmUXN8hZ5su-XpwkVzIKpIQR0sWv7z6zDlEL1YuIqg_q7JxN4KF561LNKuGC6CzSYFeJsUsNNE8pta5DgBVtdWpTi71iGA8k2g5-W0Yo3imLqbbjqAztLQRgjNn3DUpobyjXHSSN5kESJCaNEYiyXfwKzWy4uHDMQoQzS3-AGdGuGI0yeofPJhoog2Yblt8k7y1AJu0c3wwOmAJ_A3BfOsuBo-KnjkUjcbZ3f7Q0CxoIirIr7-hOntNHIyniu4Ml7NJuYKkw9"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/80 to-transparent flex items-end p-6">
              <p className="text-white font-headline font-bold text-lg">Our base in the digital ecosystem.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
