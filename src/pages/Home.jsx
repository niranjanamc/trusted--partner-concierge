import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import heritageImage from '../assets/images/heritage_walk.png';
import iconSafety from '../assets/images/icon_safety.png';
import iconTrusted from '../assets/images/icon_trusted.png';
import iconCurated from '../assets/images/icon_curated.png';
import iconSupport from '../assets/images/icon_support.png';
import iconCustom from '../assets/images/icon_custom.png';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Bespoke Travel & Corporate Events in Karnataka
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Curated tours and seamless logistics delivered by seasoned hospitality professionals. Your trusted travel partner.
                    </p>
                </div>
            </section>

            {/* Why Us Section */}
            <section className={styles.whyUs}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Why Choose voyagemonk.com?</h2>
                        <p className={styles.sectionSubtitle}>
                            We deliver professionally curated travel experiences backed by trusted services, 24/7 support, and a strong commitment to safety, reliability, and customer satisfaction
                        </p>
                    </div>

                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}><img src={iconSafety} alt="Safety First" className={styles.customIcon} /></div>
                            <h3>Safety First</h3>
                            <p>We deliver safe and secure travel experiences with thoroughly vetted drivers and professionally trained guides</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}><img src={iconTrusted} alt="Trusted" className={styles.customIcon} /></div>
                            <h3>Trusted</h3>
                            <p>We earn your trust by delivering dependable services, transparent processes, and exceptional customer care.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}><img src={iconCurated} alt="Curated" className={styles.customIcon} /></div>
                            <h3>Professionally Curated</h3>
                            <p>Every journey is thoughtfully curated by experts, ensuring personalized experiences and flawless execution.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}><img src={iconSupport} alt="24/7 Support" className={styles.customIcon} /></div>
                            <h3>24/7 Support</h3>
                            <p>Enjoy peace of mind with our 24/7 concierge support, always available to assist you throughout your journey.</p>
                        </div>

                        <div className={styles.featureCard}>
                            <div className={styles.iconWrapper}><img src={iconCustom} alt="Custom Itineraries" className={styles.customIcon} /></div>
                            <h3>Custom Itineraries</h3>
                            <p>We design bespoke itineraries based on client requirements, ensuring flexibility, efficiency, and a superior travel experience</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Itineraries Carousel */}
            <section className={styles.featured}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Efficient travel plans crafted by experts for seamless, time-smart experiences.</h2>
                        <p className={styles.sectionSubtitle}>Thoughtfully designed for professionals who want to make the most of every moment away.</p>
                    </div>

                    <div className={styles.carousel}>
                        {/* Card 1 */}
                        <div className={styles.itineraryCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>The Saturday Tech-Detox</h3>
                                <p>A sunrise drive to Nandi Hills followed by a private vineyard lunch.</p>
                                <Link to="/about" className={styles.cardLink}>View Details <ArrowRight size={16} /></Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.itineraryCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: `url(${heritageImage})` }}></div>
                            <div className={styles.cardContent}>
                                <h3>The Sunday Heritage Walk</h3>
                                <p>Ancient temples, flower markets, and silk shopping in Old Bangalore.</p>
                                <Link to="/about" className={styles.cardLink}>View Details <ArrowRight size={16} /></Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.itineraryCard}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>The Executive Golf Morning</h3>
                                <p>Tee off at Prestige Golfshire with full equipment rental and luxury transfer.</p>
                                <Link to="/about" className={styles.cardLink}>View Details <ArrowRight size={16} /></Link>
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
