import { Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);


    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        }   else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                setIsDarkMode(true);
            }
    };

    return ( 
        <button onClick = {toggleTheme} className={cn("fixed top-4 right-4 md:right-40 p-2 rounded-full bg-white-2000 dark:bg-white-800 shadow-lg z-50")}> 
            {isDarkMode ? 
            ( <Sun className="h-6 w-6 text-yellow-300"/> ) : 
            ( <Moon className="h-6 w-6 text-blue-900"/> )} 
        </button>
    );
};