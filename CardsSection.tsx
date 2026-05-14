import { Star, Heart, ShoppingCart, TrendingUp, TrendingDown, MoreVertical } from 'lucide-react';

const CardsSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 mb-2">Cards</h2>
        <p className="text-neutral-600 dark:text-neutral-400">Flexible card components for different content types</p>
      </div>

      {/* Product Cards */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Product Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-400 to-secondary-400" />
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">Product Name</h4>
                  <div className="flex items-center gap-1 text-sm text-neutral-600 dark:text-neutral-400">
                    <Star className="w-4 h-4 fill-warning-500 text-warning-500" />
                    <span>4.8</span>
                  </div>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Beautiful product description that highlights key features and benefits.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-neutral-900 dark:text-neutral-50">$99</span>
                  <button className="p-2 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Dashboard Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Revenue</p>
              <div className="p-2 bg-primary-100 dark:bg-primary-950 rounded-lg">
                <TrendingUp className="w-5 h-5 text-primary-500" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">$45,231</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-success-500">+12.5%</span>
              <span className="text-sm text-neutral-500">vs last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Total Users</p>
              <div className="p-2 bg-secondary-100 dark:bg-secondary-950 rounded-lg">
                <TrendingUp className="w-5 h-5 text-secondary-500" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">2,345</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-success-500">+8.2%</span>
              <span className="text-sm text-neutral-500">vs last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Active Sessions</p>
              <div className="p-2 bg-warning-100 dark:bg-warning-950 rounded-lg">
                <TrendingDown className="w-5 h-5 text-warning-500" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">892</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-error-500">-3.1%</span>
              <span className="text-sm text-neutral-500">vs last month</span>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">Conversion Rate</p>
              <div className="p-2 bg-success-100 dark:bg-success-950 rounded-lg">
                <TrendingUp className="w-5 h-5 text-success-500" />
              </div>
            </div>
            <div className="mb-2">
              <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-50">3.42%</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-success-500">+0.5%</span>
              <span className="text-sm text-neutral-500">vs last month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Profile Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
              <div className="h-24 bg-gradient-to-r from-primary-500 to-secondary-500" />
              <div className="px-6 pb-6">
                <div className="flex items-start justify-between -mt-12 mb-4">
                  <div className="w-24 h-24 rounded-full border-4 border-white dark:border-neutral-900 bg-gradient-to-br from-primary-400 to-secondary-400" />
                  <button className="mt-14 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                    <MoreVertical className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                  </button>
                </div>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-1">John Doe</h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Product Designer</p>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                  Passionate about creating beautiful and functional user experiences.
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors">
                    Follow
                  </button>
                  <button className="px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-6">Content Card</h3>
        <div className="max-w-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary-400 via-secondary-400 to-primary-500" />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400" />
              <div>
                <p className="font-medium text-neutral-900 dark:text-neutral-50">Sarah Johnson</p>
                <p className="text-sm text-neutral-500">2 hours ago</p>
              </div>
            </div>
            <h4 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50 mb-3">
              Introducing our new Design System
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              We're excited to announce our new design system that will help you build beautiful, consistent interfaces faster than ever. This system includes colors, typography, spacing, and components.
            </p>
            <div className="flex items-center gap-6 pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <button className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">245</span>
              </button>
              <button className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors">
                32 Comments
              </button>
              <button className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-primary-500 transition-colors">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
