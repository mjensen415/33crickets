import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white font-headline">
          33 Crickets
        </Link>
        <div className="hidden md:flex items-center gap-10 font-headline tracking-tight font-semibold">
          <Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="/services">Services</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="/fractional">Fractional</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="/case-studies">Case Studies</Link>
        </div>
        <Link href="/schedule" className="bg-primary-container text-on-primary-container px-6 py-3 rounded-full font-headline font-bold text-sm tracking-tight hover:opacity-80 transition-all duration-300 scale-95 active:scale-90 flex items-center gap-2">
          Schedule a Chat
        </Link>
      </div>
      <div className="bg-slate-100/50 dark:bg-slate-800/50 h-[1px] w-full absolute bottom-0"></div>
    </nav>
  );
}
