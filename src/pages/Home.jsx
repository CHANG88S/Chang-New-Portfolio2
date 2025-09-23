import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Resume } from "../components/Resume";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground ">
    
        {/* Theme Toggle */} 
        <ThemeToggle/>
        {/* NavBar */} 
        <Navbar/>
        
        {/* Profile */} 
        <AboutMe/>
        {/* Projects */} 
        <Projects/>
        {/* Skills */} 
        <Skills/>
        {/* Resume */} 
        <Resume/>
        {/* Footer */} 
        <Footer/>
    </div>
    );
};