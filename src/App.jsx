import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Filters from './components/Filters';
import Projects from './components/Projects';
import LoadMore from './components/LoadMore';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  const handleLoadMore = () => {
    console.log('Loading more projects...');
    // Aquí iría la lógica para cargar más proyectos
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Filters
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
        <Projects activeFilter={activeFilter} />
        <LoadMore onClick={handleLoadMore} />
      </main>
      <Footer />
    </>
  );
}

export default App;
