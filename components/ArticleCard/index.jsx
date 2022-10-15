import Link from 'next/link';

export default function ArticleCard() {
  return (
    <div className="w-full flex flex-row mt-8">
      <div className="w-1/4 mr-4">
        <img
          src="/images/1.jpg"
          className="w-full h-32 object-cover rounded-lg"
          alt="article"
        />
      </div>
      <div className="w-full">
        <h3 className="text-xl font-bold mt-4 md:mt-0">
          <Link href="/artikel/1">
            <a>Cara Menanam Padi Yang Benar Agar Hasil Panen Lebih Baik</a>
          </Link>
        </h3>
        <p className="text-gray-500 mt-2">
          Cara menanam padi yang benar agar hasil panen lebih baik
        </p>
      </div>
    </div>
  );
}
