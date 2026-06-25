import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export default function Projects() {
  const projects = [

      {
      id: 1,
      title: "Complaint Management System",
      description: "A highly scalable, role-based ticketing system. Engineered a lightning-fast backend using Golang and MySQL, featuring custom secret-code authentication, user/admin dashboards, and real-time issue resolution tracking.",
      techStack: ["Golang", "MySQL", "React.js", "Tailwind CSS", "REST APIs"],
      githubLink: "https://github.com/Aviral-24/Complaint-Portal",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2370&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "Web Scraper Bot",
      description: "An enterprise-grade, concurrent web scraper utilizing a microservices architecture. Decoupled a Golang/gRPC scraping engine from a Gin HTTP API Gateway. It leverages Goroutines for ultra-fast parallel extraction and features an anti-ban proxy rotation system. Controlled via a React UI, it supports direct CSV exports, while Cron Jobs and MySQL handle automated daily price-tracking and persistent storage.",
      techStack: ["Golang", "gRPC", "Protobuf", "Gin", "Colly", "React.js", "Tailwind CSS", "MySQL", "Cron Jobs"],
      githubLink: "https://github.com/Aviral-24/Web-Scraper-Bot", 
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2370&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "Real-Time Chat Application",
      description: "A full-stack communication platform engineered with WebSockets. Features secure RESTful authentication via Axios, seamless 1-on-1 messaging with live edit/delete capabilities, and dynamic UI notifications using React Toastify. Built with a router-driven React frontend and backed by a persistent MySQL database.",
      techStack: ["React.js", "Node.js", "Socket.io", "MySQL", "Axios"],
      githubLink: "https://github.com/Aviral-24/Real-Time-Chat-Application",
      liveLink: "#",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2374&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Jobify Portal",
      description: "A MERN-based job tracking app to create, edit, delete, and filter job applications. It features secure JWT authentication, profile management with Cloudinary image uploads, advanced pagination, and insightful analytics using charts.",
      techStack: ["React.js", "Express.js", "Node.js", "MYSQL", "JWT"],
      githubLink: "https://github.com/Aviral-24/Jobify-Portal", 
      liveLink: "#", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
    }
  
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-8 py-24 scroll-mt-20">
      
  
      <div className="mb-16 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-white md:text-5xl">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
        </h2>
        <p className="mt-4 text-slate-400 md:text-lg max-w-2xl">
          Here are some of my recent works. I build full-stack applications with a focus on scalable backends and seamless user experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-lg transition-all hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]"
          >
            {/* Project Image */}
            <div className="h-60 w-full overflow-hidden border-b border-slate-800">
              <img 
                src={project.image} 
                alt={project.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <div className="flex flex-1 flex-col p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 flex-1 text-sm md:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="mb-8 flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-cyan-400 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons (GitHub & Live Link) */}
              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"
                >
                  <FaGithub size={18} /> Code
                </a>
                
                {/* Agar Live link "#" nahi hai tabhi dikhayega */}
                {project.liveLink !== "#" && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500 shadow-lg shadow-blue-500/20"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </section>
  );
}