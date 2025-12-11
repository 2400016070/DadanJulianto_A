import React from 'react';

const FeatureCard = ({ icon: Icon, title, desc, color }) => {
  // Logic Styling dipisah disini agar file App.jsx bersih
  const variants = {
    yellow: "bg-yellow-50 text-yellow-900 border-yellow-200 hover:shadow-yellow-100",
    green: "bg-green-50 text-green-900 border-green-200 hover:shadow-green-100",
    blue: "bg-blue-50 text-blue-900 border-blue-200 hover:shadow-blue-100",
    pink: "bg-pink-50 text-pink-900 border-pink-200 hover:shadow-pink-100",
  };

  const iconBg = {
    yellow: "bg-white text-yellow-600",
    green: "bg-white text-green-600",
    blue: "bg-white text-blue-600",
    pink: "bg-white text-pink-600",
  };

  return (
    <div className={`p-6 rounded-2xl border ${variants[color]} h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default`}>
      <div className={`mb-6 w-14 h-14 rounded-full flex items-center justify-center shadow-sm ${iconBg[color]}`}>
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h3 className="font-bold text-xl mb-3">{title}</h3>
      <p className="text-sm leading-relaxed opacity-80">{desc}</p>
    </div>
  );
};

export default FeatureCard;