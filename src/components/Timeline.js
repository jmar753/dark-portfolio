import DownReveal from "../animation/DownReveal"
import Reveal from "../animation/Reveal"
import { forwardRef } from "react";

function Timeline({},ref){
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
            <div className="max-w-6xl ">
                <div className="px-4 sm:px-20">
                    <div className=" w-full flex flex-col space-y-4">
                        <DownReveal>
                            <div className="relative flex py-5 items-center">
                                <h1 className="flex-shrink font-bold text-5xl md:text-6xl pr-10">Timeline<span className="text-orange-500">.</span></h1>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                        </DownReveal>
                        <div className="space-y-10">
                            <Reveal>
                                <div className="space-y-3">
                                    <div className="flex justify-between"><p className="font-bold text-2xl">Andie</p><p className="text-lg">2022 - 2023</p></div>
                                    <div className="flex justify-between"><p className="text-orange-500 font-bold text-xl">Front-End Developer</p><p className="text-lg">Toronto</p></div>
                                    <p className="text-xl ">From Intern to the main Front-End Developer in a year. I was in charge of producing and implementing most of the designs on Andie applications. Other jobs I did include mentoring interns, refactoring code for efficiency and readability, and getting Cheetos for the team.</p>
                                    <div className="flex items-start flex-wrap gap-2 w-full">
                                        {funTag.map((item, index) => (
                                            <div className="bg-neutral-800 rounded-2xl px-2 py-0.5" key={index}>
                                                {item.value}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>

                            <Reveal>
                                <div className="space-y-3">
                                    <div className="flex justify-between"><p className="font-bold text-2xl">Seneca Polytechnic</p><p className="text-lg">2021 - 2023</p></div>
                                    <div className="flex justify-between"><p className="text-orange-500 font-bold text-xl">Student</p><p className="text-lg">North York</p></div>
                                    <p className="text-xl ">This is where my journey started. I learned the fundamentals of programming, algorithms, database structures, web development, and a whole lot of Object-Oriented Programming. This includes Python, C/C++ and currently Java. </p>
                                    <div className="flex items-start flex-wrap gap-2 w-full">
                                        {funTag.map((item, index) => (
                                            <div className="bg-neutral-800 rounded-2xl px-2 py-0.5" key={index}>
                                                {item.value}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Timeline)