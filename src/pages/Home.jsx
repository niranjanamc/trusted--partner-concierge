import React from 'react';
import { ArrowRight, Shield, Clock, Map } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import heritageImage from '../assets/images/heritage_walk.png';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Experience Safe, Comfortable & Customised Holidays in Karnataka
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Discover curated tours, seamless travel services, corporate offsites, and event solutions — all delivered by seasoned travel & hospitality professionals.
                        <br />
                        Your trusted travel tripsynchr.com Always.
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
                        <h2 className={styles.sectionTitle}>Why Choose tripsynchr.com?</h2>
                        <p className={styles.sectionSubtitle}>
                            At tripsynchr.com, we go beyond packages — we understand your inherent needs and design experiences that feel personal, safe, and truly comfortable.
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <Clock size={32} />
                            </div>
                            <h3>Professionally Curated</h3>
                            <p>Professionally curated holidays & breaks designed for your unique needs.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <Shield size={32} />
                            </div>
                            <h3>Trusted</h3>
                            <p>Trusted by families, groups & corporates for reliable service.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <Shield size={32} />
                            </div>
                            <h3>Safety First</h3>
                            <p>Safe, verified drivers & guides to ensure a secure journey.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <Map size={32} />
                            </div>
                            <h3>Custom Itineraries</h3>
                            <p>Custom-made itineraries across Karnataka tailored to your interests.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}>
                                <Clock size={32} />
                            </div>
                            <h3>24/7 Support</h3>
                            <p>24/7 travel assistance & end-to-end management for peace of mind.</p>
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
                            <div className={styles.cardImage} style={{ backgroundImage: `url(${heritageImage})` }}></div>
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
