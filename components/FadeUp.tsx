import {motion} from "framer-motion";
import Image from "next/image";
import {Klee_One} from "next/font/google";
import {FadeUpProps} from "@/types";

const KleeOne = Klee_One({
    weight: "400",
    preload: false,
})
export default function FadeUp({
                                   initial,
                                   whileInView,
                                   viewport,
                                   transition,
                                   variants,
                                   FadeUpImage,
                                   FadeUpAlt,
                                   FadeUpTextOne,
                                   FadeUpTextTwo,
                                   FadeUpStyle
                               }: FadeUpProps) {
    return (
        <>
            <motion.div
                initial={initial}
                whileInView={whileInView}
                viewport={viewport}
                transition={transition}
                variants={variants}
                className={FadeUpStyle}
            >
                <div className={"relative py-[150px] flex flex-col items-center lg:flex-row"}>

                    <Image src={FadeUpImage} alt={FadeUpAlt} width={600} height={400}
                           className={'w-full lg:mr-10  max-md:w-auto max-lg:w-auto lg:order-2'}/>
                    <div className={"ml-9 mb-4 lg:mb-0 lg:mr-8 lg:order-1 max-lg:mt-10"}>
                        <p className={KleeOne.className}>{FadeUpTextOne}</p>
                        <p className={`${KleeOne.className} text-2xl`}>{FadeUpTextTwo}</p>
                    </div>
                </div>

            </motion.div>
        </>
    )
}