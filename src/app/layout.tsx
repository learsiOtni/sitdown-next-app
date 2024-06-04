import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Layout from '@/components/Layout/Layout';
import StoreProvider from "./StoreProvider";
import "./globals.css"

const roboto = Roboto({
    weight: '400',
    subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Sitdown-App",
  description: "A social app for project management!",
};

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