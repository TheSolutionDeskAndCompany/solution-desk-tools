import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPaidAccess, setHasPaidAccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('user');
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedAccess = localStorage.getItem('hasPaidAccess');
    
    if (savedUser && savedAuth === 'true') {
      setUser(JSON.parse(savedUser));
      setIsAuthenticated(true);
      setHasPaidAccess(savedAccess === 'true');
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Simple mock authentication - replace with real API call
      if (email && password) {
        const mockUser = {
          id: Date.now(),
          email: email,
          name: email.split('@')[0],
          subscription: 'free' // or 'premium'
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        
        // Check if user has premium access (mock logic)
        const isPremium = email.includes('premium') || email.includes('paid');
        setHasPaidAccess(isPremium);
        
        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('hasPaidAccess', isPremium.toString());
        
        return { success: true, user: mockUser };
      }
      throw new Error('Invalid credentials');
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const signup = async (email, password, name) => {
    try {
      // Simple mock signup - replace with real API call
      if (email && password && name) {
        const mockUser = {
          id: Date.now(),
          email: email,
          name: name,
          subscription: 'free'
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        setHasPaidAccess(false); // New users start as free
        
        // Save to localStorage
        localStorage.setItem('user', JSON.stringify(mockUser));
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('hasPaidAccess', 'false');
        
        return { success: true, user: mockUser };
      }
      throw new Error('All fields are required');
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setHasPaidAccess(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('hasPaidAccess');
  };

  const upgradeToPremium = () => {
    // This will be called after successful Stripe payment
    setHasPaidAccess(true);
    localStorage.setItem('hasPaidAccess', 'true');
    
    // Update user object
    const updatedUser = { ...user, subscription: 'premium' };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  const value = {
    user,
    isAuthenticated,
    hasPaidAccess,
    loading,
    login,
    signup,
    logout,
    upgradeToPremium
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
