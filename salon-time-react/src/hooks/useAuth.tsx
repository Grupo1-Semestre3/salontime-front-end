import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, LoginForm } from '../types';
import { authApi } from '../services/api';

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (credentials: LoginForm) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('usuario');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (storedUser && isLoggedIn === '1') {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('usuario');
        localStorage.removeItem('isLoggedIn');
      }
    }
    
    setLoading(false);
  }, []);

  const login = async (credentials: LoginForm) => {
    try {
      const response = await authApi.login(credentials);
      const userData = response.usuario || response;
      
      setUser(userData);
      localStorage.setItem('usuario', JSON.stringify(userData));
      localStorage.setItem('isLoggedIn', '1');
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      if (user?.id) {
        await authApi.logout(user.id);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setUser(null);
      localStorage.removeItem('usuario');
      localStorage.removeItem('isLoggedIn');
    }
  };

  const value = {
    user,
    isLoggedIn: !!user,
    login,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};