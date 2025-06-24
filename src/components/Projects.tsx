
export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      tech: ["React", "TypeScript", "Firebase"],
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern design",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
