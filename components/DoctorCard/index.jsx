import Link from 'next/link';

export default function DoctorCard() {
  return (
    <Link href="/dokter/1">
      <a className="group">
        <div className="flex flex-row justify-between w-full mb-8">
          <div className="flex flex-col">
            <div className="flex flex-col w-full bg-white shadow rounded-lg">
              <div className="flex flex-col w-full">
                <img src="/images/1.jpg" className="w-full rounded-t-lg" />
              </div>
              <div className="flex flex-col w-full p-4">
                <h2 className="text-2xl font-bold group-hover:underline">
                  Dr. H. Siti Nurhayati, M.Si
                </h2>
                <p className="text-xl mt-4">Dokter Hewan</p>
                <p className="text-lg">Rp. 100.000</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
