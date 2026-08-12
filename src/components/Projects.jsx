import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2, ExternalLink } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Projects() {
  const { data } = useData();
  const { projectsData } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-4">
            Featured Work
          </h2>
          <h3 className="text-3xl font-serif text-sky-900">
            Projects & Initiatives
          </h3>
        </div>

        <motion.div 
          className="bg-base-dark rounded-3xl overflow-hidden shadow-sm border border-slate-100 flex flex-col md:flex-row group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Visual Side */}
          <div className="w-full md:w-2/5 relative overflow-hidden h-64 md:h-auto cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img 
              src={projectsData.image} 
              alt={projectsData.title} 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-sky-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="text-sky-500 text-sm font-semibold tracking-wider uppercase mb-2">
              Case Study
            </div>
            <h4 className="text-2xl font-serif text-slate-900 mb-4">
              {projectsData.title}
            </h4>
            <p className="text-slate-600 leading-relaxed mb-8">
              {projectsData.description}
            </p>
            <div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 text-sky-600 font-medium hover:text-sky-700 transition-colors"
              >
                View Project Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto flex flex-col relative"
              >
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm transition-all z-10"
                >
                  <X size={20} />
                </button>

                <div className="h-48 md:h-72 w-full relative shrink-0">
                  <img 
                    src={projectsData.image} 
                    alt={projectsData.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 text-white">
                    <div className="text-sky-300 text-sm font-semibold tracking-wider uppercase mb-2">
                      Case Study
                    </div>
                    <h3 className="text-2xl md:text-4xl font-serif text-white">{projectsData.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 md:p-10 space-y-8">
                  <div>
                    <h4 className="text-lg font-serif text-slate-900 mb-3">Project Overview</h4>
                    <p className="text-slate-600 leading-relaxed">
                      {projectsData.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-serif text-slate-900 mb-4">Key Responsibilities & Achievements</h4>
                    <ul className="space-y-3">
                      {projectsData.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-sky-500 shrink-0 mt-0.5" />
                          <span className="text-slate-600 leading-relaxed">{highlight}</span>
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
