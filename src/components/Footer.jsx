import React from 'react';
import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-20 mt-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-bold text-2xl mb-6">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white border border-white/20">RE</div>
            Ruang Ekspresi
          </div>
          <p className="text-blue-200 text-sm leading-relaxed mb-8">
            Wadah kreatif dan kompetitif untuk mahasiswa yang ingin mengembangkan potensi melalui ideation, creation, collaboration, dan guidance.
          </p>
          <div className="space-y-4 text-sm text-blue-200">
              <div className="flex items-start gap-3"><MapPin size={18} className="mt-1 shrink-0 text-blue-400"/> Jl. Ringroad Selatan, Yogyakarta</div>
              <div className="flex items-center gap-3"><Mail size={18} className="shrink-0 text-blue-400"/> ruang_ekspresi@univ.ac.id</div>
              <div className="flex items-center gap-3"><Phone size={18} className="shrink-0 text-blue-400"/> (0274) 123456</div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-blue-200 text-sm">
            {['Home', 'About', 'Program', 'Projects', 'Testimonials'].map(link => (
              <li key={link}><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">{link}</a></li>
            ))}
          </ul>
        </div>

        <div>
            <h4 className="font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-3 text-blue-200 text-sm">
            {['Career Talks', 'Extra Classes', 'Project Work', 'Mentoring'].map(link => (
              <li key={link}><a href="#" className="hover:text-white hover:translate-x-1 inline-block transition-transform">{link}</a></li>
            ))}
          </ul>
        </div>
        
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all">
                  <Icon size={20}/>
                </a>
              ))}
            </div>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-blue-800/50 text-center text-blue-400 text-sm">
        © 2025 Ruang Ekspresi. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;