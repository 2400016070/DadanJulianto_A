// File: src/components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = ({ name, role, quote, img }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default">
      <div className="flex items-center gap-4 mb-4">
        {/* Foto Profil */}
        <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" />
        <div>
          <h4 className="font-bold text-slate-900 text-base">{name}</h4>
          <p className="text-xs text-blue-600 font-semibold">{role}</p>
        </div>
      </div>
      {/* Isi Testimoni */}
      <p className="text-slate-600 text-sm leading-relaxed text-left">"{quote}"</p>
    </div>
  );
};

export default TestimonialCard;