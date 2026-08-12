import { useData } from '../context/DataContext';
import { Mail, MapPin } from 'lucide-react';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  const { data } = useData();
  const { aboutData, socialLinks } = data;
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'linkedin': return <FaLinkedinIn size={18} />;
      case 'instagram': return <FaInstagram size={18} />;
      case 'twitter': return <FaTwitter size={18} />;
      case 'facebook': return <FaFacebookF size={18} />;
      default: return null;
    }
  };

  const getHoverClass = (iconName) => {
    switch (iconName.toLowerCase()) {
      case 'linkedin': return 'hover:bg-[#0077b5] hover:border-[#0077b5]';
      case 'instagram': return 'hover:bg-[#E1306C] hover:border-[#E1306C]';
      case 'twitter': return 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]';
      case 'facebook': return 'hover:bg-[#1877F2] hover:border-[#1877F2]';
      default: return 'hover:bg-sky-500 hover:border-sky-500';
    }
  };

  return (
    <footer className="bg-sky-950 text-sky-100/80 pt-20 pb-10 border-t border-sky-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#" className="font-serif text-3xl font-bold text-white tracking-tight mb-6 inline-block">
              {aboutData.name}
            </a>
            <p className="text-sky-200/70 leading-relaxed mb-8 max-w-sm">
              {aboutData.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className={`w-10 h-10 rounded-full bg-sky-900/50 border border-transparent flex items-center justify-center text-sky-300 hover:text-white hover:-translate-y-1 transition-all duration-300 ${getHoverClass(link.icon)}`}
                  aria-label={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-sky-400 transition-colors inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-sky-400 shrink-0 mt-0.5" />
                <span>{aboutData.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-sky-400 shrink-0 mt-0.5" />
                <a href={`mailto:${aboutData.email}`} className="hover:text-sky-400 transition-colors">
                  {aboutData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sky-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sky-200/60">
          <p>
            &copy; {currentYear} {aboutData.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
