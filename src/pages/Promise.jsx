import React from 'react';
import { Shield, Clock, Heart, Users, CheckCircle, MessageCircle, Smile, Car, UserCheck, HeartPulse, MapPin } from 'lucide-react';
import styles from './Promise.module.css';
import heroImage from '../assets/images/promise_hero.png';
import womanSafetyImage from '../assets/images/safe_travel_women.png';
import iconFleet from '../assets/images/icon_promise_fleet.png';
import iconChauffeur from '../assets/images/icon_promise_chauffeur.png';
import iconMedical from '../assets/images/icon_promise_medical.png';

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
                            <div className={styles.iconWrapper}><img src={iconFleet} alt="Fleet Standards" className={styles.customPromiseIcon} /></div>
                            <h3 style={{ textAlign: 'center' }}>Fleet Standards</h3>
                            <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6', textAlign: 'center' }}>We maintain the highest standards across our fleet to ensure safety, comfort, and reliability. Our vehicles are modern, well-maintained, and regularly inspected—delivering a smooth and secure travel experience every time.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><img src={iconChauffeur} alt="Chauffeur Vetting" className={styles.customPromiseIcon} /></div>
                            <h3 style={{ textAlign: 'center' }}>Chauffeur Vetting</h3>
                            <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6', textAlign: 'center' }}>We don’t just assign drivers—we select professionals you can trust. Each chauffeur is carefully screened, trained, and evaluated to meet the highest standards of safety and service.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.iconWrapper}><img src={iconMedical} alt="Medical Preparedness" className={styles.customPromiseIcon} /></div>
                            <h3 style={{ textAlign: 'center' }}>Medical Preparedness</h3>
                            <p style={{ marginTop: '1rem', color: '#555', lineHeight: '1.6', textAlign: 'center' }}>At VoyageMonk, we go the extra mile to ensure your safety. With first-aid–equipped vehicles, trained staff, and access to emergency support, we are prepared to handle unforeseen situations—so you can travel with confidence and peace of mind.</p>
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
                            <p className={styles.lead} style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555' }}>
                                We are committed to providing a safe and secure travel environment for women at every step. With verified chauffeurs, real-time support, and strict safety protocols, we ensure every journey is handled with the highest level of care, respect, and professionalism.
                            </p>
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
