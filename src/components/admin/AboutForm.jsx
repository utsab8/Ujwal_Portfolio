import { useState, useEffect } from 'react';
import { useData } from '../../context/DataContext';
import { Save, Loader2 } from 'lucide-react';
import Toast from './Toast';
import ImageUpload from './ImageUpload';

export default function AboutForm() {
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
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Full About Summary</label>
          <textarea 
            name="summary"
            value={formData.summary || ''} 
            onChange={handleChange}
            rows={8}
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all resize-none leading-relaxed" 
          />
        </div>

        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">About Section Images</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <ImageUpload 
                label="Main Tall Image" 
                value={formData.aboutImage1} 
                onChange={(val) => setFormData(prev => ({ ...prev, aboutImage1: val }))} 
              />
            </div>
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <ImageUpload 
                label="Top Right Image" 
                value={formData.aboutImage2} 
                onChange={(val) => setFormData(prev => ({ ...prev, aboutImage2: val }))} 
              />
            </div>
            <div className="border border-slate-200 rounded-xl p-4 bg-white">
              <ImageUpload 
                label="Bottom Right Image" 
                value={formData.aboutImage3} 
                onChange={(val) => setFormData(prev => ({ ...prev, aboutImage3: val }))} 
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email || ''} 
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Phone Number</label>
              <input 
                type="text" 
                name="phone"
                value={formData.phone || ''} 
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all" 
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4">
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
