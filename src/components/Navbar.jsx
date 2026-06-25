export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-800 bg-slate-900/70 px-8 py-4 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="text-2xl font-black text-white tracking-widest">
          AVIRAL<span className="text-blue-500">.DEV</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-300">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#profiles" className="hover:text-blue-400 transition">Profiles</a>
        </div>
        <a href="#contact" className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:scale-105 hover:shadow-blue-500/50">
          Hire Me
        </a>
      </div>
    </nav>
  );
}