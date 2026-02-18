import React, { createContext, useContext, useState, useCallback } from 'react';

interface TabBarContextType {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
  showTabBar: () => void;
  hideTabBar: () => void;
}

const TabBarContext = createContext<TabBarContextType | undefined>(undefined);

export const TabBarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const showTabBar = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideTabBar = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <TabBarContext.Provider
      value={{
        isVisible,
        setIsVisible,
        showTabBar,
        hideTabBar,
      }}
    >
      {children}
    </TabBarContext.Provider>
  );
};

export const useTabBar = () => {
  const context = useContext(TabBarContext);
  if (context === undefined) {
    throw new Error('useTabBar must be used within a TabBarProvider');
  }
  return context;
};

