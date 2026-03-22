import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.column}>
                        <h3 className={styles.brand}>voyagemonk.com</h3>
                        <p className={styles.tagline}>
                            Smart travel. Trusted service. Seamless execution.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Explore</h4>
                        <ul className={styles.links}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/promise">The Promise</Link></li>
                            <li><Link to="/contact">Plan My Trip</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.column}>
                        <h4 className={styles.heading}>Contact</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <Mail size={16} />
                                <span><a href="mailto:info@voyagemonk.com" style={{color: 'inherit', textDecoration: 'none'}}>info@voyagemonk.com</a></span>
                            </li>
                            <li>
                                <Phone size={16} />
                                <span><a href="tel:+919663711398" style={{color: 'inherit', textDecoration: 'none'}}>+91 96637 11398</a></span>
                            </li>
                            <li>
                                <MessageCircle size={16} />
                                <span><a href="https://wa.me/919663711398" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Chat on WhatsApp</a></span>
                            </li>
                            <li>
                                <MapPin size={16} />
                                <span>HSR Layout 5th Sector Bangalore 560102</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} voyagemonk.com. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
