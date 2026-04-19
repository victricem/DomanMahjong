import React from 'react';
import { UserPlus, Plus, Trash2, Cat, ChevronRight } from 'lucide-react';

export function RegisterView({ players, newPlayerName, setNewPlayerName, handleAddPlayer, handleDeletePlayer, setActiveStep }) {
  return (
    <main className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-stone-100">
      <div className="flex justify-between items-center mb-6 border-b-2 border-orange-100 pb-4">
        <h2 className="text-2xl font-bold text-amber-900 flex items-center"><UserPlus className="mr-2 text-orange-500" /> 參賽報名頁面</h2>
        <div className="bg-orange-100 text-orange-800 px-4 py-1 rounded-full font-bold text-sm">已報名：{players.length} 人</div>
      </div>
      <form onSubmit={handleAddPlayer} className="flex gap-3 mb-8">
        <input type="text" value={newPlayerName} onChange={(e) => setNewPlayerName(e.target.value)} placeholder="請輸入參賽者遊戲 ID..." className="flex-1 bg-stone-50 border-2 border-stone-200 rounded-xl px-4 py-3 text-stone-700 focus:outline-none focus:border-orange-400 font-medium" />
        <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors flex items-center shadow-md"><Plus className="w-5 h-5 md:mr-1" /><span className="hidden md:inline">新增</span></button>
      </form>
      <div className="bg-stone-50 rounded-2xl border border-stone-200 overflow-hidden min-h-[300px]">
        {players.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-20 text-stone-400"><Cat className="w-16 h-16 mb-4 opacity-30" /><p className="font-medium">請在上方輸入玩家名稱來新增名單</p></div>
        ) : (
          <ul className="divide-y divide-stone-200 max-h-[60vh] overflow-y-auto p-2">
            {players.map((player, index) => (
              <li key={player.id} className="flex justify-between items-center p-3 hover:bg-white rounded-xl transition-colors">
                <div className="flex items-center"><span className="w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-700 rounded-full font-bold text-sm mr-3">{index + 1}</span><span className="font-bold text-stone-700 text-lg">{player.name}</span></div>
                <button onClick={() => handleDeletePlayer(player.id)} className="text-stone-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-colors" title="移除"><Trash2 className="w-5 h-5" /></button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        <button onClick={() => setActiveStep('info')} className="bg-stone-200 hover:bg-stone-300 text-stone-600 font-bold py-3 px-6 rounded-full transition-colors">上一步</button>
        <button onClick={() => { if (players.length < 4) { alert('至少需要 4 名參賽者喔！'); return; } setActiveStep('matchmaking'); }} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1 flex items-center">
          下一步：賽程配對 <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </main>
  );
}