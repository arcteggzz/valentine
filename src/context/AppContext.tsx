import React, { createContext, useEffect, useState } from "react";

type AppContextProviderProps = {
  children: React.ReactNode;
};

type AppContextType = {
  mobileNavbarOpen: boolean;
  setMobileNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMobileNavbar: () => void;
  setHeroVideoMuted: React.Dispatch<React.SetStateAction<boolean>>;
  heroVideoMuted: boolean;
};

export const AppContext = createContext({} as AppContextType);

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  const [heroVideoMuted, setHeroVideoMuted] = useState(true);

  const toggleMobileNavbar = () => {
    setMobileNavbarOpen((mobileNavbarOpen) => !mobileNavbarOpen);
  };

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-track-color",
      "#4D4D4D"
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        mobileNavbarOpen,
        setMobileNavbarOpen,
        toggleMobileNavbar,
        heroVideoMuted,
        setHeroVideoMuted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
