import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export default function Gallery() {
  const { data } = useData();
  const galleryData = data.galleryData || [];
  
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (gallery) => {
    if (!gallery.images || gallery.images.length === 0) return;
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === selectedGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedGallery.images.length - 1 : prev - 1
    );
  };

  if (!galleryData || galleryData.length === 0) return null;

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="w-16 h-1 bg-sky-500 mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-sky-900 mb-6">
            Work Gallery
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A visual journey through my professional experiences and the incredible places I've had the privilege to work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.map((gallery, index) => (
            <motion.div
              key={gallery.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openGallery(gallery)}
              className="group cursor-pointer rounded-2xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <img 
                src={gallery.coverImage} 
                alt={gallery.company} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/90 via-sky-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera size={24} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{gallery.company}</h3>
                  <p className="text-sky-100 font-medium">{gallery.images?.length || 0} Photos</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeGallery}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col"
          >
            {/* Toolbar */}
            <div className="absolute top-0 w-full p-6 flex justify-between items-center text-white z-10">
              <div className="text-xl font-serif font-bold">{selectedGallery.company}</div>
              <button 
                onClick={closeGallery}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Image Viewer */}
            <div className="flex-1 flex items-center justify-center relative p-4 md:p-12">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  src={selectedGallery.images[currentImageIndex]}
                  alt={`${selectedGallery.company} photo ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>

              {/* Navigation Controls */}
              {selectedGallery.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 md:left-8 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>
            
            {/* Counter */}
            <div className="absolute bottom-8 w-full text-center text-white/70 font-medium">
              {currentImageIndex + 1} / {selectedGallery.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
