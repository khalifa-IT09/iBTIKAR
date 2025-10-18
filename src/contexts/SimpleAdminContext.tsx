import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextType {
  isAdminMode: boolean;
  setIsAdminMode: (mode: boolean) => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

interface AdminProviderProps {
  children: ReactNode;
}

export const AdminProvider: React.FC<AdminProviderProps> = ({ children }) => {
  const [isAdminMode, setIsAdminMode] = useState(false);

  const value: AdminContextType = {
    isAdminMode,
    setIsAdminMode,
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
