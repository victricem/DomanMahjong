import React from 'react';
import { Crown, Swords, Trophy, Cat, ChevronRight, Shuffle } from 'lucide-react';

export function InfoView({ setActiveStep = () => {} }) {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 animate-fade-in">
      
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl border border-slate-800">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
        <Cat className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-slate-800 opacity-50" />

        <div className="relative z-10 px-6 py-20 md:py-32 flex flex-col items-center text-center">
          <div className="relative mb-6">
            <Crown className="w-24 h-24 md:w-32 md:h-32 text-amber-400 drop-shadow-[0_0_25px_rgba(251,191,36,0.6)]" />

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-4 -right-4 w-10 h-10 text-orange-300 animate-pulse">
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>
              <path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>
            </svg>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-amber-200 tracking-widest drop-shadow-xl mb-6">
            多瑪雀王爭霸戰
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-100/80 font-bold tracking-[0.2em] flex items-center justify-center gap-4">
            <Swords className="w-6 h-6 text-orange-500" /> 
            頂尖對決 
            <Swords className="w-6 h-6 text-orange-500" />
          </p>


          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="px-8 py-3 bg-gradient-to-r from-yellow-500/10 via-amber-400/20 to-yellow-500/10 border border-yellow-400/50 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.25)] backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-400 to-amber-500 tracking-widest drop-shadow-md">
                🏆 總獎金超過百萬 🏆
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm md:text-base text-slate-300 font-bold tracking-widest mt-2 bg-slate-900/60 px-6 py-2.5 rounded-full border border-slate-700/80 backdrop-blur-sm shadow-inner">
              <span className="flex items-center">
                <span className="text-orange-400 mr-2 border-b border-orange-400/50 pb-0.5">主辦</span> 
                <span className="text-white drop-shadow-sm">貓咪咖啡館</span>
              </span>
              <span className="hidden md:inline w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
              <span className="flex items-center">
                <span className="text-orange-400 mr-2 border-b border-orange-400/50 pb-0.5">協辦</span> 
                <span className="text-white drop-shadow-sm">晨曦茶會、T Grove</span>
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-orange-400 hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            <Shuffle className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-3">STAGE 1 : 點數大亂鬥</h3>
          <p className="text-slate-500 leading-relaxed font-medium">
            每位選手須完成 <strong className="text-orange-600 text-lg">3 局</strong> 亂數配對初賽。系統將自動計算累計點數，總點數結算排名前 <strong className="text-orange-600 text-lg">16 強</strong> 的菁英將獲得晉級資格！
          </p>
        </div>


        <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-amber-500 hover:-translate-y-2 transition-transform duration-300 delay-100">
          <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            <Swords className="w-8 h-8 text-amber-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-3">STAGE 2 : 十六強殊死戰</h3>
          <p className="text-slate-500 leading-relaxed font-medium">
            晉級的 16 位強者將被重新打亂，分為 4 桌進行一局定勝負的殘酷淘汰賽。只有 <strong className="text-amber-600 text-lg">該桌第 1 名</strong> 能夠活下來晉級決賽。
          </p>
        </div>


        <div className="bg-white rounded-3xl p-8 shadow-xl border-t-4 border-yellow-400 hover:-translate-y-2 transition-transform duration-300 delay-200">
          <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
            <Trophy className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-800 mb-3">FINAL : 雀王之戰</h3>
          <p className="text-slate-500 leading-relaxed font-medium">
            最後存活的 4 名頂尖高手同桌廝殺！在最後一局中奪得最高點數者，將加冕為本屆貓咪咖啡館的<strong className="text-yellow-600 text-lg">初代多瑪雀王</strong>！
          </p>
        </div>
      </div>


      <div className="bg-gradient-to-br from-stone-800 to-slate-900 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden border border-slate-700">
        <div className="absolute right-0 top-0 w-64 h-full bg-slate-800/50 skew-x-12 transform origin-top"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 shrink-0 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-600 shadow-[0_0_15px_rgba(0,0,0,0.5)]">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-emerald-400">
              <rect width="16" height="20" x="4" y="2" rx="2"/>
              <line x1="8" x2="16" y1="6" y2="6"/>
              <line x1="16" x2="16" y1="14" y2="18"/>
              <path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/>
              <path d="M12 14h.01"/><path d="M8 14h.01"/>
              <path d="M12 18h.01"/><path d="M8 18h.01"/>
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white mb-2 tracking-wide">精確實質點數制</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              本次比賽屏除名次馬點，採用最殘酷也最公平的 <strong className="text-emerald-400">「直接結算最終點數」</strong>。
              預設起步為 25,000 點，結算時請直接輸入最終真實分數（例如：32500、18000、-2000）。
            </p>
          </div>
        </div>
      </div>


      <div className="py-16 text-center">
        <button 
          onClick={() => setActiveStep('register')} 
          className="group relative inline-flex items-center justify-center px-12 py-6 text-2xl md:text-3xl font-black text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-[length:200%_auto] hover:bg-right rounded-full hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] hover:-translate-y-2 transform"
        >

          <span className="absolute inset-0 w-full h-full rounded-full ring-4 ring-orange-500/50 group-hover:ring-orange-400/80 animate-ping opacity-20"></span>
          

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 md:w-10 md:h-10 mr-4 text-yellow-200 animate-pulse">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
          </svg>
          <span className="tracking-widest drop-shadow-md">我準備好了，我要報名！</span>
          <ChevronRight className="w-8 h-8 md:w-10 md:h-10 ml-3 group-hover:translate-x-3 transition-transform duration-300" />
        </button>
        <p className="mt-6 text-stone-500 font-bold tracking-widest text-sm">點擊按鈕進入賽事大廳</p>
      </div>

    </div>
  );
}

export default InfoView;