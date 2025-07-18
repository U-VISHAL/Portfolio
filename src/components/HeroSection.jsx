
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">{" "}Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in">{""}Vishal</span>
                </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Laboriosam tempora, iusto deleniti perferendis laborum, repellendus enim facilis 
                        voluptatem exercitationem sapiente fuga tempore distinctio sunt natus, impedit 
                        exercitationem voluptatibus minima veniam corporis sapiente. Inventore dicta, neque 
                        omnis a est quod laborum rerum fuga corporis assumenda iure odio saepe similique 
                        rem dolor quaerat quas sunt temporibus, placeat voluptatum. Similique et ipsa, 
                        possimus ut repellendus molestias ipsum sint nobis assumenda aliquid corporis, ?
                    </p>

                <div>
                    <a href="#projects" className="cosmic-button animate-fade-in"> 
                        View My Work
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}