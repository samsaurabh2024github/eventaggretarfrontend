

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search } from 'lucide-react';

// const Home = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/browse?search=${searchQuery}`);
//     }
//   };

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Gradient Overlay */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=1200&q=80')`,
//           }}
//         >
//           {/* Gradient Overlay - Dark gradient for readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-[#0f0f1b]/80"></div>
//           {/* Additional radial gradient for depth */}
//           <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 w-full max-w-6xl px-4 md:px-8 text-center">
//           {/* Main Heading */}
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-tight">
//             Discover Amazing
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500">
//               Events Near You
//             </span>
//           </h1>

//           {/* Subheading */}
//           <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
//             Find, explore, and register for exciting events happening in your college. 
//             Connect with organizers and communities like never before.
//           </p>

//           {/* Search Bar */}
//           <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-8">
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//               <input
//                 type="text"
//                 placeholder="Search events by name, category..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
//               />
//             </div>
//             <button
//               type="submit"
//               className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
//             >
//               Search
//             </button>
//           </form>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => navigate('/browse')}
//               className="px-8 py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
//             >
//               Browse Events
//             </button>
//             <button
//               onClick={() => navigate('/register')}
//               className="px-8 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
//           <div className="animate-bounce">
//             <svg
//               className="w-6 h-6 text-white/50"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 14l-7 7m0 0l-7-7m7 7V3"
//               />
//             </svg>
//           </div>
//         </div>
//       </section>

//       {/* Optional: Featured Events Section */}
//       <section className="py-16 md:py-24 px-4 md:px-8 bg-[#0f0f1b]">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Featured Events
//           </h2>
//           <p className="text-gray-400 mb-12">
//             Check out these trending events happening soon
//           </p>
//           {/* Placeholder for featured events - add your event cards here */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[1, 2, 3].map((i) => (
//               <div
//                 key={i}
//                 className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:border-purple-500/50 transition-all"
//               >
//                 <div className="h-40 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-lg mb-4"></div>
//                 <h3 className="text-lg font-semibold text-white mb-2">Event {i}</h3>
//                 <p className="text-gray-400">Event description goes here</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search, ChevronRight, Heart, Share2, Clock, MapPin, Users, Flame,
  Code2, Music2, Trophy, BookOpen, Mic2, Palette,
  CalendarSearch, ClipboardList, Award, Bell, ShieldCheck, LayoutDashboard,
  Upload,
} from 'lucide-react';

/* ─── Font ─── */
const FontLoader = () => (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800;900&display=swap');`}</style>
);

/* ─── Data ─── */
const CATEGORIES = [
  { label: 'Tech & Hackathons', count: 142, Icon: Code2,   card: 'from-[#1a2a4a] to-[#0d1f3c]', border: 'border-[#2a3f6f]', ico: 'bg-[#6c8ebf18] border-[#6c8ebf44]', accent: '#6c8ebf' },
  { label: 'Cultural Fests',    count: 98,  Icon: Music2,  card: 'from-[#3a1a2e] to-[#2a0f22]', border: 'border-[#5a2a4a]', ico: 'bg-[#c46e9518] border-[#c46e9544]', accent: '#c46e95' },
  { label: 'Sports',            count: 76,  Icon: Trophy,  card: 'from-[#2e1f0a] to-[#1e1200]', border: 'border-[#4a3010]', ico: 'bg-[#c4873e18] border-[#c4873e44]', accent: '#c4873e' },
  { label: 'Workshops',         count: 54,  Icon: BookOpen, card: 'from-[#0a2e1a] to-[#051a0e]', border: 'border-[#0f4a25]', ico: 'bg-[#4caf7818] border-[#4caf7844]', accent: '#4caf78' },
  { label: 'Comedy & Open Mic', count: 31,  Icon: Mic2,   card: 'from-[#2a2000] to-[#1a1400]', border: 'border-[#4a3800]', ico: 'bg-[#d4a01718] border-[#d4a01744]', accent: '#d4a017' },
  { label: 'Art & Design',      count: 29,  Icon: Palette, card: 'from-[#2a0a3a] to-[#1a0528]', border: 'border-[#4a1570]', ico: 'bg-[#9b6bc418] border-[#9b6bc444]', accent: '#9b6bc4' },
];

