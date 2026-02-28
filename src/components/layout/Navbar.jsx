import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';
import logoImage from '../../assets/images/voyage_monk_logo.png';

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
                    <img src={logoImage} alt="VoyageMonk.com" />
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.activeLink : ''}`}>Home</Link>
                    <Link to="/about" className={`${styles.navLink} ${location.pathname === '/about' ? styles.activeLink : ''}`}>About Us</Link>
                    <Link to="/services" className={`${styles.navLink} ${location.pathname === '/services' ? styles.activeLink : ''}`}>Services</Link>
                    <Link to="/corporate-events" className={`${styles.navLink} ${location.pathname === '/corporate-events' ? styles.activeLink : ''}`}>Corporate Events</Link>
                    <Link to="/flight-booking" className={`${styles.navLink} ${location.pathname === '/flight-booking' ? styles.activeLink : ''}`}>Flights</Link>
                    <Link to="/pan-india-cabs" className={`${styles.navLink} ${location.pathname === '/pan-india-cabs' ? styles.activeLink : ''}`}>Pan India Cabs</Link>
                    <Link to="/destinations" className={`${styles.navLink} ${location.pathname === '/destinations' ? styles.activeLink : ''}`}>Destinations</Link>
                    <Link to="/promise" className={`${styles.navLink} ${location.pathname === '/promise' ? styles.activeLink : ''}`}>The Promise</Link>
                    <Link to="/contact" className={`${styles.navLink} ${styles.cta} ${location.pathname === '/contact' ? styles.activeLink : ''}`}>Plan My Trip</Link>
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
                        <Link to="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}>About Us</Link>
                        <Link to="/services" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Services</Link>
                        <Link to="/corporate-events" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Corporate Events</Link>
                        <Link to="/flight-booking" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Flights</Link>
                        <Link to="/pan-india-cabs" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Pan India Cabs</Link>
                        <Link to="/destinations" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Destinations</Link>
                        <Link to="/promise" className={styles.mobileLink} onClick={() => setIsOpen(false)}>The Promise</Link>
                        <Link to="/contact" className={`${styles.mobileLink} ${styles.mobileCta}`}>Plan My Trip</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
