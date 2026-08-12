import { motion } from 'framer-motion';
import { MapPin, Download, Mail, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Hero() {
  const { data } = useData();
  const { aboutData } = data;
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-sky-50 -z-10 rounded-bl-[100px] opacity-70 hidden lg:block" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-sm font-medium mb-6">
              <MapPin size={16} className="text-sky-500" />
              <span>{aboutData.location}</span>
              <span className="w-1 h-1 rounded-full bg-sky-300 mx-1" />
              <span>Nepalese</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 leading-tight mb-4">
              Hi, I'm <span className="text-sky-900">{aboutData.name.split(' ')[0]}</span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-slate-600 font-medium mb-6">
              {aboutData.title}
            </h2>
            
            <p className="text-slate-600 leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              {aboutData.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact"
                className="px-8 py-3 rounded-xl bg-sky-900 text-white font-medium hover:bg-sky-800 transition-all shadow-[0_4px_14px_0_rgba(12,74,110,0.39)] hover:shadow-[0_6px_20px_rgba(12,74,110,0.23)] hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Mail size={18} />
                Contact Me
              </a>
              <a 
                href="#"
                className="px-8 py-3 rounded-xl bg-white text-slate-700 border border-slate-200 font-medium hover:border-sky-200 hover:bg-sky-50 transition-all flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Image/Placeholder */}
          <motion.div 
            className="flex-1 w-full max-w-md lg:max-w-none flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Glow / Ring */}
            <div className="absolute inset-0 bg-sky-400 rounded-full blur-[100px] opacity-20 transform scale-110 -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-sky-100 rounded-full animate-[spin_20s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            
            {/* Photo Placeholder */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-slate-100 border-4 border-white shadow-2xl z-10 flex items-center justify-center">
              <img src={aboutData.image} className="object-cover w-full h-full" alt={aboutData.name} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
