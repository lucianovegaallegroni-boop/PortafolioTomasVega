import { useState } from 'react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <a href="/" className="header__logo">
                        <svg
                            className="header__logo-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
                        </svg>
                        TOMÁS VEGA
                    </a>

                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li>
                                <a href="#projects" className="header__nav-link">Proyectos</a>
                            </li>
                            <li>
                                <a href="#about" className="header__nav-link">Sobre Mí</a>
                            </li>
                            <li>
                                <a href="#contact" className="header__nav-link">Contacto</a>
                            </li>
                        </ul>
                    </nav>

                    <button
                        className="header__mobile-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>

            <nav className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul className="mobile-menu__list">
                    <li>
                        <a
                            href="#projects"
                            className="mobile-menu__link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Proyectos
                        </a>
                    </li>
                    <li>
                        <a
                            href="#studio"
                            className="mobile-menu__link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Sobre Mí
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="mobile-menu__link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contacto
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
