import React from 'react';
import { MapPin, Clock, Coffee, Camera, Sun, Moon } from 'lucide-react';
import styles from './Services.module.css';

const Services = () => {
    return (
        <div className={styles.services}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Curated Experiences</h1>
                    <p className={styles.heroSubtitle}>
                        From the 16th-century mud fort of Kempegowda to the glass facades of the IT corridor.
                    </p>
                </div>
            </section>

            {/* City Immersions */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Bengaluru City Immersions</h2>
                    <div className={styles.grid}>
                        {/* Package A */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.badge}>Full Day</div>
                                <h3>The "Garden City" Heritage Loop</h3>
                                <p className={styles.description}>
                                    Ideal for history buffs. Visit Bangalore Palace, ISKCON Temple, and Lalbagh Botanical Garden.
                                    Includes a curated "Thali" lunch at a heritage hotel.
                                </p>
                                <ul className={styles.features}>
                                    <li><Clock size={16} /> 8 Hours</li>
                                    <li><MapPin size={16} /> Palace, Temple, Garden</li>
                                    <li><Coffee size={16} /> Lunch Included</li>
                                </ul>
                                <button className={styles.bookBtn}>Inquire Now</button>
                            </div>
                        </div>

                        {/* Package B */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.badge}>Half Day</div>
                                <h3>The "Old Bangalore" Sensory Walk</h3>
                                <p className={styles.description}>
                                    Dive into the K.R. Flower Market at sunrise. Visit Tipu Sultan’s Summer Palace and the Bull Temple.
                                    Enjoy a legendary 'Meter Coffee'.
                                </p>
                                <ul className={styles.features}>
                                    <li><Clock size={16} /> 4 Hours</li>
                                    <li><Camera size={16} /> Market, Temple, Cafe</li>
                                    <li><Coffee size={16} /> Coffee Included</li>
                                </ul>
                                <button className={styles.bookBtn}>Inquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weekend Escapes */}
            <section className={`${styles.section} ${styles.altBg}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Weekend Escapes</h2>
                    <div className={styles.grid}>
                        {/* Mysore */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1622308644420-d32264495d87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.badge}>1 Night / 2 Days</div>
                                <h3>The Royal Mysuru</h3>
                                <p className={styles.description}>
                                    Palaces, Silk, and Sandalwood. VIP entry to Mysore Palace, lunch at a riverside resort,
                                    and shopping at Devaraja Market.
                                </p>
                                <button className={styles.bookBtn}>Inquire Now</button>
                            </div>
                        </div>

                        {/* Coorg */}
                        <div className={styles.card}>
                            <div className={styles.cardImage} style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580741186862-c5d0bf24294e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)' }}></div>
                            <div className={styles.cardContent}>
                                <div className={styles.badge}>2 Nights / 3 Days</div>
                                <h3>The Coffee Country - Coorg</h3>
                                <p className={styles.description}>
                                    Mist-covered hills and coffee plantations. Stay at a working estate, guided plantation walks,
                                    and Dubare Elephant Camp.
                                </p>
                                <button className={styles.bookBtn}>Inquire Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Niche Experiences */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Niche Experiences</h2>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <Sun size={32} className={styles.icon} />
                                <h3>Golf Packages</h3>
                                <p>Tee times at Prestige Golfshire or KGA. Includes club rental and luxury transfer.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <Coffee size={32} className={styles.icon} />
                                <h3>Vineyard Tours</h3>
                                <p>Private tour and tasting at Grover Zampa Vineyards. Includes 4-course lunch.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardContent}>
                                <Moon size={32} className={styles.icon} />
                                <h3>Wellness Retreats</h3>
                                <p>Day packages at Ayurveda Gram for holistic stress management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
