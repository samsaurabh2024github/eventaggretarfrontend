// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Rocket, Eye, EyeOff } from 'lucide-react';

// const Register = () => {
//   const [showPass, setShowPass] = useState(false);

//   return (
//     <div className="max-w-4xl mx-auto py-10">
//       <div className="bg-[#1a1a2e] rounded-3xl p-10 border border-gray-800 shadow-2xl relative overflow-hidden">
//         {/* Decorative background glow */}
//         <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-orange/10 blur-3xl rounded-full"></div>
        
//         {/* Header */}
//         <div className="text-center mb-10 relative z-10">
//           <div className="bg-gray-800/50 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-700">
//              <Rocket className="text-pink-500" size={28} />
//           </div>
//           <h2 className="text-4xl font-bold mb-2">Create Your Account</h2>
//           <p className="text-gray-400">Join thousands of event organizers using Eventria</p>
//         </div>

//         {/* Google Button */}
//         <button className="w-full bg-white text-black font-bold py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition-all active:scale-[0.98] mb-8">
//           <svg width="20" height="20" viewBox="0 0 24 24">
//             <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
//             <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
//             <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
//             <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
//           </svg>
//           Sign up with Google
//         </button>

//         <div className="relative mb-8 text-center">
//           <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-800"></div></div>
//           <span className="relative bg-[#1a1a2e] px-4 text-xs text-gray-500 uppercase tracking-widest">or continue with email</span>
//         </div>

//         {/* Form */}
//         <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
//           <InputGroup label="Full Name" type="text" placeholder="Your full name" />
//           <InputGroup label="Email Address" type="email" placeholder="you@example.com" />
          
//           <div className="relative">
//              <InputGroup label="Password" type={showPass ? "text" : "password"} placeholder="••••••••" />
//              <button 
//               type="button" 
//               onClick={() => setShowPass(!showPass)} 
//               className="absolute right-4 top-11 text-gray-400 hover:text-brand-yellow transition"
//              >
//                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
//              </button>
//           </div>

//           <InputGroup label="Confirm Password" type="password" placeholder="••••••••" />
          
//           <div className="md:col-span-2 mt-4">
//             <button type="submit" className="w-full py-4 bg-brand-orange text-white font-bold rounded-xl hover:opacity-90 transition shadow-lg shadow-orange-900/20 active:scale-[0.99]">
//               Create Account
//             </button>
//           </div>
//         </form>

//         <p className="text-center mt-8 text-gray-400">
//           Already have an account? <Link to="/login" className="text-brand-yellow font-bold hover:underline">Sign In</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// const InputGroup = ({ label, type, placeholder }) => (
//   <div className="flex flex-col gap-2">
//     <label className="text-sm font-semibold text-gray-300">
//       {label} <span className="text-red-500">*</span>
//     </label>
//     <input 
//       type={type} 
//       placeholder={placeholder}
//       required
//       className="bg-[#0f0f1b] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow/20 focus:border-brand-yellow transition-all"
//     />
//   </div>
// );

// export default Register;


// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerUser } from '../features/authSlice';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { loading, error } = useSelector((state) => state.auth);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       return alert("Passwords do not match");
//     }
    
//     const result = await dispatch(registerUser({
//       name: formData.name,
//       email: formData.email,
//       password: formData.password
//     }));

//     if (registerUser.fulfilled.match(result)) {
//       navigate('/'); // Redirect to home on success
//     }
//   };

//   return (
//     // ... inside your form ...
//     <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div className="flex flex-col gap-2">
//         <label className="text-sm font-semibold">Full Name</label>
//         <input 
//           name="name" 
//           onChange={handleChange} 
//           className="bg-[#0f0f1b] border border-gray-800 rounded-xl px-4 py-3" 
//           required 
//         />
//       </div>
//       {/* Repeat for email and password using name="email" and name="password" */}
      
//       {error && <p className="text-red-500 text-sm md:col-span-2">{error}</p>}
      
//       <div className="md:col-span-2 mt-4">
//         <button 
//           disabled={loading}
//           className="w-full py-4 bg-brand-orange text-white font-bold rounded-xl"
//         >
//           {loading ? 'Creating Account...' : 'Create Account'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default Register;


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { User, Briefcase, Rocket, CheckCircle } from 'lucide-react';

const Register = () => {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { loading, error, isPending } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(registerUser({ ...formData, role }));
    if (registerUser.fulfilled.match(result) && role === 'student') navigate('/login');
  };

  if (isPending) return <PendingView />;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="bg-[#1a1a2e] p-10 rounded-3xl border border-gray-800 shadow-2xl">
        <div className="text-center mb-8">
          <Rocket className="mx-auto text-pink-500 mb-4" size={40} />
          <h2 className="text-3xl font-bold">Create Account</h2>
        </div>

        <div className="flex bg-[#0f0f1b] p-1 rounded-xl mb-8 border border-gray-800">
          <button onClick={() => setRole('student')} className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2 ${role === 'student' ? 'bg-gray-800 text-white' : 'text-gray-500'}`}>
            <User size={18} /> Student
          </button>
          <button onClick={() => setRole('organizer')} className={`flex-1 py-3 rounded-lg flex items-center justify-center gap-2 ${role === 'organizer' ? 'bg-brand-orange text-white' : 'text-gray-500'}`}>
            <Briefcase size={18} /> Organizer
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" required className="w-full bg-[#0f0f1b] border border-gray-800 p-4 rounded-xl" onChange={e => setFormData({...formData, name: e.target.value})} />
          <input type="email" placeholder="Email" required className="w-full bg-[#0f0f1b] border border-gray-800 p-4 rounded-xl" onChange={e => setFormData({...formData, email: e.target.value})} />
          <input type="password" placeholder="Password" required className="w-full bg-[#0f0f1b] border border-gray-800 p-4 rounded-xl" onChange={e => setFormData({...formData, password: e.target.value})} />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button className="w-full py-4 bg-brand-orange rounded-xl font-bold transition hover:opacity-90">
            {loading ? 'Processing...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
};

const PendingView = () => (
  <div className="text-center py-20 bg-[#1a1a2e] rounded-3xl border border-gray-800 max-w-lg mx-auto">
    <CheckCircle className="mx-auto text-brand-yellow mb-6" size={60} />
    <h2 className="text-2xl font-bold mb-4">Under Review</h2>
    <p className="text-gray-400 px-10">Organizer accounts require admin approval. You will be able to log in once your request is processed.</p>
    <Link to="/" className="inline-block mt-8 text-brand-yellow font-bold underline">Return Home</Link>
  </div>
);

export default Register;