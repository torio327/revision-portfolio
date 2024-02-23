'use client';
import {useState} from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Young_Serif} from "next/font/google";

const YoungSerif = Young_Serif({
    weight:"400",
    preload:false,
})

export default function Hamburger() {
    const [swich, setSwich] = useState(false)

    const handleClick = () => {
        setSwich(!swich)
    };

    return (
        <>
            <button onClick={handleClick} className={'w-20 h-20 z-10'}>
                {swich ? (<CloseIcon className={'w-20 h-20 text-center'}/>) : (
                    <MenuIcon className={'text-center w-20 h-20'}/>)}
            </button>

            <div className={`${swich ? 'fixed inset-0 bg-white w-screen h-screen z-10 ' : 'hidden'}  `}>
                <div className="relative flex justify-center items-center bg-amber-300">
                    <div className="mx-auto">
                        <div className=" w-fit">
                            <Link href={"/Home"} className={YoungSerif.className}><h1
                                className="text-4xl">Portfolio</h1></Link>
                        </div>
                    </div>
                    <button onClick={handleClick} className={'w-20 h-20 z-10 mr-6'}>
                        {swich ? (<CloseIcon className={'w-20 h-20 text-center'}/>) : (
                            <MenuIcon className={'text-center w-20 h-20'}/>)}
                    </button>
                </div>


                <div className={'flex flex-col text-center gap-y-12 mt-24'}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/About'}>About</Link>
                    <Link href={'/BlogTwo'}>Blog</Link>
                    <Link href={'/Contact'}>Contact</Link>
                </div>
            </div>
        </>
    )
}