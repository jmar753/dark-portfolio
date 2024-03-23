import museum from "../images/museum.jpg"

export default function Projects(){
    const websiteArray = [
        {name:"Museum Search", link:"https://jr-mohan-museum-basic.vercel.app/", imageLoc:museum},
        {name:"Museum Search", link:"https://jr-mohan-museum-basic.vercel.app/", imageLoc:museum},
    ]
    return(
        <div className="min-h-screen w-full flex items-center justify-center text-white">
            <div className="max-w-6xl min-h-screen">
                <div className="px-20">
                    <div className="min-h-screen flex flex-col space-y-4">
                        <div className="relative flex py-5 items-center">
                            <span className="flex-shrink font-bold text-6xl pr-10">Projects.</span>
                            <div class="flex-grow border-t border-gray-400"></div>
                        </div>
                        <div class="mt-12 grid grid-cols-2 gap-8">
                        {websiteArray.map((item, index) => (
                            <div class="relative group overflow-hidden rounded-xl">
                                <div class="relative gap-y-2">
                                    <img className="object-cover col-span-2 rounded-lg" src={item.imageLoc} alt=""/>
                                    <div className="relative flex py-3 items-center">
                                        <span className="flex-shrink font-bold text-2xl pr-2">Projects</span>
                                        <div class="flex-grow border-t border-gray-400"></div>
                                    </div>
                                    <h1>Summin - Summin - Summin</h1>
                                    <p className="py-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur quia officia odio nulla consectetur aperiam ad tempora magni magnam nesciunt.</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}