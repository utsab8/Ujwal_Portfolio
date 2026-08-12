import { useData } from '../context/DataContext';
import IconRenderer from '../utils/IconRenderer';
import { motion } from 'framer-motion';

export default function Skills() {
  const { data } = useData();
  const { coreSkills, expertiseAreas } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-4">
            Competencies
          </h2>
          <h3 className="text-3xl font-serif text-sky-900">
            Skills & Expertise
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Core Skills */}
          <div>
            <h4 className="text-xl font-serif text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-sky-300"></span>
              Core Skills
            </h4>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {coreSkills?.map((skill, index) => {
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="group p-4 rounded-xl border border-slate-100 bg-base-dark hover:bg-white hover:border-sky-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <IconRenderer name={skill.icon} size={18} />
                    </div>
                    <span className="font-medium text-slate-700">{skill.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <h4 className="text-xl font-serif text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-px bg-sky-300"></span>
              Areas of Expertise
            </h4>
            <motion.div 
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {expertiseAreas?.map((area, index) => {
                return (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 hover:border-sky-200 hover:bg-sky-50 transition-colors cursor-default"
                  >
                    <IconRenderer name={area.icon} size={14} className="text-sky-500" />
                    <span className="text-sm font-medium text-slate-700">{area.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
