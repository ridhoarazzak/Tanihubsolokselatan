import React from 'react';
import { ViewState } from '../types';
import { ArrowRight, Sun, CloudRain, Droplets, Sprout, ShoppingBag } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const handleContact = () => {
      // Buka WA Koperasi
      window.open('https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20menjadi%20mitra%20TaniHub', '_blank');
  };

  return (
    <div className="space-y-6 pb-24 animate-in fade-in duration-500">
      {/* Hero Section */}
      <div className="relative h-48 rounded-2xl overflow-hidden mx-4 mt-4 shadow-lg group cursor-pointer" onClick={() => onNavigate(ViewState.MARKET)}>
        <img 
          src="https://picsum.photos/seed/solokselatan/800/400" 
          alt="Pemandangan Solok Selatan" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
          <p className="text-emerald-300 text-xs font-bold uppercase tracking-wider mb-1">Potensi Daerah</p>
          <h2 className="text-white text-2xl font-bold leading-tight">Solok Selatan Lumbung Pangan</h2>
          <div className="flex items-center text-white/90 text-sm mt-2">
            <span>Lihat Produk Lokal</span>
            <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>

      {/* Weather Widget (Simulated) */}
      <div className="bg-white mx-4 p-4 rounded-xl shadow-sm border border-emerald-100">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold text-gray-800">Cuaca Pertanian</h3>
          <span className="text-xs text-gray-400">Padang Aro, Hari Ini</span>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex-1 bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
            <Sun className="text-orange-500 mb-1" size={20} />
            <span className="text-sm font-bold text-gray-700">28°C</span>
            <span className="text-[10px] text-gray-500">Cerah</span>
          </div>
          <div className="flex-1 bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
            <CloudRain className="text-blue-500 mb-1" size={20} />
            <span className="text-sm font-bold text-gray-700">60%</span>
            <span className="text-[10px] text-gray-500">Kelembaban</span>
          </div>
          <div className="flex-1 bg-blue-50 p-3 rounded-lg flex flex-col items-center text-center">
            <Droplets className="text-cyan-500 mb-1" size={20} />
            <span className="text-sm font-bold text-gray-700">Sedang</span>
            <span className="text-[10px] text-gray-500">Curah Hujan</span>
          </div>
        </div>
      </div>

      {/* Feature Menu */}
      <div className="mx-4">
        <h3 className="font-semibold text-gray-800 mb-3">Layanan Utama</h3>
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={() => onNavigate(ViewState.AI_EXPERT)}
            className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 p-4 rounded-xl text-left transition-all active:scale-95"
          >
            <div className="bg-emerald-500 w-10 h-10 rounded-full flex items-center justify-center text-white mb-3 shadow-sm">
              <Sprout size={20} />
            </div>
            <h4 className="font-bold text-gray-800 text-sm">Dokter Tanaman</h4>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">Diagnosa penyakit tanaman dengan foto AI.</p>
          </button>
          
          <button 
            onClick={() => onNavigate(ViewState.MARKET)}
            className="bg-orange-50 hover:bg-orange-100 border border-orange-200 p-4 rounded-xl text-left transition-all active:scale-95"
          >
            <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white mb-3 shadow-sm">
              <ShoppingBag size={20} />
            </div>
            <h4 className="font-bold text-gray-800 text-sm">Pasar Tani</h4>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2">Jual beli hasil panen langsung dari petani.</p>
          </button>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mx-4 bg-gradient-to-r from-emerald-800 to-teal-900 rounded-xl p-5 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="font-bold text-lg mb-1">Daftar Jadi Mitra Tani?</h3>
          <p className="text-sm opacity-90 mb-3 max-w-[80%]">Dapatkan akses pasar yang lebih luas dan bimbingan teknis.</p>
          <button 
            onClick={handleContact}
            className="bg-white text-emerald-900 text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            Hubungi Koperasi
          </button>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
           <Sprout size={120} />
        </div>
      </div>
    </div>
  );
};

export default HomeView;