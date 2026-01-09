import projectWoodHouse from '../assets/images/project-wood-house.png';
import projectStairs from '../assets/images/project-stairs.png';
import projectOffice from '../assets/images/project-office.png';
import projectInterior from '../assets/images/project-interior.png';
import projectConcrete from '../assets/images/project-concrete.png';
import projectLiving from '../assets/images/project-living.png';
import projectCurved from '../assets/images/project-curved.png';

const projectsData = [
    {
        id: 1,
        name: 'Forest Retreat',
        category: 'residential',
        categoryLabel: 'Residential',
        image: projectWoodHouse,
        size: 'large',
    },
    {
        id: 2,
        name: 'Concrete Ascent',
        category: 'commercial',
        categoryLabel: 'Commercial',
        image: projectStairs,
        size: 'normal',
    },
    {
        id: 3,
        name: 'Skyline Office',
        category: 'commercial',
        categoryLabel: 'Commercial',
        image: projectOffice,
        size: 'normal',
    },
    {
        id: 4,
        name: 'Light Space',
        category: 'interiors',
        categoryLabel: 'Interiors',
        image: projectInterior,
        size: 'normal',
    },
    {
        id: 5,
        name: 'Angular Forms',
        category: 'landscape',
        categoryLabel: 'Landscape',
        image: projectConcrete,
        size: 'normal',
    },
    {
        id: 6,
        name: 'Cozy Living',
        category: 'interiors',
        categoryLabel: 'Interiors',
        image: projectLiving,
        size: 'large',
    },
    {
        id: 7,
        name: 'Wave Center',
        category: 'urban',
        categoryLabel: 'Urban Planning',
        image: projectCurved,
        size: 'normal',
    },
];

const Projects = ({ activeFilter }) => {
    const filteredProjects = activeFilter === 'all'
        ? projectsData
        : projectsData.filter(project => project.category === activeFilter);

    return (
        <section className="projects" id="projects">
            <div
                className="projects__grid"
                id="projects-grid"
                role="tabpanel"
            >
                {filteredProjects.map((project, index) => (
                    <article
                        key={project.id}
                        className={`projects__card ${project.size === 'large' ? 'projects__card--large' : ''} animate-fadeInUp animate-delay-${(index % 4 + 1) * 100}`}
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="projects__image"
                            loading="lazy"
                        />
                        <div className="projects__info">
                            <h3 className="projects__name">{project.name}</h3>
                            <p className="projects__category">{project.categoryLabel}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
