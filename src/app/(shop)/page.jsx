import ArticleCard from "@/components/card/ArticleCard";
import Accordion from "@/components/Accordion"

export const metadata = {
  title: "Dara | Home",
  description: "Dara Home Page",
};

export default function Home() {
  return (
    <div>
      <section className="h-screen bg-orange-200/40">

      </section>
      <section className="p-8 space-y-8">
        <h2 className="text-3xl font-bold text-center">Articles</h2>
        <div className="flex">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </section>
      <section className="flex justify-center items-center p-8 bg-amber-500/50">
        <Accordion />
      </section>
    </div>
  );
}
