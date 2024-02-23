'use client';
import {Navbar} from "@/components";
import ShowPost from "@/components/ShowPost";


export default function Page() {

    return (
        <>
            <div className="bg-fixed bg-[url('/image/pink.jpg')] bg-cover">
                <Navbar/>
                <ShowPost/>
            </div>


        </>
    )

}