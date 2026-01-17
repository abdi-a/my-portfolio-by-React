import { ArrowRight, ExternalLink, Github } from "lucide-react";
import mwuShopImg from "../assets/mwu shop.jfif";
import pharmacyImg from "../assets/pharmacy store.jfif";
import libraryImg from "../assets/libraray management system.jfif";

const projects = [
  {
    id: 1,
    title: "MWU SHOP",
    description: "A beautiful e-commerce platform using React and Tailwind.",
    image: mwuShopImg,
    tags: ["React", "CSS","MYSQL"],
    demoUrl: "https://mwu-shop.web.app/",
    githubUrl: "https://github.com/abdi-a/MWU-SHOP",
  },
  {
    id: 2,
    title: "PHARMACY WEBSITE",
    description:
      "Interactive pharmacy website with product visualization and filtering capabilities.",
    image: pharmacyImg,
    tags: ["HTML","CSS","Javascript"],
    demoUrl: "https://clinquant-clafoutis-cfaacc.netlify.app/",
    githubUrl: "https://github.com/abdi-a/Pharmacy-website",
  },
  {
    id: 3,
    title: "LIBRARY MANAGEMENT SYSTEM",
    description:
      "Full-featured library management system with user authentication and book inventory management.",
    image: libraryImg,
    tags: ["HTML","CSS", "Javascript"],
    demoUrl: "https://profound-valkyrie-25da6a.netlify.app/",
    githubUrl: "https://github.com/abdi-a/School-library-management-system",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <a href={project.demoUrl} target="_blank">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/abdi-a"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
