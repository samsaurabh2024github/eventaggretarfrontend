import React, { useState } from 'react';
import { Zap, Users, CalendarCheck, Award, Target, Heart, Lightbulb, ShieldCheck, ChevronRight, Star } from 'lucide-react';

/* ── local images ── */
import concertImg    from '../assets/concert-live-event.jpeg';
import hackathonImg  from '../assets/conference-seminar-hall.jpeg';
import culturalImg   from '../assets/570pg_FolkFestival-071025-1.jpg';

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap');
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(22px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp .6s ease both; }
    .d1 { animation-delay: .05s; } .d2 { animation-delay: .13s; }
    .d3 { animation-delay: .21s; } .d4 { animation-delay: .29s; }
    .d5 { animation-delay: .37s; } .d6 { animation-delay: .45s; }
  `}</style>
);

/* ─── data ─── */
const STATS = [
  { Icon: CalendarCheck, value: '430+',  label: 'Events Hosted'        },
  { Icon: Users,         value: '12K+',  label: 'Student Members'      },
  { Icon: Award,         value: '28',    label: 'Partner Colleges'      },
  { Icon: Star,          value: '4.9',   label: 'Avg. Rating'           },
];

const VALUES = [
  { Icon: Target,      title: 'Student First',    desc: 'Every feature is built around what students need — simple discovery, instant registration, and automatic certificates.',      color: 'text-purple-400', bg: 'bg-purple-500/15 border-purple-500/30' },
  { Icon: Heart,       title: 'Community Driven', desc: 'We believe the best college experiences come from genuine community. EventHub connects students across departments and years.', color: 'text-pink-400',   bg: 'bg-pink-500/15 border-pink-500/30'   },
  { Icon: Lightbulb,   title: 'Innovation',       desc: 'From AI-powered event recommendations to QR-code attendance, we continuously push what a campus event platform can do.',     color: 'text-amber-400',  bg: 'bg-amber-500/15 border-amber-500/30' },
  { Icon: ShieldCheck, title: 'Transparency',     desc: 'Role-based access ensures students, organizers, and admins each have exactly the right view — nothing hidden, nothing extra.', color: 'text-cyan-400',   bg: 'bg-cyan-500/15 border-cyan-500/30'   },
];

const TEAM = [
  { initials: 'RK', name: 'Rahul Kumar',   role: 'Founder & Lead Developer',  color: 'bg-purple-500/25 text-purple-300' },
  { initials: 'PS', name: 'Priya Sharma',  role: 'UI/UX Designer',             color: 'bg-pink-500/25 text-pink-300'     },
  { initials: 'AJ', name: 'Aryan Joshi',   role: 'Backend Engineer',           color: 'bg-blue-500/25 text-blue-300'     },
  { initials: 'SM', name: 'Sneha Mishra',  role: 'Product Manager',            color: 'bg-amber-500/25 text-amber-300'   },
];

const GALLERY = [
  { src: concertImg,   label: 'Live Concerts',       tag: 'Cultural' },
  { src: hackathonImg, label: 'Tech Hackathons',      tag: 'Tech'     },
  { src: culturalImg,  label: 'Folk Performances',    tag: 'Cultural' },
];

/* ─── AboutPage ─── */
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');

  return (
    <div
      className="w-full min-h-screen bg-[#07070f]"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      <FontLoader />

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        className="relative min-h-[520px] flex items-center justify-center text-center px-6 py-24 overflow-hidden"
        style={{ background: 'linear-gradient(155deg,#0f0520 0%,#16063a 45%,#0a0e24 100%)' }}
      >
        {/* Glow orbs */}
        <div className="absolute top-[-60px] left-[-40px] w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(109,40,217,.3) 0%,transparent 65%)' }} />
        <div className="absolute bottom-[-40px] right-[-40px] w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(219,39,119,.22) 0%,transparent 65%)' }} />

        <div className="relative z-10 max-w-3xl w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 fade-up d1"
            style={{ background: 'rgba(109,40,217,0.18)', border: '1px solid rgba(109,40,217,0.4)' }}>
            <span className="w-[7px] h-[7px] rounded-full bg-amber-400 inline-block" />
            <span className="text-[11px] font-bold tracking-[.13em] uppercase text-purple-300">About EventHub</span>
          </div>

          <h1 className="font-black text-white leading-[1.08] tracking-tight mb-5 fade-up d2"
            style={{ fontSize: 'clamp(30px,6vw,60px)' }}>
            Bringing Campus Life<br />
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Together,Beyond the Classroom
            </span>
          </h1>

          <p className="text-gray-400 text-[15px] leading-relaxed max-w-xl mx-auto mb-8 fade-up d3">
            EventHub is a centralized platform designed to make college event discovery, registration, and management effortless for every student, organizer, and administrator.
          </p>

          <div className="flex gap-3 justify-center flex-wrap fade-up d4">
            <button className="px-7 py-3 rounded-xl font-bold text-[14px] text-white bg-gradient-to-r from-violet-700 to-pink-600 hover:opacity-85 transition-opacity">
              Explore Events
            </button>
            <button className="px-7 py-3 rounded-xl font-semibold text-[14px] text-gray-300 border border-white/15 hover:bg-white/8 hover:text-white transition-all"
              style={{ background: 'rgba(255,255,255,0.07)' }}>
              Join the Team
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS STRIP ══════════════════ */}
      <div style={{ borderTop: '1px solid #141428', borderBottom: '1px solid #141428', background: '#0c0c1a' }}>
        <div className="max-w-5xl mx-auto py-10 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map(({ Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                style={{ background: 'rgba(109,40,217,0.18)', border: '1px solid rgba(109,40,217,0.3)' }}>
                <Icon size={18} color="#a78bfa" />
              </div>
              <p className="text-[28px] font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">{value}</p>
              <p className="text-[11px] uppercase tracking-[.1em] text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════ STORY + TABS ══════════════════ */}
      <section className="py-20 px-6 md:px-12 bg-[#09090f]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

          {/* Left — text content with tabs */}
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[.14em] uppercase text-purple-500 mb-2">Our Story</p>
            <h2 className="text-[clamp(26px,4vw,40px)] font-black text-white leading-tight mb-6">
              Built by students,<br />for students
            </h2>

            {/* Tab switcher */}
            <div className="flex gap-1 mb-7 p-1 rounded-xl w-fit" style={{ background: '#111120', border: '1px solid #1c1c30' }}>
              {[
                { id: 'mission', label: 'Our Mission' },
                { id: 'vision',  label: 'Our Vision'  },
                { id: 'story',   label: 'Our Story'   },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  style={activeTab === tab.id
                    ? { background: 'linear-gradient(135deg,#7c3aed,#db2777)' }
                    : {}}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div className="text-gray-400 text-[15px] leading-[1.85] space-y-4 max-w-[520px]">
              {activeTab === 'mission' && <>
                <p>Our mission is to eliminate the chaos of college event management — no more missed WhatsApp announcements, lost registration forms, or forgotten certificates.</p>
                <p>We give every student a single, beautiful place to discover what's happening on campus, register instantly, and walk away with a verified digital certificate.</p>
              </>}
              {activeTab === 'vision' && <>
                <p>We envision a campus where every student is aware of every opportunity — whether it's a coding hackathon, a folk festival, or a leadership workshop.</p>
                <p>Our goal is to be the de-facto event platform for every college in India, connecting students, organizers, and institutions in one seamless ecosystem.</p>
              </>}
              {activeTab === 'story' && <>
                <p>EventHub started as a final-year MCA project born out of frustration — our team kept missing amazing college events simply because there was no centralized platform.</p>
                <p>What began as a semester project quickly grew into a full product used by thousands of students across campuses, with features shaped entirely by real student feedback.</p>
              </>}
            </div>

            <button className="mt-8 flex items-center gap-2 text-[13px] font-bold text-purple-400 hover:text-purple-300 transition-colors">
              Read the full story <ChevronRight size={15} />
            </button>
          </div>

          {/* Right — stacked images */}
          <div className="lg:w-[46%] w-full">
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 h-52 rounded-2xl overflow-hidden">
                <img src={concertImg} alt="Live concert event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ filter: 'brightness(0.85)' }} />
              </div>
              <div className="h-36 rounded-2xl overflow-hidden">
                <img src={hackathonImg} alt="Tech hackathon" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ filter: 'brightness(0.85)' }} />
              </div>
              <div className="h-36 rounded-2xl overflow-hidden">
                <img src={culturalImg} alt="Cultural performance" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" style={{ filter: 'brightness(0.85)' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══════════════════ GALLERY ══════════════════ */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0a16]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[11px] font-bold tracking-[.14em] uppercase text-pink-500 mb-2">Events We Power</p>
            <h2 className="text-[clamp(24px,4vw,38px)] font-black text-white leading-tight">
              From concerts to hackathons
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GALLERY.map(({ src, label, tag }) => (
              <div key={label} className="relative group rounded-2xl overflow-hidden h-64 cursor-pointer">
                <img src={src} alt={label}
                  className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-500"
                  style={{ filter: 'brightness(0.7)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-purple-500/30 text-purple-200 border border-purple-500/40">
                    {tag}
                  </span>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bold text-[15px]">{label}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'rgba(109,40,217,0.18)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══════════════════ VALUES ══════════════════ */}
      <section className="py-20 px-6 md:px-12 bg-[#09090f] text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-bold tracking-[.14em] uppercase text-amber-500 mb-2">What We Stand For</p>
          <h2 className="text-[clamp(24px,4vw,38px)] font-black text-white leading-tight mb-12">Our core values</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ Icon, title, desc, color, bg }) => (
              <div key={title}
                className="rounded-2xl p-7 bg-[#111120] border border-[#1c1c30] hover:border-white/12 hover:-translate-y-1 transition-all duration-300 text-left">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 border ${bg}`}>
                  <Icon size={20} className={color} />
                </div>
                <h3 className="text-white font-bold text-[15px] mb-2">{title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.7]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══════════════════ TEAM ══════════════════ */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0a16] text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-bold tracking-[.14em] uppercase text-cyan-500 mb-2">The People</p>
          <h2 className="text-[clamp(24px,4vw,38px)] font-black text-white leading-tight mb-12">Meet the team</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {TEAM.map(({ initials, name, role, color }) => (
              <div key={name}
                className="rounded-2xl p-6 bg-[#111120] border border-[#1c1c30] hover:border-white/12 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-[20px] font-black ${color}`}>
                  {initials}
                </div>
                <div>
                  <p className="text-white font-bold text-[14px] leading-tight">{name}</p>
                  <p className="text-gray-500 text-[11px] mt-1">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} />

      {/* ══════════════════ CTA BANNER ══════════════════ */}
      <section className="py-20 px-6 text-center bg-[#09090f]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[clamp(24px,4vw,40px)] font-black text-white leading-tight mb-4">
            Ready to be part of something bigger?
          </h2>
          <p className="text-gray-400 text-[15px] mb-8 leading-relaxed">
            Join thousands of students already discovering, registering, and shining at college events through EventHub.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button className="px-8 py-3.5 rounded-xl font-bold text-[14px] text-white bg-gradient-to-r from-violet-700 to-pink-600 hover:opacity-85 transition-opacity"
              style={{ boxShadow: '0 0 36px rgba(124,58,237,0.3)' }}>
              Get Started Free
            </button>
            <button className="px-8 py-3.5 rounded-xl font-semibold text-[14px] text-gray-300 border border-white/15 hover:bg-white/8 hover:text-white transition-all"
              style={{ background: 'rgba(255,255,255,0.07)' }}>
              Browse Events
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;