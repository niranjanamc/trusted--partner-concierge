import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Headphones, DollarSign, RefreshCw, Plane, Search, Ticket, MessageSquare } from 'lucide-react';
import styles from './Visa.module.css';
import heroImage from '../assets/images/flight_booking_hero.png';
import iconFares from '../assets/images/icon_flight_fares.png';
import iconPricing from '../assets/images/icon_flight_pricing.png';
import iconSupport from '../assets/images/icon_flight_support.png';
import iconQuick from '../assets/images/icon_flight_quick.png';
import iconTeam from '../assets/images/icon_flight_team.png';

const FlightBooking = () => {
    return (
        <div className={styles.visaPage}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Seamless Air Travel.<br />Zero Hassle.</h1>
                </div>
            </section>

            {/* Pain Points vs Solutions */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The Real Challenges of Air Travel</h2>
                        <p>Finding the right flight shouldn't feel like a full-time job. We eliminate the friction and handle the complexity so you don't have to.</p>
                    </div>

                    <div className={styles.comparisonGrid}>
                        {/* Pain Point 1 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <DollarSign size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>The Pricing Maze</h3>
                            <p className={styles.cardText}>Fares fluctuate by the minute, hidden surcharges inflate the final bill, and getting negotiated corporate rates without bulk agreements is nearly impossible.</p>
                        </div>

                        {/* Solution 1 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <CheckCircle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Optimized Fares, Every Time</h3>
                            <p className={styles.cardText}>We leverage our industry relationships to access negotiated corporate and group fares unavailable on public platforms—with full price transparency and zero hidden costs.</p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <Clock size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Time-Consuming Coordination</h3>
                            <p className={styles.cardText}>Coordinating multi-city itineraries, layovers, and group travel across different airlines and time zones can consume hours of valuable time.</p>
                        </div>

                        {/* Solution 2 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <Plane size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Concierge Booking Service</h3>
                            <p className={styles.cardText}>Tell Monk your destination and requirements. Our team handles all routing, layover optimization, seat selection, and documentation—from one conversation.</p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Disruptions & Rebooking Nightmares</h3>
                            <p className={styles.cardText}>Flight cancellations and delays leave you stuck on hold with airline customer service for hours, often missing connecting flights or hotel check-ins.</p>
                        </div>

                        {/* Solution 3 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <Headphones size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Proactive 24/7 Support</h3>
                            <p className={styles.cardText}>We monitor your journey and act immediately on disruptions—rebooking alternatives, coordinating hotels, and keeping you informed before you even land.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Existing Value Cards */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Why VoyageMonk for Flights</h2>
                        <p>Five reasons thousands of business and leisure travellers trust us with their air travel.</p>
                    </div>
                    <div className={styles.processGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                        <div className={styles.processStep}>
                            <div style={{ margin: '0 auto 1.5rem', width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={iconFares} alt="Best Fares" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </div>
                            <h3>Best Fares</h3>
                            <p>We work behind the scenes to find the best fares and deals so you enjoy great savings along with a seamless experience.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div style={{ margin: '0 auto 1.5rem', width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={iconSupport} alt="Dedicated Support" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </div>
                            <h3>Dedicated Support</h3>
                            <p>Whether it's a last-minute change or on-trip assistance, our team ensures you're supported with care and speed.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div style={{ margin: '0 auto 1.5rem', width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={iconQuick} alt="Quick Turnaround" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </div>
                            <h3>Quick Turnaround</h3>
                            <p>From quotations to confirmed tickets—our team ensures swift execution so your plans move forward without delays.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div style={{ margin: '0 auto 1.5rem', width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={iconPricing} alt="Transparent Pricing" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </div>
                            <h3>Transparent Pricing</h3>
                            <p>Clear, detailed pricing with no hidden costs—you always know exactly what you're paying for.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div style={{ margin: '0 auto 1.5rem', width: 72, height: 72, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={iconTeam} alt="Experienced Team" style={{ width: 64, height: 64, objectFit: 'contain' }} />
                            </div>
                            <h3>Experienced Team</h3>
                            <p>Deep industry expertise and a hands-on approach—delivering thoughtfully planned, seamlessly executed travel.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* End-to-End Process Flow */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>How It Works</h2>
                        <p>From your first message to your boarding pass—here's what our flight concierge service looks like.</p>
                    </div>
                    <div className={styles.processGrid}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h3>Share Your Requirements</h3>
                            <p>Tell Monk your travel dates, destination, number of travellers, and any preferences via the chatbot.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h3>We Curate Options</h3>
                            <p>Our team identifies the best routes, fares, and airlines—optimised for cost, comfort, and convenience.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h3>Confirm & Ticket</h3>
                            <p>You choose your preferred option; we handle booking, payment coordination, and ticket issuance.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h3>Board with Confidence</h3>
                            <p>We send reminders, monitor your flights, and are on standby to resolve any last-minute disruptions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Ready to fly smarter?</h2>
                    <p>Skip the tab-switching and price-hunting. Let our concierge handle your air travel from start to finish.</p>
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

export default FlightBooking;
