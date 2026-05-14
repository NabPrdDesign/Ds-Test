import { Home, Settings, Users, FileText, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const NavigationSection = () => {
  const [activeNavItem, setActiveNavItem] = useState('home');
  const [activeTab, setActiveTab] = useState('overview');
  const [currentPage, setCurrentPage] = useState(1);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'files', label: 'Files', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const tabs = ['Overview', 'Analytics', 'Reports', 'Settings'];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Navigation Components</h2>
        <p className="text-neutral-600 dark:text-neutral-400">Navigation patterns for app structure</p>
      </div>

      {/* Navbar */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Navbar</h3>
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg">
          <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 dark:border-neutral-700">
            <div className="flex items-center gap-8">
              <div className="text-lg font-bold text-neutral-900 dark:text-neutral-50">Logo</div>
              <nav className="flex gap-2">
                {navItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveNavItem(item.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                        activeNavItem === item.id
                          ? 'bg-primary-50 dark:bg-primary-950 text-primary-500'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-lg text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800">
                Sign In
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Sidebar</h3>
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg overflow-hidden">
          <div className="flex h-96">
            <div className="w-64 bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-700 p-4">
              <div className="space-y-2">
                {navItems.map(item => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        activeNavItem === item.id
                          ? 'bg-primary-50 dark:bg-primary-950 text-primary-500'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex-1 p-6">
              <p className="text-neutral-600 dark:text-neutral-400">Main content area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Tabs</h3>
        <div className="border-b border-neutral-200 dark:border-neutral-700">
          <div className="flex gap-1">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-6 py-3 font-medium transition-all relative ${
                  activeTab === tab.toLowerCase()
                    ? 'text-primary-500'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50'
                }`}
              >
                {tab}
                {activeTab === tab.toLowerCase() && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500" />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <p className="text-neutral-600 dark:text-neutral-400">Content for {activeTab} tab</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Breadcrumb</h3>
        <nav className="flex items-center gap-2 text-sm">
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50">
            Home
          </a>
          <ChevronRight className="w-4 h-4 text-neutral-400" />
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50">
            Products
          </a>
          <ChevronRight className="w-4 h-4 text-neutral-400" />
          <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50">
            Category
          </a>
          <ChevronRight className="w-4 h-4 text-neutral-400" />
          <span className="font-medium text-neutral-900 dark:text-neutral-50">Current Page</span>
        </nav>
      </div>

      {/* Pagination */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Pagination</h3>
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                currentPage === page
                  ? 'bg-primary-500 text-white'
                  : 'border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
            className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentPage === 5}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationSection;
