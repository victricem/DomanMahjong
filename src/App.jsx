import React from 'react';
import { useTournament } from './hooks/useTournament';
import { Header, StepIndicator } from './components/Layout';
import { InfoView } from './views/InfoView';
import { RegisterView } from './views/RegisterView';

// 記得把你拆好的其他三個 View 也 import 進來
// import { MatchmakingView } from './views/MatchmakingView';
// import { TournamentView } from './views/TournamentView';
// import { BracketView } from './views/BracketView';

export default function App() {
  // 將所有邏輯透過自訂 Hook 一次拉進來
  const tournamentState = useTournament();

  return (
    <div className="min-h-screen bg-[#FAF5EE] text-stone-800 font-sans p-4 md:p-8">
      <Header handleResetAll={tournamentState.handleResetAll} />
      
      <StepIndicator 
        activeStep={tournamentState.activeStep} 
        setActiveStep={tournamentState.setActiveStep} 
      />

      {/* 根據狀態切換視圖 (路由概念的雛形) */}
      {tournamentState.activeStep === 'info' && (
        <InfoView setActiveStep={tournamentState.setActiveStep} />
      )}
      
      {tournamentState.activeStep === 'register' && (
        <RegisterView 
          players={tournamentState.players}
          newPlayerName={tournamentState.newPlayerName}
          setNewPlayerName={tournamentState.setNewPlayerName}
          handleAddPlayer={tournamentState.handleAddPlayer}
          handleDeletePlayer={tournamentState.handleDeletePlayer}
          setActiveStep={tournamentState.setActiveStep}
        />
      )}

      {/* {tournamentState.activeStep === 'matchmaking' && <MatchmakingView {...tournamentState} />}
      {tournamentState.activeStep === 'tournament' && <TournamentView {...tournamentState} />}
      {tournamentState.activeStep === 'bracket' && <BracketView {...tournamentState} />}
      */}
    </div>
  );
}