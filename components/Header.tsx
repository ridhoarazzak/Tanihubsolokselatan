import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-emerald-600 text-white shadow-md">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1.5 rounded-full text-emerald-600">
            <Leaf size={18} fill="currentColor" />
          </div>
          <h1 className="font-bold text-lg tracking-tight">TaniHub <span className="font-light opacity-90">Solok Selatan</span></h1>
        </div>
        <div className="text-xs bg-emerald-700 px-2 py-1 rounded-md bg-opacity-50 border border-emerald-500">
          Versi Beta
        </div>
      </div>
    </header>
  );
};

export default Header;