export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 bg-slate-950 py-20 text-center">
      <div className="mx-auto max-w-3xl px-8">
        <h2 className="mb-6 text-4xl font-extrabold text-white">Let's Build The Next Big Thing.</h2>
        <p className="mb-10 text-lg text-slate-400">
          Whether you need a complex backend system or a beautiful web app, I've got you covered. Available for freelance opportunities worldwide.
        </p>
        <a 
          href="https://www.fiverr.com/avirl_developer" 
          target="_blank" 
          rel="noreferrer"
          className="inline-block rounded-full bg-green-500 px-10 py-4 text-xl font-bold text-white shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] transition hover:scale-105 hover:bg-green-400"
        >
          Hire Me on Fiverr
        </a>
        <p className="mt-16 text-sm text-slate-600">
          © {new Date().getFullYear()} Aviral Prajapati. Crafted with React & Tailwind.
        </p>
      </div>
    </footer>
  );
}