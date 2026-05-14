import { X, CheckCircle2, AlertCircle, XCircle, Info } from 'lucide-react';
import { useState } from 'react';

const FeedbackSection = () => {
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Feedback Components</h2>
        <p className="text-neutral-600 dark:text-neutral-400">User feedback and notification patterns</p>
      </div>

      {/* Toasts */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Toast Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-white dark:bg-neutral-900 border-l-4 border-success-500 rounded-lg shadow-md">
            <CheckCircle2 className="w-5 h-5 text-success-500 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-neutral-900 dark:text-neutral-50">Success</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Your changes have been saved successfully</p>
            </div>
            <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white dark:bg-neutral-900 border-l-4 border-warning-500 rounded-lg shadow-md">
            <AlertCircle className="w-5 h-5 text-warning-500 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-neutral-900 dark:text-neutral-50">Warning</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Please review your information before submitting</p>
            </div>
            <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white dark:bg-neutral-900 border-l-4 border-error-500 rounded-lg shadow-md">
            <XCircle className="w-5 h-5 text-error-500 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-neutral-900 dark:text-neutral-50">Error</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">An error occurred while processing your request</p>
            </div>
            <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-start gap-3 p-4 bg-white dark:bg-neutral-900 border-l-4 border-primary-500 rounded-lg shadow-md">
            <Info className="w-5 h-5 text-primary-500 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-neutral-900 dark:text-neutral-50">Information</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">A new version is available. Please refresh to update.</p>
            </div>
            <button className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Alerts</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-success-50 dark:bg-success-950 border border-success-200 dark:border-success-800 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-success-600 dark:text-success-400 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-success-900 dark:text-success-100">Success alert</p>
              <p className="text-sm text-success-700 dark:text-success-300 mt-1">Your account has been created successfully.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-warning-50 dark:bg-warning-950 border border-warning-200 dark:border-warning-800 rounded-lg">
            <AlertCircle className="w-5 h-5 text-warning-600 dark:text-warning-400 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-warning-900 dark:text-warning-100">Warning alert</p>
              <p className="text-sm text-warning-700 dark:text-warning-300 mt-1">Your subscription will expire in 3 days.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-error-50 dark:bg-error-950 border border-error-200 dark:border-error-800 rounded-lg">
            <XCircle className="w-5 h-5 text-error-600 dark:text-error-400 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-error-900 dark:text-error-100">Error alert</p>
              <p className="text-sm text-error-700 dark:text-error-300 mt-1">Unable to connect to the server. Please try again.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800 rounded-lg">
            <Info className="w-5 h-5 text-primary-600 dark:text-primary-400 mt-0.5" />
            <div className="flex-1">
              <p className="font-medium text-primary-900 dark:text-primary-100">Info alert</p>
              <p className="text-sm text-primary-700 dark:text-primary-300 mt-1">We've updated our privacy policy. Please review the changes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Modal</h3>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600"
        >
          Open Modal
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-2xl max-w-md w-full">
              <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">Modal Title</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-neutral-600 dark:text-neutral-400">
                  This is a modal dialog. It overlays the main content and requires user interaction to dismiss.
                </p>
              </div>
              <div className="flex justify-end gap-3 p-6 border-t border-neutral-200 dark:border-neutral-700">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tooltip */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Tooltip</h3>
        <div className="relative inline-block">
          <button
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="px-6 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50 font-medium hover:bg-neutral-200 dark:hover:bg-neutral-600"
          >
            Hover me
          </button>
          {showTooltip && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-neutral-900 dark:bg-neutral-700 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
              This is a tooltip
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-neutral-900 dark:border-t-neutral-700" />
            </div>
          )}
        </div>
      </div>

      {/* Skeleton Loader */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Skeleton Loader</h3>
        <div className="space-y-4">
          <div className="animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-700 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4" />
                <div className="h-3 bg-neutral-200 dark:bg-neutral-700 rounded w-1/2" />
              </div>
            </div>
          </div>
          <div className="animate-pulse">
            <div className="h-48 bg-neutral-200 dark:bg-neutral-700 rounded-lg" />
            <div className="mt-3 space-y-2">
              <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded" />
              <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
