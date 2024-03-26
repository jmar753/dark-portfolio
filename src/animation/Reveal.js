import {Children, useEffect, useRef} from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Reveal(props){
    return (
        <div>
            <motion.div
                variants={{
                    hidden: {opacity: 0, y:75},
                    visible: {opacity: 1, y:0},
                }}
                initial="hidden"
                animate="visible"
            >
                {props.children}
            </motion.div>
        </div>
    )
}