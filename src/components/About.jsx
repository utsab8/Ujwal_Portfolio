import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function About() {
  const { data } = useData();
  const { aboutData } = data;

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-4">
              About Me
            </h2>
            <h3 className="text-3xl lg:text-4xl font-serif text-sky-900 mb-8 leading-tight">
              Elevating hospitality through dedication and operational excellence.
            </h3>
            
            <div className="relative">
              {/* Decorative quotation marks */}
              <span className="absolute -top-6 -left-6 text-6xl text-sky-50 font-serif opacity-50 hidden lg:block">"</span>
              
              <p className="text-lg text-slate-600 leading-relaxed relative z-10 mb-8">
                {aboutData.summary}
              </p>
            </div>
            
            <div className="h-px w-24 bg-sky-200 mx-auto lg:mx-0" />
          </motion.div>

          {/* Image Collage */}
          <motion.div
            className="w-full lg:flex-1 relative min-h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Image 1 (Main/Tall) */}
            <div className="absolute left-0 top-[10%] w-3/5 h-[80%] rounded-2xl bg-slate-100 shadow-xl overflow-hidden border-4 border-white z-10 flex items-center justify-center">
              <img src={aboutData.aboutImage1 || "https://images.unsplash.com/photo-1559339352-11d035aa65de"} className="w-full h-full object-cover" alt="Hospitality Professional" />
            </div>

            {/* Image 2 (Top Right) */}
            <div className="absolute right-0 top-0 w-2/5 h-[45%] rounded-2xl bg-sky-50 shadow-lg overflow-hidden border-4 border-white z-20 flex items-center justify-center">
              <img src={aboutData.aboutImage2 || "https://images.unsplash.com/photo-1414235077428"} className="w-full h-full object-cover" alt="Fine Dining Restaurant" />
            </div>

            {/* Image 3 (Bottom Right) */}
            <div className="absolute right-[5%] bottom-[5%] w-[45%] h-[45%] rounded-2xl bg-slate-50 shadow-lg overflow-hidden border-4 border-white z-20 flex items-center justify-center">
              <img src={aboutData.aboutImage3 || "https://images.unsplash.com/photo-1514362545857"} className="w-full h-full object-cover" alt="Bartender" />
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -z-10 right-10 bottom-10 w-40 h-40 bg-[radial-gradient(circle_at_center,_#38BDF8_2px,_transparent_2px)] [background-size:16px_16px] opacity-30" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
