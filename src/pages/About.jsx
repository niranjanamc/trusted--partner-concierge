import React from 'react';
import { Shield, Heart, Zap } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
    return (
        <div className={styles.about}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Bridging the Boardroom and the Bazaar</h1>
                </div>
            </section>

            {/* Founder's Story */}
            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <h2 className={styles.sectionTitle}>The Founder's Story</h2>
                            <p>
                                "Welcome to your home in Bengaluru. In my 17 years managing corporate travel desks,
                                I witnessed a recurring pattern: foreign delegates would fly into Bengaluru, spend three
                                days in a conference room, and fly out seeing nothing but the airport road. Or worse,
                                they would venture out unprepared, facing hygiene issues or safety concerns that soured
                                their view of India."
                            </p>
                            <p>
                                "I founded this company to change that narrative. I am a Bengaluru native, born and
                                raised in the heart of Karnataka. I speak Kannada, I know the rhythm of this city, and
                                I hold the keys to its authentic soul. But I am also a corporate professional. I understand
                                that when you are on a business trip, you cannot afford delays, risks, or uncertainty."
                            </p>
                            <p>
                                "Our mission is simple: To be your 'Trusted Partner.' We offer the intimacy of a local
                                friend with the accountability of a professional agency."
                            </p>
                            <div className={styles.signature}>
                                <p>– The Founder</p>
                            </div>
                        </div>
                        <div className={styles.storyImage}>
                            <img
                                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Corporate Professional in Bengaluru"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our DNA */}
            <section className={styles.dna}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center', color: 'var(--color-white)' }}>Our DNA</h2>
                    <div className={styles.dnaGrid}>
                        <div className={styles.dnaCard}>
                            <Shield size={40} className={styles.dnaIcon} />
                            <h3>Safety</h3>
                            <p>We own the responsibility for your well-being from pickup to drop-off.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <Heart size={40} className={styles.dnaIcon} />
                            <h3>Integrity</h3>
                            <p>Transparent pricing, no hidden commissions, no tourist traps.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <Zap size={40} className={styles.dnaIcon} />
                            <h3>Agility</h3>
                            <p>Plans change. Meetings overrun. We adapt our schedules to fit yours.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
