import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Image as ImageIcon, 
  Settings, 
  LogOut,
  Menu,
  X,
  User,
  Briefcase,
  GraduationCap,
  Award,
  BookOpen
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';
import HeroForm from '../components/admin/HeroForm';
import AboutForm from '../components/admin/AboutForm';
import ListForm from '../components/admin/ListForm';
import ImageUpload from '../components/admin/ImageUpload';

const sidebarItems = [
  { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
  { id: 'hero', label: 'Home Section', icon: User },
  { id: 'about', label: 'About Section', icon: User },
  { id: 'experience', label: 'Work Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills & Expertise', icon: Award },
  { id: 'training', label: 'Training', icon: BookOpen },
  { id: 'projects', label: 'Projects', icon: LayoutDashboard },
  { id: 'testimonials', label: 'Testimonials', icon: User },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { logout, currentUser } = useAuth();
  const { data } = useData();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard':
        const expCount = data.experienceData?.length || 0;
        const eduCount = data.educationData?.length || 0;
        const projCount = data.projectsData?.length || 0;
        const testCount = data.testimonialsData?.length || 0;
        const skillCount = (data.coreSkills?.length || 0) + (data.expertiseAreas?.length || 0);
        
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center shrink-0">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-slate-500 text-sm font-medium mb-0.5">Experiences</h3>
                  <p className="text-2xl font-bold text-slate-900">{expCount}</p>
                </div>
              </div>
              
              {/* Stat Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-slate-500 text-sm font-medium mb-0.5">Skills</h3>
                  <p className="text-2xl font-bold text-slate-900">{skillCount}</p>
                </div>
              </div>
              
              {/* Stat Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                  <LayoutDashboard size={24} />
                </div>
                <div>
                  <h3 className="text-slate-500 text-sm font-medium mb-0.5">Projects</h3>
                  <p className="text-2xl font-bold text-slate-900">{projCount}</p>
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-slate-500 text-sm font-medium mb-0.5">Testimonials</h3>
                  <p className="text-2xl font-bold text-slate-900">{testCount}</p>
                </div>
              </div>
            </div>
            
            {/* Quick Actions & Status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Welcome Back!</h3>
                <p className="text-slate-500 mb-6 max-w-lg">
                  Your portfolio is looking great. Select a section from the sidebar to start updating your content, changing your images, and adding new experiences.
                </p>
                <div className="flex gap-4">
                  <button onClick={() => setActiveTab('hero')} className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-sky-600/20">
                    Edit Profile
                  </button>
                  <a href="/" target="_blank" className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-all">
                    View Live Site
                  </a>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-slate-800 mb-1">Local Storage Active</h3>
                <p className="text-sm text-slate-500">
                  All changes are being saved securely in your browser cache.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'hero':
        return <HeroForm />;
      
      case 'about':
        return <AboutForm />;
      
      case 'experience':
        return (
          <ListForm 
            sectionKey="experienceData"
            itemTemplate={{ role: '', company: '', location: '', dates: '', responsibilities: [] }}
            renderItemFields={(item, onChange) => (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Role</label>
                  <input type="text" value={item.role || ''} onChange={(e) => onChange('role', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Company</label>
                  <input type="text" value={item.company || ''} onChange={(e) => onChange('company', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Location</label>
                  <input type="text" value={item.location || ''} onChange={(e) => onChange('location', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Dates</label>
                  <input type="text" value={item.dates || ''} onChange={(e) => onChange('dates', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" placeholder="e.g. Oct 2023 - Present" />
                </div>
              </>
            )}
          />
        );

      case 'education':
        return (
          <ListForm 
            sectionKey="educationData"
            itemTemplate={{ degree: '', institution: '', location: '', dates: '' }}
            renderItemFields={(item, onChange) => (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Degree/Certificate</label>
                  <input type="text" value={item.degree || ''} onChange={(e) => onChange('degree', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Institution</label>
                  <input type="text" value={item.institution || ''} onChange={(e) => onChange('institution', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Location</label>
                  <input type="text" value={item.location || ''} onChange={(e) => onChange('location', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Dates</label>
                  <input type="text" value={item.dates || ''} onChange={(e) => onChange('dates', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
              </>
            )}
          />
        );

      case 'skills':
        return (
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4">Core Skills</h3>
              <ListForm 
                sectionKey="coreSkills"
                itemTemplate={{ name: '', icon: 'Circle' }}
                renderItemFields={(item, onChange) => (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Skill Name</label>
                      <input type="text" value={item.name || ''} onChange={(e) => onChange('name', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Icon Name (Lucide)</label>
                      <input type="text" value={item.icon || ''} onChange={(e) => onChange('icon', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                    </div>
                  </>
                )}
              />
            </div>
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Areas of Expertise</h3>
              <ListForm 
                sectionKey="expertiseAreas"
                itemTemplate={{ name: '', icon: 'Circle' }}
                renderItemFields={(item, onChange) => (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Expertise Area</label>
                      <input type="text" value={item.name || ''} onChange={(e) => onChange('name', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Icon Name (Lucide)</label>
                      <input type="text" value={item.icon || ''} onChange={(e) => onChange('icon', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                    </div>
                  </>
                )}
              />
            </div>
          </div>
        );

      case 'training':
        return (
          <ListForm 
            sectionKey="trainingData"
            itemTemplate={{ name: '', year: '', icon: 'Award', image: '', description: '', details: '', highlights: [] }}
            renderItemFields={(item, onChange) => (
              <>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Course Name</label>
                  <input type="text" value={item.name || ''} onChange={(e) => onChange('name', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Year</label>
                  <input type="text" value={item.year || ''} onChange={(e) => onChange('year', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Icon Name</label>
                  <input type="text" value={item.icon || ''} onChange={(e) => onChange('icon', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2 md:col-span-2 border border-slate-200 rounded-xl p-4 bg-white">
                  <ImageUpload 
                    label="Training Image" 
                    value={item.image} 
                    onChange={(val) => onChange('image', val)} 
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Short Description</label>
                  <textarea value={item.description || ''} onChange={(e) => onChange('description', e.target.value)} rows={2} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl resize-none" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Full Details</label>
                  <textarea value={item.details || ''} onChange={(e) => onChange('details', e.target.value)} rows={3} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl resize-none" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Highlights (one per line)</label>
                  <textarea 
                    value={Array.isArray(item.highlights) ? item.highlights.join('\n') : item.highlights || ''} 
                    onChange={(e) => onChange('highlights', e.target.value.split('\n').filter(h => h.trim() !== ''))} 
                    rows={4} 
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl resize-none" 
                  />
                </div>
              </>
            )}
          />
        );


      case 'projects':
        return (
          <ListForm 
            sectionKey="projectsData"
            itemTemplate={{ title: '', category: '', image: '', description: '', tech: [], liveUrl: '' }}
            renderItemFields={(item, onChange) => (
              <>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Project Title</label>
                  <input type="text" value={item.title || ''} onChange={(e) => onChange('title', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Category</label>
                  <input type="text" value={item.category || ''} onChange={(e) => onChange('category', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Live URL</label>
                  <input type="text" value={item.liveUrl || ''} onChange={(e) => onChange('liveUrl', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2 md:col-span-2 border border-slate-200 rounded-xl p-4 bg-white">
                  <ImageUpload 
                    label="Project Image" 
                    value={item.image} 
                    onChange={(val) => onChange('image', val)} 
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Description</label>
                  <textarea value={item.description || ''} onChange={(e) => onChange('description', e.target.value)} rows={3} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl resize-none" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Technologies (one per line)</label>
                  <textarea 
                    value={Array.isArray(item.tech) ? item.tech.join('\n') : item.tech || ''} 
                    onChange={(e) => onChange('tech', e.target.value.split('\n').filter(t => t.trim() !== ''))} 
                    rows={3} 
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl resize-none" 
                  />
                </div>
              </>
            )}
          />
        );

      case 'testimonials':
        return (
          <ListForm 
            sectionKey="testimonialsData"
            itemTemplate={{ name: '', role: '', image: '', text: '' }}
            renderItemFields={(item, onChange) => (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Author Name</label>
                  <input type="text" value={item.name || ''} onChange={(e) => onChange('name', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Author Role</label>
                  <input type="text" value={item.role || ''} onChange={(e) => onChange('role', e.target.value)} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl" />
                </div>
                <div className="space-y-2 md:col-span-2 border border-slate-200 rounded-xl p-4 bg-white">
                  <ImageUpload 
                    label="Author Image" 
                    value={item.image} 
                    onChange={(val) => onChange('image', val)} 
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-slate-700">Testimonial Text</label>
                  <textarea value={item.text || ''} onChange={(e) => onChange('text', e.target.value)} rows={4} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl resize-none" />
                </div>
              </>
            )}
          />
        );

      default:
        return (
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center py-20">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Section Under Development</h3>
            <p className="text-slate-500 max-w-md">
              This management module will be completed shortly.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(true)}
            className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? '280px' : '0px' }}
        className={`fixed lg:sticky top-0 h-screen bg-white border-r border-slate-200 z-50 flex flex-col overflow-hidden transition-all duration-300 ${!isSidebarOpen ? '-translate-x-full lg:translate-x-0 lg:w-20' : 'translate-x-0'}`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
          {(isSidebarOpen || window.innerWidth >= 1024) && (
            <span className="font-serif font-bold text-xl text-sky-900 truncate">
              Admin Portal
            </span>
          )}
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                  isActive ? 'bg-sky-50 text-sky-600 font-medium' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-sky-500' : 'text-slate-400'} />
                {(isSidebarOpen || window.innerWidth < 1024) && <span className="truncate">{item.label}</span>}
              </button>
            );
          })}
        </div>

        <div className="p-4 border-t border-slate-100">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-medium">
            <LogOut size={20} />
            {(isSidebarOpen || window.innerWidth < 1024) && <span>Sign Out</span>}
          </button>
        </div>
      </motion.aside>

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center px-6 shrink-0 z-30 sticky top-0">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors lg:hidden">
            <Menu size={24} />
          </button>
          <div className="ml-auto flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold font-serif">U</div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
                {sidebarItems.find(i => i.id === activeTab)?.label}
              </h1>
              <a href="/" target="_blank" className="text-sm font-medium text-sky-600 hover:text-sky-700 bg-sky-50 hover:bg-sky-100 px-4 py-2 rounded-lg transition-colors">
                View Live Site ↗
              </a>
            </div>

            {renderContent()}

          </div>
        </div>
      </main>
    </div>
  );
}
