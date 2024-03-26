import museum from "../images/museum.jpg"
import portfolio from "../images/portfolio.jpg"
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Projects(){
    const websiteArray = [
        {name:"Museum Search", link:"https://jr-mohan-museum-basic.vercel.app/", imageLoc:museum, tags:["React", "BootStrap", "PostgreSQL", "MongoDB"], description:"A full-stack project that uses the native MongoDB for the collection, PostgreSQL for storing account information, API keys for privacy, and Bootstrap for API calls.", project:"https://github.com/jmar753/Jr-Mohan-Museum-Basic"},
        {name:"Portfolio Page", link:"https://jr-mohan-portfolio.vercel.app/", imageLoc:portfolio, tags:["NextJS", "Tailwind"], description:"A template I’ve been using often to create projects for friends, and helping with their job search! It’s dynamic and built specifically for mobile.", project:"https://github.com/jmar753/ProfessionalWebsite"},
    ]
    return(
        <div className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center text-white">
            <div className="max-w-6xl">
                <div className="px-20">
                    <div className="flex flex-col space-y-4">
                        <div className="relative flex py-5 items-center">
                            <h1 className="flex-shrink font-bold text-6xl pr-10">Projects<span className="text-orange-500">.</span></h1>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-4">
                        {websiteArray.map((item, index) => (
                            <a href={item.link}  key={index}>
                                <div className="relative group overflow-hidden p-4 rounded-xl hover:bg-zinc-950 hover:cursor-pointer">
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
                                                <div className="bg-orange-500 rounded-2xl px-2 py-0.5" key={index}>
                                                    {name}
                                                </div>
                                            ))}
                                        </div>
                                        <p className="py-3">{item.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}