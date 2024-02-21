"use client"
import { useEffect, useState } from "react";
import React from "react";
import Navbar from "@/components/Navbar";
import MotionWrapper from "@/components/MotionWrapper";


type Post = {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
};


const fetchPost = async (id: number): Promise<Post> => {
    const res = await fetch(`http://torio-blog.local/wp-json/wp/v2/posts/${id}`);
    const data = await res.json();
    console.log(data)
    return data;


};

const Page= () => {
    const [post, setPost] = useState<Post | null>(null);
    const num = typeof window !== 'undefined' ? localStorage.getItem("Input") : null;

    useEffect(() => {
        if (num !== null) {
            const numValue: number = parseInt(num, 10);
            fetchPost(numValue).then((data) => {
                setPost(data);
                console.log(data); // データが取得されたらログに出力
            });
        }
    }, [num]);



    if (!post) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <MotionWrapper>
                <div>
                    <Navbar/>
                    <div className={"mt-14"}>
                        <h2 className={'text-5xl text-center'}>{post.title.rendered}</h2>
                        <div className="flex justify-center ">  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className={"mt-10 mb-20 w-[900px]"}></div></div>
                    </div>

                </div>
            </MotionWrapper>

        </>
    );
};

export default Page;