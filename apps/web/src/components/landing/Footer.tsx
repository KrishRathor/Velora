import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-800 pb-10">
          
          {/* Column 1: Logo and Tagline */}
          <div>
            <a href="/" className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              ByteGrid
            </a>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              The automated layer for the Solana ecosystem. Build powerful, real-time workflows.
            </p>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="/dashboard" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">Dashboard</a></li>
              <li><a href="/templates" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">Templates</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">Pricing</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="/docs" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">Documentation</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">Blog</a></li>
              <li><a href="mailto:support@bytegrid.com" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">Support</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="/terms" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Solana Emphasis */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ByteGrid. All rights reserved.</p>
          <div className="mt-4 sm:mt-0">
             Powered by the <span className="font-semibold text-purple-400">ByteGrid</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
