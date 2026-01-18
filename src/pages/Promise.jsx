import React from 'react';
import { Shield, Clock, Heart, Users, CheckCircle, MessageCircle, Smile, Car, UserCheck, HeartPulse, MapPin } from 'lucide-react';
import styles from './Promise.module.css';
import heroImage from '../assets/images/promise_hero.png';
import womanSafetyImage from '../assets/images/safe_travel_women.png';

const Promise = () => {
    return (
        <div className={styles.promise}>
            {/* Hero */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Safety is Not an Option; It is Our Infrastructure.</h1>
                </div>
            </section>

            {/* Safety Protocol */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>The Safety Protocol</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <Car size={40} className={styles.icon} />
                            <h3>Fleet Standards</h3>
                            <ul className={styles.list}>
                                <li>Toyota Innova Crysta & Premium Sedans only</li>
                                <li>Vehicles less than 3 years old</li>
                                <li>Daily safety checks (brakes, tires, fluids)</li>
                                <li>Interiors sanitized before every trip</li>
                            </ul>
                        </div>

                        <div className={styles.card}>
                            <UserCheck size={40} className={styles.icon} />
                            <h3>Chauffeur Vetting</h3>
                            <ul className={styles.list}>
                                <li>Police verification (background check)</li>
                                <li>Defensive driving certification</li>
                                <li>"Silent Service" training</li>
                                <li>Basic English proficiency</li>
                            </ul>
                        </div>

                        <div className={styles.card}>
                            <HeartPulse size={40} className={styles.icon} />
                            <h3>Medical Preparedness</h3>
                            <ul className={styles.list}>
                                <li>Standardized First Aid Kit in every car</li>
                                <li>Drivers trained in basic CPR</li>
                                <li>Direct line to top hospitals (Manipal, Apollo)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Female Traveler Safety */}
            <section className={`${styles.section} ${styles.altBg}`}>
                <div className={styles.container}>
                    <div className={styles.split}>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle} style={{ textAlign: 'left' }}>Women's Travel Safety</h2>
                            <p className={styles.lead}>For solo female travelers, we implement the "Secure Chaperone" protocol:</p>
                            <ul className={styles.checkList}>
                                <li>
                                    <Shield size={20} />
                                    <span>Only married drivers with 10+ years of experience.</span>
                                </li>
                                <li>
                                    <MapPin size={20} />
                                    <span>Live GPS link shared with your designated contact.</span>
                                </li>
                                <li>
                                    <UserCheck size={20} />
                                    <span>Ops Desk calls driver every 2 hours for status updates.</span>
                                </li>
                                <li>
                                    <Shield size={20} />
                                    <span>No "Dark Stops" - Restroom breaks only at approved facilities.</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.imageWrapper}>
                            <img
                                src={womanSafetyImage}
                                alt="Safe Travel for Women"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Promise;
