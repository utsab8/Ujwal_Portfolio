import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Testimonials() {
  const { data } = useData();
  const { testimonialsData } = data;

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-4">
            References
          </h2>
          <h3 className="text-3xl font-serif text-slate-900">
            What People Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-50 p-8 md:p-10 rounded-3xl relative"
            >
              <Quote size={48} className="text-sky-100 absolute top-6 left-6 -z-0" />
              <div className="relative z-10">
                <p className="text-slate-700 italic leading-relaxed text-lg mb-8">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <div>
                    <h4 className="font-serif text-slate-900 font-bold">{testimonial.author}</h4>
                    <p className="text-sky-600 text-sm font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
