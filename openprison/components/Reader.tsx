
import React, { useMemo } from 'react';
import { Chapter } from '../types.ts';
import { AlertTriangle, Database, Info, Terminal } from 'lucide-react';

interface ReaderProps {
  chapter: Chapter;
  fontSize: string;
}

export const Reader: React.FC<ReaderProps> = ({ 
  chapter, 
  fontSize
}) => {
  const renderedContent = useMemo(() => {
    return chapter.content.split('\n').filter(line => line.trim() !== '').map((line, i) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('###')) {
        return (
          <h3 key={i} className="text-xl font-bold mt-8 mb-4 border-b border-zinc-800 pb-2 text-zinc-100">
            {trimmedLine.replace('###', '')}
          </h3>
        );
      }
      
      if (trimmedLine.startsWith('*')) {
        return (
          <li key={i} className="ml-4 mb-2 list-none flex gap-2">
            <span className="text-red-500 mt-1.5 shrink-0"><Terminal className="w-3 h-3" /></span>
            <span className="text-zinc-300">{trimmedLine.replace('*', '')}</span>
          </li>
        );
      }

      return (
        <p key={i} className="mb-4 text-zinc-300 leading-relaxed text-lg">
          {trimmedLine}
        </p>
      );
    });
  }, [chapter.content]);

  return (
    <div className={`max-w-3xl mx-auto py-12 px-6 lg:px-12 animate-in fade-in slide-in-from-bottom-4 duration-700`}>
      <header className="mb-12">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-red-600 uppercase tracking-widest text-xs mono-ui font-bold">
            <Database className="w-4 h-4" />
            Forensic Record
          </div>
        </div>
        <h1 className="serif-title text-4xl lg:text-5xl font-bold text-zinc-50 mb-4">{chapter.title}</h1>
        <p className="text-xl text-zinc-500 italic font-medium">{chapter.subtitle}</p>
        <div className="h-1 w-24 bg-red-600 mt-6 rounded-full" />
      </header>

      <div className={`prose-custom ${fontSize}`}>
        {renderedContent}
      </div>

      {(chapter.evidenceItems || chapter.glossary) && (
        <div className="mt-16 space-y-8">
          {chapter.evidenceItems && (
            <section className="bg-zinc-900 border-l-4 border-red-600 p-6 rounded-r-lg">
              <h4 className="flex items-center gap-2 text-sm mono-ui font-bold text-red-500 mb-4 uppercase">
                <AlertTriangle className="w-4 h-4" />
                Operational Evidence
              </h4>
              <div className="space-y-4">
                {chapter.evidenceItems.map((item, idx) => (
                  <div key={idx} className="border-b border-zinc-800 last:border-0 pb-4 last:pb-0">
                    <div className="text-zinc-100 font-bold mb-1">{item.title}</div>
                    <div className="text-zinc-400 text-sm">{item.description}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {chapter.glossary && (
            <section className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg">
              <h4 className="flex items-center gap-2 text-sm mono-ui font-bold text-zinc-400 mb-4 uppercase">
                <Info className="w-4 h-4" />
                Strategic Glossary
              </h4>
              <dl className="grid gap-4 sm:grid-cols-2">
                {Object.entries(chapter.glossary).map(([term, definition]) => (
                  <div key={term}>
                    <dt className="text-zinc-200 font-semibold text-sm">{term}</dt>
                    <dd className="text-zinc-500 text-xs mt-1">{definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
      )}

      <footer className="mt-20 pt-8 border-t border-zinc-800 text-center">
        <p className="text-zinc-600 text-xs mono-ui italic">
          &copy; Documented Context 2021-2024 • Forensic ID: RB-259-ALPHA
        </p>
      </footer>
    </div>
  );
};
