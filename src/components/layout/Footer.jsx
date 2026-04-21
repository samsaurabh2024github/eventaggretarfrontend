// import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1b] border-t border-gray-800 pt-12 pb-6 px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Column 1: Brand */}
        <div>
         <div className="flex items-center gap-2 text-2xl font-bold">
  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
    <Zap size={18} className="text-white fill-white" />
  </div>

  <span className="text-white">
    Event<span className="text-purple-400">ria</span>
  </span>
</div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Revolutionizing event management with real-time engagement tools for unforgettable experiences.
          </p>
          {/* <div className="flex gap-4 mt-6">
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Facebook size={18} />} />
            <SocialIcon icon={<Instagram size={18} />} />
            <SocialIcon icon={<Linkedin size={18} />} />
          </div> */}
        </div>

        {/* Column 2: Quick Links */}
        <FooterCol title="Quick Links" links={['Home', 'Blog', 'Features', 'About Us', 'Contact']} />

        {/* Column 3: Resources */}
        <FooterCol title="Resources" links={['Help Center', 'Feedback', 'Terms of Service', 'Privacy Policy']} />

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="font-bold mb-4">Stay Updated</h4>
          <p className="text-gray-400 text-sm mb-4">Sign in to subscribe to our newsletter for event tips.</p>
          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
            Sign In to Subscribe
          </button>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 flex justify-between text-gray-500 text-xs">
        <p>© 2026 Eventria. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Terms</span><span>Privacy</span><span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

const FooterCol = ({ title, links }) => (
  <div>
    <h4 className="font-bold mb-4">{title}</h4>
    <ul className="space-y-2 text-gray-400 text-sm">
      {links.map(link => <li key={link} className="hover:text-white cursor-pointer">{link}</li>)}
    </ul>
  </div>
);

const SocialIcon = ({ icon }) => (
  <div className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-white cursor-pointer transition">
    {icon}
  </div>
);

export default Footer;