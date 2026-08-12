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
      const parsedData = JSON.parse(savedData);
      setData({
        aboutData: parsedData.aboutData || initialData.aboutData,
        experienceData: parsedData.experienceData || initialData.experienceData,
        educationData: parsedData.educationData || initialData.educationData,
        coreSkills: parsedData.coreSkills || initialData.coreSkills,
        expertiseAreas: parsedData.expertiseAreas || initialData.expertiseAreas,
        trainingData: parsedData.trainingData || initialData.trainingData,
        projectsData: parsedData.projectsData || initialData.projectsData,
        testimonialsData: parsedData.testimonialsData || initialData.testimonialsData,
        socialLinks: parsedData.socialLinks || initialData.socialLinks,
        galleryData: parsedData.galleryData || initialData.galleryData,
      });
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
        galleryData: initialData.galleryData,
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
