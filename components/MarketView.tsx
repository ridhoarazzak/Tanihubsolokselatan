import React, { useState } from 'react';
import { SAMPLE_PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';
import { Search, MapPin, Filter, ShoppingBag, MessageCircle } from 'lucide-react';

const MarketView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = SAMPLE_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBuy = (product: Product) => {
    // Simulasi nomor WhatsApp (gunakan nomor dummy untuk demo)
    const phoneNumber = "6281234567890"; 
    const message = `Halo, saya tertarik untuk membeli produk *${product.name}* seharga Rp ${product.price.toLocaleString('id-ID')} per ${product.unit}. Apakah stok masih tersedia?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Membuka WhatsApp di tab baru
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pb-24 animate-in slide-in-from-right duration-500">
      {/* Search & Filter Header */}
      <div className="sticky top-14 z-30 bg-gray-50/95 backdrop-blur-sm pb-2 pt-4 px-4 border-b border-gray-200">
        <div className="relative mb-3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm shadow-sm transition-shadow"
            placeholder="Cari beras, kopi, cabai..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow cursor-pointer group">
            <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold text-emerald-800 shadow-sm">
                {product.category}
              </div>
            </div>
            <div className="p-3 flex flex-col flex-grow">
              <h3 className="text-sm font-bold text-gray-800 line-clamp-2 leading-tight mb-1">{product.name}</h3>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <MapPin size={10} className="mr-1" />
                <span className="truncate">{product.location}</span>
              </div>
              
              <div className="mt-auto pt-2 border-t border-gray-50 flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-gray-500">Harga</p>
                  <p className="text-emerald-600 font-bold">
                    Rp {product.price.toLocaleString('id-ID')}
                    <span className="text-gray-400 text-xs font-normal">/{product.unit}</span>
                  </p>
                </div>
                <button 
                  onClick={() => handleBuy(product)}
                  className="bg-emerald-100 text-emerald-700 p-2 rounded-lg hover:bg-emerald-600 hover:text-white transition-all active:scale-95 shadow-sm"
                  title="Hubungi Penjual via WhatsApp"
                >
                  <MessageCircle size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Filter size={48} className="mb-4 opacity-20" />
          <p>Tidak ada produk ditemukan</p>
        </div>
      )}
    </div>
  );
};

export default MarketView;