import React from 'react';
import { Shield, Heart, Zap } from 'lucide-react';
import styles from './About.module.css';
import heroImage from '../assets/images/about_hero.png';

const About = () => {
    return (
        <div className={styles.about}>
            {/* Hero */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Your Trusted Travel Partner</h1>
                </div>
            </section>

            {/* About Us */}
            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <h2 className={styles.sectionTitle}>About Us</h2>
                            <p>
                                TripSynchr.com is a Bengaluru-based travel solutions company founded and led by seasoned professionals with over 17 years of experience in the travel and hospitality industry.
                                We combine deep industry expertise with a friendly, “buddy-like” approach to make every journey effortless, safe, and truly memorable.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Mission</h3>
                            <p>
                                To create safe, comfortable, and personalised travel experiences that help people explore Karnataka with joy, ease, and complete peace of mind.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Vision</h3>
                            <p>
                                To emerge as Karnataka’s most trusted travel partner, serving families, groups, and corporates through dependable services, thoughtfully curated experiences, and a strong customer-first philosophy.
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
                            <Shield size={40} className={styles.dnaIcon} />
                            <h3>Safety First</h3>
                            <p>Verified drivers, well-maintained vehicles, and transparent processes.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <Heart size={40} className={styles.dnaIcon} />
                            <h3>Personalisation</h3>
                            <p>Every trip tailored to your unique preferences.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <Zap size={40} className={styles.dnaIcon} />
                            <h3>Comfort & Convenience</h3>
                            <p>Thoughtfully designed experiences end-to-end.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <Shield size={40} className={styles.dnaIcon} />
                            <h3>Trust & Reliability</h3>
                            <p>Professional expertise with a friendly touch.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <Heart size={40} className={styles.dnaIcon} />
                            <h3>Customer Delight</h3>
                            <p>We don’t just serve — we care like a buddy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
