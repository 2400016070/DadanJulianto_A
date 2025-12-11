import React from 'react';
import { 
  Lightbulb, Wrench, Users, GraduationCap, Clock, 
  BookOpen, Code, MessageSquare
} from 'lucide-react';

// Import Komponen (Pastikan file TestimonialCard sudah dibuat!)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import FeatureCard from './components/FeatureCard';
import Showcase from './components/Showcase';
import TestimonialCard from './components/TestimonialCard'; // <--- Import baru

function App() {
  
  // Data Dummy untuk Testimoni (Budi Santoso dkk)
  const testimonials = [
    { id: 1, name: "Budi Santoso", role: "Mahasiswa Sistem Informasi", quote: "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain." },
    { id: 2, name: "Siti Aminah", role: "Mahasiswa Informatika", quote: "Fasilitas dan mentoringnya sangat membantu saya dalam mengembangkan skill teknis yang dibutuhkan industri." },
    { id: 3, name: "Andi Pratama", role: "Mahasiswa DKV", quote: "Ruang Ekspresi memberikan wadah yang tepat untuk menyalurkan ide-ide gila saya menjadi karya nyata." },
    { id: 4, name: "Rina Kusuma", role: "Mahasiswa Manajemen", quote: "Belajar me-manage tim proyek di sini adalah pengalaman berharga yang tidak saya dapatkan di kelas biasa." },
    { id: 5, name: "Dedi Setiawan", role: "Mahasiswa Teknik Elektro", quote: "Sangat seru! Bertemu banyak teman baru yang satu frekuensi dan bisa bikin robot bareng." },
    { id: 6, name: "Sarah Dewi", role: "Mahasiswa Ilmu Komunikasi", quote: "Public speaking saya meningkat pesat berkat sesi Career Talks dan presentasi project rutin." },
  ];

  return (
    <div className="font-sans text-slate-800 bg-white">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <header id="home" className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-6">
              RUANG EKSPRESI : <br/>
              <span className="text-slate-500">Wadah Kreatif & Kompetitif Mahasiswa</span>
            </h1>
            
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 bg-yellow-100 text-yellow-700 border border-yellow-200 rounded-full text-sm font-semibold cursor-default">Ideation</span>
              <span className="px-4 py-1.5 bg-green-100 text-green-700 border border-green-200 rounded-full text-sm font-semibold cursor-default">Creation</span>
              <span className="px-4 py-1.5 bg-blue-100 text-blue-700 border border-blue-200 rounded-full text-sm font-semibold cursor-default">Collaboration</span>
              <span className="px-4 py-1.5 bg-pink-100 text-pink-700 border border-pink-200 rounded-full text-sm font-semibold cursor-default">Guidance</span>
            </div>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Platform komprehensif yang dirancang untuk mengembangkan potensi kreatif mahasiswa melalui pendekatan holistik dan kolaboratif.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-500"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Students collaborating" 
              className="relative rounded-[2rem] shadow-2xl object-cover w-full h-[400px] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </header>

      {/* EMPAT PILAR */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Empat Pilar Ruang Ekspresi" 
            subtitle="Program komprehensif yang dirancang untuk memaksimalkan potensi mahasiswa."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard color="yellow" icon={Lightbulb} title="Ideation" desc="Mengembangkan ide-ide kreatif melalui brainstorming." />
            <FeatureCard color="green" icon={Wrench} title="Creation" desc="Mewujudkan ide menjadi karya nyata dengan dukungan tools." />
            <FeatureCard color="blue" icon={Users} title="Collaboration" desc="Bekerja sama dalam tim multidisiplin untuk solusi komprehensif." />
            <FeatureCard color="pink" icon={GraduationCap} title="Guidance" desc="Mendapat bimbingan dari mentor berpengalaman." />
          </div>
        </div>
      </section>

      {/* JADWAL */}
      <section id="program" className="py-24">
        <div className="container mx-auto px-6">
          <SectionTitle 
            title="Jadwal & Program Kegiatan" 
            subtitle="Program terstruktur yang dirancang untuk mengoptimalkan pembelajaran setiap Sabtu."
          />

          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-slate-200 p-8 md:p-12 border border-slate-100">
            <div className="flex justify-center mb-10">
              <span className="flex items-center gap-2 text-blue-700 bg-blue-50 border border-blue-100 px-6 py-2 rounded-full font-bold shadow-sm">
                <Clock size={18}/> Setiap Sabtu
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12 relative">
              <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-16 bg-slate-200"></div>
              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border border-yellow-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 text-yellow-700 font-bold">
                  <div className="bg-yellow-200 p-1.5 rounded-lg"><Clock size={18}/></div> 09.00 - 12.00 WIB
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-800">Sesi Pagi</h4>
                <p className="text-sm text-slate-600">Workshop, Career Talks, dan Extra Classes intensif.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3 text-green-700 font-bold">
                  <div className="bg-green-200 p-1.5 rounded-lg"><Clock size={18}/></div> 13.00 - 15.00 WIB
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-800">Sesi Sore</h4>
                <p className="text-sm text-slate-600">Project Work, Mentoring, dan Collaboration Session.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {icon: MessageSquare, label: "Career Talks", color: "yellow"},
                {icon: BookOpen, label: "Extra Classes", color: "green"},
                {icon: Code, label: "Project Work", color: "blue"},
                {icon: Users, label: "Mentoring", color: "pink"},
              ].map((item, idx) => {
                 const colorClasses = {
                    yellow: "bg-yellow-50 text-yellow-700 border-yellow-100 group-hover:bg-yellow-100",
                    green: "bg-green-50 text-green-700 border-green-100 group-hover:bg-green-100",
                    blue: "bg-blue-50 text-blue-700 border-blue-100 group-hover:bg-blue-100",
                    pink: "bg-pink-50 text-pink-700 border-pink-100 group-hover:bg-pink-100",
                 };
                 return (
                  <div key={idx} className={`group p-4 rounded-xl text-center border transition-colors duration-300 cursor-pointer ${colorClasses[item.color]}`}>
                    <item.icon className="mx-auto mb-3" size={24} />
                    <h5 className="font-bold text-sm">{item.label}</h5>
                  </div>
                 )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE PROJECT */}
      <div id="project">
        <Showcase />
      </div>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24">
        <div className="container mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <TestimonialCard 
                  key={item.id}
                  name={item.name}
                  role={item.role}
                  quote={item.quote}
                  img={`https://i.pravatar.cc/150?img=${item.id + 10}`} // Gambar random biar variatif
                />
              ))}
           </div>
        </div>
      </section>

      {/* FOOTER */}
      <div id="contact">
        <Footer />
      </div>

    </div>
  );
}

export default App;