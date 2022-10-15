import Link from 'next/link';

export default function CategorySection() {
  return (
    <section className="py-8 bg-sky-100">
      <div className="container flex flex-row items-center px-5 py-8 mx-auto text-center lg:px-20">
        <div className="flex flex-col w-full text-left lg:text-center text-xl">
          <Link href="/dokter">
            <a href="/dokter">Konsultasi Dengan Dokter</a>
          </Link>
        </div>
        <div className="flex flex-col w-full text-left lg:text-center text-xl">
          <Link href="/artikel">
            <a href="/artikel">Cari Artikel</a>
          </Link>
        </div>
        <div className="flex flex-col w-full text-left lg:text-center text-xl">
          <Link href="/diskusi">
            <a href="/diskusi">Tanya Dokter</a>
          </Link>
        </div>
      </div>
    </section>
  );
}
