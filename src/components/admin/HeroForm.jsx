import { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { Save, Loader2 } from 'lucide-react';
import ImageUpload from './ImageUpload';
import Toast from './Toast';

export default function HeroForm() {
  const { data, updateData } = useData();
  const [formData, setFormData] = useState(data.aboutData);
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setFormData(data.aboutData);
  }, [data.aboutData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 600));
    updateData('aboutData', formData);
    setIsSaving(false);
    
    // Show Toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <form onSubmit={handleSave} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
      <div className="mb-8 border-b border-slate-100 pb-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Profile Image</h3>
        <ImageUpload 
          label="Hero Image" 
          value={formData.image} 
          onChange={(val) => setFormData(prev => ({ ...prev, image: val }))} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name} 
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all" 
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Professional Title</label>
          <input 
            type="text" 
            name="title"
            value={formData.title} 
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all" 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Tagline (Short Summary)</label>
        <textarea 
          name="tagline"
          value={formData.tagline} 
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all resize-none" 
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Location</label>
          <input 
            type="text" 
            name="location"
            value={formData.location || ''} 
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all" 
          />
        </div>
      </div>

      <div className="flex justify-end pt-4 border-t border-slate-100">
        <button 
          type="submit" 
          disabled={isSaving}
          className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-sky-600/20 flex items-center gap-2 disabled:opacity-70"
        >
          {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save Changes
        </button>
      </div>
    </form>
    
    <Toast show={showToast} />
  </>
  );
}
