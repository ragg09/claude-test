import Navbar from '@/components/ui/navbar';

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Component Preview
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Demo page showcasing the available UI components and their variants.
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Navbar Variants
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Default Navbar
                </h3>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <Navbar variant="default" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Compact Navbar
                </h3>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <Navbar variant="compact" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Transparent Navbar
                </h3>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
                  <Navbar variant="transparent" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Sample UI Elements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Card Component
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  This is a sample card component showing how content would look.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                  Action Button
                </button>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Form Elements
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Sample input"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                  <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                    <option>Option 1</option>
                    <option>Option 2</option>
                  </select>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  Status Indicators
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Active</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Warning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300">Error</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}