'use client';
import {client} from "@/libs/client";
import Image from "next/image";

export default async function BlogTwoDetails({params}: { params: { BlogTwoId: string }; }) {
    const data = await client.get({
            endpoint: 'blogthree',
        }
    )
    console.log(data);
    const OneData = data.contents.filter((content: any) => {
        return content.id === params.BlogTwoId
    })
    console.log(OneData);
    console.log(OneData[0].title);
    const thumbnailUrl = OneData[0].thumbnail.url;
    console.log(thumbnailUrl);
    return (
        <>
            <div className="mt-14">
                <h1 className={'text-5xl text-center'}>{OneData[0].title}</h1>
                <Image src={thumbnailUrl} alt={'thumbnail'} width={600} height={400} className={'mx-auto mt-24'}/>
                <div className="flex justify-center mx-5">
                    <div dangerouslySetInnerHTML={{__html: OneData[0].content}} className={'mt-10 mb-20 w-[900px]'}/>
                </div>
            </div>

        </>
    )
}