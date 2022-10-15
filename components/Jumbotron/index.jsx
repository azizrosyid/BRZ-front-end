import Link from 'next/link';
import SearchDoctor from '../SearchDoctor';

export default function Jumbotron() {
  return (
    <div className="w-full bg-white shadow-2xl mx-auto text-center py-12 bg-blue-500">
      <div className="container mx-auto text-left w-3/4 mt-12">
        <h2 className="text-4xl font-bold text-white">
          Konsultasi Hewan Ternak
        </h2>
        <p className="text-xl text-white mt-4">
          Layanan konsultasi hewan ternak di Indonesia
        </p>
        <SearchDoctor />
        <p className="text-white mt-4">
          <Link href="/dokter">
            <a href="/dokter">Lihat semua dokter konsultasi</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
