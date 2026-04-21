import { useNavigate } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ['Discover', 'Dashboard', 'Certificates', 'Contact Us', 'About'];

  return (
    <nav className="sticky top-0 z-50 w-full">
      {/* Main Navbar */}
      <div 
        className="flex items-center justify-between px-6 md:px-10 py-4 backdrop-blur-xl border-b border-white/10 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(7,7,15,0.95) 0%, rgba(15,5,32,0.95) 100%)',
        }}
      >
        {/* Logo Section */}
        <div 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50">
            <Zap size={22} color="white" fill="white" className="animate-pulse" />
          </div>
          <div>
            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400 block leading-tight">
              Eventria
            </span>
            {/* <span className="text-[9px] text-gray-500 font-semibold tracking-widest">EVENT HUB</span> */}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => {
                const path = link === 'Contact Us' ? '/contact' : `/${link.toLowerCase().replace(' ', '')}`;
                navigate(path);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-300 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-300 relative group"
            >
              {link}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Sign In Button */}
          <button
            onClick={() => navigate('/Login')}
            className="hidden sm:block px-5 py-2 text-sm font-semibold text-gray-300 border-2 border-gray-600 rounded-lg hover:border-violet-500 hover:text-violet-400 hover:shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
          >
            Sign In
          </button>

          {/* Get Started Button */}
          <button
            onClick={() => navigate('/Register')}
            className="px-5 py-2 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 transform"
          >
            Get Started
          </button>

          {/* Host Event Button */}
          <button
            onClick={() => navigate('/host')}
            className="hidden md:flex items-center gap-1 px-4 py-2 text-sm font-semibold text-purple-300 border-2 border-purple-500/50 rounded-lg hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
          >
            <span>⊕</span> Host
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div 
          className="lg:hidden border-t border-white/10 backdrop-blur-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(7,7,15,0.98) 0%, rgba(15,5,32,0.98) 100%)',
          }}
        >
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  const path = link === 'Contact Us' ? '/contact' : `/${link.toLowerCase().replace(' ', '')}`;
                  navigate(path);
                  setMobileOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-300 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300"
              >
                {link}
              </button>
            ))}
            
            <div className="pt-3 border-t border-white/10 mt-3 space-y-2">
              <button
                onClick={() => {
                  navigate('/Login');
                  setMobileOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-semibold text-gray-300 border border-gray-600 rounded-lg hover:border-violet-500 hover:text-violet-400 transition-all duration-300"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate('/Register');
                  setMobileOpen(false);
                }}
                className="w-full px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-violet-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;