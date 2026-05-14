import { Check, X, Eye, Keyboard, MousePointer } from 'lucide-react';

const GuidelinesSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Guidelines</h2>
        <p className="text-neutral-600 dark:text-neutral-400">Best practices and accessibility standards</p>
      </div>

      {/* Accessibility */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Accessibility (WCAG AA)</h3>

        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-neutral-900 dark:text-neutral-50 mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Color Contrast
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              All text must meet WCAG AA standards: 4.5:1 for normal text, 3:1 for large text (≥18px or ≥14px bold)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-success-50 dark:bg-success-950 border border-success-200 dark:border-success-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-success-600" />
                  <span className="font-medium text-success-900 dark:text-success-100">Good Contrast</span>
                </div>
                <div className="p-3 bg-neutral-900 dark:bg-neutral-100 rounded">
                  <p className="text-white dark:text-neutral-900">This text has 15:1 contrast ratio</p>
                </div>
              </div>
              <div className="p-4 bg-error-50 dark:bg-error-950 border border-error-200 dark:border-error-800 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-5 h-5 text-error-600" />
                  <span className="font-medium text-error-900 dark:text-error-100">Poor Contrast</span>
                </div>
                <div className="p-3 bg-neutral-200 dark:bg-neutral-700 rounded">
                  <p className="text-neutral-400">This text has 2:1 contrast ratio</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-neutral-900 dark:text-neutral-50 mb-3 flex items-center gap-2">
              <Keyboard className="w-5 h-5" />
              Keyboard Navigation
            </h4>
            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-lg p-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <th className="text-left py-2 text-neutral-900 dark:text-neutral-50">Element</th>
                    <th className="text-left py-2 text-neutral-900 dark:text-neutral-50">Keys</th>
                    <th className="text-left py-2 text-neutral-900 dark:text-neutral-50">Action</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600 dark:text-neutral-400">
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <td className="py-2">Buttons</td>
                    <td className="py-2"><code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded">Space</code> / <code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded">Enter</code></td>
                    <td className="py-2">Activate</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <td className="py-2">Tabs</td>
                    <td className="py-2"><code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded">Arrow keys</code></td>
                    <td className="py-2">Navigate</td>
                  </tr>
                  <tr className="border-b border-neutral-200 dark:border-neutral-700">
                    <td className="py-2">Modals</td>
                    <td className="py-2"><code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded">Escape</code></td>
                    <td className="py-2">Close</td>
                  </tr>
                  <tr>
                    <td className="py-2">Dropdowns</td>
                    <td className="py-2"><code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded">Arrow keys</code> / <code className="px-2 py-1 bg-neutral-200 dark:bg-neutral-700 rounded">Enter</code></td>
                    <td className="py-2">Navigate/Select</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-neutral-900 dark:text-neutral-50 mb-3 flex items-center gap-2">
              <MousePointer className="w-5 h-5" />
              Touch Targets
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Minimum touch target size: 44 × 44 pixels
            </p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-success-100 dark:bg-success-950 border-2 border-success-500 rounded-lg mb-2">
                  <Check className="w-5 h-5 text-success-600" />
                </div>
                <p className="text-xs text-success-600">44×44px</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-8 h-8 bg-error-100 dark:bg-error-950 border-2 border-error-500 rounded-lg mb-2">
                  <X className="w-5 h-5 text-error-600" />
                </div>
                <p className="text-xs text-error-600">32×32px</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Rules */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Usage Rules</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-success-100 dark:bg-success-950 rounded-lg">
                <Check className="w-5 h-5 text-success-600" />
              </div>
              <h4 className="font-medium text-neutral-900 dark:text-neutral-50">Do</h4>
            </div>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                <span>Use design tokens for all styling</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                <span>Maintain consistent spacing with 8px grid</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                <span>Ensure 4.5:1 contrast ratio for text</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                <span>Provide focus states for all interactive elements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                <span>Use semantic HTML elements</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                <span>Test on mobile devices</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                <span>Provide error messages for forms</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                <span>Keep touch targets at least 44×44px</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-error-100 dark:bg-error-950 rounded-lg">
                <X className="w-5 h-5 text-error-600" />
              </div>
              <h4 className="font-medium text-neutral-900 dark:text-neutral-50">Don't</h4>
            </div>
            <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-error-500 mt-0.5 flex-shrink-0" />
                <span>Use arbitrary colors outside tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-error-500 mt-0.5 flex-shrink-0" />
                <span>Skip hover/focus states</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-error-500 mt-0.5 flex-shrink-0" />
                <span>Use color alone to convey information</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-error-500 mt-0.5 flex-shrink-0" />
                <span>Create custom spacing values</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-error-500 mt-0.5 flex-shrink-0" />
                <span>Override focus indicators without alternatives</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-error-500 mt-0.5 flex-shrink-0" />
                <span>Use div for buttons (use button element)</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-error-500 mt-0.5 flex-shrink-0" />
                <span>Auto-play animations without user control</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-error-500 mt-0.5 flex-shrink-0" />
                <span>Nest interactive elements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Naming Convention */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Naming Convention</h3>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">Format:</p>
            <code className="block px-4 py-3 bg-neutral-900 dark:bg-neutral-950 text-primary-400 rounded-lg font-mono text-sm">
              category/type/state/size
            </code>
          </div>

          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">Examples:</p>
            <div className="space-y-2">
              <code className="block px-4 py-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 rounded font-mono text-sm">
                button/primary/default/md
              </code>
              <code className="block px-4 py-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 rounded font-mono text-sm">
                input/text/error/default
              </code>
              <code className="block px-4 py-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 rounded font-mono text-sm">
                card/product/hover/default
              </code>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">Token Naming:</p>
            <code className="block px-4 py-3 bg-neutral-900 dark:bg-neutral-950 text-secondary-400 rounded-lg font-mono text-sm mb-2">
              category.property.variant
            </code>
            <div className="space-y-2">
              <code className="block px-4 py-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 rounded font-mono text-sm">
                color.primary.500
              </code>
              <code className="block px-4 py-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 rounded font-mono text-sm">
                spacing.16
              </code>
              <code className="block px-4 py-2 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 rounded font-mono text-sm">
                typography.font.size.base
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Breakpoints */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Responsive Breakpoints</h3>

        <div className="space-y-3">
          {[
            { name: 'sm', size: '640px', description: 'Small devices (tablets)' },
            { name: 'md', size: '768px', description: 'Medium devices (tablets landscape)' },
            { name: 'lg', size: '1024px', description: 'Large devices (desktops)' },
            { name: 'xl', size: '1280px', description: 'Extra large devices' },
            { name: '2xl', size: '1536px', description: 'Extra extra large' },
          ].map(bp => (
            <div key={bp.name} className="flex items-center justify-between p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <div>
                <code className="text-sm font-medium text-neutral-900 dark:text-neutral-50">{bp.name}</code>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">{bp.description}</p>
              </div>
              <span className="text-sm font-mono text-neutral-600 dark:text-neutral-400">{bp.size}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidelinesSection;
