import Reveal from "../animation/Reveal";

export default function Introduction(){
    return(
        <div className="min-h-screen w-full flex items-center justify-center text-white">
            <div className="max-w-6xl">
                <div className="p-20 flex flex-col space-y-4">
                    <Reveal>
                        <h1 className="font-bold text-8xl">Hi, I'm JR Mohan<span className="text-orange-500">!</span></h1>
                    </Reveal>
                    <h1 className="font-semibold text-4xl ">A <span className="text-orange-500">Full-Stack Developer</span></h1>
                    <h1 className="text-xl">I'm a new grad who spent the last year building applications for a pretty cool startup, and making websites for some great people. I'm also a powerlifter (incase you've got some paperweights you need to move around🏋️). Let's connect!</h1>
                    <button className="w-36 h-12 text-xl rounded-md bg-orange-500 text-neutral-900 hover:bg-orange-600 transition duration-100">Contact Me</button>
                </div>
            </div>
        </div>
    )
}