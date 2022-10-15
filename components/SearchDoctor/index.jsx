export default function SearchDoctor() {
  return (
    <div className="flex flex-col md:flex-row mt-8">
      <div className="w-full md:w-3/4 flex flex-col md:flex-row">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mr-4"
          placeholder="Cari Dokter untuk Konsultasi"
        />
        <button className="w-full px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-600 w-full md:w-auto">
          Cari
        </button>
      </div>
    </div>
  );
}
