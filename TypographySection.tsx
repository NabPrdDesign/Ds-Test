const TypographySection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Typography</h2>
        <p className="text-neutral-600 dark:text-neutral-400">Complete typography system with semantic scales</p>
      </div>

      {/* Display Styles */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Display Styles</h3>
        <div className="space-y-6">
          <div>
            <div className="text-6xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Display XL</div>
            <p className="text-sm text-neutral-500">72px / Bold / Line height 1.25</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Display Large</div>
            <p className="text-sm text-neutral-500">60px / Bold / Line height 1.25</p>
          </div>
        </div>
      </div>

      {/* Headings */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Headings</h3>
        <div className="space-y-4">
          <div>
            <h1 className="text-neutral-900 dark:text-neutral-50">Heading 1</h1>
            <p className="text-sm text-neutral-500">48px / Bold / Line height 1.25</p>
          </div>
          <div>
            <h2 className="text-neutral-900 dark:text-neutral-50">Heading 2</h2>
            <p className="text-sm text-neutral-500">36px / Semibold / Line height 1.375</p>
          </div>
          <div>
            <h3 className="text-neutral-900 dark:text-neutral-50">Heading 3</h3>
            <p className="text-sm text-neutral-500">30px / Semibold / Line height 1.375</p>
          </div>
          <div>
            <h4 className="text-neutral-900 dark:text-neutral-50">Heading 4</h4>
            <p className="text-sm text-neutral-500">24px / Semibold / Line height 1.5</p>
          </div>
        </div>
      </div>

      {/* Body Text */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Body Text</h3>
        <div className="space-y-6">
          <div>
            <p className="text-lg text-neutral-900 dark:text-neutral-50 mb-1">Body Large (18px)</p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              The quick brown fox jumps over the lazy dog. This is body large text used for emphasis or introductory paragraphs.
            </p>
          </div>
          <div>
            <p className="text-base font-medium text-neutral-900 dark:text-neutral-50 mb-1">Body Medium (16px)</p>
            <p className="text-base text-neutral-600 dark:text-neutral-400">
              The quick brown fox jumps over the lazy dog. This is the default body text size used throughout the application.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-1">Body Small (14px)</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The quick brown fox jumps over the lazy dog. This is small body text used for secondary content and descriptions.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-900 dark:text-neutral-50 mb-1">Caption (12px)</p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              The quick brown fox jumps over the lazy dog. This is caption text used for labels and metadata.
            </p>
          </div>
        </div>
      </div>

      {/* Font Weights */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Font Weights</h3>
        <div className="space-y-3">
          <p className="text-base font-light text-neutral-900 dark:text-neutral-50">Light (300)</p>
          <p className="text-base font-normal text-neutral-900 dark:text-neutral-50">Regular (400)</p>
          <p className="text-base font-medium text-neutral-900 dark:text-neutral-50">Medium (500)</p>
          <p className="text-base font-semibold text-neutral-900 dark:text-neutral-50">Semibold (600)</p>
          <p className="text-base font-bold text-neutral-900 dark:text-neutral-50">Bold (700)</p>
          <p className="text-base font-extrabold text-neutral-900 dark:text-neutral-50">Extra Bold (800)</p>
        </div>
      </div>
    </div>
  );
};

export default TypographySection;
