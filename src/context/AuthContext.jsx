import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication logic for now
  useEffect(() => {
    // Check local storage for mock session
    const mockUser = localStorage.getItem('mockAdminUser');
    if (mockUser) {
      setCurrentUser(JSON.parse(mockUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login logic
    if (email === 'admin@ujwal.com' && password === 'admin123') {
      const user = { uid: '123', email };
      localStorage.setItem('mockAdminUser', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    }
    throw new Error('Invalid credentials. Use admin@ujwal.com / admin123 for now.');
  };

  const logout = async () => {
    localStorage.removeItem('mockAdminUser');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
