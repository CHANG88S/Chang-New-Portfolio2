import reactLogo from "../assets/logos/react.png"
import pythonLogo from "../assets/logos/python.png"
import typescriptLogo from "../assets/logos/typescript.png"
import jsLogo from "../assets/logos/javascript.png"
import htmlLogo from "../assets/logos/html5.png"
import cssLogo from "../assets/logos/css3.png"
import tailwindLogo from "../assets/logos/tailwind.png"
import mysqlLogo from "../assets/logos/mysql.png"
import tableauLogo from "../assets/logos/tableau.png"
import awsLogo from "../assets/logos/aws2.png"

export const Skills = () => {
    return (
        <div className="w-full md:max-w-3xl max-w-sm mx-auto z-30 pt-16 justify-center">
            <div className="flex items-center">
                <h1 id="skills" className="text-3xl font-bold">Skills</h1>
            </div>

            <div className="grid grid-cols-5 gap-4 lg:grid-cols-10">



                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto background" src={reactLogo} alt="React"/>
                        <div class="text-xs text-center">
                            React
                        </div>
                    </div>
                </div>


                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={pythonLogo} alt="Python"/>
                        <div class="text-xs text-center">
                            Python
                        </div>
                    </div>
                </div>


                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={typescriptLogo} alt="Typescript"/>
                        <div class="text-xs text-center">
                            Typescript
                        </div>
                    </div>
                </div>


                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={jsLogo} alt="Javascript"/>
                        <div class="text-xs text-center">
                            Javascript
                        </div>
                    </div>
                </div>

                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={htmlLogo} alt="HTML5"/>
                        <div class="text-xs text-center">
                            HTML5
                        </div>
                    </div>
                </div>                                


                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={cssLogo} alt="CSS3"/>
                        <div class="text-xs text-center">
                            CSS3
                        </div>
                    </div>
                </div>


                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={tailwindLogo} alt="TailwindCSS"/>
                        <div class="text-xs text-center">
                            Tailwind
                        </div>
                    </div>
                </div>

                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={mysqlLogo} alt="MySQL"/>
                        <div class="text-xs text-center">
                            MySQL
                        </div>
                    </div>
                </div>


                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={tableauLogo} alt="tableau"/>
                        <div class="text-xs text-center">
                            Tableau
                        </div>
                    </div>
                </div>    


                
                <div className="pt-4 pb-8 rounded-s text-center">
                    <div class="flex w-16 h-full rounded-md flex-col space-y-1.5 skeleton relative border overflow-hidden">
                        <img class="h-full w-full mx-auto" src={awsLogo} alt="AWS"/>
                        <div class="text-xs text-center">
                            AWS
                        </div>
                    </div>
                </div>                                            


            </div>
        </div>
    );  
};