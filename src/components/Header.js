import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Header(){
    return(
        <div className="bg-green-400 text-white w-[calc(100vw-3.5rem)] flex justify-between items-center font-semibold h-16 fixed top-0 left-14 z-40 text-xl px-10">
            <IconContext.Provider value={{ className: 'text-red-500 text-xl size-6' }}>
                <div className="flex gap-x-4">
                    <FaGithub/>
                    <FaLinkedin/>
                    <IoMdMail/>
                </div>
            </IconContext.Provider>
            
            <div>
                <button className="bg-yellow-400">My Resume</button>
            </div>
        </div>
    )
}