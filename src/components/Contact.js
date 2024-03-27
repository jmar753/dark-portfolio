import { IoMdMail } from "react-icons/io";
import { IconContext } from "react-icons";
import Reveal from "../animation/Reveal";

export default function Contact(){
    return(
        <div className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center text-white">
            <Reveal>
                <div className="max-w-6xl text-center pb-[64px]">
                    <div className="p-20 flex flex-col space-y-8">
                        <h1 className="font-bold text-8xl">Contact <span className="text-orange-500">Me</span></h1>
                        <h1 className="text-xl">I'd love to hear back from you. You can find me on <a className="text-orange-500 hover:text-orange-700 hover:cursor-pointer">LinkedIn</a>, or you can send me an email</h1>
                        <div className="group">
                            <IconContext.Provider value={{ className: 'text-xl size-[1.5rem]  group-hover:text-orange-500 group-hover:cursor-pointer transition duration-300' }}>
                                <div className="flex justify-center items-center gap-x-2">
                                    <IoMdMail/>
                                    <h1 className="text-2xl font-bold group-hover:text-orange-500 group-hover:cursor-pointer transition duration-300">jr.mohan753@gmail.com</h1>
                                </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </Reveal>
        </div>
    )
}