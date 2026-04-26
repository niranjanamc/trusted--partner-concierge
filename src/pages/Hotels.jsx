import React from 'react';
import { AlertTriangle, CheckCircle, Users, Star, Shield, Heart, Building2, MessageSquare } from 'lucide-react';
import styles from './Visa.module.css';
import heroImage from '../assets/images/hotel_hero.png';

const Hotels = () => {
    return (
        <div className={styles.visaPage}>
            {/* Hero Section */}
            <section className={styles.hero} style={{ backgroundImage: `url(${heroImage})` }}>
                <div className={styles.container}>
                    <h1 className={styles.heroTitle}>Curated Stays.<br />Premium Comfort.</h1>
                </div>
            </section>

            {/* Pain Points vs Solutions */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>The Hidden Complexity of Hotel Booking</h2>
                        <p>Finding the right stay goes far beyond searching a platform. We manage every detail so your accommodation is the last thing on your mind.</p>
                    </div>

                    <div className={styles.comparisonGrid}>
                        {/* Pain Point 1 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Overwhelming, Unreliable Options</h3>
                            <p className={styles.cardText}>Sifting through thousands of listings with inflated ratings, misleading photos, and hidden service charges makes finding a genuinely great property an exhausting gamble.</p>
                        </div>

                        {/* Solution 1 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <Shield size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Vetted Premium Properties</h3>
                            <p className={styles.cardText}>Every property we recommend is personally vetted for hygiene, safety, service quality, and location suitability—giving you a curated shortlist you can trust without the guesswork.</p>
                        </div>

                        {/* Pain Point 2 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <Users size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Group & Corporate Logistics</h3>
                            <p className={styles.cardText}>Coordinating multi-room blocks, negotiating corporate billing arrangements, managing varied check-in times, and ensuring rooming consistency across a team is a logistical nightmare.</p>
                        </div>

                        {/* Solution 2 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <Building2 size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>End-to-End Corporate & Group Stays</h3>
                            <p className={styles.cardText}>We handle B2B pricing, rooming lists, billing coordination, and pre-arrival communication with the property—so your entire team arrives to a seamlessly organized stay.</p>
                        </div>

                        {/* Pain Point 3 */}
                        <div className={styles.painPointCard}>
                            <div className={styles.iconWrapper}>
                                <AlertTriangle size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>Impersonal, Unfulfilled Experiences</h3>
                            <p className={styles.cardText}>Special requests, dietary needs, anniversary surprises, or accessibility requirements get lost in the system—leaving guests feeling like just another booking number.</p>
                        </div>

                        {/* Solution 3 */}
                        <div className={styles.solutionCard}>
                            <div className={styles.iconWrapper}>
                                <Heart size={32} />
                            </div>
                            <h3 className={styles.cardTitle}>VIP Personalization</h3>
                            <p className={styles.cardText}>We liaise directly with hotel management before your arrival—ensuring room preferences, dietary needs, celebrations, and special touches are arranged with genuine attention to detail.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>What We Offer</h2>
                        <p>From boutique properties to large corporate blocks—our hotel concierge service covers every scenario.</p>
                    </div>
                    <div className={styles.processGrid}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}><Star size={20} /></div>
                            <h3>Negotiated Rates</h3>
                            <p>Access exclusive corporate and B2B pricing not available on regular booking platforms—saving significantly on multi-night stays.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}><Building2 size={20} /></div>
                            <h3>Corporate & Group Stays</h3>
                            <p>Seamless management for multi-room bookings, offsites, conferences, and extended business travel itineraries.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}><Shield size={20} /></div>
                            <h3>Verified Quality</h3>
                            <p>Every recommended property is thoroughly vetted for safety, hygiene, and premium service before we ever suggest it to you.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}><Heart size={20} /></div>
                            <h3>VIP Touches</h3>
                            <p>Room upgrades, welcome amenities, special occasion arrangements—handled proactively as part of every booking we make.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* End-to-End Process Flow */}
            <section className={styles.comparisonSection}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2>Our Booking Process</h2>
                        <p>A transparent, four-step workflow designed to match you with the perfect stay every time.</p>
                    </div>
                    <div className={styles.processGrid}>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>1</div>
                            <h3>Share Your Requirements</h3>
                            <p>Tell Monk your destination, dates, number of guests, stay type, and any special preferences through the chatbot.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>2</div>
                            <h3>We Select Properties</h3>
                            <p>Our team curates a shortlist of verified properties that match your budget, style, and requirements—no generic search results.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>3</div>
                            <h3>Confirm & Pre-Arrange</h3>
                            <p>Once you choose, we handle all booking formalities and coordinate directly with the hotel for your special requests.</p>
                        </div>
                        <div className={styles.processStep}>
                            <div className={styles.stepNumber}>4</div>
                            <h3>Arrive to Perfection</h3>
                            <p>Walk into a stay that's been set up exactly as you envisioned—with no surprises, no friction, and nothing left to chance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <h2>Ready to find your perfect stay?</h2>
                    <p>Stop scrolling through endless listings. Tell Monk where you're going and let us curate the ideal property for you.</p>
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

export default Hotels;
