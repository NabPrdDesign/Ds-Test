import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

const ColorSection = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const copyColor = async (color: string) => {
    setSelectedColor(color);

    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      // Fallback for when clipboard API is blocked
      const textArea = document.createElement('textarea');
      textArea.value = color;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedColor(color);
        setTimeout(() => setCopiedColor(null), 2000);
      } catch (e) {
        console.log('Copy failed:', e);
      }
      document.body.removeChild(textArea);
    }
  };

  const colorPalettes = [
    {
      name: 'Primary',
      colors: [
        { name: '50', value: '#f0f9ff' },
        { name: '100', value: '#e0f2fe' },
        { name: '200', value: '#bae6fd' },
        { name: '300', value: '#7dd3fc' },
        { name: '400', value: '#38bdf8' },
        { name: '500', value: '#0ea5e9' },
        { name: '600', value: '#0284c7' },
        { name: '700', value: '#0369a1' },
        { name: '800', value: '#075985' },
        { name: '900', value: '#0c4a6e' },
      ],
    },
    {
      name: 'Secondary',
      colors: [
        { name: '50', value: '#faf5ff' },
        { name: '100', value: '#f3e8ff' },
        { name: '200', value: '#e9d5ff' },
        { name: '300', value: '#d8b4fe' },
        { name: '400', value: '#c084fc' },
        { name: '500', value: '#a855f7' },
        { name: '600', value: '#9333ea' },
        { name: '700', value: '#7e22ce' },
        { name: '800', value: '#6b21a8' },
        { name: '900', value: '#581c87' },
      ],
    },
    {
      name: 'Neutral',
      colors: [
        { name: '50', value: '#fafafa' },
        { name: '100', value: '#f5f5f5' },
        { name: '200', value: '#e5e5e5' },
        { name: '300', value: '#d4d4d4' },
        { name: '400', value: '#a3a3a3' },
        { name: '500', value: '#737373' },
        { name: '600', value: '#525252' },
        { name: '700', value: '#404040' },
        { name: '800', value: '#262626' },
        { name: '900', value: '#171717' },
      ],
    },
  ];

  const semanticColors = [
    { name: 'Success', color: '#22c55e', bg: '#f0fdf4' },
    { name: 'Warning', color: '#f59e0b', bg: '#fffbeb' },
    { name: 'Error', color: '#ef4444', bg: '#fef2f2' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Color Palette</h2>
        <p className="text-neutral-600 dark:text-neutral-400">50-900 scale with light and dark mode support</p>
      </div>

      {/* Color Palettes */}
      {colorPalettes.map(palette => (
        <div key={palette.name}>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">{palette.name}</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
            {palette.colors.map(color => {
              const isSelected = selectedColor === color.value;
              return (
                <div key={color.name} className="group">
                  <button
                    onClick={() => copyColor(color.value)}
                    className={`w-full aspect-square rounded-lg shadow-md relative overflow-hidden transition-all hover:scale-105 border-2 ${
                      isSelected
                        ? 'bg-neutral-900 dark:bg-neutral-100 border-primary-500'
                        : 'border-transparent'
                    }`}
                    style={{ backgroundColor: isSelected ? undefined : color.value }}
                  >
                    <div className={`absolute inset-0 flex items-center justify-center transition-opacity ${
                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 bg-black/20'
                    }`}>
                      {copiedColor === color.value ? (
                        <Check className={`w-5 h-5 ${isSelected ? 'text-white dark:text-neutral-900' : 'text-white'}`} />
                      ) : (
                        <Copy className={`w-5 h-5 ${isSelected ? 'text-white dark:text-neutral-900' : 'text-white'}`} />
                      )}
                    </div>
                  </button>
                  <div className="mt-2 text-center">
                    <p className={`text-xs font-medium transition-colors ${
                      isSelected ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-900 dark:text-neutral-50'
                    }`}>{color.name}</p>
                    <p className={`text-xs transition-colors ${
                      isSelected ? 'text-neutral-600 dark:text-neutral-400' : 'text-neutral-500 dark:text-neutral-400'
                    }`}>{color.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Semantic Colors */}
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Semantic Colors</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {semanticColors.map(item => {
            const isSelected = selectedColor === item.color;
            return (
              <button
                key={item.name}
                onClick={() => copyColor(item.color)}
                className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-2 ${
                  isSelected
                    ? 'bg-neutral-900 dark:bg-neutral-100 border-primary-500'
                    : 'border-neutral-200 dark:border-neutral-700'
                }`}
                style={{
                  backgroundColor: isSelected ? undefined : item.bg
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg shadow-sm" style={{ backgroundColor: item.color }} />
                  <div className="text-left">
                    <p className={`font-semibold transition-colors ${
                      isSelected ? 'text-white dark:text-neutral-900' : 'text-neutral-900 dark:text-neutral-50'
                    }`}>{item.name}</p>
                    <p className={`text-sm transition-colors ${
                      isSelected ? 'text-neutral-200 dark:text-neutral-700' : 'text-neutral-600 dark:text-neutral-400'
                    }`}>{item.color}</p>
                  </div>
                  {copiedColor === item.color && (
                    <Check className={`ml-auto w-5 h-5 ${
                      isSelected ? 'text-white dark:text-neutral-900' : 'text-neutral-900 dark:text-neutral-50'
                    }`} />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ColorSection;
