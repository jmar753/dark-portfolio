import Reveal from "../animation/Reveal";
import { forwardRef } from "react";

function Introduction({},ref){
    return(
        <div className="min-h-screen w-full flex items-center justify-center text-white"ref={ref}>
            <div className="max-w-6xl">
                <div className="text-left p-4 sm:p-20 flex flex-col space-y-7 sm:space-y-4">
                    <Reveal>
                        <h1 className="font-bold text-7xl sm:text-8xl">Hi, I'm JR Mohan<span className="text-orange-500">!</span></h1>
                    </Reveal>
                    <Reveal propDelay={0.35}>
                        <h1 className="font-semibold  text-3xl sm:text-4xl ">A <span className="text-orange-500">Full-Stack Developer</span></h1>
                    </Reveal>
                    <Reveal propDelay={0.45}>
                        <h1 className=" text-lg sm:text-xl">I'm a new grad who spent the last year building applications for a pretty cool startup, and making websites for some great people. I'm also a powerlifter (incase you've got some paperweights you need to move around🏋️). Let's connect!</h1>
                    </Reveal>
                    <Reveal propDelay={0.55}>
                        <button className="w-36 h-12 text-xl rounded-md bg-orange-500 text-neutral-900 hover:bg-orange-600 transition duration-100">Contact Me</button>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(Introduction)