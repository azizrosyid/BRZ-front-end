import Head from "next/head";
import ArticleList from "../components/ArticleList";
import CategorySection from "../components/CategorySection";
import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rumah Ternak</title>
        <link rel="icon" href="/logo/icon.png" />
      </Head>

      <main>
        <Navbar />
        <Jumbotron />
        <CategorySection />
        <ArticleList />
      </main>

      <Footer />
    </div>
  );
}
