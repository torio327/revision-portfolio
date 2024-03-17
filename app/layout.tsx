import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: '%s  | My portfolio',
    description: '自己紹介、ブログなどをまとめたポートフォリオサイトです',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
        <body className={'relative'}>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
