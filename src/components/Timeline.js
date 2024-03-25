export default function Timeline(){
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
        <div className="min-h-screen w-full flex items-center justify-center text-white">
            <div className="max-w-6xl min-h-screen">
                <div className="px-20">
                <div className="min-h-screen w-full flex flex-col space-y-4">
                    <div className="relative flex py-5 items-center">
                        <span className="flex-shrink font-bold text-6xl pr-10">Timeline.</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex justify-between"><p>lmao</p><p>lmao</p></div>
                            <div className="flex justify-between"><p>lmao</p><p>lmao</p></div>
                            <p className="text-xl ">Right now, I'm learning all the things I wanted to learn before, like  Python, Unity, Java (I'm gonna be posting all my silly lil' projects :D) and even things other things like tying fishing lines, making D&D characters and Indonesian.</p>
                            <div className="flex items-start flex-wrap gap-2 w-full">
                                {funTag.map((item, index) => (
                                    <div className="bg-orange-400 rounded-2xl px-2 py-0.5" key={index}>
                                        {item.value}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between"><p>lmao</p><p>lmao</p></div>
                            <div className="flex justify-between"><p>lmao</p><p>lmao</p></div>
                            <p className="text-xl ">Right now, I'm learning all the things I wanted to learn before, like  Python, Unity, Java (I'm gonna be posting all my silly lil' projects :D) and even things other things like tying fishing lines, making D&D characters and Indonesian.</p>
                            <div className="flex items-start flex-wrap gap-2 w-full">
                                {funTag.map((item, index) => (
                                    <div className="bg-orange-400 rounded-2xl px-2 py-0.5" key={index}>
                                        {item.value}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}