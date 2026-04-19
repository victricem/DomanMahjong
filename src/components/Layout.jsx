import React from 'react';
import { Cat, Coffee, Info, UserPlus, Shuffle, Trophy, Network, ChevronRight } from 'lucide-react';

export function Header({ handleResetAll }) {
  return (
    <header className="max-w-7xl mx-auto mb-8 relative">
      <div className="bg-white rounded-3xl p-6 md:p-8 border-4 border-orange-100 shadow-xl relative overflow-hidden">
        <Cat className="absolute -bottom-4 -right-4 w-32 h-32 text-orange-50 opacity-50 rotate-12" />
        <Coffee className="absolute -top-6 -left-6 w-24 h-24 text-amber-50 opacity-50 -rotate-12" />
        <button onClick={handleResetAll} className="absolute right-4 top-4 text-xs text-stone-400 hover:text-red-500 border border-stone-200 hover:border-red-200 px-3 py-1 rounded-full transition-colors bg-white z-10">
          重置系統
        </button>
        <div className="flex flex-col items-center justify-center relative z-10">
          <div className="flex items-center space-x-3 mb-2">
            <Cat className="w-10 h-10 text-orange-500" />
            <h1 className="text-3xl md:text-4xl font-black text-amber-900 tracking-wide text-center">
              貓咪咖啡館 <span className="text-orange-500 block md:inline mt-2 md:mt-0">多瑪雀王爭霸戰</span>
            </h1>
          </div>
          <p className="text-stone-500 font-medium tracking-widest mt-1 text-sm md:text-base">CAT CAFE MAHJONG TOURNAMENT</p>
        </div>
      </div>
    </header>
  );
}

export function StepIndicator({ activeStep, setActiveStep }) {
  const steps = [
    { id: 'info', icon: Info, label: '1. 說明' },
    { id: 'register', icon: UserPlus, label: '2. 報名' },
    { id: 'matchmaking', icon: Shuffle, label: '3. 賽程與記分' },
    { id: 'tournament', icon: Trophy, label: '4. 排行榜' },
    { id: 'bracket', icon: Network, label: '5. 晉級階梯' }
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-1 md:gap-3 mb-8 text-xs md:text-sm font-bold">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <button 
            onClick={() => setActiveStep(step.id)} 
            className={`flex items-center px-3 py-2 rounded-full transition-colors ${activeStep === step.id ? 'bg-orange-500 text-white shadow-md' : 'bg-stone-200 text-stone-500 hover:bg-stone-300'}`}
          >
            <step.icon className="w-4 h-4 md:mr-1" /> <span className="hidden md:inline">{step.label}</span>
          </button>
          {index < steps.length - 1 && <ChevronRight className="text-stone-300 w-4 h-4" />}
        </React.Fragment>
      ))}
    </div>
  );
}