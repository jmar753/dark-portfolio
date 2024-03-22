export default function About(){

    const workTag = [
        {value:"JavaScript"},
        {value:"Python"},
        {value:"React"},
        {value:"HTML"},
        {value:"CSS"},
        {value:"Tailwind"},
        {value:"Bootstrap"},
        {value:"NextJS"},
        {value:"NodeJS"},
        {value:"MongoDB"},
        {value:"Jira"},
        {value:"GitHub"},
        {value:"Vercel"},
        {value:"Netlify"},

    ]

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
                        <span className="flex-shrink font-bold text-6xl pr-10">About.</span>
                        <div class="flex-grow border-t border-gray-400"></div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="space-y-4">
                            <p className="text-xl ">Hey, I’m JR and I'm a recent grad from Seneca Polytechnic who used to work in the automotive industry in Mississauga. I specialize Front-End, primarily JavaScript, but I can use whatever tools we need for the job.</p>
                            <p className="text-xl ">Right now, I’m learning all the things I wanted to learn before, like  Python, Unity, Java (I’m gonna be posting all my silly lil’ projects :D) and even things other things like tying fishing lines, making D&D characters and Indonesian.</p>
                            <p className="text-xl ">Outside of work, I love powerlifting because it’s funny to lift heavy at a whopping 5 foot 4. Other than that, you can find me in rivers untangling lines and boardgame cafes playing some Catan and YuGiOh.</p>
                            <p className="text-xl ">I'm actively looking for new positions where I can learn as much as I can, especially Back-End since my goal is to be great at Full-Stack. If you think you've got an opening for an intern like me, let's connect!</p>
                            <div className="flex">
                                <p>My Links</p>
                            </div> 
                        </div>
                        <div className="w-[calc(54rem)] grid grid-rows-2">
                            <div className="">
                                <h1 className="font-bold text-3xl pb-4">Use at work</h1>
                                <div className="flex items-start flex-wrap gap-2 w-full">
                                    {workTag.map((item, index) => (
                                        <div className="bg-orange-400 rounded-2xl px-2 py-0.5" key={index}>
                                            {item.value}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="">
                                <h1 className="font-bold text-3xl pb-4">Use for fun</h1>
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
        </div>
    )
}