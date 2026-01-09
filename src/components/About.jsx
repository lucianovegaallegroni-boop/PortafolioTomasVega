import profileImage from '../assets/images/profile-tomas.png';

const About = () => {
    const skills = [
        { name: 'Vray', icon: 'V', level: 3.5 },
        { name: 'Sketchup', icon: '⬡', level: 5 },
        { name: 'Photoshop', icon: 'Ps', level: 4 },
        { name: 'Autocad', icon: 'A', level: 4 },
        { name: 'Illustrator', icon: 'Ai', level: 3 },
        { name: 'D5 Render', icon: 'D5', level: 4 },
    ];

    const education = [
        {
            period: '2015-2020',
            title: 'Educación Primaria y Secundaria Escuela Montessori de Panamá',
        },
        {
            period: '2021-2025',
            title: 'Arquitectura Estructural en la Universidad Santa María La Antigua (USMA)',
        },
        {
            period: '2022',
            title: 'Concurso Por New Arch Competition (Art Temporary Installation in "Panama la Vieja")',
        },
        {
            period: '2024',
            title: 'Mi Primer Proyecto Living Para arquitectos y diseñadores (Por Aurora Cunha)',
        },
        {
            period: '2024',
            title: 'Premiación en el estudio de arquitectura PENTA',
        },
        {
            period: '2024',
            title: 'Taller Semilla #12 Dictado por el estudio de arquitectura OASIS MOOK',
        },
    ];

    return (
        <section className="about" id="about">
            <div className="about__container">
                {/* Header */}
                <div className="about__header">
                    <h2 className="about__name">TOMÁS IGNACIO VEGA ALLEGRONI</h2>

                    <div className="about__profile">
                        <div className="about__image-wrapper">
                            <img
                                src={profileImage}
                                alt="Tomás Ignacio Vega Allegroni"
                                className="about__image"
                            />
                        </div>
                    </div>
                </div>

                {/* Sobre Mí */}
                <div className="about__section">
                    <h3 className="about__section-title">SOBRE MÍ</h3>
                    <div className="about__bio">
                        <p>
                            Soy estudiante de cuarto año de Arquitectura en la Universidad Santa María
                            La Antigua (USMA).
                        </p>
                        <p>
                            Me caracterizo por mi constante búsqueda de autoexigirme en aprender siempre más,
                            mejorar la calidad de mis trabajos y aspectos de mi vida personal. Soy una persona
                            llena de creatividad y encuentro formas efectivas de resolver problemas.
                        </p>
                        <p>
                            Mis cualidades destacadas incluyen proactividad, perseverancia y dedicación.
                            Disfruto colaborando en equipo considerando y aportando opiniones/perspectivas
                            diversas sobre los proyectos, contribuyendo así a alcanzar resultados más
                            enriquecedores.
                        </p>
                    </div>
                </div>

                {/* Educación */}
                <div className="about__section">
                    <div className="about__divider"></div>
                    <h3 className="about__section-title">EDUCACIÓN</h3>
                    <ul className="about__timeline">
                        {education.map((item, index) => (
                            <li key={index} className="about__timeline-item">
                                <span className="about__timeline-period">{item.period}</span>
                                <span className="about__timeline-title">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Idioma */}
                <div className="about__section">
                    <div className="about__divider"></div>
                    <h3 className="about__section-title">IDIOMA</h3>
                    <div className="about__languages">
                        <p><strong>ESPAÑOL:</strong> Nativo</p>
                        <p><strong>INGLÉS:</strong> Medio</p>
                    </div>
                </div>

                {/* Habilidades */}
                <div className="about__section">
                    <h3 className="about__section-title">HABILIDADES</h3>
                    <div className="about__skills">
                        {skills.map((skill, index) => (
                            <div key={index} className="about__skill">
                                <div className="about__skill-icon">
                                    {skill.icon}
                                </div>
                                <span className="about__skill-name">{skill.name}</span>
                                <div className="about__skill-level">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`about__skill-dot ${i < skill.level ? 'active' : ''}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
