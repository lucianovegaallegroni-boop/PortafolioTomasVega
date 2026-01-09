const filterOptions = [
    { id: 'all', label: 'Todos' },
    { id: 'urbano', label: 'Planificación Urbana' },
    { id: 'comercial', label: 'Comercial' },
    { id: 'residencial', label: 'Residencial' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'hotelero', label: 'Hotelero' },
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
