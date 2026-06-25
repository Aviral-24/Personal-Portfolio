import { MapPin, Download } from "lucide-react";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa6"; 
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si"; 
import myPhoto from "../assets/Aviral.jpg"; 

export default function Hero() {
  return (
    <section id="about" className="relative mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-16 px-8 pt-40 pb-24 md:flex-row md:pt-48">
      
      {/* 📝 TEXT SIDE (Left Side) */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm font-medium text-slate-300 backdrop-blur-sm">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </span>
          Accepting Freelance Projects
        </div>
        
        <h1 className="text-5xl font-extrabold text-white md:text-7xl leading-tight">
          Hi, I'm <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            Aviral Prajapati
          </span>
        </h1>
        
        <p className="mx-auto max-w-xl text-lg font-light text-slate-400 md:mx-0 md:text-xl">
          I architect scalable backend microservices and build stunning, high-performance web applications tailored to your business needs.
        </p>

        <div className="flex items-center justify-center gap-2 font-medium text-slate-400 md:justify-start">
          <MapPin size={18} className="text-blue-500" />
          <span>Indore, Madhya Pradesh, India</span>
        </div>

        {/* PRIMARY BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2 md:justify-start">
          <a href="#projects" className="rounded-lg bg-blue-600 px-8 py-3.5 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500 hover:shadow-blue-500/40">
            View My Work
          </a>
          <a 
            href="/Aviral_Resume.pdf" 
            download="Aviral_Resume.pdf" 
            className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-8 py-3.5 font-bold text-white transition hover:bg-slate-700"
          >
            <Download size={20} /> Resume
          </a>
        </div>

        {/* 🚀 CONNECT & CODE SECTION */}
        <div id="profiles" className="pt-10 scroll-mt-32">
          <p className="mb-4 text-sm font-semibold tracking-widest text-slate-500 uppercase">My Coding Profiles</p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            
            <a href="https://github.com/Aviral-24" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-slate-400 hover:bg-slate-800 hover:text-white">
              <FaGithub size={18} /> <span>GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/aviral-prajapati-99526322b/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-blue-500 hover:bg-slate-800 hover:text-blue-400">
              <FaLinkedin size={18} /> <span>LinkedIn</span>
            </a>

            <a href="https://leetcode.com/u/Aviral_prajapati/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-orange-500 hover:bg-slate-800 hover:text-orange-400">
              <SiLeetcode size={18} /> <span>LeetCode</span>
            </a>

            <a href="https://www.hackerrank.com/profile/aviralprajapati1" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-green-500 hover:bg-slate-800 hover:text-green-400">
              <FaHackerrank size={18} /> <span>HackerRank</span>
            </a>

            <a href="https://www.geeksforgeeks.org/profile/pra_avi2002" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-emerald-500 hover:bg-slate-800 hover:text-emerald-500">
              <SiGeeksforgeeks size={18} /> <span>GFG</span>
            </a>

            <a href="https://www.codechef.com/users/avi_2024" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/30 px-4 py-2 text-sm font-medium text-slate-400 transition hover:border-amber-600 hover:bg-slate-800 hover:text-amber-500">
              <SiCodechef size={18} /> <span>CodeChef</span>
            </a>

          </div>
        </div>
      </div>

      {/* 🖼️ IMAGE & ROLE TITLE SIDE (Top Right Side) */}
      <div className="flex w-full flex-1 justify-center md:justify-end md:self-start">
        {/* 👇 Yahan ek naya wrapper banaya hai jo Photo aur Text ko ek sath hold karega */}
        <div className="flex flex-col items-center gap-6">
          
          <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1.5 shadow-[0_0_80px_-20px_rgba(59,130,246,0.5)]">
            <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
              <img 
                src={myPhoto} 
                alt="Aviral Prajapati" 
                className="h-full w-full object-cover object-[center_15%] transition-transform duration-500 hover:scale-110" 
              />
            </div>
          </div>

          {/* 👇 'Full Stack Developer' ab yahan aa gaya hai, theek photo ke niche */}
          <h2 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 uppercase md:text-2xl">
            Full Stack Developer
          </h2>
          
        </div>
      </div>

    </section>
  );
}