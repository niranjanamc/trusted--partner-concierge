import React from 'react';
import { AlertTriangle, CheckCircle, Shield, DollarSign, Car, Clock, MapPin, Users, MessageSquare } from 'lucide-react';
import styles from './Visa.module.css';
import heroImage from '../assets/images/car_service_hero.png';

const CarRental = () => {
    return (
        <div className={styles.visaPage}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Reliable Chauffeurs.<br />Premium Fleet.</h1>
                </div>
            </section>

            {/* Pain Points vs Solutions */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The Frustrations of Ground Transport</h2>
                        <p>Unreliable cabs and impersonal services shouldn't define your journey. Our chauffeur-driven fleet sets a different standard entirely.</p>
                    </div>

                    <div className={styles.comparisonGrid}>
                        {/* Pain Point 1 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Unreliable, Last-Minute Cancellations</h3>
                            <p className={styles.cardText}>App-based cab services routinely cancel rides at the last moment—leaving you stranded before a critical meeting, flight, or event with no recourse.</p>
                        </div>

                        {/* Solution 1 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <Shield size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Vetted Professional Chauffeurs</h3>
                            <p className={styles.cardText}>Our chauffeurs are background-verified, trained in professional conduct, and committed to punctuality. Your booking is confirmed—no cancellations, no uncertainty.</p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <DollarSign size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Hidden Charges & Billing Surprises</h3>
                            <p className={styles.cardText}>Surge pricing, undisclosed toll fees, unexplained extra-kilometre charges, and driver allowances that appear only at the end of the trip make budgeting impossible.</p>
                        </div>

                        {/* Solution 2 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <CheckCircle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Transparent, All-Inclusive Pricing</h3>
                            <p className={styles.cardText}>We quote clearly upfront—base fare, driver allowance, and toll estimates included. What you see is what you pay. No surprises at the end of your ride.</p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <Car size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Poor Vehicle Quality & Hygiene</h3>
                            <p className={styles.cardText}>Unclean interiors, poorly maintained vehicles, and aging fleets make every journey uncomfortable—especially for corporate clients, families, and premium travellers.</p>
                        </div>

                        {/* Solution 3 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <CheckCircle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Immaculate, Well-Maintained Fleet</h3>
                            <p className={styles.cardText}>From sedans to luxury SUVs and tempo travellers, our fleet undergoes strict hygiene and mechanical checks—ensuring every ride is clean, comfortable, and safe.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services We Cover */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Services We Cover</h2>
                        <p>Whether it's a quick airport transfer, a full-day local rental, or a long-distance outstation trip—we have you covered across India.</p>
                    </div>
                    <div className={styles.processGrid}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}><MapPin size={20} /></div>
                            <h3>Airport Transfers</h3>
                            <p>Seamless pickups and drops to all major airports—tracked in real time, always on schedule, and available round the clock.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}><Clock size={20} /></div>
                            <h3>Local Hourly Rentals</h3>
                            <p>Flexible 4-hour or 8-hour local packages for city meetings, events, hospital visits, or leisure outings across Bangalore and beyond.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}><Car size={20} /></div>
                            <h3>Outstation Trips</h3>
                            <p>Comfortable, professionally driven inter-city and outstation travel—Mysore, Coorg, Ooty, Chennai, and more—with no compromise on quality.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}><Users size={20} /></div>
                            <h3>Group & Corporate Travel</h3>
                            <p>Multi-vehicle coordination for corporate events, team offsites, airport group transfers, and large-scale leisure tours with seamless logistics.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* End-to-End Process Flow */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>How It Works</h2>
                        <p>Getting a premium chauffeur-driven car takes just one conversation with Monk.</p>
                    </div>
                    <div className={styles.processGrid}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h3>Share Your Route</h3>
                            <p>Tell Monk your pickup location, destination, date, time, and number of passengers—as simply as you'd tell a friend.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h3>Fleet Selection</h3>
                            <p>We recommend the right vehicle for your trip—sedan, SUV, luxury car, or tempo traveller—with a transparent all-inclusive quote.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h3>Confirm & Dispatch</h3>
                            <p>Once confirmed, your vetted chauffeur is assigned and dispatched with full details shared with you in advance.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h3>Journey in Comfort</h3>
                            <p>Sit back and travel stress-free. Our team is on standby throughout your journey for any assistance you may need.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Need a reliable ride?</h2>
                    <p>Skip the uncertainty of app-based cabs. Tell Monk your travel details and we'll arrange a premium chauffeur-driven experience for you.</p>
                    <button
                        className={styles.ctaButton}
                        onClick={() => {
                            const chatBtn = document.querySelector('[aria-label="Open chat"]');
                            if (chatBtn) chatBtn.click();
                        }}
                    >
                        <MessageSquare size={20} />
                        Chat with Monk
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CarRental;
