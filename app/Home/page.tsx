import {Metadata} from "next";
import HomeContent from "@/app/Home/HomeContent";
export const metadata:Metadata={
    title:"homepage",
}
export default function Home() {

    return (
        <>
           <HomeContent/>
        </>
    )
}
