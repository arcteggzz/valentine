import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AppContextProvider } from "./context/AppContext";
import { routePaths } from "./utils/";
import { useEffect } from "react";
import { HomePage, SplashPage } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={routePaths.SPLASH} element={<SplashPage />} />
            <Route path={routePaths.HOME} element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
