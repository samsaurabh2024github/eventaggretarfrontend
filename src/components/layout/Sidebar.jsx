// import { Home, Search, Trophy, LogIn, UserPlus, Zap, ShieldCheck, PlusCircle } from 'lucide-react';
// import { useSelector } from 'react-redux';
// import { Link, useLocation } from 'react-router-dom';

// const Sidebar = () => {
//   const location = useLocation();
//   const { role } = useSelector((state) => state.auth); // Get role from Redux

//   const menuItems = [
//     { path: '/', icon: <Home size={20} />, label: 'Home' },
//     { path: '/browse', icon: <Search size={20} />, label: 'Browse Events' },
//     { path: '/leaderboard', icon: <Trophy size={20} />, label: 'Leaderboard' },
//   ];

//   return (
//     <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a1a2e] border-r border-gray-800 flex flex-col p-6 z-50">
//       {/* Logo Section */}
//       <div className="flex items-center gap-2 mb-10">
//         <div className="bg-brand-yellow p-1.5 rounded-lg text-black">
//           <Zap size={20} fill="currentColor" />
//         </div>
//         <h1 className="text-2xl font-bold tracking-tight">Eventria</h1>
//       </div>

//       {/* Navigation Links */}
//       <nav className="flex-1 space-y-2">
//         {menuItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
//               location.pathname === item.path
//                 ? 'bg-gray-800 border-l-4 border-brand-yellow text-white'
//                 : 'text-gray-400 hover:bg-gray-800 hover:text-white'
//             }`}
//           >
//             {item.icon}
//             <span className="font-medium">{item.label}</span>
//           </Link>
//         ))}

//         {/* NEW: Admin Only Section */}
//         {role === 'admin' && (
//           <Link
//             to="/admin/approvals"
//             className="flex items-center gap-4 px-4 py-3 rounded-xl text-brand-orange hover:bg-orange-500/10 transition-all"
//           >
//             <ShieldCheck size={20} />
//             <span className="font-bold uppercase text-xs tracking-widest">Admin Panel</span>
//           </Link>
//         )}

//         {role === 'organizer' && (
//   <SidebarLink to="/create-event" icon={<PlusCircle size={20} />} label="Create Event" />
// )}
//       </nav>

//       {/* Bottom Actions */}
//       <div className="space-y-3 pt-6 border-t border-gray-800">
//         <Link 
//           to="/login" 
//           className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:text-white transition"
//         >
//           <LogIn size={20} /> Login
//         </Link>
//         <Link 
//           to="/register" 
//           className="flex items-center justify-center gap-2 w-full py-3 bg-brand-orange text-white font-bold rounded-xl hover:opacity-90 transition shadow-lg shadow-orange-900/20"
//         >
//           <UserPlus size={18} /> Register
//         </Link>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;



import { Home, Search, Trophy, LogIn, UserPlus, Zap, ShieldCheck, PlusCircle, Calendar } from 'lucide-react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const { role } = useSelector((state) => state.auth);

  const menuItems = [
    { path: '/', icon: <Home size={20} />, label: 'Home' },
    { path: '/browse', icon: <Search size={20} />, label: 'Browse Events' },
    { path: '/leaderboard', icon: <Trophy size={20} />, label: 'Leaderboard' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1a1a2e] border-r border-gray-800 flex flex-col p-6 z-50">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-brand-yellow p-1.5 rounded-lg text-black">
          <Zap size={20} fill="currentColor" />
        </div>
        <h1 className="text-2xl font-bold tracking-tight">Eventria</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => (
          <SidebarLink 
            key={item.path} 
            to={item.path} 
            icon={item.icon} 
            label={item.label} 
            active={location.pathname === item.path}
          />
        ))}

        {/* Admin Only Section */}
        {role === 'admin' && (
          <SidebarLink 
            to="/admin/approvals" 
            icon={<ShieldCheck size={20} />} 
            label="Admin Panel" 
            active={location.pathname === '/admin/approvals'}
            variant="admin"
          />
        )}

        {/* Organizer Only Section */}
        {role === 'organizer' && (
          <SidebarLink 
            to="/create-event" 
            icon={<PlusCircle size={20} />} 
            label="Create Event" 
            active={location.pathname === '/create-event'}
          />
        )}

        {role === 'student' && (
  <SidebarLink to="/my-events" icon={<Calendar size={20} />} label="My Events" />
)}
      </nav>

      {/* Bottom Actions */}
      <div className="space-y-3 pt-6 border-t border-gray-800">
        <Link 
          to="/login" 
          className="flex items-center gap-3 w-full px-4 py-3 text-gray-400 hover:text-white transition"
        >
          <LogIn size={20} /> Login
        </Link>
        <Link 
          to="/register" 
          className="flex items-center justify-center gap-2 w-full py-3 bg-brand-orange text-white font-bold rounded-xl hover:opacity-90 transition shadow-lg shadow-orange-900/20"
        >
          <UserPlus size={18} /> Register
        </Link>
      </div>
    </aside>
  );
};

// ADD THIS COMPONENT AT THE BOTTOM OF THE FILE
const SidebarLink = ({ to, icon, label, active, variant }) => (
  <Link
    to={to}
    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
      active
        ? 'bg-gray-800 border-l-4 border-brand-yellow text-white'
        : variant === 'admin' 
          ? 'text-brand-orange hover:bg-orange-500/10' 
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </Link>
);

export default Sidebar;