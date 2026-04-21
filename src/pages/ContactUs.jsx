import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';

const FontLoader = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap');
  `}</style>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'loading', msg: 'Sending...' });
    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', msg: 'Success! Check your inbox for confirmation.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', msg: data.message || 'Error sending message.' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Server is offline. Please try later.' });
    }
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "'Sora', sans-serif", background: 'linear-gradient(135deg, #0f0520 0%, #1a0a3a 45%, #0d0d28 100%)' }}
    >
      <FontLoader />

      {/* ── Main Content ── */}
      <div className="flex flex-col lg:flex-row items-stretch min-h-screen">

        {/* ════════ LEFT PANEL ════════ */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:w-[45%] lg:pr-12">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 w-fit"
            style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(124,58,237,0.4)' }}
          >
            <span className="w-[7px] h-[7px] rounded-full bg-amber-400 inline-block" />
            <span className="text-[11px] font-bold tracking-[.12em] uppercase text-purple-300">
              Support & Contact
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 62px)', color: '#fff' }}
          >
            How can we<br />
            <span
              style={{
                background: 'linear-gradient(90deg,#a78bfa,#f472b6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              help
            </span>{' '}
            today?
          </h1>

          {/* Description paragraphs */}
          <p className="text-[15px] leading-[1.8] text-gray-400 mb-4 max-w-[420px]">
            Curious about event registration, hosting, or digital certificates? Our campus support team is always here to answer your questions.
          </p>
          <p className="text-[15px] leading-[1.8] text-gray-400 mb-10 max-w-[420px]">
            Need quick help? Visit the{' '}
            <span className="text-purple-400 font-semibold cursor-pointer hover:text-purple-300 transition-colors">
              Help Center
            </span>{' '}
            from your student dashboard — it covers the most common queries instantly.
          </p>

          {/* Contact info */}
          <div className="space-y-5 mb-12">
            {[
              { Icon: Mail,    label: 'Email Us',     value: 'support@eventhub.college',  sub: 'We reply within 24 hours' },
              { Icon: Clock,   label: 'Office Hours',  value: '9:00 AM – 6:00 PM',         sub: 'Monday to Friday' },
              { Icon: MapPin,  label: 'Find Us',       value: 'Admin Block, Room 102',      sub: 'Main Campus' },
              { Icon: MessageSquare, label: 'Live Chat', value: 'Available on Dashboard',  sub: 'For registered students' },
            ].map(({ Icon, label, value, sub }) => (
              <div key={label} className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(124,58,237,0.18)', border: '1px solid rgba(124,58,237,0.35)' }}
                >
                  <Icon size={16} color="#a78bfa" />
                </div>
                <div>
                  <p className="text-white font-semibold text-[13px] leading-tight">{value}</p>
                  <p className="text-gray-600 text-[11px] mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative image strip */}
          {/* <div className="hidden lg:flex gap-3 rounded-2xl overflow-hidden h-[88px]">
            {[
              'https://images.unsplash.com/photo-1540575467063-178f50002cbc?w=300&q=70',
              'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=300&q=70',
              'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&q=70',
            ].map((src, i) => (
              <img
                key={i} src={src} alt=""
                className="flex-1 object-cover rounded-xl"
                style={{ filter: 'brightness(0.5) saturate(0.7)' }}
              />
            ))}
          </div> */}
        </div>

        {/* ════════ RIGHT PANEL — Original Form ════════ */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 lg:w-[55%] lg:pl-0">
          {/* White card matching original */}
          <div className="w-full max-w-[500px] mx-auto lg:mx-0 lg:ml-auto bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
            <h2 className="text-2xl font-extrabold mb-1 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-gray-400 mb-8 text-center text-sm">Have a question? We're here to help.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition text-white"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Your Email Address"
                required
                className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition text-white"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
              <textarea
                placeholder="Type your message here..."
                rows="4"
                required
                className="w-full p-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition text-white resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed py-3 rounded-lg font-bold shadow-lg transform active:scale-95 transition text-white flex items-center justify-center gap-2"
              >
                {status.type === 'loading'
                  ? <><Loader2 size={17} className="animate-spin" /> Sending…</>
                  : <><Send size={16} /> Send Message</>
                }
              </button>
            </form>

            {status.msg && (
              <div
                className={`mt-6 p-3 rounded-lg text-center text-sm flex items-center justify-center gap-2 ${
                  status.type === 'success'
                    ? 'bg-green-900/30 text-green-400'
                    : status.type === 'error'
                    ? 'bg-red-900/30 text-red-400'
                    : 'text-purple-400'
                }`}
              >
                {status.type === 'success' && <CheckCircle size={16} />}
                {status.type === 'error'   && <AlertCircle  size={16} />}
                {status.msg}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;