import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/*THEME TOGGLE BUTTON*/}
            <ThemeToggle/>

            {/*BACKGROUND EFFECT*/}
            <StarBackground />

            {/*navbar*/}
            <Navbar/>

            {/*main content*/}
            <main>
                <HeroSection/>
                
                <AboutSection/>
            </main>
            {/*Footer*/}

        </div>
    )
}