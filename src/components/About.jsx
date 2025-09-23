import profilePic from "../assets/profile3.jpg"

export const About = () => {
    return (
        
    <div id="about" className="max-w-3xl mx-auto z-40 pt-16 justify-center">
        <div className="flex items-center justify-between">
            <div className="flex items-center">
            {/* Profile Pic */}
            <span className ="flex relative rounded-full h-16 w-16 border border-foreground-800 overflow-hidden">
                <img class="aspect-square h-full w-full" aria-label="Profile Picture" src={profilePic} />
            </span>
                <div className="flex flex-col pl-3">
                    <h1 className="flex justify-between text-m font-bold">Simon Chang</h1>
                    <div className="justify-between gap-3 flex">
                        <p className="text-m text-left text-gray-400">Riverside, California</p>
                    </div>
                    <div className="justify-between gap-3 flex">
                        <p className="text-m text-left text-gray-400">B.S in Computer Science | Developer</p>
                    </div>
                </div>
            </div>

            {/* Socials */}
            <div className="flex justify-end pt-2 gap-1">  
                <a target="_blank" aria-label="Links to Simon Chang's LinkedIn" href="https://www.linkedin.com/in/simon-chang-b384301a5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-400 hover:text-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.642zM4.636 7.429c1.235 0 2.016-.838 2.016-1.866.023-1.047-.768-1.866-2.039-1.866-1.295 0-2.019.82-2.019 1.866-.022 1.028.749 1.866 2.042 1.866zm-1.889 12.983h3.778V9.01H2.747v11.382z"></path></svg>
                </a>
                <a target="_blank" aria-label="Links to Simon Chang's GitHub page" href="https://github.com/CHANG88S">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 text-gray-400 hover:text-white"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path></svg>
                </a>
            </div>
        </div>
        <br></br>
            <p className="text-m text-left text-gray-400 dark:prose-invert">
                A developer with an interest in UI/UX and Data Science. Open to other roles in tech. Wanting to learn and gain more experience. Thank you for your time on reviewing my profile!
            </p>
    </div>

    );
};