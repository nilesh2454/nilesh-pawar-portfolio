import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CyclingTypedText from "@/components/CyclingTypedText";
import SkillBar from "@/components/SkillBar";
import ProjectCard, { Project } from "@/components/ProjectCard";
import TimelineItem from "@/components/TimelineItem";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { ArrowDownIcon, Code, Brain, CircuitBoard, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Technical Skills
  const technicalSkills = [
    { name: "Java", percentage: 95 },
    { name: "Spring Boot", percentage: 90 },
    { name: "Microservices", percentage: 85 },
    { name: "SQL/NoSQL", percentage: 88 },
    { name: "REST API", percentage: 92 },
    { name: "Docker/Kubernetes", percentage: 80 },
  ];

  // AI Skills
  const aiSkills = [
    { name: "Machine Learning", percentage: 82 },
    { name: "Natural Language Processing", percentage: 78 },
    { name: "Data Analysis", percentage: 85 },
    { name: "Computer Vision", percentage: 74 },
    { name: "TensorFlow/PyTorch", percentage: 75 },
  ];

  // Projects Data
  const projects: Project[] = [
    {
      id: 1,
      title: "Room Finder",
      shortDescription: "A platform to find and book accommodations online",
      fullDescription: "Room Finder is a comprehensive platform that allows users to search, filter, and book accommodations based on their preferences. Built with Java Spring Boot for the backend and React for the frontend, it features user authentication, payment integration, and a review system. The application uses microservices architecture for scalability and implements RESTful APIs for seamless communication between services.",
      tags: ["Java", "Spring Boot", "Microservices", "REST API", "MySQL", "React"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "AI Resume Builder",
      shortDescription: "AI-powered resume builder with personalized recommendations",
      fullDescription: "AI Resume Builder is an intelligent application that helps users create professional resumes with AI-generated content suggestions. The system analyzes job descriptions and user skills to provide tailored recommendations for each section. It features multiple templates, real-time preview, and export options. The backend is built with Java and integrates with NLP services to provide smart content analysis and suggestions.",
      tags: ["Java", "Spring Boot", "NLP", "Machine Learning", "PostgreSQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "Study Hub",
      shortDescription: "Collaborative learning platform for students",
      fullDescription: "Study Hub is a collaborative learning platform designed for students to share resources, form study groups, and track their progress. It features real-time document collaboration, discussion forums, and integrated flashcards for efficient studying. The system includes a recommendation engine that suggests relevant study materials based on user preferences and behavior. Built with Java and Spring framework with MongoDB for flexible data storage.",
      tags: ["Java", "Spring Framework", "WebSockets", "MongoDB", "OAuth", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen hero-gradient bg-hero-pattern">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-4 sm:mb-6 inline-block">
              <SocialLinks />
            </div>
            <h1 className="mb-4 sm:mb-6 opacity-0 animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl" style={{ animationDelay: "0.2s" }}>
              <span className="gradient-text">Nilesh Dashrath Pawar</span>
            </h1>
            <div className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CyclingTypedText />
            </div>
            <p className="text-muted-foreground text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto opacity-0 animate-fade-in px-4" style={{ animationDelay: "0.6s" }}>
              Building enterprise-level Java applications with a focus on clean code, 
              scalable architecture, and innovative AI integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in px-4" style={{ animationDelay: "0.8s" }}>
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="#projects">
                  View My Work
                </a>
              </Button>
            </div>
            <div className="flex justify-center mt-6 sm:hidden">
              <a href="#about" aria-label="Scroll down">
                <ArrowDownIcon size={24} />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-75 hidden sm:block">
            <a href="#about" aria-label="Scroll down">
              <ArrowDownIcon size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="gradient-text inline-block mb-4 text-2xl sm:text-3xl md:text-4xl">About Me</h2>
            <div className="h-1 w-16 sm:w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            <div 
              className="parallax-effect h-full"
              style={{ '--scrollY': scrollY } as React.CSSProperties}
            >
              <div className="card-gradient rounded-xl p-6 sm:p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Who I Am</h3>
                <div className="flex-grow">
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                    I'm a passionate Java Developer with expertise in building scalable, 
                    enterprise-level applications. With a strong foundation in software 
                    engineering principles and a keen interest in artificial intelligence, 
                    I bring a unique blend of technical skills and innovative thinking to 
                    every project.
                  </p>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    My journey in software development has been driven by curiosity and a 
                    desire to create solutions that make a positive impact. I enjoy tackling 
                    complex problems and transforming them into elegant, efficient code.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className="parallax-effect h-full"
              style={{ '--scrollY': scrollY * 0.8 } as React.CSSProperties}
            >
              <div className="card-gradient rounded-xl p-6 sm:p-8 shadow-lg h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">What I Do</h3>
                <div className="flex-grow">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Code className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">Java Development</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          Enterprise applications, microservices, and REST APIs using 
                          modern Java frameworks like Spring Boot.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">AI Integration</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          Implementing machine learning and NLP solutions to enhance 
                          application functionality and user experience.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CircuitBoard className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm sm:text-base">System Architecture</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          Designing scalable, maintainable software architectures that 
                          support business goals and future growth.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="gradient-text inline-block mb-4 text-2xl sm:text-3xl md:text-4xl">My Skills</h2>
            <div className="h-1 w-16 sm:w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              A showcase of my technical expertise and proficiency in various technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <div className="card-gradient rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center">
                <Code className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                Technical Skills
              </h3>
              {technicalSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
            
            <div className="card-gradient rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-6 flex items-center">
                <Brain className="mr-2 h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                AI & ML Skills
              </h3>
              {aiSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  name={skill.name} 
                  percentage={skill.percentage} 
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="gradient-text inline-block mb-4 text-2xl sm:text-3xl md:text-4xl">My Projects</h2>
            <div className="h-1 w-16 sm:w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              A selection of my recent work showcasing my skills and expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="gradient-text inline-block mb-4 text-2xl sm:text-3xl md:text-4xl">Experience & Education</h2>
            <div className="h-1 w-16 sm:w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              My professional journey and educational background.
            </p>
          </div>

          <div className="max-w-4xl mx-auto card-gradient rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-6">Professional Timeline</h3>
            
            <div className="relative">
              <TimelineItem
                year="2022 - Present"
                title="Senior Java Developer"
                subtitle="Tech Innovations Inc."
                description="Leading the development of enterprise Java applications using Spring Boot and microservices architecture. Implementing AI-driven features and mentoring junior developers."
              />
              
              <TimelineItem
                year="2020 - 2022"
                title="Java Developer"
                subtitle="Digital Solutions Ltd."
                description="Developed and maintained RESTful APIs, implemented database solutions, and collaborated with cross-functional teams to deliver high-quality software products."
              />
              
              <TimelineItem
                year="2018 - 2020"
                title="Software Engineer"
                subtitle="NextGen Software"
                description="Worked on full-stack development with Java backend and React frontend. Participated in agile development processes and continuous integration/deployment pipelines."
              />
              
              <TimelineItem
                year="2017"
                title="Master's in Computer Science"
                subtitle="University of Technology"
                description="Specialized in Artificial Intelligence and Machine Learning with a thesis on Natural Language Processing applications."
                isLast
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-6 sm:mt-10 card-gradient rounded-xl p-6 sm:p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-6">Certifications & Achievements</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 text-xs">✓</div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Oracle Certified Professional, Java SE 11 Developer</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Certified expert in Java SE platform</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 text-xs">✓</div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">Spring Professional Certification</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Recognized expertise in Spring Framework</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 text-xs">✓</div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">AWS Certified Developer - Associate</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Proficiency in developing and maintaining applications on AWS</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1 text-xs">✓</div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base">National Coding Competition - 2nd Place</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Recognition for algorithmic problem-solving skills</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="gradient-text inline-block mb-4 text-2xl sm:text-3xl md:text-4xl">Get In Touch</h2>
            <div className="h-1 w-16 sm:w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-4">
              Have a project in mind or just want to say hello? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <div className="card-gradient rounded-xl p-6 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-6">Send Me a Message</h3>
              <ContactForm />
            </div>
            
            <div className="card-gradient rounded-xl p-6 sm:p-8 shadow-lg flex flex-col">
              <h3 className="text-lg sm:text-xl font-bold mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-8 text-sm sm:text-base">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="grid gap-6 mb-auto">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                    <a href="mailto:contact@nileshpawar.dev" className="text-primary hover:underline text-xs sm:text-sm break-all">
                      contact@nileshpawar.dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-primary flex-shrink-0">
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">LinkedIn</h4>
                    <a href="https://linkedin.com/in/nileshpawar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-xs sm:text-sm break-all">
                      linkedin.com/in/nileshpawar
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold mb-4 text-sm sm:text-base">Follow Me</h4>
                <div className="w-full overflow-x-auto pb-2">
                  <SocialLinks size="lg" className="flex-wrap" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 bg-secondary/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-muted-foreground text-xs sm:text-sm">
              © {new Date().getFullYear()} Nilesh Dashrath Pawar. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Designed with ❤️ and modern web technologies
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
