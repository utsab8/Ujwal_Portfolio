import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { Save, Plus, Trash2, Loader2, GripVertical } from 'lucide-react';
import Toast from './Toast';

export default function ListForm({ sectionKey, itemTemplate, renderItemFields }) {
  const { data, updateData } = useData();
  const [listData, setListData] = useState(data[sectionKey] || []);
  const [isSaving, setIsSaving] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleItemChange = (index, field, value) => {
    const newList = [...listData];
    newList[index] = { ...newList[index], [field]: value };
    setListData(newList);
  };

  const handleAddItem = () => {
    setListData([...listData, { ...itemTemplate }]);
  };

  const handleDeleteItem = (index) => {
    const newList = listData.filter((_, i) => i !== index);
    setListData(newList);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 600));
    updateData(sectionKey, listData);
    setIsSaving(false);
    
    // Show Toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <form onSubmit={handleSave} className="space-y-6">
      <div className="space-y-4">
        {listData.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative group">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab shadow-sm">
              <GripVertical size={16} />
            </div>
            
            <button 
              type="button" 
              onClick={() => handleDeleteItem(index)}
              className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
            >
              <Trash2 size={18} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderItemFields(item, (field, value) => handleItemChange(index, field, value))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
        <button 
          type="button" 
          onClick={handleAddItem}
          className="px-4 py-2 text-sky-600 bg-sky-50 hover:bg-sky-100 font-medium rounded-lg transition-all flex items-center gap-2"
        >
          <Plus size={18} />
          Add Item
        </button>
        
        <button 
          type="submit" 
          disabled={isSaving}
          className="px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-sky-600/20 flex items-center gap-2 disabled:opacity-70"
        >
          {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
          Save All Changes
        </button>
      </div>
    </form>
    
    <Toast show={showToast} />
  </>
  );
}
