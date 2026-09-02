import Navbar from "@/components/generals/Navbar";
import "./globals.css";
import Footer from "@/components/generals/Footer";

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
