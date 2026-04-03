import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-gray-500 text-sm max-w-xs text-center md:text-left">
              Building the next generation of iconic brands through creative strategy and influencer power.
            </p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <div className="text-white font-bold text-sm uppercase tracking-widest">Agency</div>
              <a href="#home" className="text-gray-500 hover:text-white transition-colors text-sm">Home</a>
              <a href="#services" className="text-gray-500 hover:text-white transition-colors text-sm">Services</a>
              <a href="#portfolio" className="text-gray-500 hover:text-white transition-colors text-sm">Portfolio</a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-white font-bold text-sm uppercase tracking-widest">Support</div>
              <a href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <div className="text-gray-600 text-xs">
            © {new Date().getFullYear()} MZ Social Hub. All rights reserved.
          </div>
          <div className="text-gray-600 text-xs flex gap-4">
            <span>Built with Passion.</span>
            <span>Design by MZ.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
