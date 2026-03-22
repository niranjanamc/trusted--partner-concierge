import React from 'react';
import styles from './About.module.css';
import heroImage from '../assets/images/about_hero.png';
import iconPersonalisation from '../assets/images/icon_personalisation.png';
import iconComfort from '../assets/images/icon_comfort.png';
import iconTrust from '../assets/images/icon_trust.png';
import iconDelight from '../assets/images/icon_delight.png';

const About = () => {
    return (
        <div className={styles.about}>
            {/* Hero */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>About Us</h1>
                    <p className={styles.heroSubtitle}>
                        Across India, delivering journeys defined by trust, comfort, and personalized service for over 17 years.
                    </p>
                </div>
            </section>

            {/* About Us */}
            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <h2 className={styles.sectionTitle}>About Us</h2>
                            <p>
                                VoyageMonk is a Bengaluru-based corporate travel specialist with 17+ years of experience—where professionalism meets personalized service to create seamless and secure journeys.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Mission</h3>
                            <p>
                                To empower corporates travel businesses with reliable, efficient, and well-managed travel solutions that optimize time, cost, and traveler experience.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Vision</h3>
                            <p>
                                To lead in corporate travel by delivering dependable, thoughtfully curated, and customer-centric experiences for businesses and corporate events.
                            </p>
                        </div>
                        <div className={styles.storyImage}>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Travel Professional"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className={styles.dna}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Values</h2>
                    <div className={styles.dnaGrid}>
                        <div className={styles.dnaCard}>
                            <div className={styles.iconWrapper}><img src={iconPersonalisation} alt="Personalisation" className={styles.customIcon} /></div>
                            <h3>Personalisation</h3>
                            <p>We take the time to understand what matters most to you. Whether it’s comfort, exploration, or a perfect balance of both, we craft journeys that feel personal, effortless, and truly yours.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <div className={styles.iconWrapper}><img src={iconComfort} alt="Comfort & Convenience" className={styles.customIcon} /></div>
                            <h3>Comfort & Convenience</h3>
                            <p>Travel should feel effortless. We simplify every step—from bookings to on-ground coordination—ensuring a smooth, comfortable, and hassle-free journey from start to finish.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <div className={styles.iconWrapper}><img src={iconTrust} alt="Trust & Reliability" className={styles.customIcon} /></div>
                            <h3>Trust & Reliability</h3>
                            <p>You deserve a travel partner you can rely on without hesitation. We prioritize your safety, comfort, and peace of mind by delivering consistent, dependable service at every stage of your journey.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <div className={styles.iconWrapper}><img src={iconDelight} alt="Customer Delight" className={styles.customIcon} /></div>
                            <h3>Customer Delight</h3>
                            <p>We go beyond delivering services—we create experiences that leave a lasting impression. Every journey is thoughtfully designed to exceed expectations, with attention to detail, personalized touches, and a commitment to making every moment truly special.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
