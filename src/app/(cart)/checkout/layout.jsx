import Footer from "@/components/generals/Footer";
import Navbar from "@/components/generals/Navbar";
import Link from "next/link";
import "@/app/globals.css";

export const metadata = {
    title: "Dara | cart",
    description: "e-commerce website",
};

export default function CartLayout({ children }) {
    return (
        <html
            lang="en"
            className={`h-full antialiased`}
        >
            <body className="flex min-h-full flex-col bg-white">
                <Navbar />
                <main className="grow container mx-auto">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
