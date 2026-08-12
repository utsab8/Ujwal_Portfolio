import { GraduationCap } from 'lucide-react';
import { useData } from '../context/DataContext';

import { motion } from 'framer-motion';

export default function Education() {
  const { data } = useData();
  const { educationData } = data;

  return (
    <section id="education" className="py-12 bg-base-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left"
            >
              <div className="w-16 h-16 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-serif text-slate-900 mb-2">{item.degree}</h4>
                <div className="text-slate-600 font-medium text-lg mb-1">{item.institution}</div>
                <div className="text-slate-400 text-sm flex flex-col md:flex-row items-center md:gap-4">
                  <span>{item.location}</span>
                  <span className="hidden md:inline text-sky-200">•</span>
                  <span>{item.dates}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
