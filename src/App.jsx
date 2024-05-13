import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "preline/preline";
import { IStaticMethods } from "preline/preline";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);

  const isDarkMode = () => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  }
  const [darkMode, setDarkMode] = useState(isDarkMode());

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  
  return (
    <div className={darkMode ? 'dark bg-[#222831] text-[#EEEEEE]' : ''}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="min-h-96">
        <Outlet />
     </div>
      <Footer />
    </div>
  );
}

export default App;
