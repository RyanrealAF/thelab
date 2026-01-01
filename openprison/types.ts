
export interface Chapter {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  evidenceItems?: EvidenceItem[];
  glossary?: Record<string, string>;
}

export interface EvidenceItem {
  type: 'log' | 'visual' | 'doctrine';
  title: string;
  description: string;
}

export interface AppState {
  currentChapterId: string;
  isSidebarOpen: boolean;
  fontSize: 'text-base' | 'text-lg' | 'text-xl';
}
