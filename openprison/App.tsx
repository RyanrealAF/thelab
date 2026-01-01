
import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar.tsx';
import { Reader } from './components/Reader.tsx';
import { CHAPTERS } from './constants.tsx';
import { 
  Menu, X, Type, Share2, Download 
} from 'lucide-react';

const App: React.FC = () => {
  const [currentChapterId, setCurrentChapterId] = useState('intro');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'text-base' | 'text-lg' | 'text-xl'>('text-lg');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const activeChapter = CHAPTERS.find(c => c.id === currentChapterId) || CHAPTERS[0];

  const handleChapterSelect = useCallback((id: string) => {
    setCurrentChapterId(id);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const idx = CHAPTERS.findIndex(c => c.id === currentChapterId);
        if (idx < CHAPTERS.length - 1) handleChapterSelect(CHAPTERS[idx + 1].id);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const idx = CHAPTERS.findIndex(c => c.id === currentChapterId);
        if (idx > 0) handleChapterSelect(CHAPTERS[idx - 1].id);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentChapterId, handleChapterSelect]);

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-200 overflow-hidden">
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar 
        currentChapterId={currentChapterId} 
        onChapterSelect={handleChapterSelect} 
        isOpen={isSidebarOpen}
      />

      <main className="flex-1 flex flex-col min-w-0 bg-[#0c0c0e] relative">
        <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-4 lg:px-8 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-zinc-800 rounded-md transition-colors"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="text-xs mono-ui font-medium text-zinc-500 uppercase tracking-widest hidden sm:block">
              Chapter {CHAPTERS.findIndex(c => c.id === currentChapterId) + 1} of {CHAPTERS.length}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-2 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400"
              title="Reading Settings"
            >
              <Type className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400">
              <Download className="w-5 h-5" />
            </button>
          </div>

          {isSettingsOpen && (
            <div className="absolute top-16 right-4 w-64 bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl p-4 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase mono-ui text-zinc-500">Font Size</span>
                <X className="w-4 h-4 text-zinc-600 cursor-pointer" onClick={() => setIsSettingsOpen(false)} />
              </div>
              <div className="flex gap-2">
                {(['text-base', 'text-lg', 'text-xl'] as const).map(size => (
                  <button
                    key={size}
                    onClick={() => setFontSize(size)}
                    className={`flex-1 py-2 rounded border ${fontSize === size ? 'bg-zinc-100 text-zinc-900 border-zinc-100' : 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}
                  >
                    {size === 'text-base' ? 'A' : size === 'text-lg' ? 'A+' : 'A++'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>

        <div className="flex-1 overflow-y-auto scroll-smooth bg-gradient-to-b from-zinc-950 to-zinc-900/50">
          <Reader 
            chapter={activeChapter} 
            fontSize={fontSize} 
          />

          <div className="max-w-3xl mx-auto px-6 lg:px-12 pb-24 flex items-center justify-between">
            {CHAPTERS.findIndex(c => c.id === currentChapterId) > 0 ? (
              <button 
                onClick={() => handleChapterSelect(CHAPTERS[CHAPTERS.findIndex(c => c.id === currentChapterId) - 1].id)}
                className="group flex flex-col items-start"
              >
                <span className="text-[10px] mono-ui text-zinc-600 uppercase mb-1">Previous</span>
                <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-100 transition-colors">← {CHAPTERS[CHAPTERS.findIndex(c => c.id === currentChapterId) - 1].title}</span>
              </button>
            ) : <div />}

            {CHAPTERS.findIndex(c => c.id === currentChapterId) < CHAPTERS.length - 1 ? (
              <button 
                onClick={() => handleChapterSelect(CHAPTERS[CHAPTERS.findIndex(c => c.id === currentChapterId) + 1].id)}
                className="group flex flex-col items-end text-right"
              >
                <span className="text-[10px] mono-ui text-zinc-600 uppercase mb-1">Next Chapter</span>
                <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-100 transition-colors">{CHAPTERS[CHAPTERS.findIndex(c => c.id === currentChapterId) + 1].title} →</span>
              </button>
            ) : (
              <div className="text-center">
                <span className="text-[10px] mono-ui text-red-600 uppercase block mb-1 font-bold">End of Dossier</span>
                <span className="text-sm italic text-zinc-500">Rock bottom has an echo.</span>
              </div>
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900">
          <div 
            className="h-full bg-red-600 transition-all duration-300" 
            style={{ width: `${((CHAPTERS.findIndex(c => c.id === currentChapterId) + 1) / CHAPTERS.length) * 100}%` }}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
