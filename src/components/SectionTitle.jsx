import React from 'react';

const SectionTitle = ({ title, subtitle, align = "center" }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

export default SectionTitle;