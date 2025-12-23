import React from 'react';
import { Music, CheckCircle, Wine, Star, Users, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './CorporateEvents.module.css';

const CorporateEvents = () => {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroTitle}>Corporate Event Arrangements</h1>
                    <p className={styles.heroSubtitle}>
                        RNR Nights & Cocktail Dinners designed to impress.
                    </p>
                </div>
            </section>

            {/* Introduction */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.intro}>
                        <p>
                            We specialize in planning and executing memorable corporate events, including RNR evenings and elegant cocktail dinners,
                            designed to impress your guests and reflect your brand’s personality. Whether it’s a team celebration,
                            client meet, product launch, or executive gathering, we take care of every detail, from concept to execution.
                            Available across Bangalore with dedicated guides.
                        </p>
                    </div>

                    {/* RNR Events */}
                    <div className={styles.splitSection}>
                        <div className={styles.textContent}>
                            <h2>RNR (Rest & Recreation) Events</h2>
                            <p>
                                Energize your team with high-octane events that celebrate success.
                                We handle everything to ensure a seamless and fun-filled experience.
                            </p>
                            <ul className={styles.featureList}>
                                <li><Music size={20} className={styles.featureIcon} /> Theme-based corporate parties</li>
                                <li><Users size={20} className={styles.featureIcon} /> Live music, DJs & entertainment coordination</li>
                                <li><Star size={20} className={styles.featureIcon} /> Venue selection and décor styling</li>
                                <li><CheckCircle size={20} className={styles.featureIcon} /> Lighting, sound & stage setup</li>
                                <li><Briefcase size={20} className={styles.featureIcon} /> Event flow and on-ground management</li>
                            </ul>
                        </div>
                        <div className={styles.imageContent}>
                            <img src="/images/rnr_party_event.png" alt="Corporate RNR Party" />
                        </div>
                    </div>

                    {/* Cocktail Dinners */}
                    <div className={`${styles.splitSection} ${styles.reversed}`}>
                        <div className={styles.textContent}>
                            <h2>Cocktail Dinner Arrangements</h2>
                            <p>
                                Sophistication meets flavor. Our cocktail dinners are curated for networking
                                and celebration in an ambiance of pure luxury.
                            </p>
                            <ul className={styles.featureList}>
                                <li><Wine size={20} className={styles.featureIcon} /> Sophisticated cocktail setups</li>
                                <li><CheckCircle size={20} className={styles.featureIcon} /> Customized bar menus & mocktail stations</li>
                                <li><Star size={20} className={styles.featureIcon} /> Curated food pairings & fine dining experiences</li>
                                <li><CheckCircle size={20} className={styles.featureIcon} /> Elegant table décor & ambiance design</li>
                                <li><Users size={20} className={styles.featureIcon} /> Professional service staff & coordination</li>
                            </ul>
                        </div>
                        <div className={styles.imageContent}>
                            <img src="/images/cocktail_dinner_setup.png" alt="Elegant Cocktail Dinner" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Perfect For */}
            <section className={`${styles.section} ${styles.perfectForSection}`}>
                <div className={styles.container}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '2rem' }}>Perfect For</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <Users size={40} color="var(--color-gold)" />
                            <h3>Corporate Parties & Annual Celebrations</h3>
                        </div>
                        <div className={styles.card}>
                            <Award size={40} color="var(--color-gold)" />
                            <h3>Team Outings & RNR Nights</h3>
                        </div>
                        <div className={styles.card}>
                            <Briefcase size={40} color="var(--color-gold)" />
                            <h3>Client Entertainment & Networking Events</h3>
                        </div>
                        <div className={styles.card}>
                            <Star size={40} color="var(--color-gold)" />
                            <h3>Product Launches & Brand Events</h3>
                        </div>
                        <div className={styles.card}>
                            <Wine size={40} color="var(--color-gold)" />
                            <h3>Executive Dinners & VIP Gatherings</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={`${styles.section} ${styles.whyChooseSection}`}>
                <div className={styles.container}>
                    <h2>Why Choose Us</h2>
                    <div className={styles.whyGrid}>
                        <div className={styles.whyItem}>
                            <h3>Tailor-made Concepts</h3>
                            <p>Unique themes and ideas customized to your brand and objectives.</p>
                        </div>
                        <div className={styles.whyItem}>
                            <h3>Seamless Execution</h3>
                            <p>Stress-free planning from start to finish with our experienced team.</p>
                        </div>
                        <div className={styles.whyItem}>
                            <h3>Premium Quality</h3>
                            <p>Attention to detail in every aspect, from décor to catering.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1.5rem' }}>Let’s Create an Unforgettable Experience!!</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', color: '#555' }}>
                        From lively RNR nights to classy cocktail dinners, we turn your corporate events into experiences your guests will remember.
                    </p>
                    <Link to="/contact" className={styles.ctaBtn}>Plan Your Event Today</Link>
                </div>
            </section>
        </div>
    );
};

export default CorporateEvents;
