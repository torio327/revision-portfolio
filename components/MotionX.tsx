import {motion} from "framer-motion";

export default function MotionX({children}:any){
    return(
        <>
            <motion.div
                initial={'positionOne'}
                whileInView={'finish'}
                viewport={{once:true}}
                transition={{duration:1.5}}
                variants={{
                    finish:{x:1/2},
                    positionOne:{x:-500}
                }}
            >
                {children}
            </motion.div>
        </>
    )
}