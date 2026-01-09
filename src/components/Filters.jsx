const filterOptions = [
    { id: 'Introduccion', label: 'Introduccion' },
    { id: 'La cuadra 89', label: 'La cuadra 89' },
    { id: 'Hotel Corotú', label: 'Hotel Corotú' },
    { id: 'Cumbre Este', label: 'Cumbre Este' },
    { id: 'all', label: 'Todos' },
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
