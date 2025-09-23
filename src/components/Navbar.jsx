import React, { useEffect, useState, useRef } from 'react';

export const Navbar = () => {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Resume', href: '#resume' },
    ];

    const [iscrolled, setIsScrolled] = useState(false);
    const navRef = useRef(null);
    const [navHeight, setNavHeight] = useState(0);


    const handleNavClick = (e, href) => {
        
        if (!href || !href.startsWith('#')) return;
        const id = href.slice(1);
        const target = document.getElementById(id) || document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight; // small gap
        window.scrollTo({ top, behavior: 'smooth' });
        // update URL hash without jumping
        if (window.history && window.history.pushState) {
            window.history.pushState(null, '', href);
        } else {
            window.location.hash = href;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const isPageScrolled = window.scrollY > 10;
            setIsScrolled(isPageScrolled);
        };

        // Corrected event listener to use window.scrollY
        window.addEventListener("scroll", handleScroll);

        // call once to set initial state
        handleScroll();

        // measure navbar height for offset calculations
        const measure = () => {
            const el = navRef.current;
            if (el) setNavHeight(el.offsetHeight);
        };
        measure();
        window.addEventListener('resize', measure);
        return () => { 
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', () => {});
        };
    }, []);

    return (
        <nav ref={navRef} className={(
            "fixed w-full p-4 px-5 z-45 " + 
            (iscrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : " py-5 ")
        )}>
            <div className="container flex items-center justify-center mx-auto">
                <div className="flex items-center space-x-8 text-sm font-medium cursor-pointer">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="" onClick={(e) => handleNavClick(e, item.href)}> {item.name} </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};