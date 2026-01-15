import React from 'react';
import { Home, ShoppingBag, Sprout, User } from 'lucide-react';
import { ViewState } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const navItems = [
    { view: ViewState.HOME, label: 'Beranda', icon: <Home size={24} /> },
    { view: ViewState.MARKET, label: 'Pasar', icon: <ShoppingBag size={24} /> },
    { view: ViewState.AI_EXPERT, label: 'Tanya Ahli', icon: <Sprout size={24} /> },
    { view: ViewState.PROFILE, label: 'Akun', icon: <User size={24} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto">
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => onNavigate(item.view)}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${
              currentView === item.view
                ? 'text-emerald-600 font-semibold'
                : 'text-gray-400 hover:text-emerald-500'
            }`}
          >
            <div className={`mb-1 transition-transform duration-200 ${currentView === item.view ? '-translate-y-1' : ''}`}>
              {item.icon}
            </div>
            <span className="text-[10px] uppercase tracking-wide">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;