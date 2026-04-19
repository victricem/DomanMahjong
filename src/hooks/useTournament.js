import { useState, useMemo, useEffect } from 'react';

export function useTournament() {
  const [activeStep, setActiveStep] = useState('info');

  const [players, setPlayers] = useState(() => {
    const saved = localStorage.getItem('catcafe_mahjong_players');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [matches, setMatches] = useState(() => {
    const saved = localStorage.getItem('catcafe_mahjong_matches');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [newPlayerName, setNewPlayerName] = useState('');

  const [schedule, setSchedule] = useState(() => {
    const saved = localStorage.getItem('catcafe_mahjong_schedule');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0 && Array.isArray(parsed[0].tables[0])) return [];
      return parsed;
    }
    return [];
  });

  const [bracket, setBracket] = useState(() => {
    const saved = localStorage.getItem('catcafe_mahjong_bracket');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => { localStorage.setItem('catcafe_mahjong_players', JSON.stringify(players)); }, [players]);
  useEffect(() => { localStorage.setItem('catcafe_mahjong_matches', JSON.stringify(matches)); }, [matches]);
  useEffect(() => { localStorage.setItem('catcafe_mahjong_schedule', JSON.stringify(schedule)); }, [schedule]);
  useEffect(() => { localStorage.setItem('catcafe_mahjong_bracket', JSON.stringify(bracket)); }, [bracket]);

  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      if (a.status === 'eliminated' && b.status !== 'eliminated') return 1;
      if (a.status !== 'eliminated' && b.status === 'eliminated') return -1;
      return b.points - a.points;
    });
  }, [players]);

  const handleAddPlayer = (e) => {
    e.preventDefault();
    if (!newPlayerName.trim()) return;
    setPlayers([...players, { id: Date.now(), name: newPlayerName.trim(), points: 0, status: 'active' }]);
    setNewPlayerName('');
  };

  const handleDeletePlayer = (id) => {
    if (window.confirm('確定要移除這位參賽者嗎？')) {
      setPlayers(players.filter(p => p.id !== id));
    }
  };

  const handleTableScoreChange = (rIdx, tIdx, pIdx, value) => {
    if (!/^-?\d*$/.test(value)) return;
    const newSchedule = [...schedule];
    newSchedule[rIdx].tables[tIdx].scores[pIdx].points = value;
    setSchedule(newSchedule);
  };

  const handleSubmitTableScore = (rIdx, tIdx) => {
    const table = schedule[rIdx].tables[tIdx];
    if (table.scores.some(s => s.points === '' || s.points === '-')) {
      alert("請填寫此桌所有玩家的有效點數！");
      return;
    }

    const updatedPlayers = players.map(player => {
      const scoreObj = table.scores.find(s => s.playerId === player.id);
      if (scoreObj) {
        return { ...player, points: player.points + Number(scoreObj.points) };
      }
      return player;
    });

    const matchRecord = {
      id: Date.now(),
      stage: `初賽 (第 ${schedule[rIdx].round} 局 - 第 ${tIdx + 1} 桌)`,
      ref: { rIdx, tIdx },
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      details: table.players.map((p, i) => ({
        player: p.name,
        pointsChange: Number(table.scores[i].points)
      }))
    };

    const newSchedule = [...schedule];
    newSchedule[rIdx].tables[tIdx].isSubmitted = true;

    setPlayers(updatedPlayers);
    setMatches([matchRecord, ...matches]);
    setSchedule(newSchedule);
  };

  const handleUndoLastMatch = () => {
    if (matches.length === 0) return;
    if (!window.confirm('確定要撤銷最新的一筆成績嗎？')) return;
    
    const lastMatch = matches[0];
    const updatedPlayers = players.map(player => {
      const detail = lastMatch.details.find(d => d.player === player.name);
      return detail ? { ...player, points: player.points - detail.pointsChange } : player;
    });

    if (lastMatch.ref) {
      const { rIdx, tIdx } = lastMatch.ref;
      const newSchedule = [...schedule];
      if (newSchedule[rIdx]?.tables[tIdx]) {
        newSchedule[rIdx].tables[tIdx].isSubmitted = false;
      }
      setSchedule(newSchedule);
    }

    setPlayers(updatedPlayers);
    setMatches(matches.slice(1));
  };

  const handleGenerateSchedule = () => {
    const activePlayers = players.filter(p => p.status === 'active');
    if (activePlayers.length < 4) { alert('喵～活躍玩家不足 4 人，無法進行配對喔！'); return; }

    let bestSchedule = [];
    let bestScore = Infinity;

    for (let attempt = 0; attempt < 150; attempt++) {
      let currentSchedule = [];
      let pairCounts = {}; 
      let leftoverCounts = {}; 
      activePlayers.forEach(p => leftoverCounts[p.id] = 0);
      let currentScore = 0;

      for (let r = 0; r < 3; r++) { 
        let shuffled = [...activePlayers].sort(() => Math.random() - 0.5);
        shuffled.sort((a, b) => leftoverCounts[a.id] - leftoverCounts[b.id]);

        const tableCount = Math.floor(activePlayers.length / 4);
        let roundTables = [];
        let roundLeftovers = shuffled.slice(tableCount * 4);
        roundLeftovers.forEach(p => leftoverCounts[p.id]++);

        let pool = shuffled.slice(0, tableCount * 4);

        for (let t = 0; t < tableCount; t++) {
          let playersInTable = pool.slice(t * 4, t * 4 + 4);
          
          roundTables.push({
            id: `R${r+1}-T${t+1}`,
            players: playersInTable,
            scores: playersInTable.map(p => ({ playerId: p.id, points: '' })),
            isSubmitted: false
          });
          
          for (let i = 0; i < playersInTable.length; i++) {
            for (let j = i + 1; j < playersInTable.length; j++) {
              let p1 = playersInTable[i].id;
              let p2 = playersInTable[j].id;
              let key = p1 < p2 ? p1 + '-' + p2 : p2 + '-' + p1;
              if (pairCounts[key]) {
                currentScore += Math.pow(10, pairCounts[key]); 
                pairCounts[key]++;
              } else {
                pairCounts[key] = 1;
              }
            }
          }
        }
        currentSchedule.push({ round: r + 1, tables: roundTables, leftovers: roundLeftovers });
      }

      if (currentScore < bestScore) {
        bestScore = currentScore;
        bestSchedule = currentSchedule;
        if (bestScore === 0) break; 
      }
    }
    setSchedule(bestSchedule);
  };

  const handleGenerateBracket = (autoConfirm = false) => {
    const activeSorted = sortedPlayers.filter(p => p.status === 'active');
    if (activeSorted.length < 16) {
      if (!window.confirm(`目前活躍人數不足 16 人 (${activeSorted.length}人)。\n仍然要產生晉級表嗎？(不足的位置將以空缺顯示)`)) return false;
    } else if (!autoConfirm && !window.confirm('確定要擷取初賽積分【前 16 名】產生複賽晉級表嗎？')) {
      return false;
    }

    const top16 = activeSorted.slice(0, 16);
    let shuffled16 = [...top16];
    for (let i = shuffled16.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled16[i], shuffled16[j]] = [shuffled16[j], shuffled16[i]];
    }

    const semis = ['A', 'B', 'C', 'D'].map((id, i) => ({
      id: id,
      players: shuffled16.slice(i * 4, i * 4 + 4).map(p => p || null),
      winner: null
    }));

    setBracket({
      semifinals: semis,
      finals: { players: [null, null, null, null], winner: null }
    });
    return true; 
  };

  const handleAdvanceToFinals = (tableIndex, player) => {
    if (!player) return;
    const newBracket = { ...bracket };
    newBracket.semifinals[tableIndex].winner = player;
    newBracket.finals.players[tableIndex] = player;
    
    if (newBracket.finals.winner?.id === bracket.semifinals[tableIndex].winner?.id) {
      newBracket.finals.winner = null;
    }
    setBracket(newBracket);
  };

  const handleSetChampion = (player) => {
    if (!player) return;
    setBracket({ ...bracket, finals: { ...bracket.finals, winner: player } });
  };

  const handleResetAll = () => {
    if (window.confirm('警告：這將會清除「所有參賽者」與「賽事紀錄」，無法復原！確定要重新開始嗎？')) {
      setPlayers([]); setMatches([]); setSchedule([]); setBracket(null);
      localStorage.clear();
      setActiveStep('info');
    }
  };

  // 回傳所有狀態與操作函式供 UI 使用
  return {
    activeStep, setActiveStep,
    players, setPlayers, newPlayerName, setNewPlayerName, sortedPlayers,
    matches, schedule, bracket,
    handleAddPlayer, handleDeletePlayer, handleTableScoreChange, handleSubmitTableScore,
    handleUndoLastMatch, handleGenerateSchedule, handleGenerateBracket,
    handleAdvanceToFinals, handleSetChampion, handleResetAll
  };
}