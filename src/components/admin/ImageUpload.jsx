import { useState, useRef } from 'react';
import { UploadCloud, X, Image as ImageIcon } from 'lucide-react';

export default function ImageUpload({ value, onChange, label = "Image URL or Upload" }) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file) => {
    if (!file.type.match('image.*')) {
      alert('Please select an image file (png, jpg, webp)');
      return;
    }
    
    // Check size (< 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert('Image size should be less than 2MB');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onChange(reader.result);
    };
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>
      
      {/* Existing Image Preview */}
      {value && (
        <div className="relative group w-32 h-32 rounded-xl overflow-hidden border-2 border-slate-200">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <button 
            type="button"
            onClick={() => onChange('')}
            className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={24} />
          </button>
        </div>
      )}

      {/* Upload Area / URL Input */}
      {!value && (
        <div 
          className={`relative w-full border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center transition-colors ${
            dragActive ? 'border-sky-500 bg-sky-50' : 'border-slate-300 bg-slate-50 hover:border-sky-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-sky-500 mb-2">
              <UploadCloud size={20} />
            </div>
            <p className="text-sm font-medium text-slate-700">
              Drag & drop an image or <button type="button" className="text-sky-500 hover:underline" onClick={() => inputRef.current?.click()}>browse</button>
            </p>
            <p className="text-xs text-slate-500">Max size: 2MB</p>
          </div>
          
          <div className="w-full flex items-center gap-4 mt-6">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400 font-medium">OR PASTE URL</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          
          <input 
            type="text" 
            value={value || ''} 
            onChange={(e) => onChange(e.target.value)} 
            placeholder="https://..."
            className="w-full mt-4 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-sky-100 focus:border-sky-400 outline-none transition-all"
          />
        </div>
      )}
    </div>
  );
}
