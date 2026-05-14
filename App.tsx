import { useState } from 'react';
import { Sun, Moon, Palette, Type, Box, Grid3x3, Package, BookOpen, AlertCircle, Layers } from 'lucide-react';
import FoundationsSection from './components/FoundationsSection';
import ColorSection from './components/ColorSection';
import TypographySection from './components/TypographySection';
import SpacingSection from './components/SpacingSection';
import ComponentsSection from './components/ComponentsSection';
import NavigationSection from './components/NavigationSection';
import FeedbackSection from './components/FeedbackSection';
import CardsSection from './components/CardsSection';
import GuidelinesSection from './components/GuidelinesSection';

type Tab = 'foundations' | 'colors' | 'typography' | 'spacing' | 'components' | 'navigation' | 'feedback' | 'cards' | 'guidelines';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('foundations');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const tabs = [
    { id: 'foundations' as Tab, label: 'Foundations', icon: Layers },
    { id: 'colors' as Tab, label: 'Colors', icon: Palette },
    { id: 'typography' as Tab, label: 'Typography', icon: Type },
    { id: 'spacing' as Tab, label: 'Spacing', icon: Grid3x3 },
    { id: 'components' as Tab, label: 'Components', icon: Package },
    { id: 'navigation' as Tab, label: 'Navigation', icon: Box },
    { id: 'feedback' as Tab, label: 'Feedback', icon: AlertCircle },
    { id: 'cards' as Tab, label: 'Cards', icon: Box },
    { id: 'guidelines' as Tab, label: 'Guidelines', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">Design System</h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Production-ready SaaS Design System</p>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-neutral-900 dark:text-neutral-50" /> : <Moon className="w-5 h-5 text-neutral-900" />}
            </button>
          </div>

          {/* Tabs */}
          <nav className="flex gap-2 mt-6 overflow-x-auto pb-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white shadow-md'
                      : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'foundations' && <FoundationsSection />}
        {activeTab === 'colors' && <ColorSection />}
        {activeTab === 'typography' && <TypographySection />}
        {activeTab === 'spacing' && <SpacingSection />}
        {activeTab === 'components' && <ComponentsSection />}
        {activeTab === 'navigation' && <NavigationSection />}
        {activeTab === 'feedback' && <FeedbackSection />}
        {activeTab === 'cards' && <CardsSection />}
        {activeTab === 'guidelines' && <GuidelinesSection />}
      </main>
    </div>
  );
}