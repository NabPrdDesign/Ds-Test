import { Loader2, Search, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const ComponentsSection = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Components</h2>
        <p className="text-neutral-600 dark:text-neutral-400">Production-ready UI components using semantic tokens</p>
      </div>

      {/* Buttons */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Buttons</h3>

        <div className="space-y-8">
          {/* Filled Buttons */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Filled Variant</p>
              <code className="text-xs bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-neutral-600 dark:text-neutral-400">
                semantic.action.primary
              </code>
            </div>

            <div className="space-y-4">
              {/* Sizes */}
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">Sizes</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 text-sm rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Small
                  </button>
                  <button className="px-6 py-3 text-base rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Medium
                  </button>
                  <button className="px-8 py-4 text-lg rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Large
                  </button>
                </div>
              </div>

              {/* States */}
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">States</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-all">
                    Default
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium">
                    Hover
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium ring-4 ring-primary-500/20">
                    Focus
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-neutral-200 dark:bg-neutral-700 text-neutral-400 dark:text-neutral-500 font-medium cursor-not-allowed opacity-60" disabled>
                    Disabled
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Loading
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Outlined Buttons */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Outlined Variant</p>
              <code className="text-xs bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-neutral-600 dark:text-neutral-400">
                semantic.border.default
              </code>
            </div>

            <div className="space-y-4">
              {/* Sizes */}
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">Sizes</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 text-sm rounded-lg border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-950 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Small
                  </button>
                  <button className="px-6 py-3 text-base rounded-lg border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-950 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Medium
                  </button>
                  <button className="px-8 py-4 text-lg rounded-lg border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-950 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Large
                  </button>
                </div>
              </div>

              {/* States */}
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">States</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 rounded-lg border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-950 transition-all">
                    Default
                  </button>
                  <button className="px-6 py-3 rounded-lg border-2 border-primary-500 bg-primary-50 dark:bg-primary-950 text-primary-500 dark:text-primary-400 font-medium">
                    Hover
                  </button>
                  <button className="px-6 py-3 rounded-lg border-2 border-primary-500 text-primary-500 dark:text-primary-400 font-medium ring-4 ring-primary-500/20">
                    Focus
                  </button>
                  <button className="px-6 py-3 rounded-lg border-2 border-neutral-300 dark:border-neutral-600 text-neutral-400 dark:text-neutral-500 font-medium cursor-not-allowed opacity-60" disabled>
                    Disabled
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Ghost Buttons */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Ghost Variant</p>
              <code className="text-xs bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-neutral-600 dark:text-neutral-400">
                semantic.action.primary (text only)
              </code>
            </div>

            <div className="space-y-4">
              {/* Sizes */}
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">Sizes</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 text-sm rounded-lg text-primary-500 dark:text-primary-400 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Small
                  </button>
                  <button className="px-6 py-3 text-base rounded-lg text-primary-500 dark:text-primary-400 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Medium
                  </button>
                  <button className="px-8 py-4 text-lg rounded-lg text-primary-500 dark:text-primary-400 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:ring-4 focus:ring-primary-500/20 transition-all">
                    Large
                  </button>
                </div>
              </div>

              {/* States */}
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">States</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-6 py-3 rounded-lg text-primary-500 dark:text-primary-400 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all">
                    Default
                  </button>
                  <button className="px-6 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-primary-500 dark:text-primary-400 font-medium">
                    Hover
                  </button>
                  <button className="px-6 py-3 rounded-lg text-primary-500 dark:text-primary-400 font-medium ring-4 ring-primary-500/20">
                    Focus
                  </button>
                  <button className="px-6 py-3 rounded-lg text-neutral-400 dark:text-neutral-500 font-medium cursor-not-allowed opacity-60" disabled>
                    Disabled
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inputs */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">Input Fields</h3>
          <code className="text-xs bg-neutral-100 dark:bg-neutral-900 px-2 py-1 rounded text-neutral-600 dark:text-neutral-400">
            semantic.border.default
          </code>
        </div>

        <div className="space-y-6 max-w-md">
          <div>
            <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">
              Text Input
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">
              Search Input
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">
              Password Input
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">
              Textarea
            </label>
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-900 dark:text-neutral-50 mb-2">
              Select
            </label>
            <select className="w-full px-4 py-3 rounded-lg border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 focus:border-primary-500 focus:ring-4 focus:ring-primary-500/10 outline-none transition-all">
              <option>Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-error-500 mb-2">
              Error State
            </label>
            <input
              type="text"
              placeholder="Invalid input"
              className="w-full px-4 py-3 rounded-lg border-2 border-error-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 placeholder-neutral-400 focus:ring-4 focus:ring-error-500/10 outline-none transition-all"
            />
            <p className="mt-2 text-sm text-error-500">This field is required</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-success-500 mb-2">
              Success State
            </label>
            <input
              type="text"
              placeholder="Valid input"
              defaultValue="success@example.com"
              className="w-full px-4 py-3 rounded-lg border-2 border-success-500 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 focus:ring-4 focus:ring-success-500/10 outline-none transition-all"
            />
            <p className="mt-2 text-sm text-success-500">Email is valid</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsSection;
