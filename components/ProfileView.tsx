import React from 'react';
import { User, Settings, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

const ProfileView: React.FC = () => {
  const handleFeature = (feature: string) => {
    alert(`Fitur "${feature}" akan segera hadir di pembaruan berikutnya!`);
  };

  return (
    <div className="pb-24 p-4 animate-in fade-in duration-500">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center mb-6">
        <div className="w-20 h-20 bg-gray-200 rounded-full mb-3 overflow-hidden border-4 border-emerald-50">
            <img src="https://picsum.photos/seed/farmer/200/200" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-lg font-bold text-gray-800">Uda Petani</h2>
        <p className="text-sm text-gray-500">Nagari Pakan Rabaa</p>
        <div className="mt-4 flex gap-3 w-full">
            <div className="flex-1 bg-emerald-50 rounded-lg p-3 text-center">
                <p className="text-xl font-bold text-emerald-700">12</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Produk</p>
            </div>
            <div className="flex-1 bg-orange-50 rounded-lg p-3 text-center">
                <p className="text-xl font-bold text-orange-700">4.8</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">Rating</p>
            </div>
        </div>
      </div>

      <div className="space-y-3">
        {[
          { icon: <User size={18} />, label: 'Edit Profil' },
          { icon: <Settings size={18} />, label: 'Pengaturan' },
          { icon: <HelpCircle size={18} />, label: 'Bantuan' },
        ].map((item, index) => (
          <button 
            key={index} 
            onClick={() => handleFeature(item.label)}
            className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3 text-gray-700">
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        ))}
        
        <button 
           onClick={() => {
             if(confirm('Apakah Anda yakin ingin keluar?')) {
               alert('Anda telah keluar.');
             }
           }}
           className="w-full bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:bg-red-50 transition-colors mt-6"
        >
            <div className="flex items-center gap-3 text-red-500">
              <LogOut size={18} />
              <span className="text-sm font-medium">Keluar</span>
            </div>
            <ChevronRight size={16} className="text-red-300" />
        </button>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-400">TaniHub Solok Selatan v1.0.1 (Beta)</p>
        <p className="text-[10px] text-gray-300 mt-1">Dibuat dengan ❤️ untuk Petani Indonesia</p>
      </div>
    </div>
  );
};

export default ProfileView;