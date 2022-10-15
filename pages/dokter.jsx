import Head from "next/head";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchDoctor from "../components/SearchDoctor";

export default function dokter() {
  return (
    <div>
      <Head>
        <title>Rumah Ternak</title>
        <link rel="icon" href="/logo/icon.png" />
      </Head>
      <main>
        <Navbar />
        <div className="w-full bg-white shadow-2xl mx-auto text-center py-12 bg-blue-500 ">
          <div className="container mx-auto text-left justify-center">
            <h1 className="text-4xl font-bold text-white">Cari Dokter</h1>
            <SearchDoctor />
          </div>
        </div>
        <div className="container mx-auto text-left w-3/4 mt-12">
          <p className="text-xl font-bold mb-8">List Dokter</p>
          <div className="grid grid-cols-3 gap-4">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
