import React, { useState } from 'react';
import NavTabs from './NavBar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Resume') {
          return <About />;
        }
        if (currentPage === 'Projects') {
          return <Blog />;
        }
        return <Contact />;
      };
            const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
  );
        }
