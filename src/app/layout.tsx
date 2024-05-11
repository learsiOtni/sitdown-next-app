'use client';

import "./globals.css"
import Layout from '@/components/Layout/Layout';
import { Roboto } from "next/font/google";
import StoreProvider from "./StoreProvider";

const roboto = Roboto({
    weight: '400',
    subsets: ["latin"]
});

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={roboto.className}>
                <StoreProvider>
                    <Layout>
                        {children}
                    </Layout>
                </StoreProvider>
            </body>
        </html>
    )
}