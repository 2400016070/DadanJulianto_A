import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Tambahkan X untuk tombol close (opsional)

const Navbar = () => {
  // State untuk menu mobile (agar bisa buka tutup di HP)
  const [isOpen, setIsOpen] = useState(false);

  // Daftar Menu & Tujuannya
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'Project', href: '#project' },
  ];

  return (
    <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO (Klik Logo kembali ke Home) */}
        <a href="#home" className="flex items-center gap-2 font-bold text-xl text-blue-900 cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-blue-300 shadow-lg">RE</div>
          Ruang Ekspresi
        </a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="hover:text-blue-600 hover:underline underline-offset-4 transition-all"
            >
              {item.name}
            </a>
          ))}
          
          {/* Tombol Contact khusus */}
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-200"
          >
            Contact
          </a>
        </div>

        {/* ICON MENU MOBILE (Untuk HP) */}
        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X /> : <Menu className="text-slate-600" />}
            </button>
        </div>
      </div>

      {/* DROPDOWN MENU MOBILE (Opsional: Agar rapi di HP) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 absolute w-full shadow-lg">
           <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Tutup menu pas diklik
                  className="text-slate-600 font-medium hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-blue-600 font-bold">Contact</a>
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;