import React from 'react';
import { Plane, CheckCircle, Clock, Globe, Briefcase, DollarSign, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './FlightBooking.module.css';

const FlightBooking = () => {
    return (
        <div className={styles.page}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <h1 className={styles.heroTitle}>Flight Booking Services</h1>
                    <p className={styles.heroSubtitle}>
                        Seamless connectivity for business and leisure. Experience premium air travel coordination.
                    </p>
                </div>
            </section>

            {/* Our Services Include */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.splitSection}>
                        <div className={styles.textContent}>
                            <h2>Our Services Include</h2>
                            <ul className={styles.serviceList}>
                                <li>
                                    <Globe size={24} className={styles.serviceIcon} />
                                    <span>Domestic and international flight reservations</span>
                                </li>
                                <li>
                                    <DollarSign size={24} className={styles.serviceIcon} />
                                    <span>Competitive corporate and group fares</span>
                                </li>
                                <li>
                                    <Calendar size={24} className={styles.serviceIcon} />
                                    <span>Flexible booking and rescheduling options</span>
                                </li>
                                <li>
                                    <CheckCircle size={24} className={styles.serviceIcon} />
                                    <span>Assistance with seat selection, meals, and special requests</span>
                                </li>
                                <li>
                                    <Users size={24} className={styles.serviceIcon} />
                                    <span>Coordination for group travel and event-related bookings</span>
                                </li>
                                <li>
                                    <Briefcase size={24} className={styles.serviceIcon} />
                                    <span>Timely booking confirmations and travel documentation support</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.imageContent}>
                            <img src="/images/business_travel_lounge.png" alt="Business Travel Lounge" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyChooseSection}>
                <div className={styles.container}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                        Why Choose Us
                    </h2>
                    <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto', color: '#666' }}>
                        We simplify the complexities of air travel so you can focus on your destination.
                    </p>

                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}><DollarSign size={32} /></div>
                            <h3>Best Fares</h3>
                            <p>Access to the best available airline fares for both domestic and international routes.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}><Users size={32} /></div>
                            <h3>Dedicated Support</h3>
                            <p>Specialized assistance for corporate accounts and large group bookings.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}><Clock size={32} /></div>
                            <h3>Quick Turnaround</h3>
                            <p>Fast response times and hassle-free coordination for urgent travel.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}><CheckCircle size={32} /></div>
                            <h3>Transparent Pricing</h3>
                            <p>Clear costs with absolutely no hidden charges or surprise fees.</p>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardIcon}><Briefcase size={32} /></div>
                            <h3>Experienced Team</h3>
                            <p>Professionals ensuring every detail of your smooth travel arrangement.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ideal For */}
            <section className={styles.idealSection}>
                <div className={styles.container}>
                    <h2>Ideal For</h2>
                    <div className={styles.idealGrid}>
                        <div className={styles.idealCard}>
                            <Briefcase size={40} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3>Corporate Meetings</h3>
                        </div>
                        <div className={styles.idealCard}>
                            <Users size={40} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3>Incentive Trips</h3>
                        </div>
                        <div className={styles.idealCard}>
                            <Plane size={40} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3>Executive Travel</h3>
                        </div>
                        <div className={styles.idealCard}>
                            <Globe size={40} style={{ marginBottom: '1rem', color: 'var(--color-gold)' }} />
                            <h3>Group Offsites</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2 style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>Ready to Take Off?</h2>
                    <p style={{ color: '#666', fontSize: '1.2rem' }}>Contact us for a quote or to discuss your corporate travel needs.</p>
                    <Link to="/contact" className={styles.ctaBtn}>Request a Quote</Link>
                </div>
            </section>
        </div>
    );
};

export default FlightBooking;
