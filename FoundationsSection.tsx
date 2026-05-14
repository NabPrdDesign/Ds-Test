import { ArrowRight } from 'lucide-react';

const FoundationsSection = () => {
  const primitiveColors = [
    {
      name: 'Blue',
      values: [
        { token: 'primitive.color.blue.50', value: '#f0f9ff', var: '--primitive-color-blue-50' },
        { token: 'primitive.color.blue.500', value: '#0ea5e9', var: '--primitive-color-blue-500' },
        { token: 'primitive.color.blue.900', value: '#0c4a6e', var: '--primitive-color-blue-900' },
      ]
    },
    {
      name: 'Neutral',
      values: [
        { token: 'primitive.color.neutral.50', value: '#fafafa', var: '--primitive-color-neutral-50' },
        { token: 'primitive.color.neutral.500', value: '#737373', var: '--primitive-color-neutral-500' },
        { token: 'primitive.color.neutral.900', value: '#171717', var: '--primitive-color-neutral-900' },
      ]
    },
  ];

  const semanticTokens = [
    {
      category: 'Background',
      tokens: [
        { name: 'semantic.background.default', references: 'primitive.color.neutral.50' },
        { name: 'semantic.background.inverse', references: 'primitive.color.neutral.900' },
      ]
    },
    {
      category: 'Surface',
      tokens: [
        { name: 'semantic.surface.default', references: '#ffffff' },
        { name: 'semantic.surface.elevated', references: '#ffffff' },
      ]
    },
    {
      category: 'Text',
      tokens: [
        { name: 'semantic.text.primary', references: 'primitive.color.neutral.900' },
        { name: 'semantic.text.secondary', references: 'primitive.color.neutral.600' },
        { name: 'semantic.text.inverse', references: '#ffffff' },
      ]
    },
    {
      category: 'Border',
      tokens: [
        { name: 'semantic.border.default', references: 'primitive.color.neutral.200' },
        { name: 'semantic.border.subtle', references: 'primitive.color.neutral.200' },
        { name: 'semantic.border.focus', references: 'primitive.color.blue.500' },
      ]
    },
    {
      category: 'Action',
      tokens: [
        { name: 'semantic.action.primary', references: 'primitive.color.blue.500' },
        { name: 'semantic.action.primary.hover', references: 'primitive.color.blue.600' },
        { name: 'semantic.action.secondary', references: 'primitive.color.purple.500' },
      ]
    },
    {
      category: 'Feedback',
      tokens: [
        { name: 'semantic.feedback.success', references: 'primitive.color.green.500' },
        { name: 'semantic.feedback.warning', references: 'primitive.color.amber.500' },
        { name: 'semantic.feedback.error', references: 'primitive.color.red.500' },
      ]
    },
  ];

  const spacingTokens = [
    { name: 'primitive.spacing.0', value: '0' },
    { name: 'primitive.spacing.2', value: '2px (0.125rem)' },
    { name: 'primitive.spacing.4', value: '4px (0.25rem)' },
    { name: 'primitive.spacing.8', value: '8px (0.5rem)' },
    { name: 'primitive.spacing.12', value: '12px (0.75rem)' },
    { name: 'primitive.spacing.16', value: '16px (1rem)' },
    { name: 'primitive.spacing.24', value: '24px (1.5rem)' },
    { name: 'primitive.spacing.32', value: '32px (2rem)' },
    { name: 'primitive.spacing.40', value: '40px (2.5rem)' },
    { name: 'primitive.spacing.48', value: '48px (3rem)' },
    { name: 'primitive.spacing.64', value: '64px (4rem)' },
  ];

  const radiusTokens = [
    { name: 'primitive.radius.none', value: '0' },
    { name: 'primitive.radius.sm', value: '4px (0.25rem)' },
    { name: 'primitive.radius.md', value: '8px (0.5rem)' },
    { name: 'primitive.radius.lg', value: '12px (0.75rem)' },
    { name: 'primitive.radius.xl', value: '16px (1rem)' },
    { name: 'primitive.radius.full', value: '9999px' },
  ];

  const elevationTokens = [
    { name: 'primitive.shadow.sm', value: '0 1px 2px rgba(0,0,0,0.05)' },
    { name: 'primitive.shadow.md', value: '0 4px 6px rgba(0,0,0,0.1)' },
    { name: 'primitive.shadow.lg', value: '0 10px 15px rgba(0,0,0,0.1)' },
    { name: 'primitive.shadow.xl', value: '0 20px 25px rgba(0,0,0,0.1)' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Foundations</h2>
        <p className="text-neutral-600 dark:text-neutral-400">Token architecture with primitive and semantic layers</p>
      </div>

      {/* Token Architecture Overview */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Token Architecture</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">Primitive Tokens</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
              Raw values for colors, spacing, typography, radius, and elevation. Not applied directly to components.
            </p>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>• primitive.color.*</li>
              <li>• primitive.spacing.*</li>
              <li>• primitive.radius.*</li>
              <li>• primitive.font.*</li>
              <li>• primitive.shadow.*</li>
            </ul>
          </div>

          <div className="p-6 bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800 rounded-xl">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3">Semantic Tokens</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
              Contextual tokens that reference primitives. Applied to all components for consistency.
            </p>
            <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
              <li>• semantic.background.*</li>
              <li>• semantic.surface.*</li>
              <li>• semantic.text.*</li>
              <li>• semantic.border.*</li>
              <li>• semantic.action.*</li>
              <li>• semantic.feedback.*</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">Rule:</p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mt-1">
            Components must use semantic tokens only. Semantic tokens reference primitive tokens.
          </p>
        </div>
      </div>

      {/* Primitive Colors */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Primitive Colors</h3>

        {primitiveColors.map(palette => (
          <div key={palette.name} className="mb-6 last:mb-0">
            <h4 className="font-medium text-neutral-900 dark:text-neutral-50 mb-3">{palette.name}</h4>
            <div className="space-y-2">
              {palette.values.map(color => (
                <div key={color.token} className="flex items-center gap-4 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700">
                  <div
                    className="w-12 h-12 rounded-lg border border-neutral-300 dark:border-neutral-600 shadow-sm flex-shrink-0"
                    style={{ backgroundColor: color.value }}
                  />
                  <div className="flex-1 min-w-0">
                    <code className="text-sm font-medium text-neutral-900 dark:text-neutral-50 block">{color.token}</code>
                    <code className="text-xs text-neutral-500 dark:text-neutral-400 block mt-1">{color.var}</code>
                  </div>
                  <span className="text-sm text-neutral-600 dark:text-neutral-400 font-mono">{color.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Semantic Tokens */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Semantic Tokens</h3>

        <div className="space-y-6">
          {semanticTokens.map(category => (
            <div key={category.category}>
              <h4 className="font-medium text-neutral-900 dark:text-neutral-50 mb-3">{category.category}</h4>
              <div className="space-y-2">
                {category.tokens.map(token => (
                  <div key={token.name} className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700">
                    <code className="flex-1 text-sm font-medium text-neutral-900 dark:text-neutral-50">{token.name}</code>
                    <ArrowRight className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                    <code className="text-sm text-neutral-600 dark:text-neutral-400">{token.references}</code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primitive Spacing */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Primitive Spacing</h3>
        <div className="space-y-3">
          {spacingTokens.map(token => (
            <div key={token.name} className="flex items-center gap-4 p-3 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <code className="w-48 text-sm font-medium text-neutral-900 dark:text-neutral-50">{token.name}</code>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">{token.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Primitive Radius */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Primitive Radius</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {radiusTokens.map(token => (
            <div key={token.name} className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="w-20 h-20 mx-auto mb-3 bg-primary-500" style={{ borderRadius: token.value.split(' ')[0] }} />
              <code className="block text-xs font-medium text-neutral-900 dark:text-neutral-50 text-center">{token.name}</code>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-1">{token.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Primitive Elevation */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Primitive Elevation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {elevationTokens.map(token => (
            <div key={token.name} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <div
                className="h-24 bg-white dark:bg-neutral-700 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-neutral-600"
                style={{ boxShadow: token.value }}
              >
                <code className="text-xs font-medium text-neutral-900 dark:text-neutral-50">{token.name}</code>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">{token.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoundationsSection;
