import ArticleCard from "../ArticleCard";

export default function ArticleList() {
  return (
    <article className="container mx-auto text-left w-3/4 mt-12">
      <h2 className="text-4xl font-bold">Artikel Peternakan</h2>
      <p className="text-xl mt-4">
        Artikel terbaru tentang peternakan dan ternak
      </p>
      <div className="flex flex-col mt-8">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </article>
  );
}
