import {motion} from "framer-motion";

export default function MotionScale({children}:any) {
    return (
        <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
        >
            {children}
        </motion.button>
    )

}