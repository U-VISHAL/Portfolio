import { useState } from "react";
import {cn} from "@/lib/utils";

const skills = [
    //frontend
    {name:"HTML/CSS", level:95, category:"frontend"},
    {name:"JavaScript", level:90, category:"frontend"},
    {name:"React", level:85, category:"frontend"},
    {name:"Tailwind", level:80, category:"frontend"},
    //backend
    {name:"Node.js", level:80, category:"backend"},
    {name:"Express", level:75, category:"backend"},
    {name:"MongoDB", level:70, category:"backend"},
    //tools
    {name:"Git", level:80, category:"tools"},
    {name:"VS Code", level:90, category:"tools"},
    {name:"Docker", level:75, category:"tools"},
    {name:"Figma", level:80, category:"tools"},
    //Programming Languages
    {name:"Python", level:70, category:"Languages"},
    {name:"Java", level:85, category:"Languages"},
    {name:"C", level:75, category:"Languages"},

];

const categories = ["all", "frontend", "backend","Languages", "tools"]

export const SkillsSection = () => {
    const [ActiveCategory, setActiveCategory] = useState("all");

    const filterSkills = skills.filter(
        (skill) => ActiveCategory === "all" || skill.category === ActiveCategory);
    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl  ms:text-4xl font-bond mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) =>(
                    <button key={key} onClick={() => setActiveCategory(category)}
                    className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        ActiveCategory === category ? "bg-primary text-primary-foreground" : 
                        "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                            style={{width: skill.level+ "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">{skill.level} %</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

}