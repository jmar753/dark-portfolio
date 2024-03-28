import SideReveal from "../animation/SideReveal"

export default function SideNav({handleclick, ref1, ref2, ref3, ref4, ref5}){
    const navArray = [{name:"About" , delay:0.35, reference: ref2},{name:"Projects" , delay:0.45, reference: ref3},{name:"Timeline" , delay:0.55, reference: ref4},{name:"Contact" , delay:0.65, reference: ref5},]

    return(
    <SideReveal>
        <div className="h-screen bg-zinc-950 text-white hidden sm:sticky top-0 w-14 z-50 flex-col">
            <div className="h-16 w-14 flex justify-center items-center text-2xl font-bold">
                <button onClick={()=>{
                    ref1.current?.scrollIntoView({behavior: 'smooth'})}} className="w-12 h-12 rounded-md flex justify-center items-center bg-neutral-900 hover:cursor-pointer hover:bg-neutral-800">
                    J<span className="text-orange-500">r</span>
                </button>
            </div>
            {navArray.map((item, index)=>(
                <button onClick={()=>{
                    item.reference.current?.scrollIntoView({behavior: 'smooth'})}}
                    className="w-14 h-32 flex justify-center items-center hover:bg-neutral-800 hover:border-orange-500 hover:border-r" 
                    key={index}
                    >
                        <SideReveal propDelay={item.delay}>
                            <h1 className="rotate-90 text-xl">{item.name}</h1>
                        </SideReveal>
                </button>
            ))}
        </div>
    </SideReveal>
    )
}