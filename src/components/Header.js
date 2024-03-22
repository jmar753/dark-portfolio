import { useState, useRef, useEffect} from "react";

export default function Header(){
    const [check, setCheck] = useState(false)
    const newRef = useRef(null)
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

    const navOptions = [
        {value:"Home", route:"#Home"},
        {value:"Timeline", route:"#Timeline"},
        {value:"Portfolio", route:"#Portfolio"},
    ]

    const navOptionsMobile = [
        {value:"Home", route:"#Home"},
        {value:"About", route:"#About"},
        {value:"Timeline", route:"#Timeline"},
        {value:"Portfolio", route:"#Portfolio"},
    ]

    return(
        <div className="bg-neutral-900 text-white w-full flex justify-between font-semibold h-11 fixed top-0 z-40 text-xl py-2 px-2 md:px-11 md:shadow-md">
            Hello, this is a test
        </div>
    )
}