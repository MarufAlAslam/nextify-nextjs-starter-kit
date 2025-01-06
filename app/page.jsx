// pages/index.js
export default function WelcomeScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
      <div className="max-w-3xl text-center space-y-8 px-6">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-md">
          Welcome to <span className="text-yellow-300">Nextify</span>
        </h1>
        <p className="text-lg leading-relaxed drop-shadow-sm">
          Kickstart your Next.js journey with the ultimate starter kit! Pre-configured tools, optimized structure, and everything you need to create amazing applications faster.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            Documentation
          </a>
          <a
            href="https://github.com/MarufAlAslam/nextify-nextjs-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-300 text-indigo-900 font-medium px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
          >
            View on GitHub
          </a>
        </div>
        <footer className="text-sm text-indigo-200 pt-10">
          © 2025 Nextify | Built with Next.js
        </footer>
      </div>
    </div>
  );
}
