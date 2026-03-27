// import { Link } from 'react-router-dom';
// import { Zap } from 'lucide-react';

// const Login = () => {
//   return (
//     <div className="max-w-md mx-auto py-20">
//       <div className="bg-[#1a1a2e] rounded-3xl p-10 border border-gray-800 shadow-2xl text-center">
//         <div className="bg-brand-yellow/20 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6">
//              <Zap className="text-brand-yellow" size={28} fill="currentColor" />
//         </div>
//         <h2 className="text-3xl font-bold mb-6">Welcome Back</h2>
        
//         <form className="space-y-4 text-left">
//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-semibold text-gray-300">Email Address</label>
//             <input type="email" placeholder="you@example.com" className="bg-[#0f0f1b] border border-gray-800 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none" />
//           </div>
//           <div className="flex flex-col gap-2">
//             <label className="text-sm font-semibold text-gray-300">Password</label>
//             <input type="password" placeholder="••••••••" className="bg-[#0f0f1b] border border-gray-800 rounded-xl px-4 py-3 focus:border-brand-yellow outline-none" />
//           </div>
//           <button className="w-full py-4 bg-brand-orange text-white font-bold rounded-xl mt-4 hover:opacity-90">Sign In</button>
//         </form>

//         <p className="mt-8 text-gray-400">
//           New to Eventria? <Link to="/register" className="text-brand-yellow font-bold">Create Account</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';
import { Clock, ShieldAlert } from 'lucide-react';

/**
 * PendingView Component
 * This handles the UI for users (Organizers/Students) who are registered 
 * but haven't been approved by the Admin yet.
 */
const PendingView = () => (
  <div className="max-w-md mx-auto py-20 px-6">
    <div className="bg-[#1a1a2e] p-10 rounded-3xl border border-brand-yellow/30 text-center flex flex-col items-center">
      <div className="bg-brand-yellow/10 p-4 rounded-full mb-6">
        <Clock className="text-brand-yellow" size={48} />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Account Pending</h2>
      <p className="text-gray-400 leading-relaxed mb-8">
        Your account is currently under review by our administration team. 
        You will gain access to all features once approved.
      </p>
      <div className="flex items-center gap-2 text-brand-yellow bg-brand-yellow/5 px-4 py-2 rounded-lg border border-brand-yellow/20">
        <ShieldAlert size={18} />
        <span className="text-sm font-bold uppercase tracking-wider">Verification in Progress</span>
      </div>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-8 text-gray-500 hover:text-white transition text-sm underline"
      >
        Refresh Status
      </button>
    </div>
  </div>
);

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { loading, error, isPending } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser(formData));
    
    if (loginUser.fulfilled.match(result)) {
      const userRole = result.payload.role;

      // Conditional navigation based on role
      if (userRole === 'admin') {
        navigate('/admin/approvals');
      } else {
        navigate('/');
      }
    }
  };

  // If the Redux state marks this user as pending, show the PendingView
  if (isPending) {
    return <PendingView />;
  }

  return (
    <div className="max-w-md mx-auto py-20 px-6">
      <div className="bg-[#1a1a2e] p-10 rounded-3xl border border-gray-800 shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white">Login</h2>
          <p className="text-gray-500 mt-2">Welcome back to Eventria</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              required 
              className="w-full bg-[#0f0f1b] border border-gray-800 p-4 rounded-2xl outline-none focus:border-brand-orange transition-all text-white" 
              onChange={e => setFormData({...formData, email: e.target.value})} 
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-2 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required 
              className="w-full bg-[#0f0f1b] border border-gray-800 p-4 rounded-2xl outline-none focus:border-brand-orange transition-all text-white" 
              onChange={e => setFormData({...formData, password: e.target.value})} 
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl text-red-500 text-sm font-medium">
              {error}
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-brand-orange text-white rounded-2xl font-black text-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-orange-900/20 disabled:opacity-50"
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account? <span className="text-brand-orange font-bold cursor-pointer hover:underline" onClick={() => navigate('/register')}>Register here</span>
        </div>
      </div>
    </div>
  );
};

export default Login;