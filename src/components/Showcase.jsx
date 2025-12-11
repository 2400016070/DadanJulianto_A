import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import SectionTitle from './SectionTitle'; // Kita pakai komponen title disini juga

// Data dummy khusus untuk section ini
const projectsData = [
  {
    id: 1,
    category: "UI/UX Design",
    title: "Creative Portfolio Platform",
    desc: "Platform showcase karya mahasiswa dengan sistem rating dan feedback komunitas.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    team: [
      { name: "Budi Santoso", role: "Frontend Developer", img: "https://i.pravatar.cc/150?img=11" },
      { name: "Siti Aminah", role: "UI Designer", img: "https://i.pravatar.cc/150?img=5" },
      { name: "Andi Pratama", role: "Backend Dev", img: "https://i.pravatar.cc/150?img=3" }
    ]
  },
  {
    id: 2,
    category: "Mobile App",
    title: "EcoWaste Manager",
    desc: "Aplikasi manajemen sampah pintar berbasis lokasi untuk efisiensi pengangkutan sampah.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=800&q=80",
    team: [
      { name: "Rina Kusuma", role: "Mobile Dev", img: "https://i.pravatar.cc/150?img=9" },
      { name: "Dedi Setiawan", role: "Product Owner", img: "https://i.pravatar.cc/150?img=12" }
    ]
  },
  {
    id: 3,
    category: "IoT System",
    title: "Smart Greenhouse",
    desc: "Sistem monitoring suhu dan kelembapan otomatis untuk pertanian hidroponik.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
    team: [
      { name: "Joko Anwar", role: "IoT Engineer", img: "https://i.pravatar.cc/150?img=8" },
      { name: "Sarah Dewi", role: "Data Analyst", img: "https://i.pravatar.cc/150?img=1" }
    ]
  }
];

const Showcase = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const activeData = projectsData[currentProject];

  return (
    <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle title="Showcase Student Projects" subtitle="Karya-karya inovatif yang telah dihasilkan oleh mahasiswa." />
          
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col md:flex-row min-h-[500px]">
            {/* Left Content */}
            <div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center relative">
              
              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 hidden md:block">
                <button onClick={prevProject} className="p-3 rounded-full bg-white shadow-lg border hover:bg-slate-50 active:scale-90 transition-all">
                  <ArrowLeft size={20}/>
                </button>
              </div>

              <div className="md:px-8">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  {activeData.category}
                </span>
                
                <div key={activeData.id} className="animate-fade-in">
                  <h3 className="text-3xl font-extrabold mb-4 text-slate-900">{activeData.title}</h3>
                  <p className="text-slate-600 mb-8 text-lg leading-relaxed">{activeData.desc}</p>
                  
                  <div className="mb-8">
                    <p className="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wide">Tim Pembuat:</p>
                    <div className="space-y-4">
                      {activeData.team.map((member, i) => (
                        <div key={i} className="flex items-center gap-4 group">
                          <img src={member.img} className="w-10 h-10 rounded-full border border-slate-200 group-hover:scale-110 transition-transform" alt={member.name} />
                          <div>
                            <p className="text-sm font-bold text-slate-800">{member.name}</p>
                            <p className="text-xs text-slate-500">{member.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-blue-200 w-fit">
                    Live Demo <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 bg-slate-100 relative group">
               <img 
                  key={activeData.id} 
                  src={activeData.image} 
                  className="w-full h-full object-cover animate-fade-in"
                  alt="Project Screenshot" 
                />
               <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
                <button onClick={nextProject} className="p-3 rounded-full bg-white/80 backdrop-blur shadow-lg hover:bg-white active:scale-90 transition-all">
                  <ArrowRight size={20}/>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projectsData.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentProject(idx)}
                className={`w-3 h-3 rounded-full transition-all ${currentProject === idx ? "bg-blue-600 w-6" : "bg-slate-300 hover:bg-slate-400"}`}
              />
            ))}
          </div>
        </div>
      </section>
  );
};

export default Showcase;