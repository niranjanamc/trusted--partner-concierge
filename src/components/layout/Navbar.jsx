import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Plane, Building2, Car, Briefcase, ShieldCheck, Info, CalendarDays } from 'lucide-react';
import styles from './Navbar.module.css';
import logoImage from '../../assets/images/voyage_monk_logo_transparent.png';

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
                    <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.activeLink : ''}`}><Home size={16} /> Home</Link>
                    <Link to="/flight-booking" className={`${styles.navLink} ${location.pathname === '/flight-booking' ? styles.activeLink : ''}`}><Plane size={16} /> Flights</Link>
                    <Link to="/hotels" className={`${styles.navLink} ${location.pathname === '/hotels' ? styles.activeLink : ''}`}><Building2 size={16} /> Hotels</Link>
                    <Link to="/car-rental" className={`${styles.navLink} ${location.pathname === '/car-rental' ? styles.activeLink : ''}`}><Car size={16} /> Car Rental</Link>
                    <Link to="/corporate-events" className={`${styles.navLink} ${location.pathname === '/corporate-events' ? styles.activeLink : ''}`}><Briefcase size={16} /> MICE</Link>
                    {/* DEPRECATED: Destinations page temporarily disabled
                    <Link to="/destinations" className={`${styles.navLink} ${location.pathname === '/destinations' ? styles.activeLink : ''}`}>Destinations</Link>
                    */}
                    <Link to="/promise" className={`${styles.navLink} ${location.pathname === '/promise' ? styles.activeLink : ''}`}><ShieldCheck size={16} /> The Promise</Link>
                    <Link to="/about" className={`${styles.navLink} ${location.pathname === '/about' ? styles.activeLink : ''}`}><Info size={16} /> About Us</Link>
                    <Link to="/contact" className={`${styles.navLink} ${styles.cta} ${location.pathname === '/contact' ? styles.activeLink : ''}`}><CalendarDays size={16} /> Plan My Trip</Link>
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
                        <Link to="/" className={styles.mobileLink}><Home size={18} /> Home</Link>
                        <Link to="/flight-booking" className={styles.mobileLink} onClick={() => setIsOpen(false)}><Plane size={18} /> Flights</Link>
                        <Link to="/hotels" className={styles.mobileLink} onClick={() => setIsOpen(false)}><Building2 size={18} /> Hotels</Link>
                        <Link to="/car-rental" className={styles.mobileLink} onClick={() => setIsOpen(false)}><Car size={18} /> Car Rental</Link>
                        <Link to="/corporate-events" className={styles.mobileLink} onClick={() => setIsOpen(false)}><Briefcase size={18} /> MICE</Link>
                        {/* DEPRECATED: Destinations page temporarily disabled
                        <Link to="/destinations" className={styles.mobileLink} onClick={() => setIsOpen(false)}>Destinations</Link>
                        */}
                        <Link to="/promise" className={styles.mobileLink} onClick={() => setIsOpen(false)}><ShieldCheck size={18} /> The Promise</Link>
                        <Link to="/about" className={styles.mobileLink} onClick={() => setIsOpen(false)}><Info size={18} /> About Us</Link>
                        <Link to="/contact" className={`${styles.mobileLink} ${styles.mobileCta}`}><CalendarDays size={18} /> Plan My Trip</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
