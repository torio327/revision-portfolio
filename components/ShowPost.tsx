import {useEffect, useState} from "react";
import {client} from "@/libs/client";
import Link from "next/link";
import Image from "next/image";
import {Klee_One} from "next/font/google";

const KleeOne = Klee_One({
    weight: "400",
    preload: false,
})

export default function ShowPost() {
    const [post, setPost] = useState([])
    useEffect( () => {
        (async()=>{
            const data=await client.get({
                endpoint:'blogthree',
            });
            console.log(data);
            console.log(data.contents.title);
            setPost(data.contents)  ;
        })();
    }, []);
    return (
        <>
            <div className="flex flex-wrap">
                {post.map((blog: any) => (
                    <Link href={`/BlogTwo/${blog.id}`} key={blog.id}
                          className={"border-2 border-white border-opacity-60 rounded-lg overflow-hidden w-1/4 h-[350px] m-12"}>
                        <div className={'h-[310px] overflow-hidden'}>
                            <h1 className={`${KleeOne.className} text-center text-2xl mt-3 underline`}>{blog.title}</h1>
                            <Image src={blog.thumbnail.url} alt={'thumbnail'} width={600} height={400}/>
                            < div dangerouslySetInnerHTML={{__html: blog.content}}
                                  className={`${KleeOne.className} text-center mt-3`}/>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}