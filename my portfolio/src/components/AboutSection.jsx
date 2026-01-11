import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Get to know more about my journey, skills, and passion for technology
            </h3>

            <p className="text-muted-foreground">
              Hi there! I'm Abdisa Awel, a passionate third year Computer Science student at Madda Walabu University, diving deep into the world of full-stack development
            </p>

            <p className="text-muted-foreground">
             My journey into coding began when I wanted to create solutions that bridge technology and everyday life. Since then, I’ve been hooked on turning ideas into functional, digital experiences
            As a second-year student, I’m constantly learning frontend (HTML, CSS, JavaScript, React) and backend (Node.js, databases) technologies.</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://docs.google.com/document/d/1Dgj0L47QVAJKG-mtWw8Bc8HKMZvA7U_k_meMhTyEbHo/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors card-hover">
              <User className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Student</h3>
              <p className="text-muted-foreground">
                3rd Year CS Student at Madda Walabu University
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors card-hover">
              <Code className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Full Stack</h3>
              <p className="text-muted-foreground">
                React, Node.js, and Modern Web Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
