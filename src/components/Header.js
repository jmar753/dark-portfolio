import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconContext } from "react-icons";
import DownReveal from "../animation/DownReveal";
import { HiMenu } from "react-icons/hi";
import resume from "../images/JrMohan_Resume.pdf"
import { useState, useEffect, useRef } from "react";

export default function Header({ref1, ref2, ref3, ref4, ref5}){
    const [check, setCheck] = useState(false)
    const newRef = useRef(null)
    const navArray = [{name:"About" , delay:0.35, reference: ref2},{name:"Projects" , delay:0.45, reference: ref3},{name:"Timeline" , delay:0.55, reference: ref4},{name:"Contact" , delay:0.65, reference: ref5},]
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
          document.removeEventListener("mousedown", handleOutsideClick)
        };
    });

    const handleOutsideClick = (e) => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setCheck(false)
        }
    };

    return(
        <div className="bg-neutral-900 backdrop-blur bg-opacity-50 text-white w-full sm:w-[calc(100vw-3.5rem)] flex flex-row-reverse sm:flex-row justify-between items-center font-semibold h-16 fixed top-0 sm:left-14 z-40 text-xl px-4 sm:px-10">
            {check ? 
                <>
                    <div className="bg-neutral-950 w-screen h-screen absolute left-0 top-0 opacity-40 sm:hidden"></div>
                    <div className="text-base text-white text-left absolute left-0 top-0 z-40 w-3/4 p-6 h-screen bg-neutral-900 opacity-100 :hidden" ref={newRef}>
                        <button 
                        onClick={()=>{
                            ref1.current?.scrollIntoView({behavior: 'smooth'})
                            setCheck(false)
                        }} 
                        className="text-left  w-full py-3 pr-3  text-2xl my-1">
                            Home
                        </button>
                        {navArray.map((item, index) => (
                            <button 
                                onClick={()=>{
                                    item.reference.current?.scrollIntoView({behavior: 'smooth'})
                                    setCheck(false)
                                }} 
                                className="text-left  w-full py-3 pr-3  text-2xl my-1" key={index}>
                                    {item.name}
                            </button>
                    ))}
                    </div> 
                </>
                :
                null
            }
            <DownReveal>
                <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-6 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100' }}>
                    <div className="hidden sm:flex gap-x-4">
                        <a href="https://github.com/jmar753"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/jr-mohan/"><FaLinkedin/></a>
                        <a href="mailto:jr.mohan753@gmail.com"><IoMdMail/></a>
                    </div>
                </IconContext.Provider>
                <IconContext.Provider value={{ className: 'text-zinc-500 text-xl size-10 opacity-100  hover:text-slate-200 hover:cursor-pointer transition duration-100' }}>
                    <div className="sm:hidden flex" onClick={() => {setCheck(true)}}>
                        <HiMenu/>
                    </div>
                </IconContext.Provider>
            </DownReveal>
            
            <div>
                <a href={resume} download>
                    <button className="relative h-[45px] rounded w-32 overflow-hidden border border-orange-500 bg-neutral-900 text-orange-500 shadow-2xl font-medium transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-orange-500 before:duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:bg-orange-500 after:duration-200 hover:text-white hover:shadow-orange-500 hover:before:h-2/4 hover:after:h-2/4"><span className="relative z-10">My Resume</span></button>
                </a>
            </div>
        </div>
    )
}