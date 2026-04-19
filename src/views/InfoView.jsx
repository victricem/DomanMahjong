import React from 'react';
import { Info, Coffee, Medal, ChevronRight } from 'lucide-react';

export function InfoView({ setActiveStep }) {
  return (
    <main className="max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-stone-100">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center border-b-2 border-orange-100 pb-4">
        <Info className="mr-2 text-orange-500" /> 賽事規則與流程說明
      </h2>
      <div className="space-y-6 text-stone-600 leading-relaxed">
        <section className="bg-orange-50 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-orange-800 mb-3 flex items-center"><Coffee className="w-5 h-5 mr-2" /> 賽事三個階段</h3>
          <ul className="list-disc list-inside space-y-3 ml-2">
            <li><strong className="text-amber-900 bg-amber-100 px-2 py-1 rounded">1. 初賽 (點數戰)：</strong> 每位參賽者須完成 <strong className="text-orange-600">3 局</strong> 比賽。將所有人的點數進行累計，取<strong className="text-orange-600">總點數前 16 名</strong>晉級。</li>
            <li><strong className="text-amber-900 bg-amber-100 px-2 py-1 rounded">2. 複賽 (16強戰)：</strong> 晉級的 16 人分為 4 桌淘汰賽，<strong className="text-orange-600">每桌取第 1 名</strong>晉級。</li>
            <li><strong className="text-amber-900 bg-amber-100 px-2 py-1 rounded">3. 決賽 (冠軍戰)：</strong> 最後 4 名爭奪雀王！</li>
          </ul>
        </section>
        <section className="bg-amber-50 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center"><Medal className="w-5 h-5 mr-2" /> 初賽積分計算方式</h3>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100 text-stone-700">
            <p className="mb-2">採用<strong className="text-emerald-600 text-lg">「直接結算最終點數」</strong>，請輸入實質點數（如：32500）。</p>
          </div>
        </section>
      </div>
      <div className="mt-8 flex justify-center">
        <button onClick={() => setActiveStep('register')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1 flex items-center">
          下一步：前往參賽報名 <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </main>
  );
}