
import React from 'react';
import { CHAPTERS } from '../constants.tsx';
import { Book, ChevronRight, Hash, ShieldAlert } from 'lucide-react';

interface SidebarProps {
  currentChapterId: string;
  onChapterSelect: (id: string) => void;
  isOpen: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentChapterId, onChapterSelect, isOpen }) => {
  return (
    <aside 
      className={`fixed lg:static inset-y-0 left-0 z-40 w-72 bg-zinc-950 border-r border-zinc-800 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-zinc-800">
          <h1 className="serif-title text-2xl font-bold text-zinc-100 flex items-center gap-2">
            <Book className="w-6 h-6 text-red-600" />
            Invisible Prison
          </h1>
          <p className="text-xs mono-ui mt-2 text-zinc-500 uppercase tracking-widest">Case Study: Borland</p>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {CHAPTERS.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => onChapterSelect(chapter.id)}
              className={`w-full text-left p-3 rounded-md transition-all flex items-center group ${
                currentChapterId === chapter.id 
                  ? 'bg-zinc-800 text-red-400 border-l-2 border-red-600' 
                  : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
              }`}
            >
              <div className="flex-1">
                <div className="text-sm font-semibold truncate">{chapter.title}</div>
                <div className="text-xs text-zinc-500 truncate">{chapter.subtitle}</div>
              </div>
              <ChevronRight className={`w-4 h-4 transition-transform ${currentChapterId === chapter.id ? 'translate-x-1 opacity-100' : 'opacity-0'}`} />
            </button>
          ))}
        </nav>

        <div className="p-4 bg-zinc-900/50 border-t border-zinc-800">
          <div className="flex items-center gap-3 p-3 bg-red-950/20 border border-red-900/50 rounded-lg">
            <ShieldAlert className="w-5 h-5 text-red-500 shrink-0" />
            <div className="text-[10px] mono-ui text-red-200/70 leading-tight">
              PROTOCOLS ACTIVE: <br/> BREADCRUMB WEB 1.0
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
