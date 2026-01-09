import heroImage from '../assets/images/hero-building.png';

const Hero = () => {
    return (
        <section className="hero">
            <article className="hero__card">
                <img
                    src={heroImage}
                    alt="The Zenith Tower - Modern glass skyscraper"
                    className="hero__image"
                />
                <div className="hero__overlay"></div>

                <div className="hero__content">
                    <span className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        Project of the Month
                    </span>

                    <h1 className="hero__title">The Zenith Tower</h1>

                    <p className="hero__description">
                        A sustainable vertical ecosystem redefining the downtown skyline.
                    </p>

                    <a href="#case-study" className="hero__cta">
                        View Case Study
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
