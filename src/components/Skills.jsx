import { Server, Code2, Database } from "lucide-react";

export default function Skills() {
  const backendSkills = ["Golang (Go)", "Node.js", "C++", "Microservices", "REST APIs", "JWT Auth"];
  const frontendSkills = ["React.js", "Tailwind CSS", "JavaScript", "Responsive UI", "Single Page Apps"];
  const databaseSkills = ["MySQL", "Firestore", "Docker", "Git/GitHub", "Deployment"];

  return (
    <section id="skills" className="border-t border-slate-800 bg-slate-900/50 py-24">
      <div className="mx-auto max-w-6xl px-8">
        <h2 className="mb-16 text-center text-3xl font-extrabold text-white md:text-4xl">Technical Arsenal</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Backend Card */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-blue-500 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]">
            <div className="mb-6 inline-block rounded-xl bg-blue-500/10 p-4 text-blue-500"><Server size={32} /></div>
            <h3 className="mb-6 text-2xl font-bold text-white">Backend & Core</h3>
            <div className="flex flex-wrap gap-2">
              {backendSkills.map(skill => (
                <span key={skill} className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-300 group-hover:border-blue-500/50 group-hover:text-blue-400 transition">{skill}</span>
              ))}
            </div>
          </div>

          {/* Frontend Card */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-cyan-500 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]">
            <div className="mb-6 inline-block rounded-xl bg-cyan-500/10 p-4 text-cyan-400"><Code2 size={32} /></div>
            <h3 className="mb-6 text-2xl font-bold text-white">Frontend Dev</h3>
            <div className="flex flex-wrap gap-2">
              {frontendSkills.map(skill => (
                <span key={skill} className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-300 group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition">{skill}</span>
              ))}
            </div>
          </div>

          {/* Database & DevOps Card */}
          <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition hover:border-indigo-500 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]">
            <div className="mb-6 inline-block rounded-xl bg-indigo-500/10 p-4 text-indigo-400"><Database size={32} /></div>
            <h3 className="mb-6 text-2xl font-bold text-white">Database & DevOps</h3>
            <div className="flex flex-wrap gap-2">
              {databaseSkills.map(skill => (
                <span key={skill} className="rounded-md border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-300 group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}