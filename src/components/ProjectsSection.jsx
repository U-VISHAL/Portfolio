import { ArrowRight, Github } from "lucide-react";

const projects = [
    {
        id:1,
        title:"Coffee Shop",
        description:"A simple coffee shop website built with React and Tailwind CSS.",
        image:"Projects/Project1.png",
        tags:["Html","CSS","JavaScript"],
        githubUrl:"#"
    },
    {
        id:2,
        title:"Coffee Shop",
        description:"A simple coffee shop website built with React and Tailwind CSS.",
        image:"Projects/Project1.png",
        tags:["Html","CSS","JavaScript"],
        githubUrl:"#"
    },
    {
        id:3,
        title:"Coffee Shop",
        description:"A simple coffee shop website built with React and Tailwind CSS.",
        image:"Projects/Project1.png",
        tags:["Html","CSS","JavaScript"],
        githubUrl:"#"
    }
]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="conatainer mx-auto max-5xl">
            <h2 className="text-3xl ms:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary">Projects</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Check out some of my featured projects. Each prject was carefully
                crafted with attention to detail, perfoemance, and user experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) =>( 
                                    <span className="px-2 py-1 text-xs font-medium bg-primary rounded-full border bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubUrl} 
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github Size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex justify-center mx-auto gap-2" href="https://github.com/U-VISHAL">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </div>
    </section>;
}