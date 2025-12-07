import React from 'react';
import { ArrowRight, Shield, Clock, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Bengaluru’s Premier Travel Concierge for the Global Citizen
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Bespoke local experiences, seamless logistics, and 17 years of corporate trust.
                        Explore the Silicon Valley of India with a partner who speaks your language.
                    </p>
                    <Link to="/services" className={styles.heroCta}>
                        Explore Experiences <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Why Us Section */}
            <section className={styles.whyUs}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Why Choose Trusted Partner?</h2>
                        <p className={styles.sectionSubtitle}>Bridging the Boardroom and the Bazaar</p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <Shield size={32} />
                            </div>
                            <h3>17 Years of Corporate Mastery</h3>
                            <p>
                                Managed travel for Fortune 500 executives? We have done it for nearly two decades.
                                We apply the same rigor to your leisure travel as we do to your business logistics.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <Map size={32} />
                            </div>
                            <h3>Born & Raised Bengaluru</h3>
                            <p>
                                We don't rely on Google Maps. We know the shortcuts, the hidden gems, and the local legends.
                                Our Kannada heritage opens doors that remain closed to the average tourist.
                            </p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <Clock size={32} />
                            </div>
                            <h3>The "Bleisure" Specialist</h3>
                            <p>
                                Your time is currency. Our itineraries are optimized for the busy professional—maximizing
                                experience while minimizing traffic exposure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Itineraries Carousel */}
            <section className={styles.featured}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Curated Micro-Itineraries</h2>
                        <p className={styles.sectionSubtitle}>Designed for the time-poor executive</p>
                    </div>

                    <div className={styles.carousel}>
                        {/* Card 1 */}
                        <div className={styles.itineraryCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>The Saturday Tech-Detox</h3>
                                <p>A sunrise drive to Nandi Hills followed by a private vineyard lunch.</p>
                                <Link to="/services" className={styles.cardLink}>View Details <ArrowRight size={16} /></Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.itineraryCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590050752117-238cb0fb9d64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>The Sunday Heritage Walk</h3>
                                <p>Ancient temples, flower markets, and silk shopping in Old Bangalore.</p>
                                <Link to="/services" className={styles.cardLink}>View Details <ArrowRight size={16} /></Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.itineraryCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>The Executive Golf Morning</h3>
                                <p>Tee off at Prestige Golfshire with full equipment rental and luxury transfer.</p>
                                <Link to="/services" className={styles.cardLink}>View Details <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.testimonials}>
                <div className={styles.container}>
                    <div className={styles.testimonialCard}>
                        <p className={styles.quote}>
                            "The only service I trust for my visiting Board of Directors. Seamless, safe, and incredibly insightful."
                        </p>
                        <p className={styles.author}>– VP of Operations, Leading Tech MNC</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
