import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      
      {/* HERO */}
      <div className="bg-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl font-bold">
          Temukan Penerbangan Terbaik
        </h1>
        <p className="mt-2 text-blue-100">
          Bandingkan harga & pilih yang terbaik ✈️
        </p>
      </div>

      {/* SEARCH BOX */}
      <div className="max-w-5xl mx-auto -mt-10 bg-white rounded-2xl shadow-xl p-6">
        
        {/* TAB */}
        <div className="flex gap-4 mb-4">
          <button className="font-semibold text-blue-600 border-b-2 border-blue-600">
            Sekali Jalan
          </button>
          <button className="text-gray-400">
            Pulang Pergi
          </button>
        </div>

        {/* FORM */}
        <div className="grid sm:grid-cols-2 gap-4">
          <input className="p-3 border rounded-lg" placeholder="Dari" />
          <input className="p-3 border rounded-lg" placeholder="Ke" />
          <input type="date" className="p-3 border rounded-lg" />
          <input className="p-3 border rounded-lg" placeholder="Penumpang" />
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg">
          🔍 Cari Penerbangan
        </button>
      </div>

      {/* DESTINASI */}
      <div className="max-w-5xl mx-auto mt-10 px-6">
        <h2 className="text-xl font-semibold mb-4">
          Destinasi Populer
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Bali", "Singapore", "Tokyo", "Dubai"].map((kota) => (
            <div
              key={kota}
              className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition"
            >
              <p className="font-semibold">{kota}</p>
              <p className="text-sm text-gray-500">
                Mulai dari Rp 900.000
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}