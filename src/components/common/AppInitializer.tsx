import React, { useEffect } from 'react';
import { useAuth } from '../../features/auth/hooks/useAuth';

interface AppInitializerProps {
  children: React.ReactNode;
}

export const AppInitializer: React.FC<AppInitializerProps> = ({ 
  children 
}) => {
  const { checkAuth } = useAuth();

  useEffect(() => {
    // Check if user is authenticated on app load
    const token = localStorage.getItem('auth-token');
    if (token) {
      checkAuth();
    }
  }, [checkAuth]);

  return <>{children}</>;
};
