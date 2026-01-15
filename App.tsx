import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import MarketView from './components/MarketView';
import AgriBotView from './components/AgriBotView';
import ProfileView from './components/ProfileView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return <HomeView onNavigate={setCurrentView} />;
      case ViewState.MARKET:
        return <MarketView />;
      case ViewState.AI_EXPERT:
        return <AgriBotView />;
      case ViewState.PROFILE:
        return <ProfileView />;
      default:
        return <HomeView onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-emerald-200">
      {/* 
        Container limited to max-w-md to simulate mobile app experience on desktop 
        while being fully responsive on mobile.
      */}
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative">
        <Header />
        <main className="relative">
          {renderView()}
        </main>
        <Navbar currentView={currentView} onNavigate={setCurrentView} />
      </div>
    </div>
  );
};

export default App;