import ArticleCard from "@/components/card/ArticleCard";
import Accordion from "@/components/Accordion"
import Image from "next/image";
import Link from "next/link";
import ArticleSection from "@/components/section/ArticleSection";

export const metadata = {
  title: "Dara | Home",
  description: "Dara Home Page",
};

export default function Home() {
  return (
    <div>
      <section className="h-lvh flex md:mb-62 bg-orange-200/40">
        <div className="w-2/5 flex-4 h-full p-2 flex flex-col justify-center items-center">
          <div className="flex p-6 gap-6 flex-col justify-center items-start">
            <div>
              <h2 className="text-7xl md:text-9xl font-bold">Dara is</h2>
              <p className="text-2xl md:text-4xl font-bold">What You Want.</p>
            </div>
            <div className="space-y-4">
              <p className="flex-wrap  md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, necessitatibus.</p>
              <Link href={'/products'}>
                <div className="bg-red-800/85 w-fit rounded-lg text-white shadow px-6 py-2 cursor-pointer">Products</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-md:hidden w-3/5! flex-6 h-full gap-2 flex justify-center items-center">
          <div className="w-1/2 h-full mt-36">
            <div className="h-lvh relative top-22 overflow-visible">
              <Image alt="clothes pictuer" className="object-contain" fill src='/images/style2.jpg' />
            </div>
          </div>
          <div className="w-1/2 h-full flex-col justify-between pr-4">
            <div className="h-1/2 relative bottom-16 overflow-y-hidden mask-t-from-25% mask-t-to-99%">
              <Image alt="clothes pictuer" className="object-cover shadow" fill src='/images/style3.jpg' />
            </div>
            <div className="h-1/2 relative overflow-y-hidden mask-b-from-25% mask-b-to-97%">
              <Image alt="clothes pictuer" className="object-cover object-top shadow" fill src='/images/style4.jpg' />
            </div>
          </div>
        </div>
      </section>
      <ArticleSection />
      <section className="flex justify-center items-center h-80 max-md:p-6 bg-orange-200/40">
        <Accordion />
      </section>
    </div>
  );
}
