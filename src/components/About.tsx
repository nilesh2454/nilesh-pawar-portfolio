
export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-card p-8 rounded-lg shadow-sm h-full flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-center">Who I Am</h2>
            <div className="flex-grow">
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a keen eye for design and user experience. 
                I love creating digital solutions that not only look great but also provide exceptional 
                functionality and user satisfaction.
              </p>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-sm h-full flex flex-col">
            <h2 className="text-3xl font-bold mb-6 text-center">What I Do</h2>
            <div className="flex-grow">
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building modern web applications using cutting-edge technologies. 
                From concept to deployment, I handle the entire development process while ensuring 
                clean code, optimal performance, and seamless user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
