// import { Bell, Search, User, ChevronDown, HelpCircle } from 'lucide-react';

// const Navbar = () => {
//   return (
//     <header className="h-20 bg-[#0f0f1b]/80 backdrop-blur-md sticky top-0 z-40 px-10 border-b border-gray-800/50 flex items-center justify-between">
//       {/* Status Badge */}
//       <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full">
//         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//         <span className="text-green-500 text-xs font-semibold tracking-wide uppercase">
//           All Systems Operational
//         </span>
//       </div>

//       {/* Right Actions */}
//       <div className="flex items-center gap-6">
//         <button className="text-gray-400 hover:text-white transition p-2 bg-gray-800/50 rounded-lg">
//           <HelpCircle size={20} />
//         </button>
        
//         <div className="h-8 w-[1px] bg-gray-800 mx-2"></div>

//         <div className="flex gap-3">
//           <button className="px-5 py-2 text-sm font-semibold text-gray-300 hover:text-white transition">
//             Login
//           </button>
//           <button className="px-5 py-2 text-sm font-bold bg-brand-orange text-white rounded-xl hover:opacity-90 transition shadow-lg shadow-orange-900/20">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import { HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { token, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className="h-20 bg-[#0f0f1b]/80 backdrop-blur-md sticky top-0 z-40 px-10 border-b border-gray-800/50 flex items-center justify-between">
      <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-green-500 text-xs font-semibold uppercase">All Systems Operational</span>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-white transition p-2 bg-gray-800/50 rounded-lg">
          <HelpCircle size={20} />
        </button>
        
        <div className="h-8 w-[1px] bg-gray-800 mx-2"></div>

        {token ? (
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-200">Hello, {user?.name || 'User'}</span>
            <button 
              onClick={() => dispatch(logout())}
              className="px-4 py-2 text-xs font-bold bg-red-500/10 text-red-500 border border-red-500/20 rounded-lg hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Link to="/login" className="px-5 py-2 text-sm font-semibold text-gray-300 hover:text-white">Login</Link>
            <Link to="/register" className="px-5 py-2 text-sm font-bold bg-brand-orange text-white rounded-xl hover:opacity-90 transition">Get Started</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;