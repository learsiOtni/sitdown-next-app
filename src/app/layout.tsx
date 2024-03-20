'use client';

import "./globals.css"
import Layout from '@/components/Layout/Layout';
import { Roboto } from "next/font/google";
import ReduxProvider from "../store/provider";
import { fetchUpdates } from "../store/updatesSlice";
import { store } from "../store/store";

const roboto = Roboto({
    weight: '400',
    subsets: ["latin"]
});

store.dispatch( fetchUpdates() );

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <ReduxProvider>
                    <Layout>
                        {children}
                    </Layout>
                </ReduxProvider>
            </body>
        </html>
    )
}