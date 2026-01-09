import { useState } from 'react';

const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interiors', label: 'Interiors' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'urban', label: 'Urban Planning' },
];

const Filters = ({ activeFilter, onFilterChange }) => {
    return (
        <section className="filters">
            <ul className="filters__list" role="tablist">
                {filterOptions.map((filter) => (
                    <li key={filter.id}>
                        <button
                            className={`filters__btn ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => onFilterChange(filter.id)}
                            role="tab"
                            aria-selected={activeFilter === filter.id}
                            aria-controls="projects-grid"
                        >
                            {filter.label}
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Filters;
