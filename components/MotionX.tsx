import {motion} from "framer-motion";

export default function MotionX({children}:any){
    return(
        <>
            <motion.div
                initial={{x:-1200}}
                whileInView={{x:1/2}}
                viewport={{once:true}}
                transition={{duration:1.5}}
                variants={{
                    finish:{x:1/2},
                    positionOne:{x:-1200}
                }}
            >
                {children}
            </motion.div>
        </>
    )
}