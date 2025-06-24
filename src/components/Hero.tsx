
export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Nilesh</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Full Stack Developer & UI/UX Designer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
