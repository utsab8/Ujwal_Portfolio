import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';
import IconRenderer from '../utils/IconRenderer';
import { ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function Training() {
  const { data } = useData();
  const { trainingData } = data;
  const [selectedTraining, setSelectedTraining] = useState(null);

  return (
    <section id="training" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-4">
            Professional Development
          </h2>
          <h3 className="text-3xl font-serif text-slate-900">
            Training & Certifications
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all flex flex-col overflow-hidden group cursor-pointer"
                onClick={() => setSelectedTraining(item)}
              >
                <div className="h-40 w-full relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="font-serif text-lg text-slate-900 leading-snug mb-3">{item.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between w-full">
                    {item.year ? (
                      <span className="text-xs font-semibold text-sky-500 px-3 py-1.5 bg-sky-50 rounded-md border border-sky-100">
                        {item.year}
                      </span>
                    ) : (
                      <span />
                    )}
                    <button className="text-sky-500 hover:text-sky-700 text-sm font-semibold flex items-center gap-1 transition-colors">
                      View More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedTraining && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTraining(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto flex flex-col relative"
              >
                <button 
                  onClick={() => setSelectedTraining(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all z-10"
                >
                  <X size={20} />
                </button>

                <div className="h-40 md:h-56 w-full relative shrink-0">
                  <img 
                    src={selectedTraining.image} 
                    alt={selectedTraining.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                      <IconRenderer name={selectedTraining.icon} size={24} />
                    </div>
                    <div>
                      {selectedTraining.year && (
                        <div className="text-sky-300 text-xs font-bold tracking-wider uppercase mb-1">
                          {selectedTraining.year}
                        </div>
                      )}
                      <h3 className="text-xl md:text-3xl font-serif leading-tight text-white">{selectedTraining.name}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-2 uppercase tracking-wide">Overview</h4>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                      {selectedTraining.details}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900 mb-3 uppercase tracking-wide">Key Highlights</h4>
                    <ul className="space-y-3">
                      {selectedTraining.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-sky-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600 leading-relaxed text-sm md:text-base">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
