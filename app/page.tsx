'use client';
import Navbar from "@/components/Navbar";
import {useEffect} from "react";
import {gsap} from "gsap";
import Image from "next/image";
import {Playfair_Display} from "next/font/google";
import MotionxTwo from "@/components/MotionxTwo";
import Opening from "@/components/Opening";

const playfair = Playfair_Display({
    weight: "400",
    preload: false,
})

export default function Page() {
    useEffect(() => {
        const tl = gsap.timeline()
        tl.set('.opening', {x: -1080})
            .set('.welcome', {y: -600})
            .set('.to', {y: -400})
            .set('.my', {y: -600})
            .set('.portfolio', {y: -600})
            .set('.link', {})

        tl.to('.opening', {x: 0, duration: 2, rotateY: 360})
            .to('.welcome', {y: '50%', duration: 0.5, rotate: 360})
            .to('.to', {y: '50%', duration: 0.5, rotate: 360})
            .to('.my', {y: '50%', duration: 0.5, rotate: 360})
            .to('.portfolio', {y: '50%', duration: 0.5, rotate: 360})
            .to('.welcome', {rotateX: 360, repeat: -1, duration: 2})
            .to('.to', {rotateX: 360, repeat: -1, duration: 2})
            .to('.my', {rotateX: 360, repeat: -1, duration: 2})
            .to('.portfolio', {rotateX: 360, repeat: -1, duration: 2})
        /* .to('.welcome',{rotateX:0,duration:2,repeat:-1})
         .to('.to',{rotateX:0,duration:2,repeat:-1})
         .to('.my',{rotateX:0,duration:2,repeat:-1})
         .to('.portfolio',{rotateX:0,duration:2,repeat:-1})
          */
    }, []);
    /*
    gsap.set('.titleOne',{
        x:-200
    })
    gsap.to('.titleOne',{
        x:1000,
        scrollTrigger:{
            trigger:'.pointOne',
            start:"top center",
            markers:true,
        },
    });
*/

    return (
        <>
            <div className="overflow-hidden">
                <div className="bg-fixed bg-[url('/image/sunset_half_trans.png')] bg-cover  ">
                    <div className="opening">
                        <div className="h-screen">
                            <Navbar/>

                            <div
                                className="text-7xl text-white flex justify-center items-center gap-x-20 max-md:flex-col">
                                <div className="welcome"> Welcome</div>
                                <div className="to">To</div>
                                <div className="my">My</div>
                                <div className="portfolio">Portfolio</div>
                            </div>


                        </div>
                    </div>
                    <div className="pointOne"></div>
                    <div className={"w-screen h-[700px] pt-[100px] bg-white opacity-80"}>
                        <div className="titleOne">
                            <Opening>
                                <div
                                    className="lg:flex justify-center pt-40 text-center text-7xl gap-x-20 max-md:flex-col ">
                                    <h1 className={playfair.className}>About</h1>
                                    <h1 className={playfair.className}>This</h1>
                                    <h1 className={playfair.className}>Portfolio</h1>
                                </div>
                            </Opening>


                        </div>

                        <div className="w-screen ">
                            <div className={"my-32 flex justify-center gap-x-[50px]"}>
                                <MotionxTwo>
                                    <div className="  w-[300px]">
                                        <p className={'text-black'}> このポートフォリオサイトでは、プロフィール、プログラミングを始めた経緯、ブログをまとめてあります</p>
                                        <p className={'text-'}>また、web制作の依頼も可能です</p>
                                    </div>
                                </MotionxTwo>


                            </div>

                        </div>
                    </div>
                    <div className={"w-screen h-screen"}>
                        <Opening>
                            <h1 className={`${playfair.className} pt-20 text-7xl text-center`}>Profile</h1>
                        </Opening>

                        <div className="">
                            <MotionxTwo>
                                <div className={"my-32 flex justify-center gap-x-[50px]"}>
                                    <div className={"bg-white h-[100px] ml-2"}>
                                        <Image src={"/image/dog_pug.png"} alt={'pug'} width={100} height={100}/>
                                    </div>

                                    <div className="  w-[300px] mr-2">
                                        <p className={''}>愛知県出身のエンジニアです。高校の頃は機械について勉強していました。大学ではフロンティア工学類（機械と電子情報を組み合わせた学類）に所属しています。
                                            子供のころから、
                                            折り紙や紙工作など何かを作ることが好きでした。
                                            高校の頃, 友達に「プログラミングをやってみないか」と言われたことがきっかけで始めました。
                                        </p>

                                    </div>


                                </div>
                            </MotionxTwo>

                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}
