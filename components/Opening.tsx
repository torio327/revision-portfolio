import {motion} from "framer-motion";

interface Props{
    children:any;
}

const cardVariants = {
    offscreen:{
        x:-1200
    },
    onscreen: {
        x: 1/2,
        transition:{
            type: 'spring',
            bounce:0.4,
            duration:2.0
        }
    }
};

const hue=(h:number)=>`hsl(${h},100%,50%)`;
export default function Opening({children}:Props){


    return(
        <>
            <motion.div
            className={'card-container'}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:true,amount:0.8}}
            >
            <motion.div
            className={'card'}
            variants={cardVariants}
            >
                {children}
            </motion.div>
            </motion.div>
        </>
    )
}