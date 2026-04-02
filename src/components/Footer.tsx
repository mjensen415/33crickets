import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 font-body text-sm leading-relaxed">
        <div className="md:col-span-1">
          <span className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white mb-4 block font-headline">33 Crickets</span>
          <p className="text-slate-500 dark:text-slate-400 mb-6">Strategic Identity &amp; Revenue Orchestration for the next generation of digital enterprise.</p>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white mb-6">Services</h5>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all hover:underline" href="/services">Community Strategy</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all hover:underline" href="/services">RevOps Audit</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all hover:underline" href="/services">AI Integration</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white mb-6">Explore</h5>
          <ul className="space-y-4">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all hover:underline" href="/case-studies">Case Studies</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all hover:underline" href="/fractional">Fractional Leadership</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all hover:underline" href="/">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-slate-900 dark:text-white mb-6">Contact</h5>
          <ul className="space-y-4">
            <li><Link className="text-cyan-600 font-bold transition-all hover:underline" href="/schedule">Schedule a Chat</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all hover:underline" href="#">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
        <p className="text-slate-500 dark:text-slate-400 text-xs">© 2024 33 Crickets Strategic Identity. All rights reserved.</p>
      </div>
    </footer>
  );
}
