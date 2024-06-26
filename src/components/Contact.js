import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconContext } from "react-icons";
import Reveal from "../animation/Reveal";
import { forwardRef } from "react";

function Contact({},ref){
    return(
        <div className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center text-white"ref={ref}>
            <Reveal>
                <div className="max-w-6xl text-center pb-[64px]">
                    <div className="px-4 sm:p-20 flex flex-col space-y-8">
                        <h1 className="font-bold text-6xl md:text-8xl">Contact <span className="text-orange-500">Me</span></h1>
                        <h1 className=" font-thin sm:font-normal text-lg md:text-xl">I'd love to hear back from you. You can find me on <a className="text-orange-500 hover:text-orange-700 hover:cursor-pointer" href="https://www.linkedin.com/in/jr-mohan/">LinkedIn</a>, or you can send me an email</h1>
                        <div className="hidden sm:block group">
                            <IconContext.Provider value={{ className: 'text-xl size-[1.5rem]  group-hover:text-orange-500 group-hover:cursor-pointer transition duration-300' }}>
                                <a href="mailto:jr.mohan753@gmail.com">
                                    <div className="flex justify-center items-center gap-x-2">
                                        <IoMdMail/>
                                        <h1 className="text-2xl font-bold group-hover:text-orange-500 group-hover:cursor-pointer transition duration-300">jr.mohan753@gmail.com</h1>
                                    </div>
                                </a>
                            </IconContext.Provider>
                        </div>
                        <div>
                            <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-10 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100' }}>
                                <div className="sm:hidden flex justify-center gap-x-4">
                                    <a href="https://github.com/jmar753"><FaGithub/></a>
                                    <a href="https://www.linkedin.com/in/jr-mohan/"><FaLinkedin/></a>
                                    <a href="mailto:jr.mohan753@gmail.com"><IoMdMail/></a>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}

export default forwardRef(Contact)