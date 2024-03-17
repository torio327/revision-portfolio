
import Image from "next/image";
import {client} from "@/libs/client";
import {Metadata} from "next";

export const generateMetadata=async({params}:{params:{BlogTwoId:string}}):Promise<Metadata>=>{
    const {OneData,thumbnailUrl}=await getBlog({params});

    return{
        title:OneData[0].title,
        description:"ブログの詳細ページです"
    }
}


async function getContents(){
    // @ts-ignore


    const data=await client.getList({
        customRequestInit:{
            cache:"no-store",
        },
        endpoint:"blogthree",
    })
    return data;
}

const getBlog=async({params}:{params:{BlogTwoId:string}})=>{
    const data = await getContents();
    console.log(data);

    const OneData = data.contents.filter((content: any) => {
        return content.id === params.BlogTwoId
    })
    console.log(OneData);
    console.log(OneData[0].title);
    const thumbnailUrl = OneData[0].thumbnail.url;
    console.log(thumbnailUrl);

    return {OneData, thumbnailUrl};
}

export default async function BlogTwoDetails({params}: { params: { BlogTwoId: string }; }) {
    const {OneData,thumbnailUrl} = await getBlog({params});
    return (
        <>
            <div className="mt-14">
                <h1 className={'text-5xl text-center'}>{OneData[0].title}</h1>
                <Image src={thumbnailUrl} alt={'thumbnail'} width={600} height={400} className={'mx-auto mt-24'}/>
                <div className="flex justify-center mx-5">
                    <div dangerouslySetInnerHTML={{__html: OneData[0].content}} className={'mt-10 mb-20 w-[900px] leading-10'}/>
                </div>
            </div>

        </>
    )
}