import {client} from "@/libs/client";
import Link from "next/link";
import Image from "next/image";
import {Klee_One} from "next/font/google";
import {createClient} from "microcms-js-sdk";


const KleeOne = Klee_One({
    weight: "400",
    preload: false,
})

async function getContents(){
    // @ts-ignore


    const response=await client.getList({
        customRequestInit:{
            cache:"no-store",
        },
        endpoint:"blogthree",
    })
    return response.contents;
}


export default async function ShowPost() {
    const contents = await getContents();
    return (
        <>
            <div className="flex justify-center mx-auto flex-wrap max-md:flex-col items-center ">
                {contents.map((blog: any) => (
                    <Link href={`/BlogTwo/${blog.id}`} key={blog.id}
                          className={"border-2 border-white border-opacity-60 rounded-lg overflow-hidden w-1/4 h-[350px] m-12  max-md:w-1/2"}>
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