import React, { useState, useEffect } from 'react';
import styles from './TopBanner.module.css';

const TopBanner = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const text = "For Enquiries & Bookings | Email: info@voyagemonk.com | Phone: +91 96637 11398";
    const Spacer = () => <span className={styles.spacer}>•</span>;

    return (
        <div className={`${styles.bannerContainer} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.marqueeContainer}>
                <div className={styles.marqueeContent}>
                    <span>{text}</span><Spacer />
                    <span>{text}</span><Spacer />
                    <span>{text}</span><Spacer />
                    <span>{text}</span><Spacer />
                </div>
                <div className={styles.marqueeContent}>
                    <span>{text}</span><Spacer />
                    <span>{text}</span><Spacer />
                    <span>{text}</span><Spacer />
                    <span>{text}</span><Spacer />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
