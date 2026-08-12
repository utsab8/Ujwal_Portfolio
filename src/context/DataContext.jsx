import { createContext, useContext, useState, useEffect } from 'react';
import * as initialData from '../data';

const DataContext = createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load from local storage or fallback to initial data
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      setData({
        heroData: initialData.heroData,
        aboutData: initialData.aboutData,
        experienceData: initialData.experienceData,
        educationData: initialData.educationData,
        coreSkills: initialData.coreSkills,
        professionalSkills: initialData.professionalSkills,
        trainingData: initialData.trainingData,
        projectsData: initialData.projectsData,
        testimonialsData: initialData.testimonialsData,
        socialLinks: initialData.socialLinks,
      });
    }
    setLoading(false);
  }, []);

  const updateData = (section, newData) => {
    setData((prev) => {
      const updated = { ...prev, [section]: newData };
      localStorage.setItem('portfolioData', JSON.stringify(updated));
      return updated;
    });
  };

  const value = {
    data,
    updateData,
  };

  return (
    <DataContext.Provider value={value}>
      {!loading && data && children}
    </DataContext.Provider>
  );
}
