import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Contact() {
  const { data } = useData();
  const { aboutData } = data;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // TODO: Integrate EmailJS here when API keys are ready
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-base-dark">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-4">
            Get In Touch
          </h2>
          <h3 className="text-3xl font-serif text-sky-900">
            Let's Connect
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-xl font-serif text-slate-900 mb-6">Contact Information</h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium mb-1">Email</div>
                  <a href={`mailto:${aboutData.email}`} className="text-slate-800 hover:text-sky-600 transition-colors font-medium">
                    {aboutData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium mb-1">Phone</div>
                  <a href={`tel:${aboutData.phone.replace(/\s+/g, '')}`} className="text-slate-800 hover:text-sky-600 transition-colors font-medium">
                    {aboutData.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-sky-500 shrink-0 shadow-sm">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 font-medium mb-1">Location</div>
                  <div className="text-slate-800 font-medium">{aboutData.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-2/3 bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-white/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8"
              >
                <CheckCircle2 size={64} className="text-emerald-500 mb-4" />
                <h4 className="text-2xl font-serif text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-600">Thank you for reaching out. I'll get back to you soon.</p>
              </motion.div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-800"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-800"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-800"
                  placeholder="How can I help you?"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-800 resize-none"
                  placeholder="Write your message here..."
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-3 rounded-xl bg-sky-900 text-white font-medium hover:bg-sky-800 transition-all shadow-[0_4px_14px_0_rgba(12,74,110,0.39)] hover:shadow-[0_6px_20px_rgba(12,74,110,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 className="animate-spin" size={16} /></>
                ) : (
                  <>Send Message <Send size={16} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
