import React from 'react';
import { MapPin, Clock, Coffee, Camera, Sun, Moon } from 'lucide-react';
import styles from './Services.module.css';
import heroImage from '../assets/images/services_hero.png';
import airportImage from '../assets/images/airport_transfers.png';

const Services = () => {
    return (
        <div className={styles.services}>
            {/* Hero */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Curated Experiences</h1>
                    <p className={styles.heroSubtitle}>
                        From the 16th-century mud fort of Kempegowda to the glass facades of the IT corridor.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Our Services</h2>
                    <div className={styles.grid}>
                        {/* A) Tours & Experiences */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>Tours & Experiences</h3>
                                <p className={styles.description}>
                                    Explore the best of Bengaluru and Karnataka with private AC vehicles, dedicated guides, and custom itineraries based on your interests.
                                </p>
                                <ul className={styles.features}>
                                    <li><MapPin size={16} /> Bangalore Full-Day Local Tours</li>
                                    <li><MapPin size={16} /> Custom Itineraries</li>
                                    <li><MapPin size={16} /> Heritage, Nature, Food</li>
                                </ul>
                            </div>
                        </div>

                        {/* B) Travel & Transport */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>Travel & Transport Services</h3>
                                <p className={styles.description}>
                                    Reliable cab services for local sightseeing, outstation trips, and corporate transport with professional chauffeurs.
                                </p>
                                <ul className={styles.features}>
                                    <li><Clock size={16} /> Local & Outstation</li>
                                    <li><Clock size={16} /> Sedan | SUV | Tempo Traveller</li>
                                    <li><Clock size={16} /> 24x7 Support</li>
                                </ul>
                            </div>
                        </div>

                        {/* C) Airport Transfers */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: `url(${airportImage})` }}></div>
                            <div className={styles.cardContent}>
                                <h3>Airport Transfers</h3>
                                <p className={styles.description}>
                                    Reliable, on-time airport pickup and drops. 24x7 pan-India vehicle availability tailored to your schedule.
                                </p>
                                <ul className={styles.features}>
                                    <li><Clock size={16} /> On-time Guarantee</li>
                                    <li><Clock size={16} /> Pan-India Network</li>
                                    <li><Clock size={16} /> Hourly Rentals</li>
                                </ul>
                            </div>
                        </div>

                        {/* D) Corporate Offsites */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>Corporate Offsites & Events</h3>
                                <p className={styles.description}>
                                    End-to-end management for corporate team offsites, family day events, and annual gatherings.
                                </p>
                                <ul className={styles.features}>
                                    <li><Coffee size={16} /> Venue & Hotel Booking</li>
                                    <li><Coffee size={16} /> Team Building Activities</li>
                                    <li><Coffee size={16} /> Event Management</li>
                                </ul>
                            </div>
                        </div>

                        {/* E) Group Bookings */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>Group Hotel Bookings</h3>
                                <p className={styles.description}>
                                    Perfect for family groups, corporate teams, and outings. Includes stay, meals, and transport.
                                </p>
                                <ul className={styles.features}>
                                    <li><Sun size={16} /> Resorts & Hotels</li>
                                    <li><Sun size={16} /> Day Outings</li>
                                    <li><Sun size={16} /> On-ground Support</li>
                                </ul>
                            </div>
                        </div>

                        {/* F) Travel Documentation */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <h3>Travel Documentation</h3>
                                <p className={styles.description}>
                                    Hassle-free support for flights, visas, and international packages.
                                </p>
                                <ul className={styles.features}>
                                    <li><MapPin size={16} /> Flight Bookings</li>
                                    <li><MapPin size={16} /> Visa Processing</li>
                                    <li><MapPin size={16} /> International Packages</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
