import portfolioImg from "../assets/projects/PortfolioSite.png";
import groceryImg from "../assets/projects/GroceryStoreDB.png";
import foodAppImg from "../assets/projects/foodraterts.png";
import typingImg from "../assets/projects/TypingTest.png";

const projectData = [
  {
    title: "Food Rating App (In Progress)",
    description: "This is an in progress food app that I am currently build from scratch to learn the full stack development cycle. Similar to yelp/beli functionality",
    image: foodAppImg,
    tags: ["Javascript", "React Native", "Typescript", "Convex"],
    github: "https://github.com/CHANG88S/FoodAppTS",
  },
  {
    title: "Portfolio",
    description: "Current portfolio that you are looking at, learned how to use a bit of Tailwind to design it",
    image: portfolioImg,
    tags: ["HTML", "Javascript", "React", "TailwindCSS", "Vite"],
    github: "https://github.com/CHANG88S/Chang-New-Portfolio",
  },
  {
    title: "Grocery Store Database",
    description: "Learned how to use MySQL to make entities, business logic, and queries from scratch",
    image: groceryImg,
    tags: ["HTML", "MySQL", "PHP"],
    github: "https://github.com/CHANG88S/DBProject",
  },
  {
    title: "Typing Test",
    description: "This is a simple typing test that I made to learn how to use HTML and CSS. It has a timer, WPM, and accuracy calculation.",
    image: typingImg,
    tags: ["CSS", "HTML", "Javascript"],
    github: "https://github.com/CHANG88S/TypingTest",
  },
];

export const Projects = () => {
  return (
    <div className="w-full md:max-w-3xl max-w-sm mx-auto z-35 justify-center">
      <div className="w-full mt-8 flex flex-col gap-6">
        <div className="flex items-center">
          <h1 id="projects" className="text-3xl font-bold">Projects</h1>
        </div>

        {/* 2x2 Grid for ALL Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectData.map((project, idx) => (
            <div key={idx} className="rounded-md border bg-card text-card-foreground shadow-sm flex flex-col card-border bg-card-m overflow-hidden">
              <div className="flex w-full h-48 p-4 pb-2 relative bg-neutral-900/50 justify-center items-center">
                <a 
                  className="overflow-hidden w-full h-full rounded-md flex justify-center items-center" 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    className="h-full w-full object-cover rounded-md duration-300 hover:scale-105" 
                    src={project.image} 
                    alt={project.title}
                  />
                </a>
              </div>

              <div className="px-4 py-2 pt-0 flex flex-col gap-2 flex-grow justify-between">
                <div>
                  <h3 className="font-sans font-bold text-left text-neutral-600 dark:text-neutral-200 mt-2">
                    {project.title}
                  </h3>
                  <p className="prose max-w-full text-pretty font-sans text-xs text-gray-400 text-left dark:prose-invert mt-1">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="mt-2 flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-xs font-medium bg-gray-200 text-gray-800 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row flex-wrap items-start gap-1.5 mb-2">
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      href={project.github}
                      className="inline-flex items-center rounded-sm font-semibold transition-colors focus:outline-none bg-gray-800 text-white shadow hover:bg-gray-700 px-2.5 py-1 text-[10px]"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};