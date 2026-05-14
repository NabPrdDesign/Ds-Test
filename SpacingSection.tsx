const SpacingSection = () => {
  const spacingValues = [
    { name: '2', size: '2px', value: '0.125rem' },
    { name: '4', size: '4px', value: '0.25rem' },
    { name: '8', size: '8px', value: '0.5rem' },
    { name: '12', size: '12px', value: '0.75rem' },
    { name: '16', size: '16px', value: '1rem' },
    { name: '24', size: '24px', value: '1.5rem' },
    { name: '32', size: '32px', value: '2rem' },
    { name: '40', size: '40px', value: '2.5rem' },
    { name: '48', size: '48px', value: '3rem' },
    { name: '64', size: '64px', value: '4rem' },
  ];

  const radiusValues = [
    { name: 'none', value: '0', example: 'rounded-none' },
    { name: 'sm', value: '4px', example: 'rounded-sm' },
    { name: 'md', value: '8px', example: 'rounded-md' },
    { name: 'lg', value: '12px', example: 'rounded-lg' },
    { name: 'xl', value: '16px', example: 'rounded-xl' },
    { name: '2xl', value: '24px', example: 'rounded-2xl' },
    { name: 'full', value: '9999px', example: 'rounded-full' },
  ];

  const shadowValues = [
    { name: 'sm', value: '0 1px 2px rgba(0,0,0,0.05)' },
    { name: 'md', value: '0 4px 6px rgba(0,0,0,0.1)' },
    { name: 'lg', value: '0 10px 15px rgba(0,0,0,0.1)' },
    { name: 'xl', value: '0 20px 25px rgba(0,0,0,0.1)' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Spacing & Layout</h2>
        <p className="text-neutral-600 dark:text-neutral-400">8px grid system with consistent spacing scale</p>
      </div>

      {/* Spacing Scale */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Spacing Scale</h3>
        <div className="space-y-4">
          {spacingValues.map(spacing => (
            <div key={spacing.name} className="flex items-center gap-4">
              <div className="w-20 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                spacing-{spacing.name}
              </div>
              <div className="flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-lg p-2">
                <div
                  className="h-8 bg-primary-500 rounded"
                  style={{ width: spacing.value }}
                />
              </div>
              <div className="w-32 text-sm text-neutral-600 dark:text-neutral-400 text-right">
                {spacing.size} ({spacing.value})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Border Radius */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Border Radius</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {radiusValues.map(radius => (
            <div key={radius.name} className="text-center">
              <div
                className="w-24 h-24 mx-auto bg-primary-500 mb-3"
                style={{ borderRadius: radius.value }}
              />
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">radius-{radius.name}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{radius.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Shadows */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Elevation (Shadows)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shadowValues.map(shadow => (
            <div key={shadow.name} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
              <div
                className="h-32 bg-white dark:bg-neutral-700 rounded-lg flex items-center justify-center"
                style={{ boxShadow: shadow.value }}
              >
                <div className="text-center">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">shadow-{shadow.name}</p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{shadow.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpacingSection;
