import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    Trusted Partner
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/about" className={styles.navLink}>About Us</Link>
                    <Link to="/services" className={styles.navLink}>Services</Link>
                    <Link to="/promise" className={styles.navLink}>The Promise</Link>
                    <Link to="/contact" className={`${styles.navLink} ${styles.cta}`}>Plan My Trip</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={styles.mobileMenu}>
                        <Link to="/" className={styles.mobileLink}>Home</Link>
                        <Link to="/about" className={styles.mobileLink}>About Us</Link>
                        <Link to="/services" className={styles.mobileLink}>Services</Link>
                        <Link to="/promise" className={styles.mobileLink}>The Promise</Link>
                        <Link to="/contact" className={`${styles.mobileLink} ${styles.mobileCta}`}>Plan My Trip</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
