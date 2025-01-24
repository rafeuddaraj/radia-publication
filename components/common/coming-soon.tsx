export default function ComingSoon() {
  return (
    <div className="text-center p-8 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md rounded-lg shadow-2xl mx-4 transition-colors duration-300 w-full">
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
        Under Development
      </h1>

      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-600 dark:text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>

      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
        We're working on something amazing.
      </p>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
        <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full w-2/3"></div>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</p>
    </div>
  );
}
