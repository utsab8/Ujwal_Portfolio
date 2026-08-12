import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

export default function ExperienceTimeline() {
  const { data } = useData();
  const { experienceData } = data;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 12,
        duration: 0.8 
      } 
    }
  };

  return (
    <section id="experience" className="py-24 bg-base-dark relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-4">
            Professional Journey
          </h2>
          <h3 className="text-3xl font-serif text-sky-900">
            Work Experience
          </h3>
        </div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical line */}
          <motion.div 
            className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-sky-200 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experienceData.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-12 last:mb-0"
              variants={itemVariants}
            >
              {/* Dot */}
              <motion.div 
                className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-2.5 h-2.5 bg-sky-500 rounded-full border-4 border-white box-content shadow-[0_0_0_4px_rgba(14,165,233,0.1)] z-10" 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 + (index * 0.15) }}
              />

              {/* Left Content (Company/Date on Desktop) */}
              <div className={`ml-10 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:order-2 md:pl-10'}`}>
                <div className="md:hidden text-sky-500 text-sm font-semibold mb-1">
                  {exp.dates}
                </div>
                <h4 className="text-xl font-serif text-slate-900 mb-1">{exp.role}</h4>
                <div className="text-slate-600 font-medium">{exp.company}</div>
                <div className="text-slate-400 text-sm mb-4">{exp.location}</div>
                
                <ul className={`text-slate-600 text-sm leading-relaxed space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className={`flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'} gap-2`}>
                      <span className="text-sky-400 mt-1.5 md:mt-0 text-[10px]">♦</span>
                      <span className="flex-1">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Content (Date on Desktop) */}
              <div className={`hidden md:block md:w-[45%] ${index % 2 === 0 ? 'md:order-2 md:pl-10 text-left' : 'md:pr-10 text-right'}`}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-sm font-semibold border border-sky-100">
                  {exp.dates}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
