import ContactContent from "@/app/Contact/ContactContent";
import {Metadata} from "next";

export const metadata:Metadata={
    title:"Contact",
    description:"連絡はこちらからお願いします"
}

export default function Page() {

    return (
       <>
           <ContactContent/>
       </>
    )
}