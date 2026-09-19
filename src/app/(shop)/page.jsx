import ArticleCard from "@/components/card/ArticleCard";
import Accordion from "@/components/Accordion"
import Image from "next/image";
import Link from "next/link";
import ArticleSection from "@/components/section/ArticleSection";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Dara | Home",
  description: "Dara Home Page",
};

export default function Home() {
  return (
    <>
      <section className="h-lvh flex md:mb-62 bg-orange-200/40">
        <div className="w-2/5 flex-4 h-full p-2 flex flex-col justify-center items-center">
          <div className="flex p-6 gap-6 flex-col justify-center items-center md:items-start">
            <div>
              <h2 className="text-7xl md:text-9xl font-bold">Dara is</h2>
              <p className="text-2xl md:text-4xl font-bold max-md:text-center">What You Want.</p>
            </div>
            <div className="space-y-4">
              <p className="flex-wrap max-md:text-center md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, necessitatibus.</p>
              <Link href={'/products'}>
                <div className="bg-red-800/85 w-fit max-md:m-auto rounded-lg text-white shadow px-6 py-2 cursor-pointer">Products</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-md:hidden w-3/5! flex-6 h-full gap-2 flex justify-center items-center">
          <div className="w-1/2 h-full mt-36">
            <div className="h-lvh relative top-22 overflow-visible">
              <Image preload={true} alt="clothes pictuer" className="object-contain" fill src='/images/style2.jpg' />
            </div>
          </div>
          <div className="w-1/2 h-full flex-col justify-between pr-4">
            <div className="h-1/2 relative bottom-16 overflow-y-hidden mask-t-from-25% mask-t-to-99%">
              <Image preload={true} alt="clothes pictuer" className="object-cover shadow" fill src='/images/style3.jpg' />
            </div>
            <div className="h-1/2 relative overflow-y-hidden mask-b-from-25% mask-b-to-97%">
              <Image preload={true} alt="clothes pictuer" className="object-cover object-top shadow" fill src='/images/style4.jpg' />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-2 my-12 md:mb-30">
        <h2 className="font-bold text-3xl">How To Use</h2>
        <div className="text-center w-96 text-lg max-md:px-6">onsectetur adipisicing elit. Quasi natus quia expedita. Totam, odio commodi neque similique a sed vel vero! Amet repellat reiciendis impedit perspiciatis sint quisquam at maiores.</div>
        <span className="w-22 h-1 bg-orange-300/40 mt-2 mb-4"></span>
        <div className="flex max-md:flex-col justify-center items-center gap-4">
          <Card size="sm" className='p-1.5 flex flex-col w-48 py-2.5'>
            <CardHeader>
              <CardTitle className='text-3xl! font-bold'>01.</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quos.</p>
            </CardContent>
          </Card>
          <Card size="sm" className='p-1.5 flex flex-col w-48 py-2.5'>
            <CardHeader>
              <CardTitle className='text-3xl! font-bold'>02.</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quos.</p>
            </CardContent>
          </Card>
          <Card size="sm" className='p-1.5 flex flex-col w-48 py-2.5'>
            <CardHeader>
              <CardTitle className='text-3xl! font-bold'>03.</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quos.</p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="bg-orange-200/40 w-full flex justify-center items-center my-12 md:mb-30">
        <div className="flex max-md:flex-col justify-center items-center md:gap-10 max-md:p-10">
          <div className="max-md:hidden bg-white shadow-lg rounded-2xl border rotate-x-4 -rotate-y-30 overflow-hidden flex-4 w-90 h-66">
            <div className="relative w-full h-full">
            <Image fill className="object-contain" alt="Fashion image" src='/images/style4.jpg' />
            </div>
          </div>
          <div className="md:flex-6 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center">
            <h2 className="font-bold text-3xl">Fashion</h2>
            <span className="text-gray-400 text-lg">Be The Best</span>
            <p className="text-center md:text-start text-lg mt-4 w-88">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quidem repudiandae aliquam delectus laudantium iste voluptas ea facilis nobis! Quas maiores in, porro incidunt unde accusamus est. Sunt, quam corporis.</p>
          </div>
        </div>
      </section>

      <ArticleSection />
      <section className="flex justify-center items-center h-80 max-md:p-6 bg-orange-200/40">
        <Accordion />
      </section>
    </>
  );
}
