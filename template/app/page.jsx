// pages/index.js
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function WelcomeScreen() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white">
      <div className="max-w-3xl text-center space-y-8 px-6 py-12">
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
          {/* Fiverr Button */}
          <a
            href="https://www.fiverr.com/webdevmaruf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-green-400 transition"
          >
            Find Me on Fiverr
          </a>
        </div>
      </div>

      {/* New "Getting Started" Section */}
      <section className="bg-white text-indigo-900 py-12 w-full">
        <div className="max-w-3xl mx-auto text-center space-y-6 px-6">
          <h2 className="text-3xl font-bold">Getting Started with Nextify</h2>
          <p className="text-lg">
            Follow these simple steps to start building your app with Nextify:
          </p>
          <div className="space-y-6">
            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">1. Initialize Your Nextify App</h3>
              <p>Run the following command to initialize a new project using the Nextify starter kit:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2">npx nextify-app app-name</pre>
            </div>

            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">2. Install Dependencies</h3>
              <p>Once the app is initialized, navigate into your project directory and install the necessary dependencies:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2">npm install</pre>
            </div>

            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">3. Run the Development Server</h3>
              <p>Start the development server to see your app in action:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg mt-2">npm run dev</pre>
            </div>

            <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">4. Start Building!</h3>
              <p>You're all set! Begin building your application with Next.js, Tailwind CSS, and all the pre-configured tools.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-sm text-indigo-200 pt-10 pb-6">
        <p>© 2025 Nextify | Built with Next.js</p>
        <div className="flex justify-center space-x-4 pt-6">
          {/* Social Media Links */}
          <a
            href="https://github.com/marufalaslam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.facebook.com/marufalaslam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/webdevmaruff"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
