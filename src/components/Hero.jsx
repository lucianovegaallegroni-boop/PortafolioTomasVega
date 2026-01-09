import heroImage from '../assets/images/WhatsApp Image 2026-01-08 at 21.43.29 (14).jpeg';

const Hero = () => {
    return (
        <section className="hero">
            <article className="hero__card">
                <img
                    src={heroImage}
                    alt="Portafolio 2024 - Looking to the Future - Tomás Vega"
                    className="hero__image"
                />
                <div className="hero__overlay"></div>

                <div className="hero__content">
                    <span className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        Portafolio 2024
                    </span>

                    <h1 className="hero__title">Tomás Vega</h1>

                    <p className="hero__description">
                        Looking to the Future — Arquitectura, diseño y visualización de proyectos urbanos y residenciales.
                    </p>

                    <a href="#projects" className="hero__cta">
                        Ver Proyectos
                        <svg className="hero__cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </article>
        </section>
    );
};

export default Hero;
