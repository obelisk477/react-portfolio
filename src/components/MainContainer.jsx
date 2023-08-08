import { useState } from 'react';
// import Navigation from './Navigation';
import Header from './Header'
import Portfolio from '../pages/Portfolio';
import AboutMe from '../pages/AboutMe';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';
import Footer from '../components/Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    if (currentPage === 'About Me') {
      return <AboutMe />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <body>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main className="">
          {renderPage()}
      </main>
      <Footer />
    </body>
  );
}
