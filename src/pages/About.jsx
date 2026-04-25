import React from 'react';
import { MapPin, Clock, Coffee, Sun } from 'lucide-react';
import styles from './About.module.css';
import heroImage from '../assets/images/about_hero.png';
import iconPersonalisation from '../assets/images/icon_personalisation.png';
import iconComfort from '../assets/images/icon_comfort.png';
import iconTrust from '../assets/images/icon_trust.png';
import iconDelight from '../assets/images/icon_delight.png';
import airportImage from '../assets/images/airport_transfers.png';

const About = () => {
    return (
        <div className={styles.about}>
            {/* Hero */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Across India, we craft journeys built on trust, comfort, and personalized service—backed by over 17 years of experience.</h1>
                </div>
            </section>

            {/* About Us */}
            <section className={styles.story}>
                <div className={styles.container}>
                    <div className={styles.storyContent}>
                        <div className={styles.storyText}>
                            <h2 className={styles.sectionTitle}>About Us</h2>
                            <p>
                                VoyageMonk is a Bengaluru-based corporate travel specialist with 17+ years of experience—where professionalism meets personalized service to create seamless and secure journeys.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Mission</h3>
                            <p>
                                To empower corporates travel businesses with reliable, efficient, and well-managed travel solutions that optimize time, cost, and traveler experience.
                            </p>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Our Vision</h3>
                            <p>
                                To lead in corporate travel by delivering dependable, thoughtfully curated, and customer-centric experiences for businesses and corporate events.
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
                            <div className={styles.iconWrapper}><img src={iconPersonalisation} alt="Personalisation" className={styles.customIcon} /></div>
                            <h3>Personalisation</h3>
                            <p>We take the time to understand what matters most to you. Whether it's comfort, exploration, or a perfect balance of both, we craft journeys that feel personal, effortless, and truly yours.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <div className={styles.iconWrapper}><img src={iconComfort} alt="Comfort & Convenience" className={styles.customIcon} /></div>
                            <h3>Comfort & Convenience</h3>
                            <p>Travel should feel effortless. We simplify every step—from bookings to on-ground coordination—ensuring a smooth, comfortable, and hassle-free journey from start to finish.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <div className={styles.iconWrapper}><img src={iconTrust} alt="Trust & Reliability" className={styles.customIcon} /></div>
                            <h3>Trust & Reliability</h3>
                            <p>You deserve a travel partner you can rely on without hesitation. We prioritize your safety, comfort, and peace of mind by delivering consistent, dependable service at every stage of your journey.</p>
                        </div>
                        <div className={styles.dnaCard}>
                            <div className={styles.iconWrapper}><img src={iconDelight} alt="Customer Delight" className={styles.customIcon} /></div>
                            <h3>Customer Delight</h3>
                            <p>We go beyond delivering services—we create experiences that leave a lasting impression. Every journey is thoughtfully designed to exceed expectations, with attention to detail, personalized touches, and a commitment to making every moment truly special.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Services — merged from Services page */}
            <section className={styles.servicesSection}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle} style={{ textAlign: 'center' }}>Our Services</h2>
                    <div className={styles.servicesGrid}>
                        {/* A) Tours & Experiences */}
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceCardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.serviceCardContent}>
                                <h3>Tours & Experiences</h3>
                                <p className={styles.serviceDescription}>
                                    From Bengaluru to the most sought-after destinations across Karnataka—experience refined travel with private vehicles, luxury cars, tempo travellers, dedicated guides, and fully personalized itineraries.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li><MapPin size={16} /> Bangalore Full-Day Local Tours</li>
                                    <li><MapPin size={16} /> Custom Itineraries</li>
                                    <li><MapPin size={16} /> Heritage, Nature, Food</li>
                                </ul>
                            </div>
                        </div>

                        {/* B) Travel & Transport */}
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceCardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.serviceCardContent}>
                                <h3>Travel & Transport Services</h3>
                                <p className={styles.serviceDescription}>
                                    Delivering efficient and dependable transport for local and outstation journeys—backed by vetted chauffeurs, premium vehicles, and precise execution.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li><Clock size={16} /> Local & Outstation</li>
                                    <li><Clock size={16} /> Sedan | SUV | Tempo Traveller</li>
                                    <li><Clock size={16} /> 24x7 Support</li>
                                </ul>
                            </div>
                        </div>

                        {/* C) Airport Transfers */}
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceCardImage} style={{ backgroundImage: `url(${airportImage})` }}></div>
                            <div className={styles.serviceCardContent}>
                                <h3>Airport Transfers</h3>
                                <p className={styles.serviceDescription}>
                                    Delivering efficient airport transfers for business travelers—powered by punctual service, trained chauffeurs, and precision execution across India.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li><Clock size={16} /> On-time Guarantee</li>
                                    <li><Clock size={16} /> Pan-India Network</li>
                                    <li><Clock size={16} /> Hourly Rentals</li>
                                </ul>
                            </div>
                        </div>

                        {/* D) Corporate Offsites */}
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceCardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.serviceCardContent}>
                                <h3>Corporate Offsites & Events</h3>
                                <p className={styles.serviceDescription}>
                                    End-to-end planning and execution of corporate offsites and events—covering travel, accommodation, logistics, and on-ground coordination for a seamless experience.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li><Coffee size={16} /> Venue & Hotel Booking</li>
                                    <li><Coffee size={16} /> Team Building Activities</li>
                                    <li><Coffee size={16} /> Event Management</li>
                                </ul>
                            </div>
                        </div>

                        {/* E) Group Bookings */}
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceCardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.serviceCardContent}>
                                <h3>Group Hotel Bookings</h3>
                                <p className={styles.serviceDescription}>
                                    Reliable hotel booking services for corporate teams, events, and large groups—ensuring quality stays, cost efficiency, and seamless coordination.
                                </p>
                                <ul className={styles.serviceFeatures}>
                                    <li><Sun size={16} /> Resorts & Hotels</li>
                                    <li><Sun size={16} /> Day Outings</li>
                                    <li><Sun size={16} /> On-ground Support</li>
                                </ul>
                            </div>
                        </div>

                        {/* F) Travel Documentation */}
                        <div className={styles.serviceCard}>
                            <div className={styles.serviceCardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.serviceCardContent}>
                                <h3>Travel Documentation</h3>
                                <p className={styles.serviceDescription}>
                                    Smart, reliable travel documentation support—covering visas, permits, and compliance for both domestic and international journeys.
                                </p>
                                <ul className={styles.serviceFeatures}>
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

export default About;
