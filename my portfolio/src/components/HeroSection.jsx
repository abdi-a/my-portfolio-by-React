import { ArrowDown } from "lucide-react";
import personalPhoto from "../assets/personal photo.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
      <div className="container max-w-4xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="mb-6 md:mb-0 opacity-0 animate-fade-in flex-shrink-0">
            <img
              src={personalPhoto}
              alt="Abdisa Awel"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/20 shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Abdisa
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Awel
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 text-justify opacity-0 animate-fade-in-delay-3">
         Passionate about creating innovative web solutions with modern technologies. Working on React, Node.js, and MongoDB.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