const EVENTS = [
  { id: 1, title: 'National Level Hackathon 2025', org: 'CS Department',   date: 'Jan 28, 2025', time: '9:00 AM',  seats: '200 seats', hot: true,  tag: 'Tech',     tagCls: 'bg-[#6c8ebf28] text-[#93c5fd] border-[#6c8ebf55]', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=70' },
  { id: 2, title: 'Spandan Cultural Festival',     org: 'Student Council', date: 'Feb 14, 2025', time: '5:00 PM',  seats: '500 seats', hot: true,  tag: 'Cultural', tagCls: 'bg-[#c46e9528] text-[#f9a8d4] border-[#c46e9555]', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=70' },
  { id: 3, title: 'Inter-College Cricket Tournament', org: 'Sports Committee', date: 'Mar 5, 2025',  time: '8:00 AM',  seats: '32 teams',  hot: false, tag: 'Sports',   tagCls: 'bg-[#c4873e28] text-[#fcd34d] border-[#c4873e55]', img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&q=70' },
];

const FEATURES = [
  { Icon: CalendarSearch, title: 'Event Discovery',     desc: 'Browse and search all college events by category, date, or department with a clean, intuitive interface.',                          ico: 'bg-purple-500/15 border-purple-500/30', color: 'text-purple-400' },
  { Icon: ClipboardList,  title: 'Online Registration', desc: 'One-click event registration with instant confirmation, history tracking, and participant management.',                             ico: 'bg-blue-500/15 border-blue-500/30',     color: 'text-blue-400'   },
  { Icon: Award,          title: 'Digital Certificates',desc: 'Automated certificate generation and PDF download for every student who attends an event.',                                         ico: 'bg-amber-500/15 border-amber-500/30',   color: 'text-amber-400'  },
  { Icon: Bell,           title: 'Notifications',       desc: 'Real-time alerts for event approvals, registrations, reminders, and important updates.',                                            ico: 'bg-pink-500/15 border-pink-500/30',     color: 'text-pink-400'   },
  { Icon: ShieldCheck,    title: 'Role-Based Access',   desc: 'Separate secure portals for Students, Event Organizers, and Administrators with tailored permissions.',                             ico: 'bg-green-500/15 border-green-500/30',   color: 'text-green-400'  },
  { Icon: LayoutDashboard,title: 'Event Management',    desc: 'Full lifecycle management: create, approve, update, track attendance, and close events seamlessly.',                                ico: 'bg-cyan-500/15 border-cyan-500/30',     color: 'text-cyan-400'   },
];

const STEPS = [
  { n: '1', title: 'Create Your Account',        desc: 'Sign up with your college email. Your role — student, organizer, or admin — is automatically configured.' },
  { n: '2', title: 'Discover or Create Events',  desc: 'Browse events by category or create your own with smart templates in under 5 minutes.' },
  { n: '3', title: 'Register & Get Certified',   desc: 'One-click registration, QR-code entry, and an automatic digital certificate after attendance.' },
  { n: '4', title: 'Track & Manage',             desc: 'Organizers get live dashboards. Admins approve events. Everyone gets real-time notifications.' },
];

const STATS = [
  { value: '430+', label: 'Total Events',         from: 'from-violet-400', to: 'to-pink-400' },
  { value: '12K+', label: 'Registered Students',  from: 'from-blue-400',   to: 'to-emerald-400' },
  { value: '28',   label: 'Colleges',             from: 'from-amber-400',  to: 'to-orange-400' },
  { value: '150+', label: 'Organizers',           from: 'from-pink-400',   to: 'to-violet-400' },
];

const TESTIMONIALS = [
  { initials: 'AR', name: 'Aryan Raj',    role: 'B.Tech CSE, 3rd Year',     color: 'bg-purple-500/20 text-purple-300', quote: '"EventHub completely changed how I discover events on campus. I never miss a hackathon or workshop anymore. The certificate feature is a game changer for my resume."' },
  { initials: 'PS', name: 'Priya Sharma', role: 'Cultural Secretary, MCA',  color: 'bg-pink-500/20 text-pink-300',     quote: '"As an event organizer, managing registrations used to be chaos. Now everything is in one place — approvals, attendance, and reports are just a click away."' },
  { initials: 'DK', name: 'Dr. D. Kumar', role: 'Head of Student Affairs',  color: 'bg-amber-500/20 text-amber-300',   quote: '"The role-based access is brilliant. Faculty can approve events, students register easily, and the admin dashboard gives full visibility. Perfect for our college."' },
];

/* ─── EventCard ─── */
const EventCard = ({ event }) => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="rounded-[18px] overflow-hidden group cursor-pointer bg-[#111120] border border-[#1c1c30] hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-40 overflow-hidden">
        <img src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        <div className="absolute top-2.5 left-2.5 flex gap-1.5">
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${event.tagCls}`}>{event.tag}</span>
          {event.hot && (
            <span className="flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-500/18 text-red-300 border border-red-500/30">
              <Flame size={8} fill="#fca5a5" className="text-red-300" /> Hot
            </span>
          )}
        </div>
        <div className="absolute top-2.5 right-2.5 flex gap-1.5">
          <button onClick={() => setLiked(l => !l)} className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-black/50 border border-white/12 hover:bg-white/10 transition-colors">
            <Heart size={12} fill={liked ? '#ef4444' : 'none'} color={liked ? '#ef4444' : 'white'} />
          </button>
          <button className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-black/50 border border-white/12 hover:bg-white/10 transition-colors">
            <Share2 size={12} color="white" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-bold text-[13px] leading-snug mb-1 group-hover:text-purple-300 transition-colors line-clamp-2">{event.title}</h3>
        <p className="text-[11px] text-gray-600 mb-3">{event.org}</p>
        <div className="flex items-center gap-2.5 text-gray-500 text-[11px] flex-wrap">
          <span className="flex items-center gap-1"><Clock size={10} /> {event.date}</span>
          <span className="flex items-center gap-1"><MapPin size={10} /> {event.time}</span>
          <span className="flex items-center gap-1 ml-auto"><Users size={10} /> {event.seats}</span>
        </div>
      </div>
    </div>
  );
};

/* ─── Home ─── */
const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) navigate(`/browse?search=${query}`);
  };

  return (
    <div className="w-full min-h-screen bg-[#07070f]" style={{ fontFamily: "'Sora', sans-serif" }}>
      <FontLoader />

      {/* ══ HERO ══ */}
      <section className="relative min-h-[520px] flex items-center justify-center text-center px-4 py-[72px] overflow-hidden"
        style={{ background: 'linear-gradient(155deg,#0f0520 0%,#16063a 45%,#0a0e24 100%)' }}>
        <div className="absolute top-[-80px] left-[-60px] w-[420px] h-[420px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(109,40,217,.28) 0%,transparent 65%)' }} />
        <div className="absolute top-[-40px] right-[-40px] w-[350px] h-[350px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(219,39,119,.2) 0%,transparent 65%)' }} />
        <div className="absolute bottom-0 left-[40%] w-[200px] h-[200px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(245,158,11,.1) 0%,transparent 70%)' }} />

        <div className="relative z-10 max-w-[740px] w-full">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 border"
            style={{ background: 'rgba(109,40,217,0.18)', borderColor: 'rgba(109,40,217,0.4)' }}>
            <span className="w-[7px] h-[7px] rounded-full bg-amber-400 inline-block" />
            <span className="text-[11px] font-bold tracking-[.12em] uppercase text-purple-300">College Event Platform</span>
          </div>

          <h1 className="text-[clamp(30px,6vw,58px)] font-black text-white leading-[1.08] tracking-tight mb-4">
            Your Campus. Your<br />
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Events. Your Story.
            </span>
          </h1>

          <p className="text-gray-400 text-[15px] leading-[1.75] max-w-[480px] mx-auto mb-8">
            Discover, register, and manage college events seamlessly. Built for students, organizers, and administrators.
          </p>

          <form onSubmit={handleSearch} className="flex gap-2.5 max-w-[540px] mx-auto mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-600" size={16} />
              <input
                type="text" value={query} onChange={e => setQuery(e.target.value)}
                placeholder="Search events, clubs, departments..."
                className="w-full pl-[42px] pr-4 py-[13px] rounded-xl text-[14px] text-white placeholder-gray-600 outline-none transition-colors"
                style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.11)' }}
                onFocus={e => (e.target.style.borderColor = 'rgba(109,40,217,0.6)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.11)')}
              />
            </div>
            <button type="submit" className="px-6 py-[13px] rounded-xl text-[14px] font-bold text-white bg-gradient-to-r from-violet-700 to-pink-600 hover:opacity-85 whitespace-nowrap transition-opacity">Search</button>
          </form>

          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => navigate('/browse')} className="px-8 py-3 rounded-xl text-[14px] font-bold text-white bg-gradient-to-r from-violet-700 to-pink-600 hover:opacity-85 transition-opacity">Browse Events</button>
            <button onClick={() => navigate('/register')} className="px-8 py-3 rounded-xl text-[14px] font-semibold text-gray-300 border border-white/14 hover:bg-white/8 hover:text-white transition-all" style={{ background: 'rgba(255,255,255,0.07)' }}>Get Started Free</button>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══ CATEGORIES ══ */}
      <section className="bg-[#0a0a16] py-16 px-6 md:px-10">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex items-end justify-between mb-7">
            <div>
              <p className="text-[11px] font-bold tracking-[.14em] uppercase text-purple-500 mb-2">Browse by Category</p>
              <h2 className="text-[clamp(24px,4vw,38px)] font-black text-white leading-tight">What's your vibe?</h2>
            </div>
            <button onClick={() => navigate('/browse')} className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-purple-500 hover:opacity-70 transition-opacity">
              View all <ChevronRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {CATEGORIES.map(cat => (
              <div key={cat.label} onClick={() => navigate(`/browse?category=${encodeURIComponent(cat.label)}`)}
                className={`flex flex-col items-center gap-3 p-[22px] rounded-[18px] cursor-pointer text-center bg-gradient-to-br ${cat.card} border ${cat.border} hover:-translate-y-1 transition-all duration-300 group`}>
                <div className={`w-12 h-12 rounded-[13px] flex items-center justify-center border ${cat.ico} group-hover:scale-110 transition-transform duration-300`}>
                  <cat.Icon size={22} color={cat.accent} />
                </div>
                <div>
                  <p className="text-white font-bold text-[12px] leading-snug">{cat.label}</p>
                  <p className="text-[11px] mt-1" style={{ color: cat.accent }}>{cat.count} events</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex sm:hidden justify-center">
            <button onClick={() => navigate('/browse')} className="flex items-center gap-1 text-[13px] font-bold text-purple-500">View all categories <ChevronRight size={14} /></button>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══ FEATURED EVENTS ══ */}
      <section className="bg-[#07070f] py-16 px-6 md:px-10">
        <div className="max-w-[1080px] mx-auto">
          <div className="flex items-end justify-between mb-7">
            <div>
              <p className="text-[11px] font-bold tracking-[.14em] uppercase text-pink-500 mb-2">Don't Miss Out</p>
              <h2 className="text-[clamp(24px,4vw,38px)] font-black text-white leading-tight">Featured Events</h2>
            </div>
            <button onClick={() => navigate('/browse')} className="hidden sm:flex items-center gap-1 text-[13px] font-bold text-pink-500 hover:opacity-70 transition-opacity">
              See all events <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px]">
            {EVENTS.map(ev => <EventCard key={ev.id} event={ev} />)}
          </div>
          <div className="mt-5 flex sm:hidden justify-center">
            <button onClick={() => navigate('/browse')} className="flex items-center gap-1 text-[13px] font-bold text-pink-500">See all events <ChevronRight size={14} /></button>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══ WHY EVENTHUB ══ */}
      <section className="bg-[#0a0a16] py-20 px-6 md:px-10 text-center">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.14em] uppercase text-purple-500 mb-2">Why EventHub?</p>
          <h2 className="text-[clamp(24px,4vw,38px)] font-black text-white mb-3 leading-tight">Everything you need to run great events</h2>
          <p className="text-[14px] text-gray-500 leading-[1.75] max-w-[500px] mx-auto">From discovery to certificates, EventHub gives students and organizers a seamless end-to-end experience.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-11 text-left">
            {FEATURES.map(({ Icon, title, desc, ico, color }) => (
              <div key={title} className="rounded-[20px] p-7 bg-[#111120] border border-[#1c1c30] hover:border-white/12 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-[13px] flex items-center justify-center mb-5 border ${ico}`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2">{title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══ HOW IT WORKS ══ */}
      <section className="bg-[#07070f] py-20 px-6 md:px-10 text-center">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.14em] uppercase text-amber-500 mb-2">How It Works</p>
          <h2 className="text-[clamp(24px,4vw,38px)] font-black text-white mb-3 leading-tight">Up and running in minutes</h2>
          <p className="text-[14px] text-gray-500 leading-[1.75] max-w-[480px] mx-auto">Three simple steps to start discovering or hosting events on your campus.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mt-12 text-left relative">
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative px-6 pb-8 lg:pb-0">
                {/* connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[calc(40px+24px)] right-0 h-[2px]"
                    style={{ background: 'linear-gradient(90deg,#6d28d9,transparent)' }} />
                )}
                <div className="w-10 h-10 rounded-full border-2 border-purple-700 flex items-center justify-center text-[14px] font-black text-purple-300 mb-4 relative z-10" style={{ background: '#0e0920' }}>
                  {step.n}
                </div>
                <h3 className="text-white font-bold text-[14px] mb-2">{step.title}</h3>
                <p className="text-gray-500 text-[12px] leading-[1.65]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div style={{ borderTop: '1px solid #141428', borderBottom: '1px solid #141428', background: '#0c0c1a' }}>
        <div className="max-w-[1080px] mx-auto py-9 px-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
          {STATS.map(s => (
            <div key={s.label}>
              <p className={`text-[30px] font-black mb-1 bg-gradient-to-r ${s.from} ${s.to} bg-clip-text text-transparent`}>{s.value}</p>
              <p className="text-[10px] uppercase tracking-[.1em] text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══ TESTIMONIALS ══ */}
      <section className="bg-[#0a0a16] py-20 px-6 md:px-10 text-center">
        <div className="max-w-[1080px] mx-auto">
          <p className="text-[11px] font-bold tracking-[.14em] uppercase text-green-500 mb-2">What Students Say</p>
          <h2 className="text-[clamp(24px,4vw,38px)] font-black text-white mb-10 leading-tight">Loved by campus communities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="rounded-[18px] p-6 bg-[#111120] border border-[#1c1c30]">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="w-3 h-3 fill-amber-400"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-[13px] text-gray-500 leading-[1.7] mb-4">{t.quote}</p>
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold ${t.color}`}>{t.initials}</div>
                  <div>
                    <p className="text-[13px] font-bold text-white">{t.name}</p>
                    <p className="text-[11px] text-gray-600">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;