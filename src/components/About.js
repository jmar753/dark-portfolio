import { FaLaptopCode } from "react-icons/fa";
import { IconContext } from "react-icons";
import { BiSolidInvader } from "react-icons/bi";
import Reveal from "../animation/Reveal";
import HeadingsReveal from "../animation/HeadingsReveal";
import DownReveal from "../animation/DownReveal";
import { forwardRef } from "react";

function About({},ref){
    const workTag = [
        {value:"JavaScript"},
        {value:"Python"},
        {value:"React"},
        {value:"HTML"},
        {value:"CSS"},
        {value:"Tailwind"},
        {value:"Bootstrap"},
        {value:"NextJS"},
        {value:"NodeJS"},
        {value:"MongoDB"},
        {value:"Jira"},
        {value:"GitHub"},
        {value:"Vercel"},
        {value:"Netlify"},

    ]

    const funTag = [
        {value:"Java"},
        {value:"Spring"},
        {value:"VueJS"},
        {value:"C/C++"},
        {value:"Unity"},
        {value:"Figma"},
        {value:"TypeScript"},
        {value:"PostgreSQL"},
    ]
    
    return(
        <div className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center text-white"ref={ref}>
            <div className="max-w-6xl">
                <div className="px-4 sm:px-20">
                    <div className="w-full flex flex-col space-y-4">
                        <DownReveal>
                            <div className="relative flex py-5 items-center">
                                <h1 className="flex-shrink font-bold text-6xl pr-10">About<span className="text-orange-500">.</span></h1>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                        </DownReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-6">
                            {/* Text section */}
                            <div className="md:col-span-2 space-y-4 font-thin sm:font-normal md:text-xl">
                                <Reveal>
                                    <p className="">Hey, I’m JR and I'm an ex-automotive worker and recent grad from Seneca Polytechnic. I specialize Front-End, primarily JavaScript, but I'm really looking to expand into Back-End to be super well rounded!</p>
                                </Reveal>
                                <Reveal>
                                    <p className="">As a recent grad, I’m learning all the things I've wanted to learn before, like  Python, Unity, Java (I’m gonna be posting all my silly lil’ projects :D) and even things other things like tying fishing lines, making D&D characters and Indonesian.</p>
                                </Reveal>
                                <Reveal>
                                    <p className="">Outside of work, I love powerlifting because it’s funny to lift heavy at a whopping 5 foot 4. Other than that, you can find me in rivers untangling lines and boardgame cafes playing some Catan and YuGiOh.</p>
                                </Reveal>
                                <Reveal>
                                    <p className="">I'm actively looking for new positions where I can learn as much as I can, especially Back-End since my goal is to a well rounded Full-Stack developer. If you think you've got an opening for an intern like me, let's connect!</p>
                                </Reveal>
                            </div>

                            {/* Skills section */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  space-y-4 md:space-y-0 pt-10 lg:pt-0">
                                <HeadingsReveal className="">
                                    <div className="flex items-center gap-x-2 pb-4">
                                        <IconContext.Provider value={{ className: 'text-orange-500 size-7 opacity-100' }}>
                                            <FaLaptopCode />
                                        </IconContext.Provider>
                                        <h1 className="font-bold text-3xl">Use at work</h1>
                                    </div>
                                    <div className="flex items-start flex-wrap gap-2 w-full">
                                        {workTag.map((item, index) => (
                                            <div className="bg-neutral-800 rounded-2xl px-2 py-0.5" key={index}>
                                                {item.value}
                                            </div>
                                        ))}
                                    </div>
                                </HeadingsReveal>
                                <HeadingsReveal className="">
                                    <div className="flex items-center gap-x-2 pb-4">
                                        <IconContext.Provider value={{ className: 'text-orange-500 size-7 opacity-100' }}>
                                            <BiSolidInvader />
                                        </IconContext.Provider>
                                        <h1 className="font-bold text-3xl">Use for fun</h1>
                                    </div>
                                    <div className="flex items-start flex-wrap gap-2 w-full">
                                        {funTag.map((item, index) => (
                                            <div className="bg-neutral-800 rounded-2xl px-2 py-0.5" key={index}>
                                                {item.value}
                                            </div>
                                        ))}
                                    </div>
                                </HeadingsReveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(About)