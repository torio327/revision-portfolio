import {Metadata} from "next";
import Navbar from "../../components/Navbar";
import FadeUp from "../../components/FadeUp";
import FadeUpTwo from "../../components/FadeUpTwo";
import {Cousine, Klee_One} from "next/font/google";

export const metadata:Metadata={
    title:"About",
    description:"これまでのプログラミング学習の体験についてです"
}

const Cous = Cousine({
    weight: "400",
    preload: false
})

const KleeOne = Klee_One({
    weight: "400",
    preload: false,
})
export default function Page() {
    return (
        <>
            <title>About</title>
            <div className={"back"}>
                <div className={"bg-fixed bg-center bg-[url('/image/lake_half_trans.png')] bg-cover w-fill"}>
                    <div>
                        <Navbar/>
                        <h1 className={`${Cous.className} text-4xl text-center text-white`}>About</h1>
                        <div className={"flex justify-center mt-20"}>
                            <p className={`${KleeOne.className} text-4xl text-center`}>2022年からプログラミングの勉強を始めました。</p>
                        </div>
                    </div>


                    <div>
                        <FadeUp initial={'hidden'} whileInView={'visible'} viewport={{once: true}}
                                transition={{duration: 1}}
                                variants={{visible: {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
                                FadeUpImage={'/image/programing-pic-1.jpg'} FadeUpAlt={'pic1'}
                                FadeUpTextOne={'最初は何を書いているのか、どう勉強したらいいのかわからなかった'}
                                FadeUpTextTwo={'だけど、webサイトを作れるようになりたいという考えを胸にプログラミングを続けた'}
                        />
                    </div>
                    <FadeUpTwo initial={'hidden'}
                               whileInView={'visible'}
                               viewport={{once: true}}
                               transition={{duration: 1}}
                               variants={{visible: {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
                               FadeUpTwoImage={'/image/problem-1.jpg'}
                               FadeUpTwoAlt={'pic1'}
                               FadeUpTwoTextOne={' 幾度もエラーに悩まさせ、思うようにコーディングできなくなった時もあった\n'}
                               FadeUpTwoTextTwo={'しかし、作ることが好きという気持ちは無くならなかった'}/>
                    <div className="">
                        <FadeUp initial={'hidden'} whileInView={'visible'} viewport={{once: true}}
                                transition={{duration: 1}}
                                variants={{visible: {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
                                FadeUpImage={"/image/web-designer-1.jpg"} FadeUpAlt={"pic3"}
                                FadeUpTextOne={'勉強をし続けて、webサイトを作ることができるようになった'}
                                FadeUpTextTwo={'これからも満足していただけるサイトを作り続けたい'}/>
                    </div>
                    <FadeUpTwo initial={'hidden'}
                               whileInView={'visible'}
                               viewport={{once: true}}
                               transition={{duration: 1}}
                               variants={{visible: {opacity: 1, scale: 1}, hidden: {opacity: 0, scale: 0}}}
                               FadeUpTwoImage={'/image/web-design.jpg'}
                               FadeUpTwoAlt={'pic4'}
                               FadeUpTwoTextOne={'  今後は'}
                               FadeUpTwoTextTwo={' アプリ制作をできるように勉強し続ける\nさらに期待に応えられるサービスの開発をする'}
                               FadeUpTwoStyle={'pb-20'}
                    />
                </div>

            </div>
        </>

    )
}