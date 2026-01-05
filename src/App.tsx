
import React, { useState, useMemo } from 'react';
import { HollandType, Question, ScoreMap } from './types';
import { QUESTIONS, HOLLAND_INFO } from './constants';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const INITIAL_SCORES: ScoreMap = {
  [HollandType.R]: 0,
  [HollandType.I]: 0,
  [HollandType.A]: 0,
  [HollandType.S]: 0,
  [HollandType.E]: 0,
  [HollandType.C]: 0,
};

const TYPE_ICONS: Record<HollandType, React.ReactNode> = {
  [HollandType.R]: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
  [HollandType.I]: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
  [HollandType.A]: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>,
  [HollandType.S]: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  [HollandType.E]: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  [HollandType.C]: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
};

const App: React.FC = () => {
  const [step, setStep] = useState<'START' | 'QUIZ' | 'RESULT'>('START');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<ScoreMap>(INITIAL_SCORES);
  const [history, setHistory] = useState<number[]>([]); 
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  const startQuiz = () => {
    const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setScores(INITIAL_SCORES);
    setCurrentIndex(0);
    setHistory([]);
    setStep('QUIZ');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (value: number) => {
    const currentQ = shuffledQuestions[currentIndex];
    setScores(prev => ({ ...prev, [currentQ.type]: prev[currentQ.type] + value }));
    setHistory(prev => [...prev, value]);

    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setStep('RESULT');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevValue = history[history.length - 1];
      const prevQ = shuffledQuestions[currentIndex - 1];
      setScores(prev => ({ ...prev, [prevQ.type]: Math.max(0, prev[prevQ.type] - prevValue) }));
      setHistory(prev => prev.slice(0, -1));
      setCurrentIndex(prev => prev - 1);
    }
  };

  const currentQuestion = shuffledQuestions[currentIndex];
  const progress = shuffledQuestions.length > 0 ? ((currentIndex + 1) / shuffledQuestions.length) * 100 : 0;

  const sortedTypes = useMemo(() => {
    return Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([type]) => type as HollandType);
  }, [scores]);

  const hollandCode = sortedTypes.slice(0, 3).join('');

  const chartData = {
    labels: ['现实 (R)', '研究 (I)', '艺术 (A)', '社会 (S)', '企业 (E)', '常规 (C)'],
    datasets: [
      {
        data: [scores.R, scores.I, scores.A, scores.S, scores.E, scores.C],
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: '#2563eb',
        borderWidth: 2,
        pointBackgroundColor: '#2563eb',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-white min-h-screen shadow-xl flex flex-col border-x border-slate-200">
        
        {/* 固定头部 */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-white shrink-0 shadow-lg z-10">
          <h1 className="text-xl md:text-2xl font-black tracking-tight text-center">霍兰德职业兴趣评测</h1>
          <p className="text-blue-100/80 text-[10px] uppercase tracking-[0.3em] text-center mt-1 font-bold">RIASEC Career Assessment</p>
        </div>

        {/* 内容区 */}
        <div className="flex-1 flex flex-col overflow-y-auto overflow-x-hidden">
          
          {step === 'START' && (
            <div className="p-6 md:p-8 flex flex-col h-full animate-in fade-in duration-500">
              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                  <p className="text-blue-800 text-sm font-medium text-center leading-relaxed">
                    通过霍兰德职业兴趣量表，探索最适合您的职业环境。<br/>
                    请根据直觉作答，约需 5-10 分钟。
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {Object.values(HOLLAND_INFO).map((info) => (
                    <div key={info.type} className="flex flex-col items-center p-3 rounded-xl bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:scale-105">
                      <div className="text-blue-600 mb-2">{TYPE_ICONS[info.type]}</div>
                      <span className="text-xs font-black text-slate-800">{info.name.split(' ')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pb-10 space-y-6">
                <button
                  onClick={startQuiz}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-95 text-lg"
                >
                  开始无暗示测评
                </button>
                <div className="text-center">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    Professional Scale · {QUESTIONS.length} Questions
                  </p>
                </div>
              </div>
            </div>
          )}

          {step === 'QUIZ' && currentQuestion && (
            <div className="flex flex-col h-full animate-in slide-in-from-right-4 duration-300">
              {/* 进度显示 */}
              <div className="px-6 pt-6 shrink-0">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Current Task</span>
                  <span className="text-sm font-black text-blue-600 tracking-tighter">{currentIndex + 1} / {shuffledQuestions.length}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 transition-all duration-300 shadow-[0_0_8px_rgba(37,99,235,0.4)]" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* 问题展示区：锁定高度避免抖动 */}
              <div className="flex-1 flex flex-col items-center justify-center px-8">
                {/* 核心改动：设置固定高度 h-64 (约 256px)，确保按钮位置不动 */}
                <div className="w-full h-64 flex items-center justify-center">
                   <h2 className="text-2xl md:text-3xl font-black text-slate-800 text-center leading-snug">
                    {currentQuestion.text}
                  </h2>
                </div>
              </div>

              {/* 操作按钮区：固定在底部 */}
              <div className="bg-white border-t border-slate-100 p-6 pb-12 space-y-6 shrink-0">
                {currentQuestion.answerFormat === 'BINARY' ? (
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => handleAnswer(1)} 
                      className="h-20 bg-slate-900 hover:bg-black text-white rounded-2xl font-black text-xl active:scale-95 transition-all shadow-lg"
                    >
                      是 (YES)
                    </button>
                    <button 
                      onClick={() => handleAnswer(0)} 
                      className="h-20 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl font-black text-xl active:scale-95 transition-all"
                    >
                      否 (NO)
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between gap-1.5">
                      {[1, 2, 3, 4, 5, 6, 7].map(num => (
                        <button
                          key={num}
                          onClick={() => handleAnswer(num)}
                          className="flex-1 aspect-square bg-slate-50 hover:bg-blue-600 hover:text-white border border-slate-200 rounded-xl text-lg font-black text-slate-600 transition-all active:scale-90 shadow-sm"
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                    {/* 评分标签：严禁换行 */}
                    <div className="flex justify-between px-1">
                      <span className="text-[10px] font-black text-slate-400 whitespace-nowrap uppercase tracking-tighter">完全不符合</span>
                      <span className="text-[10px] font-black text-slate-400 whitespace-nowrap uppercase tracking-tighter">完全符合</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-center pt-2">
                  <button 
                    onClick={handleBack} 
                    disabled={currentIndex === 0}
                    className={`text-[10px] font-black uppercase tracking-widest py-2 px-8 rounded-full border transition-all ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'text-slate-400 border-slate-100 hover:bg-slate-50'}`}
                  >
                    ← Previous Question
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 'RESULT' && (
            <div className="p-6 md:p-8 space-y-10 animate-in fade-in duration-1000">
              <div className="text-center space-y-2">
                <div className="inline-block bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Report Generated
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">您的职业兴趣报告</h2>
              </div>

              {/* 雷达图卡片 */}
              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl space-y-8 relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="h-64 flex items-center justify-center relative z-10">
                  <Radar 
                    data={chartData} 
                    options={{
                      maintainAspectRatio: false,
                      scales: { 
                        r: { 
                          grid: { color: 'rgba(255,255,255,0.1)' }, 
                          angleLines: { color: 'rgba(255,255,255,0.1)' }, 
                          pointLabels: { color: '#94a3b8', font: { size: 11, weight: 'bold' } }, 
                          ticks: { display: false },
                          suggestedMin: 0
                        } 
                      },
                      plugins: { legend: { display: false } }
                    }} 
                  />
                </div>
                
                <div className="text-center space-y-6 relative z-10">
                  <p className="text-blue-400 text-xs font-black uppercase tracking-widest">最终职业代码组合</p>
                  <div className="flex justify-center gap-4">
                    {hollandCode.split('').map((c, i) => (
                      <div key={i} className="w-16 h-22 bg-white text-slate-900 text-4xl font-black flex items-center justify-center rounded-2xl shadow-[0_8px_0_0_#cbd5e1]">
                        {c}
                      </div>
                    ))}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed px-4 pt-4 border-t border-white/5">
                    您的倾向为 <span className="text-white font-bold">{sortedTypes.slice(0, 3).map(t => HOLLAND_INFO[t].name.split(' ')[0]).join(' + ')}</span> 混合型特征。
                  </p>
                </div>
              </div>

              {/* 详情分析列表 */}
              <div className="space-y-6">
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                  维度深度解读
                </h3>
                {sortedTypes.map((type, idx) => {
                  const info = HOLLAND_INFO[type];
                  return (
                    <div key={type} className={`p-6 rounded-3xl border-2 transition-all duration-300 ${idx < 3 ? 'border-blue-100 bg-white shadow-md' : 'border-slate-50 opacity-50'}`}>
                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3">
                          <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl ${idx < 3 ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'bg-slate-200 text-slate-500'}`}>{type}</span>
                          <div>
                            <h4 className="font-black text-slate-800">{info.name}</h4>
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Dimension Rank #{idx + 1}</p>
                          </div>
                        </div>
                        <span className={`text-2xl font-black ${idx < 3 ? 'text-blue-600' : 'text-slate-400'}`}>{scores[type]}</span>
                      </div>
                      <div className="space-y-4 text-sm">
                        <p className="text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl italic">“{info.traits}”</p>
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                            <p className="text-[10px] font-black text-blue-600 uppercase mb-2 tracking-widest">推荐职业方向</p>
                            <p className="text-blue-900 font-bold leading-relaxed">{info.careers}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">成长建议</p>
                            <p className="text-slate-500 text-xs leading-relaxed">{info.advice}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pb-16 text-center border-t border-slate-100 pt-12">
                <button 
                  onClick={() => {
                    setStep('START');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }} 
                  className="bg-slate-100 hover:bg-slate-200 text-slate-500 font-black text-sm py-4 px-12 rounded-2xl transition-all active:scale-95"
                >
                  RESTART ASSESSMENT
                </button>
                <p className="mt-4 text-[10px] text-slate-300 font-bold tracking-[0.3em] uppercase">Built for Career Clarity</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default App;
