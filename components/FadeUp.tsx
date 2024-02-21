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
                <div className={"relative py-[150px] "}>
                    <div className={"absolute ml-9 top-1/2 w-[500px] grid gap-y-4"}>
                        <p className={KleeOne.className}>{FadeUpTextOne}</p>
                        <p className={`${KleeOne.className} text-2xl`}>{FadeUpTextTwo}</p>
                    </div>
                    <div className="flex justify-end">
                        <Image src={FadeUpImage} alt={FadeUpAlt} width={600} height={400}
                               className={"mr-8"}/>
                    </div>
                </div>
            </motion.div>
        </>
    )
}