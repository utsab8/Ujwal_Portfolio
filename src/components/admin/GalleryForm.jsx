import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Save, Plus, Trash2, Loader2, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import Toast from './Toast';
import ImageUpload from './ImageUpload';

export default function GalleryForm() {
  const { data, updateData } = useData();
  const [listData, setListData] = useState(data.galleryData || []);
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleCompanyChange = (index, field, value) => {
    const newList = [...listData];
    newList[index][field] = value;
    setListData(newList);
  };

  const handleAddCompany = () => {
    const newCompany = {
      id: Date.now().toString(),
      company: 'New Company',
      coverImage: '',
      images: []
    };
    setListData([newCompany, ...listData]);
    setExpandedIndex(0);
  };

  const handleRemoveCompany = (index) => {
    const newList = listData.filter((_, i) => i !== index);
    setListData(newList);
  };

  const handleAddImage = (companyIndex) => {
    const newList = [...listData];
    newList[companyIndex].images = [...(newList[companyIndex].images || []), ''];
    setListData(newList);
  };

  const handleUpdateImage = (companyIndex, imageIndex, val) => {
    const newList = [...listData];
    newList[companyIndex].images[imageIndex] = val;
    setListData(newList);
  };

  const handleRemoveImage = (companyIndex, imageIndex) => {
    const newList = [...listData];
    newList[companyIndex].images = newList[companyIndex].images.filter((_, i) => i !== imageIndex);
    setListData(newList);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    updateData('galleryData', listData);
    setIsSaving(false);
    
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <form onSubmit={handleSave} className="space-y-6">
        <div className="space-y-4">
          {listData.map((item, index) => (
            <div key={item.id || index} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              {/* Header / Accordion Toggle */}
              <div 
                className="p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center">
                    <ImageIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{item.company || 'Unnamed Company'}</h4>
                    <p className="text-sm text-slate-500">{item.images?.length || 0} Photos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveCompany(index);
                    }}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Remove Company"
                  >
                    <Trash2 size={18} />
                  </button>
                  {expandedIndex === index ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                </div>
              </div>

              {/* Expanded Content */}
              {expandedIndex === index && (
                <div className="p-6 pt-0 border-t border-slate-100 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-700">Company Name</label>
                      <input 
                        type="text" 
                        value={item.company || ''} 
                        onChange={(e) => handleCompanyChange(index, 'company', e.target.value)} 
                        className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" 
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2 border border-slate-200 rounded-xl p-4 bg-slate-50">
                      <ImageUpload 
                        label="Cover Image (Grid Preview)" 
                        value={item.coverImage} 
                        onChange={(val) => handleCompanyChange(index, 'coverImage', val)} 
                      />
                    </div>

                    <div className="space-y-4 md:col-span-2 mt-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                        <h4 className="font-bold text-slate-800">Gallery Photos</h4>
                        <button 
                          type="button" 
                          onClick={() => handleAddImage(index)}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors flex items-center gap-2 text-sm"
                        >
                          <Plus size={16} /> Add Photo
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {(item.images || []).map((imgUrl, imgIndex) => (
                          <div key={imgIndex} className="relative border border-slate-200 rounded-xl p-4 bg-white flex flex-col gap-2">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs font-medium text-slate-500">Photo {imgIndex + 1}</span>
                              <button 
                                type="button"
                                onClick={() => handleRemoveImage(index, imgIndex)}
                                className="text-slate-400 hover:text-red-500 transition-colors"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            <ImageUpload 
                              label="" 
                              value={imgUrl} 
                              onChange={(val) => handleUpdateImage(index, imgIndex, val)} 
                            />
                          </div>
                        ))}
                        {(!item.images || item.images.length === 0) && (
                          <div className="col-span-full py-8 text-center text-slate-500 border-2 border-dashed border-slate-200 rounded-xl">
                            No photos added yet. Click "Add Photo" to start building this gallery.
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
          <button 
            type="button" 
            onClick={handleAddCompany}
            className="px-6 py-2.5 border-2 border-dashed border-slate-300 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600 text-slate-600 font-medium rounded-xl transition-all flex items-center gap-2"
          >
            <Plus size={18} />
            Add New Company
          </button>
          
          <button 
            type="submit" 
            disabled={isSaving}
            className="ml-auto px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-sky-600/20 flex items-center gap-2 disabled:opacity-70"
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
