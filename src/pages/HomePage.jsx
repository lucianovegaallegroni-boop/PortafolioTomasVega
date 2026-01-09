import { useState } from 'react';
import Hero from '../components/Hero';
import Filters from '../components/Filters';
import Projects from '../components/Projects';
import LoadMore from '../components/LoadMore';

const HomePage = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterChange = (filterId) => {
        setActiveFilter(filterId);
    };

    const handleLoadMore = () => {
        console.log('Loading more projects...');
        // Aquí iría la lógica para cargar más proyectos
    };

    return (
        <main>
            <Hero />
            <Filters
                activeFilter={activeFilter}
                onFilterChange={handleFilterChange}
            />
            <Projects activeFilter={activeFilter} />
            <LoadMore onClick={handleLoadMore} />
        </main>
    );
};

export default HomePage;
