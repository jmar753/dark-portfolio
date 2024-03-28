import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconContext } from "react-icons";
import DownReveal from "../animation/DownReveal";
import { HiMenu } from "react-icons/hi";

export default function Header(){
    return(
        <div className="bg-neutral-900 backdrop-blur bg-opacity-50 text-white w-full sm:w-[calc(100vw-3.5rem)] flex flex-row-reverse sm:flex-row justify-between items-center font-semibold h-16 fixed top-0 sm:left-14 z-40 text-xl px-4 sm:px-10">
            <DownReveal>
                <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-6 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100' }}>
                    <div className="hidden sm:flex gap-x-4">
                        <FaGithub/>
                        <FaLinkedin/>
                        <IoMdMail/>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-10 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100' }}>
                    <div className="sm:hidden flex ">
                        <HiMenu/>
                    </div>
                </IconContext.Provider>
            </DownReveal>
            
            <div>
                <button className="relative h-[45px] rounded w-32 overflow-hidden border border-orange-500 bg-neutral-900 text-orange-500 shadow-2xl font-medium transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-orange-500 before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-orange-500 after:duration-300 hover:text-white hover:shadow-orange-500 hover:before:h-2/4 hover:after:h-2/4"><span className="relative z-10">My Resume</span></button>
            </div>
        </div>
    )
}