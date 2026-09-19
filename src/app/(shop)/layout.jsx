import Navbar from "@/components/generals/Navbar";
import "../globals.css";
import Footer from "@/components/generals/Footer";
import { Toaster } from "@/components/ui/toast";

export const metadata = {
  title: "Dara",
  description: "e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="flex min-h-full overflow-x-hidden flex-col bg-white">
        <Toaster />
        <Navbar page='Home' />
        <main className="grow w-full mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
