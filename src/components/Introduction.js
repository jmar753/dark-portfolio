import Reveal from "../animation/Reveal";
import { forwardRef } from "react";

function Introduction({refContact},ref){
    return(
        <div className="min-h-screen w-full flex items-center justify-center text-tuscany-950 bg-tuscany-200"ref={ref}>
            <div className="max-w-6xl">
                <div className="text-left p-4 sm:p-20 flex flex-col space-y-7 sm:space-y-4">
                    <Reveal>
                        <h1 className="font-bold text-7xl sm:text-8xl">Hi, I'm JR Mohan<span className="text-tuscany-600">!</span></h1>
                    </Reveal>
                    <Reveal propDelay={0.35}>
                        <h1 className="font-semibold  text-3xl sm:text-4xl ">A <span className="text-tuscany-600">Full-Stack Developer</span></h1>
                    </Reveal>
                    <Reveal propDelay={0.45}>
                        <h1 className="font-thin sm:font-normal text-lg sm:text-xl">I'm a new grad who spent the last year building applications for a pretty cool startup, and making websites for some great people. I'm also a powerlifter (incase you've got some paperweights you need to move around🏋️). Let's connect!</h1>
                    </Reveal>
                    <Reveal propDelay={0.55}>
                        <button 
                            onClick={()=>{refContact.current?.scrollIntoView({behavior: 'smooth'})}} 
                            className="w-36 h-12 text-xl rounded-md bg-tuscany-500 text-white hover:bg-tuscany-700 hover:shadow-inner transition duration-200">Contact Me</button>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Introduction)