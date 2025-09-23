export const Projects = () => {
    return (    
    
    <div className="max-w-3xl mx-auto z-35 justify-center">
        <div className="w-full mt-8 flex flex-col">
            <div className="flex items-center">
                <h1 id="projects" className="text-3xl font-bold">Projects</h1>
            </div>


            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"> { /* Project Layouts */ }

                <div class= "rounded-md border bg-card text-card-foreground shadow flex flex-col shadow-sm shadow-sm_m card-border bg-card-m">
                    <div class="flex w-full max-h-[15rem] min-h-[15rem] rounded-md flex-col space-y-1.5 p-4 pb-2 skeleton relative">
                        <a className="overflow-hidden" href = "https://github.com/CHANG88S/Chang-New-Portfolio"><img class="h-full w-full object-cover rounded-md maskImage duration-300 hover:scale-105" src="src\assets\projects\PortfolioSite.png" alt="Portfolio Project"/></a>
                    </div>
                    <div class="px-4 py-2 pt-0 flex flex-col gap-1">
                        <div class="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200  mt-0">Portfolio</div>
                        <div class="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert">
                            <p>Current portfolio that you are looking at, learned how to use a bit of Tailwind to design it</p>
                        </div>
                            <div class="mt-1 flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HTML</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Javascript</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">TailwindCSS</span>
                            </div>
                            <div class= "flex flex-row flex-wrap items-start gap-1.5 mb-2">
                                <a target="_blank" href="https://github.com/CHANG88S/Chang-New-Portfolio">
                                <div class="items-center rounded-sm border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] border_m border-gray-800">
                                    GitHub
                                </div>
                                </a>
                            </div>
                    </div>
                </div>


                <div class= "rounded-md border bg-card text-card-foreground shadow flex flex-col shadow-sm shadow-sm_m card-border bg-card-m">
                    <div class="flex w-full max-h-[15rem] min-h-[15rem] rounded-md flex-col space-y-1.5 p-4 pb-2 skeleton relative">
                        <a className="overflow-hidden" href = "https://github.com/CHANG88S/DBProject"><img class="h-full w-full object-cover rounded-md maskImage duration-300 hover:scale-105" src="src\assets\projects\GroceryStoreDB.png" alt="Database Project"/></a>
                    </div>
                    <div class="px-4 py-2 pt-0 flex flex-col gap-1">
                        <div class="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200  mt-0">Grocery Store Database</div>
                        <div class="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert">
                            <p>Learned how to use MySQL to make entities, business logic, and queries from scratch</p>
                        </div>
                            <div class="mt-1 flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HTML</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">MySQL</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">PHP</span>
                            </div>
                            <div class= "flex flex-row flex-wrap items-start gap-1.5 mb-2">
                                <a target="_blank" href="https://github.com/CHANG88S/DBProject">
                                <div class="items-center rounded-sm border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] border_m border-gray-800">
                                    GitHub
                                </div>
                                </a>
                            </div>
                    </div>
                </div>



                <div class= "rounded-md border bg-card text-card-foreground shadow flex flex-col shadow-sm shadow-sm_m card-border bg-card-m">
                    <div class="flex w-full max-h-[15rem] min-h-[15rem] rounded-md flex-col space-y-1.5 p-4 pb-2 skeleton relative">
                        <a className="overflow-hidden" href = "https://github.com/CHANG88S/FoodAppTS"><img class="h-full w-full object-cover rounded-md maskImage duration-300 hover:scale-105" src="src\assets\projects\FoodAppTS2.png" alt="Project 1 Image"/></a>
                    </div>
                    <div class="px-4 py-2 pt-0 flex flex-col gap-1">
                        <div class="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200  mt-0">In Progress Food App</div>
                        <div class="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert">
                            <p>This was an in progress react native app from scratch where I was trying to build a food rating app, something similar to yelp!</p>
                        </div>
                            <div class="mt-1 flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Javascript</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">React Native</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Typescript</span>
                            </div>
                            <div class= "flex flex-row flex-wrap items-start gap-1.5 mb-2">
                                <a target="_blank" href="https://github.com/CHANG88S/FoodAppTS">
                                <div class="items-center rounded-sm border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] border_m border-gray-800">
                                    GitHub
                                </div>
                                </a>
                            </div>
                    </div>
                </div>



                <div class= "rounded-md border bg-card text-card-foreground shadow flex flex-col shadow-sm shadow-sm_m card-border bg-card-m">
                    <div class="flex w-full max-h-[15rem] min-h-[15rem] rounded-md flex-col space-y-1.5 p-4 pb-2 skeleton relative">
                        <a className="overflow-hidden" href = "https://github.com/CHANG88S/TypingTest"><img class="h-full w-full object-cover rounded-md maskImage duration-300 hover:scale-105" src="src\assets\projects\TypingTest.png" alt="Project 1 Image"/></a>
                    </div>
                    <div class="px-4 py-2 pt-0 flex flex-col gap-1">
                        <div class="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200  mt-0">Typing Test</div>
                        <div class="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert">
                            <p>This was a simple typing test that I made, there was something I couldn't figure out where you would have to press a space after the last word completed to submit your test. </p>
                        </div>
                            <div class="mt-1 flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">CSS</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">HTML</span>
                                <span class="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Javascript</span>
                            </div>
                            <div class= "flex flex-row flex-wrap items-start gap-1.5 mb-2">
                                <a target="_blank" href="https://github.com/CHANG88S/TypingTest">
                                <div class="items-center rounded-sm border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-gray-800 text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px] border_m border-gray-800">
                                    GitHub
                                </div>
                                </a>
                            </div>
                    </div>
                </div>



            </div>                                          { /* Project Layouts */ }

        </div>
    </div>
    
    );
};