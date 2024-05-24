import museum from "../images/museum.jpg"
import portfolio from "../images/portfolio.jpg"
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import DownReveal from "../animation/DownReveal";
import Reveal from "../animation/Reveal";
import { forwardRef } from "react";

function Projects({},ref){
    const websiteArray = [
        {name:"Museum Search", link:"https://jr-mohan-museum-basic.vercel.app/", imageLoc:museum, tags:["React", "BootStrap", "PostgreSQL", "MongoDB"], description:"A back-end project that uses the native MongoDB library for the museum collection, PostgreSQL for storing account information, API keys for privacy, and Node.js for API calls.", project:"https://github.com/jmar753/Jr-Mohan-Museum-Basic", delay: 0.25},
        {name:"Portfolio Page", link:"https://jr-mohan-light-portfolio.vercel.app/", imageLoc:portfolio, tags:["NextJS", "Tailwind"], description:"A template I’ve been using often to create projects for friends, and helping with their job search! It’s dynamic and built specifically for mobile.", project:"https://github.com/jmar753/ProfessionalWebsite", delay: 0.35},
    ]
    return(
        <div className="min-h-screen pt-0 w-full flex items-center justify-center sm:pt-20 text-tuscany-950 bg-tuscany-200 pb-20"ref={ref}>
            <div className="max-w-6xl pt-20 sm:pt-0">
                <div className="px-4 sm:px-20">
                    <div className="flex flex-col space-y-4">
                        <DownReveal>
                            <div className="relative flex py-5 items-center">
                                <h1 className="flex-shrink font-bold text-5xl md:text-6xl pr-10">Projects<span className="text-tuscany-600">.</span></h1>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                        </DownReveal>
                        <div className="mt-12 grid lg:grid-cols-2 gap-4">
                        {websiteArray.map((item, index) => (
                            <a href={item.link}  key={index}>
                                <Reveal propDelay={item.delay}>
                                    <div className="relative group overflow-hidden p-4 rounded-xl bg-tuscany-100 hover:bg-tuscany-300 hover:cursor-pointer transition duration-600 lg:h-[560px]">
                                        <div className="relative gap-y-2">
                                            <img className="object-cover col-span-2 rounded-lg" src={item.imageLoc} alt=""/>
                                            <div className="relative flex py-3 items-center">
                                                <span className="flex-shrink font-bold text-2xl pr-2">{item.name}</span>
                                                <div className="flex-grow border-t border-gray-400"></div>
                                                <a href={item.project}>
                                                    <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-6 opacity-100 hover:text-slate-200 transition duration-100' }}>
                                                        <div className="pl-2 flex gap-x-4">
                                                            <FaGithub/>
                                                        </div>
                                                    </IconContext.Provider>
                                                </a>
                                            </div>
                                            <div className="flex items-start flex-wrap gap-2 w-full">
                                                {item.tags.map((name, index) => (
                                                    <div className="bg-tuscany-600 rounded-2xl text-white px-2 py-0.5" key={index}>
                                                        {name}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="font-thin sm:font-normal md:text-lg py-3">{item.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Projects)