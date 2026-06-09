import React from 'react';
import { Mail, Phone, MapPin, Link, Home} from 'lucide-react';
import { footerData } from '@/data/navigation'; // Adjust path if necessary

// --- SHARED LOGO COMPONENT ---
const Logo = () => (
  <a href="/" className="flex items-center gap-2 z-50">
    <div 
      className="w-16 h-16 rounded flex items-center justify-center font-bold text-white text-4xl"
      style={{
        background: 'linear-gradient(to top, #2868A3 0%, #3DA8FF 56%, #1C1344 150%)'
      }}
    >
      W
    </div>
    <span className="text-2xl font-bold text-[#3DA8FF] tracking-wide">
      WM<span className="text-gray-300">Sols</span>
    </span>
  </a>
);

export const Footer: React.FC = () => {
  // Utility to map string content to the correct Lucide icon
  const getContactIcon = (itemText: string) => {
    if (itemText.includes('@')) return <Mail className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />;
    if (itemText.includes('+1')) return <Phone className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />;
    return <MapPin className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />;
  };

  return (
    <footer 
      className="w-full text-white pt-20 pb-8 px-4 sm:px-6 lg:px-8 "
      style={{
        // Gradient extracted exactly from your screenshot stops
        background: 'linear-gradient(180deg, #000000 20%, #110227 54%, #0C045F 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- MAIN FOOTER CONTENT --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials (Takes up more space) */}
          <div className="lg:col-span-4 pr-4">
            <Logo />
            <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-sm">
              We craft digital solutions that empower businesses to thrive in an ever-evolving technological landscape. Your vision, our expertise.
            </p>
            
            <div className="mt-8">
              <span className="text-xs font-semibold text-gray-500 mb-3 block">Our Socials:</span>
              <div className="flex items-center gap-4">
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                  <Link className="w-6 h-6" />
                </a>
                <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                  <Home className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-2">
            <h1 className="text-lg font-sans font-medium text-white mb-6">
              {footerData[0].item}
            </h1>
            <ul className="space-y-4">
              {footerData[0].children?.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h1 className="text-lg font-medium font-sans text-white mb-6">
              {footerData[1].item}
            </h1>
            <ul className="space-y-4">
              {footerData[1].children?.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3">
            <h1 className="text-lg font-medium font-sans text-white mb-6">
              {footerData[2].item}
            </h1>
            <ul className="space-y-4">
              {footerData[2].children?.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {getContactIcon(link.item)}
                    <span className="leading-relaxed whitespace-pre-line">
                      {/* Using regex to replace the comma with a newline for the address to match the design */}
                      {link.item.replace(', ', ',\n')}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 WMSols. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="/contact" className="text-xs text-gray-500 hover:text-white transition-colors">
              Contact
            </a>
            <a href="/privacy-policy" className="text-xs text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-xs text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};