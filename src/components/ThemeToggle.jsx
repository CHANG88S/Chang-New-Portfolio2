import { Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
        } else if (savedTheme === 'light') {
            document.documentElement.classList.remove('dark');
            setIsDarkMode(false);
        } else {
            // No saved preference — follow system preference
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            }
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
        setIsDarkMode(prev => {
            const next = !prev;
            localStorage.setItem('theme', next ? 'dark' : 'light');
            return next;
        });
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
                "fixed top-4 right-4 md:right-40 p-2 rounded-full bg-white-2000 dark:bg-white-800 shadow-lg z-50"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-gray-800" />
            )}
        </button>
    );
};