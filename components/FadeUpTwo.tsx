import {motion} from "framer-motion";
import Image from "next/image";
import {FadeUpTwoProps} from "@/types";
import {Klee_One} from "next/font/google";

const KleeOne = Klee_One({
    weight: "400",
    preload: false,
})
export default function FadeUpTwo({
                                      initial,
                                      whileInView,
                                      viewport,
                                      transition,
                                      variants,
                                      FadeUpTwoImage,
                                      FadeUpTwoAlt,
                                      FadeUpTwoTextOne,
                                      FadeUpTwoTextTwo,
                                      FadeUpTwoStyle
                                  }: FadeUpTwoProps) {
    return (
        <>
            <motion.div
                initial={initial}
                whileInView={whileInView}
                viewport={viewport}
                transition={transition}
                variants={variants}
                className={FadeUpTwoStyle}>
                <div className={" flex flex-col mt-56 lg:flex-row"}>
                    <div className="ml-9 max-lg:mx-auto">
                        <Image src={FadeUpTwoImage} alt={FadeUpTwoAlt} width={600} height={400}/>
                    </div>
                    <div className={" max-lg:mt-10"}>
                        <div className={"w-[500px] ml-28 grid gap-y-4"}>
                            <p className={KleeOne.className}>
                                {FadeUpTwoTextOne}
                            </p>
                            <p className={`${KleeOne.className} text-2xl`}>
                                {FadeUpTwoTextTwo}
                            </p>
                        </div>

                    </div>
                </div>
            </motion.div>


        </>
    )
}