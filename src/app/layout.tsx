'use client';

import "./globals.css"
import Layout from '@/components/Layout/Layout';
import { Roboto } from "next/font/google";
import StoreProvider from "./StoreProvider";

const roboto = Roboto({
    weight: '400',
    subsets: ["latin"]
});

export type GlobalCSS =
  | "text-title"
  | "text-caption"
  | "text-caption-2"
  | "text-caption-underline"
  | "text-caption-primary"
  | "flex-center"
  | "flex-col-center"
  | "flex-between";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {

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